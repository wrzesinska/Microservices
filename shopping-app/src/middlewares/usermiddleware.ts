import { User } from '../interfaces/users';
import * as usersService from '../services/users'

declare global {
  namespace Express {
    // These open interfaces may be extended in an application-specific manner via declaration merging.
    // See for example method-override.d.ts (https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/method-override/index.d.ts)
    interface Request {
      user?: User
    }
    interface Response { }
    interface Application { }
  }
}


export const userMiddleware = (async (req, res, next) => {
  const authorization = req.headers['authorization'];
  // No token - Continue not Authenticated
  if (!authorization) { next(); return; }
  // No token - Continue not Authenticated
  const [tokenType, token] = authorization.split(' ')
  if (!token) { next(); return; }
  // Token - Try Authenticate
  try {
    const user = await usersService.getUserByToken(token)
    req.user = user;
    next()
  } catch (err) { next(err); return; }
})


export const authorizedOnly = (req, res, next) => {
  if (!req.user?.id) {
    req.status(403).send({ message: 'Not Authorized' })
    // next(new Error('Not Authorized')) // global error handler
  } else {
    next()
  }
}