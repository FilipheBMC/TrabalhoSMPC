// MENU HAMBURGUER
// PARA APARECER O MENU
document.getElementById('botaoMenuInicial').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        setTimeout(() => {
            menu.style.display = 'none';
        }, 300); // Tempo igual à duração da transição
    } else {
        menu.style.display = 'block';
        setTimeout(() => {
            menu.classList.add('show');
        }, 10); // Pequeno atraso para permitir que o navegador registre o display:block antes da transição
    }
});

/*
document.addEventListener('DOMContentLoaded', function () {
    var nomeInput = document.getElementById('nomeInput');
    var emailInput = document.getElementById('emailInput');
    var numeroInput = document.getElementById('numeroInput');
    var formacaoInput = document.getElementById('FormacaoInput');
    var botaoProximo = document.getElementById('botaoProximo');
    var botaoEnviar = document.getElementById('botaoEnviar');
    var agradecimento = document.getElementById('agradecimento');
    var form = document.getElementById('VoluntarioForm');
    var lista = [
        document.getElementById('nomeLabel'),
        document.getElementById('emailLabel'),
        document.getElementById("resposta1"),
        document.getElementById('numeroLabel'),
        document.getElementById('formacaoLabel'),
        document.getElementById("resposta3")
    ];
    var indice = 0;

    function validarCampo(campo, mensagemErro) {
        if (campo.value.trim() === '') {
            alert(mensagemErro);
            return false;
        }
        return true;
    }

    function validarEmail(email) {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return false;
        }
        return true;
    }

    function validarResposta(resposta, mensagemErro) {
        if (!resposta) {
            alert(mensagemErro);
            return false;
        }
        return true;
    }

    function verificadorEstado() {
        var campoAtual = lista[indice];
        switch (indice) {
            case 0:
                if (!validarCampo(nomeInput, 'Por favor, insira seu nome.')) return;
                break;
            case 1:
                if (!validarEmail(emailInput.value)) return;
                break;
            case 2:
                if (!validarResposta(document.querySelector('input[name="resposta1"]:checked'), 'Por favor, selecione uma opção para receber notificação pelo WhatsApp.')) return;
                break;
            case 3:
                if (!validarCampo(numeroInput, 'Por favor, insira um número de telefone válido.')) return;
                break;
            case 4:
                if (!validarCampo(formacaoInput, 'Por favor, insira sua formação.')) return;
                break;
            case 5:
                if (!validarResposta(document.querySelector('input[name="resposta3"]:checked'), 'Por favor, selecione uma opção para profissional liberal.')) return;
                break;
        }

        campoAtual.style.display = 'none';
        indice++;

        if (indice < lista.length) {
            lista[indice].style.display = 'block';
            if (indice === 1) {
                document.getElementById('emailLabel').style.display = 'block';
                emailInput.style.display = 'block';
            } else if (indice === 3) {
                document.getElementById('numeroLabel').style.display = 'block';
                numeroInput.style.display = 'block';
            } else if (indice === 4) {
                document.getElementById('formacaoLabel').style.display = 'block';
                formacaoInput.style.display = 'block';
            }
        } else {
            botaoProximo.style.display = 'none';
            botaoEnviar.style.display = 'block';
        }
    }

    botaoProximo.addEventListener('click', verificadorEstado);

    var radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener('change', function () {
            document.querySelectorAll('label.ret').forEach(function (label) {
                label.classList.remove('selected');
            });

            this.parentNode.classList.add('selected');

            radioButtons.forEach(function (otherRadioButton) {
                if (otherRadioButton !== radioButton) {
                    otherRadioButton.parentNode.classList.remove('selected');
                }
            });
        });
    });

    lista[indice].style.display = 'block';

    function final() {
        botaoEnviar.style.display = 'none';
        agradecimento.style.display = 'block';
        agradecimento.style.fontSize = '24px';
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (verificadorEstado()) {
            final();
        }
    });

    botaoEnviar.addEventListener('click', final);
});
*/







//suavidade contato
document.addEventListener("DOMContentLoaded", function() {
    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});