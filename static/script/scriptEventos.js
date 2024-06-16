//MENU HAMBURGUE
//PARA APARECER O MENU
document.getElementById('botaoMenuInicial').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});
//SUAVIDADE DO MENU AO APARECER
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

//Redirecionando para outras págians
document.addEventListener('DOMContentLoaded', function() {
    const blocks = document.querySelectorAll('.blocos');

    blocks.forEach(block => {
        block.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });
});


//Para acessar dinâmicamente as páginas
document.querySelectorAll('#fundo .blocos').forEach(bloco => {
    bloco.addEventListener('click', function() {
        const url = this.getAttribute('data-href');
        if (url) {
            window.location.href = url;
        }
    });
});
document.getElementById('btnInfo').addEventListener('click', function(event) {
    event.preventDefault();
    if (validateFormInfo()) {
        displaySuccessMessage('infoSuccessMessage', 'Formulário enviado com sucesso!');
    }
});

document.getElementById('btnContato').addEventListener('click', function(event) {
    event.preventDefault();
    if (validateFormContato()) {
        displaySuccessMessage('contatoSuccessMessage', 'Formulário enviado com sucesso!');
    }
});

//-- Outro Script para acessar dianmicamente agora sendo usado para o HTML do notícia

// Selecionar todas as divs com a classe 'not' e adicionar o evento de clique
document.querySelectorAll('.not').forEach(div => {
    div.addEventListener('click', function() {
        const url = this.getAttribute('data-href');
        if (url) {
            window.location.href = url;
        }
    });
});

// Manter os outros manipuladores de eventos para os botões de formulário
document.getElementById('btnInfo').addEventListener('click', function(event) {
    event.preventDefault();
    if (validateFormInfo()) {
        displaySuccessMessage('infoSuccessMessage', 'Formulário enviado com sucesso!');
    }
});

document.getElementById('btnContato').addEventListener('click', function(event) {
    event.preventDefault();
    if (validateFormContato()) {
        displaySuccessMessage('contatoSuccessMessage', 'Formulário enviado com sucesso!');
    }
});







//CONTATO
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