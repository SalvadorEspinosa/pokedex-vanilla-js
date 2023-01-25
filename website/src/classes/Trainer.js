export class Trainer {
  id
  element
  name
  team

  constructor(name) {
    this.id = Date.now()
    this.element = document.createElement('li')
    this.element.setAttribute('id', this.id)
    this.element.setAttribute('onclick', `showTrainerCard(${this.id})`)
    this.element.innerHTML = name
    this.name = name
    this.team = []
  }

  renderTrainerCard(element) {
    element.innerHTML = ''
    const title = document.createElement('h4')
    title.innerHTML = this.name
    const id = document.createElement('h5')
    id.innerHTML = `UID: ${this.id}`
    element.appendChild(title)
    element.appendChild(id)
    const team = document.createElement('p')
    if (this.team.length === 0) {
      team.innerHTML = `Team: Trainer currently doesn't have any Pokémon`
      element.appendChild(team)
      const emptyTeam = document.createElement('p')
      emptyTeam.innerHTML = 'Choose up to 6 pokemon from the Pokédex'
      element.appendChild(emptyTeam)
    }
  }
}
