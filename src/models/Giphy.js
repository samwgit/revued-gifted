export class Giphy {
  constructor(data) {
    this.url = data.images.original.url
    this.title = data.title
    this.id = data.id
  }
}