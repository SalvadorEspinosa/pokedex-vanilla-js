export class Trainer {
  id
  name
  team

  constructor(name) {
    this.id = Date.now()
    this.name = name
    this.team = []
  }
}
