import { Pokedex } from './Pokedex.js'
import { TrainerList } from './TrainerList.js'
import { TrainerRegistrationForm } from './TrainerRegistrationForm.js'
import { PokedexNameSearchForm } from './PokedexNameSearchForm.js'

const MAX_TEAM_SIZE = 6
export class App {
  pokedex
  pokedexNameSearchForm
  trainers
  trainerRegistrationForm

  constructor() {
    this.pokedex = new Pokedex(
      document.getElementById('pokedex'),
      this.addPokemonToTeam.bind(this)
    )
    this.trainers = new TrainerList(
      document.getElementById('trainer-list'),
      this.selectTrainer.bind(this),
      this.removePokemonFromTeam.bind(this)
    )
    this.trainers.addNew('Ash')
    this.trainerRegistrationForm = new TrainerRegistrationForm(
      this.registerTrainer.bind(this)
    )
    this.pokedexNameSearchForm = new PokedexNameSearchForm(
      this.searchPokemon.bind(this),
      this.clearSearch.bind(this)
    )
  }

  registerTrainer(event) {
    event.preventDefault()
    const name = this.trainerRegistrationForm.input.value
    if (name) {
      this.trainerRegistrationForm.input.value = ''
      this.trainers.addNew(name)
    }
  }

  selectTrainer(event) {
    const id = Number(event.currentTarget.id)
    if (this.trainers.selected.id === id) return
    this.trainers.select(id)
    this.trainers.selected.trainerCard.render()
  }

  searchPokemon(event) {
    this.pokedex.searchByName(event.target.value)
  }

  clearSearch(event) {
    event.preventDefault()
    this.pokedexNameSearchForm.input.value = ''
    this.pokedex.init()
  }

  addPokemonToTeam(event) {
    event.preventDefault()
    const pokemonData = this.pokedex.getPokemonDataById(
      Number(event.currentTarget.id)
    )
    if (this.trainers.selected.team.length < MAX_TEAM_SIZE) {
      this.trainers.selected.choose(pokemonData)
    }
  }

  removePokemonFromTeam(event) {
    event.preventDefault()
    const pokemon = event.currentTarget.parentElement
    this.trainers.selected.release(pokemon)
  }
}
