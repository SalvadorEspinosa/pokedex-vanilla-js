export class TrainerList {
  element
  list

  constructor(element) {
    this.list = {}
    this.element = this.element || element
  }

  add(trainer) {
    this.list[trainer.id] = trainer
    this.element.appendChild(trainer.element)
  }

  select(id) {
    this.active = this.list[id]
  }
}
