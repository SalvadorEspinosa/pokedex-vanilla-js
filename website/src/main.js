import { Trainer } from './classes/Trainer.js'
import Pokedex from './data/pokedex.js'

const trainer = new Trainer('Ash')

console.log(Pokedex[0].id)

window.trainerList = {}
window.trainerList[trainer.id] = trainer

function renderTrainers() {
  const trainerListElement = document.getElementById('TrainerList')
  Object.values(window.trainerList).forEach((trainer) => {
    const li = document.createElement('li')
    li.setAttribute('id', trainer.id)
    li.innerHTML = trainer.name
    trainerListElement.appendChild(li)
  })
}

renderTrainers()
