import {normalizeVideo} from "../store/schemas" 

const url = "http://localhost:3000"


export class videoAdapter {
  static getOne(route) {
    return fetch(`${url}/videos/${route}`).then(r=>r.json())
  }
  static getOneNormalized(route) {
    return fetch(`${url}/videos/${route}`)
      .then(r=>r.json())
      .then(video => {
        return normalizeVideo(video)
      })
  }
}
export class userAdapter {
  static getOne(route) {
    return fetch(`${url}/users/${route}`).then(r=>r.json());
  }
  static create(user) {
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }
    return fetch(`${url}/users`, options)
      .then(r => r.json())
  }

  static reauth(token) {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': token
      }
    }
    return fetch(`${url}/api/v1/current_user`, options)
      .then(r => r.json())
  }
}

// seems ridiculous now, if it never uses more, dry it up
