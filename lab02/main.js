const form = document.querySelector('.register')
console.log(form.elements)

const getFormValue = (e) => {
  e.preventDefault()
  for(let el of form.elements) {
    console.log(el.value)
}
}

form.addEventListener('submit',getFormValue )