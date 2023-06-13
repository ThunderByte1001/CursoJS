function contar() {
    var inicio = document.getElementById('txtano');
    var fim = document.getElementById('txtfim');
    var passo = document.getElementById('txtpasso');
    var res = document.getElementById('res');
    var ini = parseInt(inicio.value);
    var fim1 = parseInt(fim.value);
    var pass = parseInt(passo.value);
    var emoji = '\u27A1'; // ➡️
    var emoji2 = '\u{1F3AF}'; // 🎯
  
    if (ini === '' || isNaN(ini)) {
      res.innerHTML = 'Impossível contar! Insira um valor válido para o início.';
    } else if (fim1 === '' || isNaN(fim1)) {
      res.innerHTML = 'Impossível contar! Insira um valor válido para o fim.';
    } else if (pass === 0 || isNaN(pass)) {
      window.alert('[ERRO] Passo zero não funciona, encaminhado Passo 1!');
      while (ini <= fim1) {
        res.innerHTML += `${ini} ${emoji} `;
        ini++;
      }
    } else if (ini < fim1) {
      while (ini <= fim1) {
        res.innerHTML += `${ini} ${emoji} `;
        ini += pass;
      }
    } else {
      while (ini >= fim1) {
        res.innerHTML += `${ini} ${emoji} `;
        ini -= pass;
      }
    }
    res.innerHTML += `${emoji2}`;
  }
  function verificarenter(event){
    if (event.keyCode ===13 ) {//Este comando serve para quando se clica no enter o 'verificar()' é exucutado!
        contar()
    }
}