export class Trainer {
  id
  element
  name
  team

  constructor(name) {
    this.id = Date.now()
    this.element = document.createElement('li')
    this.element.setAttribute('id', this.id)
    this.element.innerHTML = name
    this.name = name
    this.team = []
  }
}
