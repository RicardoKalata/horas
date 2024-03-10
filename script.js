function carregar() {
var msg = window.document.getElementById ('msg')
var msg2= window.document.getElementById ('msg2')
var img = window.document.getElementById ('imagem')
var data = new Date()
var hora = data.getHours()
var data2 = new Date()
var minuto = data2.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos. `
if (hora >= 0 && hora < 12) {
    //Bom Dia!
    img.src = 'fotomanha.png'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora < 18) {
    // Boa Tarde!
    img.src = 'fototarde.png'
    document.body.style.background = '#b9846f'
} else {
    //Boa Noite!
    img.src = 'fotonoite.png'
    document.body.style.background = '#515154'
}
if (hora >= 0 && hora < 12) {
    msg2.innerHTML = 'Tenha um bom dia!'

} else if (hora >= 12 && hora < 18) {
    msg2.innerHTML = 'Tenha uma boa tarde! ' 
    
} else {
    msg2.innerHTML = 'Tenha uma boa noite! '
}
}
