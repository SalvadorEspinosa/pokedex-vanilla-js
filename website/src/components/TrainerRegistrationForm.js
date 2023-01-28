const MAX_NAME_LENGTH = 10

export class TrainerRegistrationForm {
  rootElement = document.getElementById('trainer-registration')
  label = document.createElement('label')
  input = document.createElement('input')
  button = document.createElement('button')

  constructor(registerTrainerHandler) {
    this.label.setAttribute('for', 'trainer-name')
    this.label.innerText = 'Trainer Name:'
    this.input.setAttribute('id', 'trainer-name')
    this.input.setAttribute('maxlength', MAX_NAME_LENGTH)
    this.button.addEventListener('click', registerTrainerHandler)
    this.button.innerText = 'Register Trainer'
    this.rootElement.appendChild(this.label)
    this.rootElement.appendChild(this.input)
    this.rootElement.appendChild(this.button)
  }
}
