import PokemonData from '../data/pokedex.js'
import { Pokemon } from './Pokemon.js'
export class Pokedex {
  element
  list = {}

  constructor(element, addToTeamHandler) {
    PokemonData.forEach((pokemonData) => {
      const pokemon = new Pokemon(pokemonData, addToTeamHandler)
      this.list[pokemon.data.id] = pokemon
    })
    this.element = this.element || element
    this.init()
  }

  searchByName(searchValue) {
    const searchHits = Object.values(this.list).filter((pokemon) =>
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
    Object.values(list).forEach((pokemon) => {
      this.element.appendChild(pokemon.element)
    })
  }

  getPokemonById(id) {
    return new Pokemon(this.list[id].data)
  }
}
