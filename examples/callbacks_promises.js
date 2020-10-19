// function echo(msg, cb){
//     setTimeout(()=>{
//         cb(msg)
//     },2000)
// }

// echo('Alice', res => {
//     echo(res+ " ma ", res => {
//         echo(res+ " kota ", res => {
//             console.log(res)
//         })
//     })
// })

function pecho(msg, err){
  return new Promise((resolve,reject) => {
      setTimeout(()=>{
          err? reject(err) : resolve(msg)
      },2000)
  })
}

// p = pecho('Alice')
// p2 = p.then( res => pecho(res + ' ma placki') )
// p3 = p.then( res => res + ' ma kota')
// p2.then(console.log)
// p3.then(console.log)


p = pecho('Alice','ups...')
p2 = p.then( res => pecho(res + ' ma placki','nie ma plackow'), (err) => 'Nie ma Alice' )
p3 = p.then( res => res + ' ma kota')
p2.then(console.log)
.catch((err)=>console.log('error '+err))
p3.then(console.log)

Promise.all([
  pecho('User 1'),
  pecho('User 2').then(u => pecho(u + ' + posts')),
  pecho('User 3')
]).then(console.log)
Promise {<pending>}
(3) ["User 1", "User 2 + posts", "User 3"]
0: "User 1"
1: "User 2 + posts"
2: "User 3"