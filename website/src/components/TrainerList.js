import { Trainer } from './Trainer.js'
export class TrainerList {
  element
  list = {}
  selectedTrainer
  showTrainerCardHandler

  constructor(element, showTrainerCardHandler) {
    this.element = this.element || element
    this.showTrainerCardHandler = showTrainerCardHandler
  }

  addNewTrainer(name) {
    const newTrainer = new Trainer(name, this.showTrainerCardHandler)
    this.add(newTrainer)
  }

  add(trainer) {
    this.list[`${trainer.id}`] = trainer
    this.element.appendChild(trainer.element)
  }

  renderTrainerCard(trainerId) {
    this.selectedTrainer = this.list[trainerId]
    const element = document.getElementById('trainer-card')
    element.innerHTML = ''
    const title = document.createElement('h4')
    title.innerHTML = this.selectedTrainer.name
    const id = document.createElement('h5')
    id.innerHTML = `UID: ${this.selectedTrainer.id}`
    element.appendChild(title)
    element.appendChild(id)
    const team = document.createElement('p')
    if (this.selectedTrainer.team.length === 0) {
      team.innerHTML = `Team: Trainer currently doesn't have any Pokémon`
      element.appendChild(team)
      const emptyTeam = document.createElement('p')
      emptyTeam.innerHTML = 'Choose up to 6 pokemon from the Pokédex'
      element.appendChild(emptyTeam)
    } else {
      this.selectedTrainer.team.forEach((pokemon) => {
        element.appendChild(pokemon.element)
      })
    }
  }
}
