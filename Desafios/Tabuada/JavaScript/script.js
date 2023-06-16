function tabuada(){
  var numero = parseInt(document.getElementById('txtano').value)
  var contador = 1
  var resultado = ""
  while (contador <= 10){
    resultado += `${numero} x ${contador} = ${numero * contador}<br>`
    contador = contador +1
    
  }
  document.getElementById('res').innerHTML = resultado;

}
function verificarenter(event){
  if (event.keyCode ===13 ) {//Este comando serve para quando se clica no enter o 'tabuada()' é exucutado!
      tabuada()
  }
}