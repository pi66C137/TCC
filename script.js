
const Itens = document.querySelector("p.N_itens")
const total = document.querySelector("p.total")

const preco1 = document.querySelector(".Preço1")
const preco2 = document.querySelector(".Preço2")
const preco3 = document.querySelector(".Preço3")
const preco4 = document.querySelector(".Preço4")
const preco5 = document.querySelector(".Preço5")
const preco6 = document.querySelector(".Preço6")

const product1 = document.querySelector(".product1")
const product2 = document.querySelector(".product2")
const product3 = document.querySelector(".product3")
const product4 = document.querySelector(".product4")
const product5 = document.querySelector(".product5")
const product6 = document.querySelector(".product6")

function LoadAbout(){
    location.href = "./sobre.html"
}
function LoadCadastro(){
    location.href = "./cadastro.html"
}
function LoadCupom(){
    location.href = "./cupom.html"
}

function Comprar(nomeProduto) 
{
    if (localStorage.getItem(nomeProduto)) {
        const quantidade = parseInt(localStorage.getItem(nomeProduto))
        localStorage.setItem(nomeProduto, (quantidade+1).toString())
        
    }
    else {
        localStorage.setItem(nomeProduto, "1")
    }   
    QuantidadeProdutos()     
}

function VerificarCarrinho() 
{
    

    product1.innerHTML  =(localStorage.getItem("Finasterida") || 0)
    product2.innerHTML  =(localStorage.getItem("Minoxidil") || 0)
    product3.innerHTML  =(localStorage.getItem("Espironolactona") || 0)
    product4.innerHTML  =(localStorage.getItem("Trembolona") || 0)
    product5.innerHTML  =(localStorage.getItem("Durateston") || 0)
    product6.innerHTML  =(localStorage.getItem("Danazol") || 0)
    
     // REMOVER SE NÃO TIVER QUANTIDADE
   if ((localStorage.getItem('Finasterida') || 0) == 0) {
    var linha = product1.parentElement
    linha.remove()
 }
 if ((localStorage.getItem('Minoxidil') || 0) == 0) {
    var linha1 = product2.parentElement
    linha1.remove()
 }
 if ((localStorage.getItem('Espironolactona') || 0) == 0) {
    var linha2 = product3.parentElement
    linha2.remove()
 }
 if ((localStorage.getItem('Trembolona') || 0) == 0) {
    var linha3 = product4.parentElement
    linha3.remove()
 }
 if ((localStorage.getItem('Durateston') || 0) == 0) {
    var linha4 = product5.parentElement
    linha4.remove()
 }
 if ((localStorage.getItem('Danazol') || 0) == 0) {
    var linha5 = product6.parentElement
    linha5.remove()
 }


}


function Limpar(){
    localStorage.clear()

    location.reload()
}

function QuantidadeProdutos()
{
    const contador = document.querySelector(".Total")

    var quantidade = 0
    var produtos = ["Finasterida", "Minoxidil", "Espironolactona","Trembolona","Durateston","Danazol"]

    for (var produto of produtos) {
        if (localStorage.getItem(produto))
            quantidade = quantidade + parseInt(localStorage.getItem(produto))
    }

    contador.innerText = quantidade.toString()
}
function somar(){
    var soma1 = parseFloat(preco1.innerText) * parseFloat(product2.innerText)
    var soma2 = parseFloat(preco2.innerText) * parseFloat(product3.innerText)
    var soma3 = parseFloat(preco3.innerText) * parseFloat(product1.innerText)
    var soma4 = parseFloat(preco4.innerText) * parseFloat(product4.innerText)
    var soma5 = parseFloat(preco5.innerText) * parseFloat(product5.innerText)
    var soma6 = parseFloat(preco6.innerText) * parseFloat(product6.innerText)
    var somatotal = parseFloat(soma1+soma2+soma3+soma4+soma5+soma6)
    total.innerText = (Math.round(somatotal * 100)/100).toString()
    if ((localStorage.getItem('cupom1')) >= 1) {
        if ((localStorage.getItem('cupom2')) >= 1) {
            total.innerText = parseFloat(total.innerText) *0.7
         }
        else{
            total.innerText = parseFloat(total.innerText) *0.9

        }
     }
    else if ((localStorage.getItem('cupom2')) >= 1) {
        total.innerText = parseFloat(total.innerText) *0.8
    }
    
    
}

var veri = 1;
var trigger = document.getElementById('menu-trigger').addEventListener("click",function(){
	var menu = document.getElementById('menu-hidde')
	if (veri == 1) {
		menu.style.left = "0px"
		veri = 0
	}else{
		menu.style.left = "-100%"
		veri = 1
	}
})

