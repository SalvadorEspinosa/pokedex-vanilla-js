import { Pokemon } from './Pokemon.js'
import { TrainerCard } from './TrainerCard.js'
export class Trainer {
  id
  element
  name
  team = []
  trainerCard
  removePokemonFromTeamHandler
  showTrainerCardHandler

  constructor(name, showTrainerCardHandler, removePokemonFromTeamHandler) {
    this.id = Date.now()
    this.element = document.createElement('li')
    this.element.setAttribute('id', this.id)
    this.element.innerHTML = name
    this.name = name
    this.removePokemonFromTeamHandler = removePokemonFromTeamHandler
    this.showTrainerCardHandler = showTrainerCardHandler
    this.element.addEventListener('click', showTrainerCardHandler)
    this.trainerCard = new TrainerCard(this)
  }

  choose(pokemonData) {
    const pokemon = new Pokemon(pokemonData, this.removePokemonFromTeamHandler)
    this.team.push(pokemon)
    this.trainerCard.team.appendChild(pokemon.element)
    const sprite = document.createElement('img')
    sprite.setAttribute('src', pokemon.data.image.sprite)
    this.element.appendChild(sprite)
  }

  release(pokemonElement) {
    const teamIndex = this.team.findIndex(
      (pokemon) => pokemon.element === pokemonElement
    )
    const pokemon = this.team[teamIndex]
    this.team.splice(teamIndex, 1)
    pokemon.element.remove()
    this.element.childNodes[teamIndex + 1].remove()
  }
}
