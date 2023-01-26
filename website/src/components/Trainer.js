export class Trainer {
  id
  element
  name
  team
  showTrainerCardHandler

  constructor(name, showTrainerCardHandler) {
    this.id = Date.now()
    this.element = document.createElement('li')
    this.element.setAttribute('id', this.id)
    this.element.innerHTML = name
    this.name = name
    this.team = []
    this.showTrainerCardHandler = showTrainerCardHandler
    this.element.addEventListener('click', showTrainerCardHandler)
  }
}
