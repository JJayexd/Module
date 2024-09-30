let myName = 'Emil'

export default function addHeader() {

    let header = document.getElementById('header')

    let h1 = document.createElement('h1')
    h1.innerHTML = `${myName}`

    header.appendChild(h1)

    console.log('Navn:', myName)

}

