export class Pokemon {
  data
  element = document.createElement('li')

  constructor(data, removePokemonFromTeamHandler) {
    this.data = data
    this.element.id = this.data.id
    const span = document.createElement('span')
    const button = document.createElement('button')
    button.innerHTML = '&#9747;'
    button.setAttribute('title', 'Release Pokemon')
    button.addEventListener('click', removePokemonFromTeamHandler)
    span.innerText = `${this.data.name.english}`
    const img = document.createElement('img')
    img.setAttribute('src', this.data.image.thumbnail)
    this.element.appendChild(span)
    this.element.appendChild(button)
    this.element.appendChild(img)
  }
}
