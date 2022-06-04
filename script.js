const Itens = document.querySelector("p.N_itens")
var numero = 0
function Addcarrinho(){
    numero+=1
    Itens.innerHTML= numero.toString();
}
