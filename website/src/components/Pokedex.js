import PokemonData from '../data/pokedex.js'
import { PokedexEntry } from './PokedexEntry.js'

export class Pokedex {
  element
  list = {}

  constructor(element, addToTeamHandler) {
    PokemonData.forEach((pokemonData) => {
      const entry = new PokedexEntry(pokemonData, addToTeamHandler)
      this.list[entry.data.id] = entry
    })
    this.element = this.element || element
    this.init()
  }

  searchByName(searchValue) {
    const searchHits = Object.values(this.list).filter((entry) =>
      entry.data.name.english
        .toLowerCase()
        .startsWith(searchValue.toLowerCase())
    )
    this.render(searchHits)
  }

  init() {
    this.render(this.list)
  }

  render(list) {
    this.element.innerHTML = ''
    Object.values(list).forEach((entry) => {
      this.element.appendChild(entry.element)
    })
  }

  getPokemonDataById(id) {
    return this.list[id].data
  }
}
