export class TrainerCard {
  element = document.createElement('article')
  name = document.createElement('h3')
  team = document.createElement('ol')
  uid = document.createElement('h4')

  constructor(trainer) {
    const title = document.createElement('section')
    this.name.innerText = `${trainer.name}`
    title.appendChild(this.name)
    this.uid.innerText = `UID: ${trainer.id}`
    title.appendChild(this.uid)
    this.element.appendChild(title)
    this.element.appendChild(this.team)
  }
}
