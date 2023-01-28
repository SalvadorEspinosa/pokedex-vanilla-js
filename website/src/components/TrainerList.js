import { Trainer } from './Trainer.js'
export class TrainerList {
  element
  list = {}
  selected
  removePokemonFromTeamHandler
  showTrainerCardHandler

  constructor(element, showTrainerCardHandler, removePokemonFromTeamHandler) {
    this.element = this.element || element
    this.removePokemonFromTeamHandler = removePokemonFromTeamHandler
    this.showTrainerCardHandler = showTrainerCardHandler
  }

  addNew(name) {
    const newTrainer = new Trainer(
      name,
      this.showTrainerCardHandler,
      this.removePokemonFromTeamHandler
    )
    this.add(newTrainer)
  }

  add(trainer) {
    this.list[`${trainer.id}`] = trainer
    this.element.appendChild(trainer.rootElement)
    this.select(`${trainer.id}`)
    this.selected.trainerCard.render()
  }

  select(trainerId) {
    this.selected = this.list[trainerId]
  }
}
