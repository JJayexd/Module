export default function printNav() {

    let nav = document.getElementById('navigation')

    let searchInput = document.createElement('input')
    searchInput.type = 'text'
    searchInput.placeholder = 'Søg...'
    nav.appendChild(searchInput)

    let submitButton = document.createElement('button')
    submitButton.innerHTML = 'Send'
    submitButton.type = 'Submit'
    nav.appendChild(submitButton)

    submitButton.addEventListener('click', function () {
        
        console.log(searchInput.value)
        
        let main = document.getElementById('main')
        main.innerHTML = `<p>${searchInput.value}</p>`

    })

}