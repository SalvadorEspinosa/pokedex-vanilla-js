import PokemonData from '../data/pokedex.js'
import { Pokemon } from './Pokemon.js'
export class Pokedex {
  element
  list

  constructor(element) {
    this.list = PokemonData.map((pokemon) => new Pokemon(pokemon))
    this.element = this.element || element
    this.init()
  }

  searchByName(searchValue) {
    const searchHits = this.list.filter((pokemon) =>
      pokemon.data.name.english
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
    list.forEach((pokemon) => {
      this.element.appendChild(pokemon.element)
    })
  }
}
