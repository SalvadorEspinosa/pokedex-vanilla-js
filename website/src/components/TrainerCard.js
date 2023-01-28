export class TrainerCard {
  rootElement = document.getElementById('trainer-card')
  article = document.createElement('article')
  name = document.createElement('h3')
  team = document.createElement('ol')
  uid = document.createElement('h4')

  constructor(trainer) {
    const title = document.createElement('section')
    title.className = 'section-title'
    this.name.innerText = `${trainer.name}`
    title.appendChild(this.name)
    this.uid.innerText = `UID: ${trainer.id}`
    title.appendChild(this.uid)
    this.article.appendChild(title)
    this.article.appendChild(this.team)
  }

  render() {
    const {
      childNodes: [firstChildNode],
    } = this.rootElement
    if (firstChildNode) {
      this.rootElement.replaceChild(this.article, firstChildNode)
    } else {
      this.rootElement.appendChild(this.article)
    }
  }
}
