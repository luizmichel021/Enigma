zerarTela();

function zerarTela() {
  aparecerImg("none");
  exibirTexto("h2", "");
  exibirTexto("p", "");
}

function telaCaso1 (){
    textoNotFound("block");
    aparecerImg("block");
    aparecerBotao("none")
}

function textoNotFound() {
  exibirTexto("h2", "Nenhuma mensagem escontrada !!");
  exibirTexto("p","Digite um texto que você deseja criptografar ou descriptografar.");
}

function aparecerImg(parametro) {
  let img = document.getElementById("imgrobo");
  img.style.display = parametro;
}

function aparecerBotao(parametro) {
  let botao = document.getElementById("botao-Copiar");
  botao.style.display = parametro;
}

function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function criptografar() {
  let inputTexto = document.querySelector("textarea").value;

  if (inputTexto == "") {
    telaCaso1();
  } else {
    let txtInput = document.querySelector("textarea").value;
    let textoCodificado = btoa(txtInput);
    zerarTela();
    exibirTexto("h2", `${textoCodificado}`);
    copiarTxt(textoCodificado);
    aparecerBotao("block");
  }
}

function descriptografar() {
  let inputTexto = document.querySelector("textarea").value;

  if (inputTexto == "") {
      telaCaso1();
  } else {
    let txtInput = document.querySelector("textarea").value;
    let textoDecodificado = atob(txtInput);
    zerarTela();
    exibirTexto("h2", `${textoDecodificado}`);
    copiarTxt(textoDecodificado);
    aparecerBotao("block");
  }
}

function copiarTxt(texto) {
  let textoCopiado = texto;
  navigator.clipboard.writeText(textoCopiado);
}
