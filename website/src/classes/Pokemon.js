export class Pokemon {
  data
  element

  constructor(pokemon, addToTeamHandler) {
    this.data = pokemon
    this.element = document.createElement('li')
    this.element.setAttribute('id', this.data.id)
    addToTeamHandler && this.element.addEventListener('click', addToTeamHandler)
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
