import { Pokedex } from './Pokedex.js'
import { TrainerList } from './TrainerList.js'
import { TrainerRegistrationForm } from './TrainerRegistrationForm.js'
import { PokedexNameSearchForm } from './PokedexNameSearchForm.js'

const MAX_TEAM_SIZE = 6
export class App {
  pokedex
  pokedexNameSearchForm
  trainerList
  trainerRegistrationForm

  constructor() {
    this.pokedex = new Pokedex(
      document.getElementById('pokedex'),
      this.addPokemonToTeam.bind(this)
    )
    this.trainerList = new TrainerList(
      document.getElementById('trainer-list'),
      this.showTrainerCard.bind(this),
      this.removePokemonFromTeam.bind(this)
    )
    this.trainerList.addNewTrainer('Ash')
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
      this.trainerList.addNewTrainer(name)
    }
  }

  showTrainerCard(event) {
    const id = event.currentTarget.id
    this.trainerList.renderTrainerCard(id)
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
    if (this.trainerList.selectedTrainer.team.length < MAX_TEAM_SIZE) {
      this.trainerList.selectedTrainer.choose(pokemonData)
    }
  }

  removePokemonFromTeam(event) {
    event.preventDefault()
    const index = event.currentTarget.parentElement
    this.trainerList.selectedTrainer.release(index)
  }
}
