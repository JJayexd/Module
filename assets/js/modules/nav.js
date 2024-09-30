export default function printNav() {

    let nav = document.getElementById('navigation')

    let searchInput = document.createElement('input')
    nav.appendChild(searchInput)

    let submitButton = document.createElement('button')
    submitButton.innerHTML = 'Send'
    nav.appendChild(submitButton)

    submitButton.onclick = function () {
        
        console.log(searchInput.value)
        
        let main = document.getElementById('main')
        main.innerHTML = `<p> ${searchInput.value} </p>`

    }

}