const dataPersonagens = [
  {
    id: 1, name: 'Ciclope', descricao: 'Ele tem o poder de disparar rajadas ópticas por um acidente que aconteceu com ele quando criança, mas não consegue controlá-los'
  },
  {
    id: 2, name: 'Jean Grey', descricao: 'Jean Grey é uma mutante nível ômega e o principal avatar da Força Fênix, no qual manifesta poderes cósmicos. A telepatia e telecinese'
  },
  {
    id: 3, name: 'Lince Negra', descricao: 'Ela tem o poder de atravessar matéria sólida,campos de energia,rajadas ópticas, continuando intacta,e também tem o poder de andar no ar'
  },
  {
    id: 4, name: 'Tempestade', descricao: 'Tem o poder de controlar as forças da natureza, muito poderosa ela pode produzir raios, chuvas, gelos, ventos, neblina, entre outros efeitos'
  },
  {
    id: 5, name: 'Vampira', descricao: 'Ela tem o poder de absorver a vitalidade e memória das pessoas que toca ou no caso dos mutantes os poderes e a memória, mas só temporariamente'
  },
  {
    id: 6, name: 'Wolverine', descricao: 'Poderes. Garras Metálicas. Fator de Cura Regenerativo, Super Agilidade.'
  },
  {
    id: 7, name: 'Noturno', descricao: 'Ele é um mutante que nasceu com cauda, orelhas pontudas e com o poder de se Teletransportar'
  },
  {
    id: 8, name: 'Magneto', descricao: 'Ele tem o poder de magnetocinese, ou seja, controlar objetos de metal e criar campos magnéticos'
  },

]
const personagens = document.querySelectorAll('.personagem');

// selecionando os personagens
personagens.forEach((personagem) => {
  
  // quando o mouse passa por cima do personagem
  
  personagem.addEventListener('mouseenter', () => {
    
    removerSelecaoDoPersonagem()

    // quando o mouse passa por cima do personagem entra a classe selecionado
    personagem.classList.add('selecionado')
    
    // quando o id do personagem é igual ao id do data
    for (const person in dataPersonagens) {
      if (personagem.getAttribute('data-id') == dataPersonagens[person].id) {
        const nomePersonagemSelecionado = dataPersonagens[person].name
        const descricaoPersonagemSelecionado = dataPersonagens[person].descricao

        alterarInfos(nomePersonagemSelecionado, descricaoPersonagemSelecionado)

      }
    }
    
  })
})

// função para colocar os dados dentro do card 
function alterarInfos(name, descricao){
  const descricaoPersonagem = document.getElementById('descricao-personagem');
  descricaoPersonagem.innerText = descricao

  const nomePersonagem = document.getElementById('nome-personagem');
  nomePersonagem.innerText = name
  const nomeMinusculo = String(name).replace(' ', '-').toLowerCase()

  const imagemPersonagemGrande = document.querySelector('.personagem-grande');
  imagemPersonagemGrande.src = `./src/imagens/card-${nomeMinusculo}.png`;
}

// função para remover a seleção da tag
function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
