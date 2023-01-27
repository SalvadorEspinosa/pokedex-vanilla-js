export class PokedexNameSearchForm {
  rootElement = document.getElementById('pokedex-name-search')
  label = document.createElement('label')
  input = document.createElement('input')
  button = document.createElement('button')

  constructor(searchPokemonByNameHandler, clearSearchHandler) {
    this.label.setAttribute('for', 'pokemon-name-search')
    this.label.innerText = 'Search Pokémon:'
    this.input.setAttribute('id', 'pokemon-name-search')
    this.input.addEventListener('keyup', searchPokemonByNameHandler)
    this.button.addEventListener('click', clearSearchHandler)
    this.button.innerHTML = '&#9747;'
    this.button.setAttribute('title', 'Clear Search')
    this.rootElement.appendChild(this.label)
    this.rootElement.appendChild(this.input)
    this.rootElement.appendChild(this.button)
  }
}
