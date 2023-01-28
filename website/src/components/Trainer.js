import { Pokemon } from './Pokemon.js'
import { TrainerCard } from './TrainerCard.js'

const RELEASE_FROM_TEAM_COUNT = 1
export class Trainer {
  id
  rootElement
  name
  team = []
  trainerCard
  removePokemonFromTeamHandler
  showTrainerCardHandler

  constructor(name, showTrainerCardHandler, removePokemonFromTeamHandler) {
    this.id = Date.now()
    this.rootElement = document.createElement('li')
    this.rootElement.setAttribute('id', this.id)
    this.rootElement.innerText = name
    this.name = name
    this.removePokemonFromTeamHandler = removePokemonFromTeamHandler
    this.showTrainerCardHandler = showTrainerCardHandler
    this.rootElement.addEventListener('click', showTrainerCardHandler)
    this.trainerCard = new TrainerCard(this)
  }

  choose(pokemonData) {
    const pokemon = new Pokemon(pokemonData, this.removePokemonFromTeamHandler)
    this.team.push(pokemon)
    this.trainerCard.team.appendChild(pokemon.trainerCardElement)
    this.rootElement.appendChild(pokemon.trainerSpriteElement)
  }

  release(pokemonElement) {
    const teamIndex = this.team.findIndex(
      (pokemon) => pokemon.trainerCardElement === pokemonElement
    )
    const [pokemon] = this.team.splice(teamIndex, RELEASE_FROM_TEAM_COUNT)
    pokemon.trainerCardElement.remove()
    pokemon.trainerSpriteElement.remove()
  }
}
