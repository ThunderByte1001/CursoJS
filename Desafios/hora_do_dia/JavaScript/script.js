function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var come = document.getElementById('coment')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        come.innerHTML = ('BOM DIA!')
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f';

     } else if (hora >= 12 && hora <= 18) {
        //Boa tarde!
        come.innerHTML = ('BOA TARDE!')
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f';

     } else {
        //boa noite!
        come.innerHTML = ('<strong>BOA NOITE!</strong>')
        img.src = 'noite.png'
        document.body.style.background = '#515154';

    }
}
