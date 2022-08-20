
const scriptURL = 'https://script.google.com/macros/s/AKfycby0qRBwgYfMCicXIXzf4z06Gp5CYFsLx-ZUMCoFoMR2isMeyZqpImSbkjALlLv1JnCE/exec'
const form = document.forms['google-sheet']

var randomNumber2 = Math.floor(Math.random() * 100) + 1;

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Chances for your dream to get completed is " + randomNumber2 + " %" ))
    .catch(error => console.error('Error!', error.message))
})
