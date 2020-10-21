async function login(username = 'user', password = 'user') {
  const response = await ((await fetch('http://localhost:3000/users/signin', {
    method: "POST",
    body: JSON.stringify({
      "username": username,
      "password": password
    }),
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //     credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
  })).json());
  sessionStorage.setItem('token', response.access_token)
}

async function getUser() {
  return ((await fetch('http://localhost:3000/users/me', {
    mode: 'cors', // no-cors, *cors, same-origin
    headers: {
      'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    },
  })).json());
}

async function logout() {
  sessionStorage.removeItem('token')
  return ((await fetch('http://localhost:3000/users/signout', {
    mode: 'cors', // no-cors, *cors, same-origin
    headers: {
      'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    },
  })).json());
}
