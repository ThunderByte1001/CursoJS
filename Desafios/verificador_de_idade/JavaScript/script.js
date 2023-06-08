function verificar() {
    //window.alert('FUNCIONOU!')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {//Aqui dizemos, se o primeiro botão redondo for selecionado o 'checked' então é 'homem'
            genero = 'Homem'
            if (idade < 5){
                //Bébe
                genero = 'Bébe'
                img.setAttribute('src','hbb.png')
            } else if (idade > 0 && idade < 14) {
                //Criança
                genero = 'Criança'
                img.setAttribute('src', 'hcrianca.png')

            } else if (idade >= 14 && idade < 21){
                //Jovem
                genero = 'Jovem'
                img.setAttribute('src', 'hjovem.png')


            } else if (idade < 50) {
                //Adulto
                genero = 'Adulto'
                img.setAttribute('src', 'hadulto.png')

            } else {
                //Idoso
                genero = 'Idoso'
                img.setAttribute('src', 'hidoso.png')

            }
        } else if (fsex[1].checked) {//Aqui dizemos, se o primeiro botão redondo for selecionado o 'checked' então é 'Mulher'
            genero = 'Mulher'
            if (idade < 5){
                //Bébe
                genero = 'Bébe'
                img.setAttribute('src','mbb.png')
            } else if (idade > 0 && idade < 14) {
                //Criança
                genero = 'Criança'
                img.setAttribute('src', 'mcrianca.png')

            } else if (idade >= 14 && idade < 21){
                //Jovem
                genero = 'Jovem'
                img.setAttribute('src', 'mjovem.png')

            } else if (idade < 50) {
                //Adulto
                genero = 'Adulta'

                img.setAttribute('src', 'madulto.png')

            } else {
                //Idoso
                genero = 'Idosa'

                img.setAttribute('src', 'midoso.png')

            }
        }
        res.style.textAlign = 'center'//CSS
        res.innerHTML = `Detectamos ${genero} com  <strong>${idade}</strong> anos!`
        res.appendChild(img)
        
    }
}
function verificarenter(event){
    if (event.keyCode ===13 ) {//Este comando serve para quando se clica no enter o 'verificar()' é exucutado!
        verificar()
    }
}