const horas = document.getElementById('horas')  
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time() {
    let timeToday = new Date()
    let hora = timeToday.getHours()
    let minuto = timeToday.getMinutes()
    let segundo = timeToday.getSeconds()

    if (hora < 10) hora = '0' + hora
    if (minuto < 10) minuto = '0' + minuto
    if (segundo < 10) segundo = '0' +segundo

    horas.textContent = hora
    minutos.textContent = minuto
    segundos.textContent = segundo
})

const dias = document.getElementById('dia')
const meses = document.getElementById('mes')
const anos = document.getElementById('ano')


const data = setInterval(function data() {
    let dateToday = new Date()
    let dia = dateToday.getDay()
    let mes = dateToday.getUTCMonth()
    let ano = dateToday.getFullYear()
    let mesExtenso

    if (mes == 0) mesExtenso = 'Janeiro'
    if (mes == 1) mesExtenso = 'Fevereiro'
    if (mes == 2) mesExtenso = 'Março'
    if (mes == 3) mesExtenso = 'Abril'
    if (mes == 4) mesExtenso = 'Maio'
    if (mes == 5) mesExtenso = 'Junho'
    if (mes == 6) mesExtenso = 'Julho'
    if (mes == 7) mesExtenso = 'Agosto'
    if (mes == 8) mesExtenso = 'Setembro'
    if (mes == 9) mesExtenso = 'Outubro'
    if (mes == 10) mesExtenso = 'Novembro'
    if (mes == 11) mesExtenso = 'Dezembro'
    
    dias.textContent = dia
    meses.textContent = mesExtenso
    anos.textContent = ano
})




