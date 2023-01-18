class Trainer {
  name
  team

  constructor(name) {
    this.name = name
    this.team = []
  }
}

const trainer = new Trainer('Ash')

window.trainerList = []
window.trainerList.push(trainer)

function renderTrainers() {
  const trainerListElement = document.getElementById('TrainerList')
  const trainerListElements = window.trainerList.map((trainer) => {
    const li = document.createElement('li')
    li.innerHTML = trainer.name
    return li
  })

  trainerListElement.appendChild(...trainerListElements)
}

renderTrainers()
