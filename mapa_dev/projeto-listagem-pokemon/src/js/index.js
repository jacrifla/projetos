/*const modoNoturno = document.getElementById("botao-alterar-tema");
const imagem = document.querySelector(".imagem-botao");
const body = document.querySelector("body");
modoNoturno.addEventListener("click", () => {
  const modoNoturnoAtivo = body.classList.contains("modo-escuro");
  if (modoNoturnoAtivo) {
    body.classList.remove("modo-escuro");
    imagem.setAttribute("src", "src/imagens/sun.png");
  } else {
    body.classList.add("modo-escuro");
    imagem.setAttribute("src", "src/imagens/moon.png");
  }
});*/


// Refatorando


const modoNoturno = document.getElementById("botao-alterar-tema");
const imagemBotao = document.querySelector(".imagem-botao");
const body = document.querySelector("body");
modoNoturno.addEventListener("click", () => {
  const modoNoturnoAtivo = body.classList.contains("modo-escuro");
  body.classList.toggle("modo-escuro");
  if (modoNoturnoAtivo) {
    imagemBotao.setAttribute("src", "src/imagens/sun.png");
  } else {
    imagemBotao.setAttribute("src", "src/imagens/moon.png");
  }
});