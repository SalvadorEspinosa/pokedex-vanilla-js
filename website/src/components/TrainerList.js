import { Trainer } from './Trainer.js'
export class TrainerList {
  element
  list = {}
  selectedTrainer
  removePokemonFromTeamHandler
  showTrainerCardHandler

  constructor(element, showTrainerCardHandler, removePokemonFromTeamHandler) {
    this.element = this.element || element
    this.removePokemonFromTeamHandler = removePokemonFromTeamHandler
    this.showTrainerCardHandler = showTrainerCardHandler
  }

  addNewTrainer(name) {
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
    this.renderTrainerCard(`${trainer.id}`)
  }

  renderTrainerCard(trainerId) {
    this.selectedTrainer = this.list[trainerId]
    const element = document.getElementById('trainer-card')
    const {
      childNodes: [firstChildNode],
    } = element
    if (firstChildNode) {
      element.replaceChild(
        this.selectedTrainer.trainerCard.rootElement,
        firstChildNode
      )
    } else {
      element.appendChild(this.selectedTrainer.trainerCard.rootElement)
    }
  }
}
