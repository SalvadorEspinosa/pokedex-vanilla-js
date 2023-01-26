import { Trainer } from './Trainer.js'
export class TrainerList {
  element
  list
  showTrainerCardHandler

  constructor(element, showTrainerCardHandler) {
    this.list = {}
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
    const trainer = this.list[trainerId]
    const element = document.getElementById('trainer-card')
    element.innerHTML = ''
    const title = document.createElement('h4')
    title.innerHTML = trainer.name
    const id = document.createElement('h5')
    id.innerHTML = `UID: ${trainer.id}`
    element.appendChild(title)
    element.appendChild(id)
    const team = document.createElement('p')
    if (trainer.team.length === 0) {
      team.innerHTML = `Team: Trainer currently doesn't have any Pokémon`
      element.appendChild(team)
      const emptyTeam = document.createElement('p')
      emptyTeam.innerHTML = 'Choose up to 6 pokemon from the Pokédex'
      element.appendChild(emptyTeam)
    }
  }
}
