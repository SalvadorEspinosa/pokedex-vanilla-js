import PokemonData from '../data/pokedex.js'
export class Pokedex {
  element
  list

  constructor(element) {
    this.list = PokemonData
    this.element = this.element || element
    this.init()
  }

  searchByName(searchValue) {
    const searchHits = this.list.filter((pokemon) =>
      pokemon.name.english.toLowerCase().startsWith(searchValue.toLowerCase())
    )
    this.render(searchHits)
  }

  init() {
    this.render(this.list)
  }

  render(list) {
    this.element.innerHTML = ''
    list.forEach((pokemon) => {
      const li = document.createElement('li')
      const span = document.createElement('span')
      span.innerHTML = `${pokemon.id}. ${pokemon.name.english}`
      li.appendChild(span)
      pokemon.type.forEach((type) => {
        const span = document.createElement('span')
        span.setAttribute('class', `center pokemon-type ${type.toLowerCase()}`)
        span.innerHTML = type
        li.appendChild(span)
      })
      this.element.appendChild(li)
    })
  }
}
