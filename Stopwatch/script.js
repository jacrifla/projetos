window.onload = function(){
    let segundos = 00
    let decimos = 00
    let acrescentaDecimos = document.getElementById('decimos')
    let acrescentaSegundos = document.getElementById('segundos')
    let botaoStart = document.getElementById('btn-start')
    let botaoStop = document.getElementById('btn-stop')
    let botaoReset = document.getElementById('btn-reset')
    let intervalo

    botaoStart.onclick = function(){
        clearInterval(intervalo)
        intervalo = setInterval(startTimer, 10)
    }

    botaoStop.onclick = function(){
        clearInterval(intervalo)
    }
    botaoReset.onclick = function(){
        clearInterval(intervalo)
        decimos = '00'
        segundos = '00'
        acrescentaDecimos.innerHTML = decimos
        acrescentaSegundos.innerHTML = segundos
    }

    function startTimer(){
        decimos++

        if(decimos <= 9){
            acrescentaDecimos.innerHTML = '0' + decimos
        }
        if(decimos > 9){
            acrescentaDecimos.innerHTML = decimos
        }
        if(decimos > 99){
            console.log('segundos');
            segundos ++
            acrescentaSegundos.innerHTML = '0' + segundos
            decimos = 0
            acrescentaDecimos.innerHTML = '0' + 0
        }

        if(segundos > 9){
            acrescentaDecimos.innerHTML = segundos
        }
    }
}