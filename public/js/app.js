

fetch('http://puzzle.mead.io/puzzle').then((response) => {

    response.json().then((data) => {
        console.log(data)
    })

})



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const loc = search.value
    messageOne.textContent = "Loading.."
    messageTwo.textContent = ''
    console.log('Inside onther lister' + loc)

    fetch('/weather?address=' + loc).then((response) => {

        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            }
            else {
                messageOne.textContent = data.Location
                messageTwo.textContent = data.forecast


            }

        })
    })

})