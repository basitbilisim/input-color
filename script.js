function selectInput(){
    let input = document.querySelector('.input').value 
    let body = document.getElementById('body')
    let h2 = document.getElementById('h2')
    body.style.backgroundColor = input;
    h2.textContent = input
}