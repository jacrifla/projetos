let relogio = () => {
    let data = new Date()
    let horas = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
    let time = `${horas}:${minutos}:${segundos}`
    

    horas = horas < 10 ? `0${horas}` : horas
    minutos = minutos < 10 ? `0${minutos}` : minutos
    segundos = segundos < 10 ? `0${horas}` : segundos

    document.getElementById('relogio').innerHTML = time

    setTimeout(relogio, 1000)
}
relogio()