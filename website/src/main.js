import { Pokedex } from './components/Pokedex.js'
import { Trainer } from './components/Trainer.js'
import { TrainerList } from './components/TrainerList.js'

const trainerNameInput = document.getElementById('trainer-name')
const pokemonSearchInput = document.getElementById('pokemon-search')

const pokedex = new Pokedex(document.getElementById('pokedex'))
const trainerList = new TrainerList(document.getElementById('trainer-list'))

const trainer = new Trainer('Ash')
trainerList.add(trainer)

window.registerTrainer = (event) => {
  event.preventDefault()
  const name = trainerNameInput.value
  if (name) {
    trainerNameInput.value = ''
    const newTrainer = new Trainer(name)
    trainerList.add(newTrainer)
  }
}

window.searchPokemon = (event) => {
  pokedex.searchByName(event.target.value)
}

window.clearSearch = () => {
  pokemonSearchInput.value = ''
  pokedex.init()
}
