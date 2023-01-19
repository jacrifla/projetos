var chama = document.getElementById('result')
function insere(numero){
    var numero1 = chama.innerHTML;
    chama.innerHTML = numero1 + numero;
}
function apaga(){
    chama.innerHTML = '';
}
function volta(){
    var resultado = chama.innerHTML;
    chama.innerHTML = resultado.substring(0,resultado.length -1)
}
function calc(){
    var resultado = chama.innerHTML;
    if(resultado){
        chama.innerHTML = eval(resultado)
    }else{
        chama.innerHTML = ' '
    }
}