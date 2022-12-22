let btn = document.querySelectorAll('.btn')
        let saida = document.getElementById('saida')


        function gerarSenha(){
            let caracteres = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#_-*&%+=/'
            let comprimento = document.getElementById('comprimento').value - 1
            let senha = ''
            for (let i = 0; i <= comprimento; i++){
                let randomizar = Math.floor(Math.random() * caracteres.length)
                senha += caracteres.substring(randomizar, randomizar + 1)
            }
            saida.value = senha
        }
        function copiarSenha(){
            saida.select()
            document.execCommand('copy')
        }
        btn[0].addEventListener('click', gerarSenha)
        btn[1].addEventListener('click', copiarSenha)