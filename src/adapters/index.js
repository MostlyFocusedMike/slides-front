const url = "http://localhost:3000"


export class videoAdapter {
  static getOne(route) {
    return fetch(`${url}/videos/${route}`).then(r=>r.json());
  }
}
export class userAdapter {
  static getOne(route) {
    return fetch(`${url}/users/${route}`).then(r=>r.json());
  }
}

// seems ridiculous now, if it never uses more, dry it up
