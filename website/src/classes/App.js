import { Pokedex } from './Pokedex.js'
import { TrainerList } from './TrainerList.js'
import { TrainerRegistrationForm } from './TrainerRegistrationForm.js'
import { PokedexNameSearchForm } from './PokedexNameSearchForm.js'

export class App {
  pokedex
  pokedexNameSearchForm
  trainerList
  trainerRegistrationForm

  constructor() {
    this.pokedex = new Pokedex(document.getElementById('pokedex'))
    this.trainerList = new TrainerList(
      document.getElementById('trainer-list'),
      this.showTrainerCard.bind(this)
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
    const id = event.target.id
    this.trainerList.renderTrainerCard(id)
  }

  searchPokemon(event) {
    this.pokedex.searchByName(event.target.value)
  }

  clearSearch() {
    event.preventDefault()
    this.pokedexNameSearchForm.input.value = ''
    this.pokedex.init()
  }
}
