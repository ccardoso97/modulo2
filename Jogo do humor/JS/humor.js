
let imgchange1 = [
    './assets/img/chico-felizao.png',
    './assets/img/chico-tristao.png',
    './assets/img/sorrindo com os olhos.png'
]
let imagem = document.querySelector('img');
let texto = document.querySelector('#status');
let botao = document.querySelector('button');
console.log(texto)
function imgchange(){
    botao.style.opacity = 2.0
    let random = Math.floor(3* Math.random())
    imagem.src = imgchange1[random]
        if (random == [0]){
            texto.innerHTML = "Alegre"
        }
        else if (random == [1]){
            texto.innerHTML = "Chateado"
        }
        else if (random == [2]){
            texto.innerHTML = "Sorrindo com os olhos"
        }
}