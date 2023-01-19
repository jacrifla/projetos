const operacaoAnteriorTexto  = document.querySelector("#ant-operacao");
const operacaoAtualTexto = document.querySelector("#atual-operacao");
const botao = document.querySelectorAll("#btn-container button");

class Calculo{
    constructor(operacaoAnteriorTexto, operacaoSeguinteTexto) {
        this.operacaoAnteriorTexto = operacaoAnteriorTexto;
        this.operacaoAtualTexto = operacaoSeguinteTexto;
        this.operacaoAtual = "";
    }

    // adicionar digito na tela
    addDigito(digito) {
        // checar se ja tem ponto
        if(digito === "." && this.operacaoAtualTexto.innerText.includes(".")){
            return
        }
        this.operacaoAtual = digito;
        this.atualizarTela();
    }
    
    // processar as operacoes
    processoOperacao(operacao) {
        // checar se o atual esta vazio
        if(this.operacaoAtualTexto.innerText === "" && operacao !== "C") {
            // mudar a operacao
            if(this.operacaoAnteriorTexto.innerText !== "") {
                this.mudancaOperacao(operacao);
            }
            return;
        }
        // pegar os valores anteriores e atual
        let valorOperacao
        const anterior = +this.operacaoAnteriorTexto.innerText.split(" ")[0];
        const atual = +this.operacaoAtualTexto.innerText;

        switch(operacao){
            case "+":
                valorOperacao = anterior + atual;
                this.atualizarTela(valorOperacao, operacao, anterior, atual);
                break;
            case "-":
                valorOperacao = anterior - atual;
                this.atualizarTela(valorOperacao, operacao, anterior, atual);
                break;
            case "/":
                valorOperacao = anterior / atual;
                this.atualizarTela(valorOperacao, operacao, anterior, atual);
                break;
            case "*":
                valorOperacao = anterior * atual;
                this.atualizarTela(valorOperacao, operacao, anterior, atual);
                break;
            case "DEL":
                this.processoOperacaoDel();
                break;
            case "CE":
                this.processoApagarAtual();
                break;
            case "C":
                this.processoApagarTudo();
                break;
            case "=":
                this.processoOperadorIgual();
                break;

            default:
                return;
        }
    }


    // mudar valores na tela
    atualizarTela(valorOperacao = null, operacao = null, anterior = null, atual = null) {


        if(valorOperacao === null) {
            this.operacaoAtualTexto.innerText += this.operacaoAtual;
        } else {
            // checar se o valor é igual a zero
            if(anterior === 0) {
                valorOperacao = atual;
            }
            this.operacaoAnteriorTexto.innerText = `${valorOperacao} ${operacao}`;
            this.operacaoAtualTexto.innerText = "";
        }
    }

    // mudar operacoes matematicas
    mudancaOperacao(operacao) {
        const operacaoMatematica = ["*", "/", "+", "-"];
        if(!operacaoMatematica.includes(operacao)) {
            return
        }
        this.operacaoAnteriorTexto.innerText = this.operacaoAnteriorTexto.innerText.slice(0, -1) + operacao;
    }

    // deletar o ultimo digito
    processoOperacaoDel() {
        this.operacaoAtualTexto.innerText = this.operacaoAtualTexto.innerText.slice(0, -1);
    }

    // apagar operacao atual
    processoApagarAtual() {
        this.operacaoAtualTexto.innerText = "";
    }

    processoApagarTudo() {
        this.operacaoAtualTexto.innerText = "";
        this.operacaoAnteriorTexto.innerText = "";

    }
    processoOperadorIgual() {
        const operacao = operacaoAnteriorTexto.innerHTML.split(" ")[1];
        this.processoOperacao(operacao);
    }
}

const calc = new Calculo(operacaoAnteriorTexto, operacaoAtualTexto);

botao.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        if(+value >= 0 || value === "."){
            calc.addDigito(value);
        }else{
           calc.processoOperacao(value)
        }
    });
});