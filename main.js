
const buttons = document.querySelectorAll('button')
const block = document.querySelector('.block')

let count = 1

// todo 1) Доработать код, который был написан на уроке. Создать функционал на кнопку prev и next делать запрос при нажатии
//  на эти функции соблюдайте принцип DRY
function showJson(){
        fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
            .then(response => response.json())
            .then(data => {
                block.innerHTML = `
                <h2>${data.title}</h2>
                <span>${data.id}</span>
                <h3>${data.completed}</h3>
                `
        })

}

buttons.forEach(button =>{
    button.onclick = () =>{
        if (button.classList.contains('prev-btn')){
            count--
            showJson()
        } else {
            count++
            showJson()
        }
    }
})

// todo 2) Так же сделать отдельный fetch запрос на эту ссылку: 'https://jsonplaceholder.typicode.com/posts'
//  и отобразить данные просто в консоли

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log(data)
})
