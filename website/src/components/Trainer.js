import { Pokemon } from './Pokemon.js'
import { TrainerCard } from './TrainerCard.js'
export class Trainer {
  id
  element
  name
  team = []
  trainerCard
  showTrainerCardHandler

  constructor(name, showTrainerCardHandler) {
    this.id = Date.now()
    this.element = document.createElement('li')
    this.element.setAttribute('id', this.id)
    this.element.innerHTML = name
    this.name = name
    this.showTrainerCardHandler = showTrainerCardHandler
    this.element.addEventListener('click', showTrainerCardHandler)
    this.trainerCard = new TrainerCard(this)
  }

  choose(pokemonData) {
    const pokemon = new Pokemon(pokemonData)
    this.team.push(pokemon)
    this.trainerCard.team.appendChild(pokemon.element)
  }
}
