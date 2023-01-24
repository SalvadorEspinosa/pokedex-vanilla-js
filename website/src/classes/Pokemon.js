export class Pokemon {
  data
  element

  constructor(pokemon) {
    this.data = pokemon
    this.element = document.createElement('li')
    const span = document.createElement('span')
    span.innerHTML = `${pokemon.id}. ${pokemon.name.english}`
    this.element.appendChild(span)
    pokemon.type.forEach((type) => {
      const span = document.createElement('span')
      span.setAttribute('class', `center pokemon-type ${type.toLowerCase()}`)
      span.innerHTML = type
      this.element.appendChild(span)
    })
  }
}
