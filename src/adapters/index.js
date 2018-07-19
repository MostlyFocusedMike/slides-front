export class videoAdapter {
  static getOne(route) {
    return fetch(`${this.url}/videos/${route}`).then(r=>r.json());
  }
  
}
videoAdapter.url = "http://localhost:3000"
