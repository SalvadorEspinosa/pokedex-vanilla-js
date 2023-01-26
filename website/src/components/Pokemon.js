export class Pokemon {
  data
  element = document.createElement('li')

  constructor(data) {
    this.data = data
    const span = document.createElement('span')
    span.innerText = `${this.data.name.english}`
    const img = document.createElement('img')
    img.setAttribute('src', this.data.image.thumbnail)
    this.element.appendChild(span)
    this.element.appendChild(img)
  }
}
