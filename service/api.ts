export default class Api {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  getDados() {
    return { url: this.url, userId: "userId", password: "password" };
  }
}