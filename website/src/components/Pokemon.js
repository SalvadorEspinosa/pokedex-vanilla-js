export class Pokemon {
  data
  trainerCardElement = document.createElement('li')
  trainerSpriteElement = document.createElement('img')

  constructor(data, removePokemonFromTeamHandler) {
    this.data = data
    this.trainerCardElement.id = this.data.id
    const span = document.createElement('span')
    span.innerText = `${this.data.name.english}`
    const button = document.createElement('button')
    button.innerHTML = '&#9747;'
    button.setAttribute('title', 'Release Pokemon')
    button.addEventListener('click', removePokemonFromTeamHandler)
    const img = document.createElement('img')
    img.setAttribute('src', this.data.image.thumbnail)
    this.trainerCardElement.appendChild(span)
    this.trainerCardElement.appendChild(button)
    this.trainerCardElement.appendChild(img)
    this.trainerSpriteElement.setAttribute('src', this.data.image.sprite)
    this.trainerSpriteElement.setAttribute('title', this.data.name.english)
  }
}
