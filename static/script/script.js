document.addEventListener('DOMContentLoaded', () => {
    const images = ['/static/image/DocumentosInicio/a1.png', '/static/image/DocumentosInicio/a2.png', '/static/image/DocumentosInicio/a3.png'];
    const carrossel = document.getElementById('carrossel');

    images.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            carrossel.appendChild(img);
        };
        img.onerror = (error) => {
            console.error(`Erro ao carregar imagem ${src}: ${error}`);
        };
    });

    let index = 0;
    const totalImages = images.length;
    const intervalTime = 5000;
    let autoSlideInterval;

    function updateCarrossel() {
        const offset = -index * 100; // Deslocamento em porcentagem
        carrossel.style.transform = `translateX(${offset}%)`;
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            index = (index + 1) % totalImages;
            updateCarrossel();
        }, intervalTime);
    }

    document.getElementById('nextBtn').addEventListener('click', () => {
        index = (index + 1) % totalImages;
        updateCarrossel();
        resetAutoSlide();
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        index = (index - 1 + totalImages) % totalImages;
        updateCarrossel();
        resetAutoSlide();
    });

    // Start the auto-slide interval when the page loads
    autoSlideInterval = setInterval(() => {
        index = (index + 1) % totalImages;
        updateCarrossel();
    }, intervalTime);
});



// CARROSSEL FEEDBACK

document.addEventListener('DOMContentLoaded', () => {
    const feedbacks = [
        {
          id: 1,
          name: "sara jones",
          job: "ux designer",
          img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?"
        },
        // Adicione mais objetos de feedback conforme necessário

        {
            id: 2,
            name: "Maria Clara",
            job: "Funcionário Publica",
            img:
              "/static/image/DocumentosInicio/imgProvasocial1.jpg",
            text:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
          },
          /*{
            id: 3,
            name: "anees",
            job: "web designer",
            img:
              "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
            text:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
          },*/
          {
            id: 3,
            name: "James",
            job: "Voluntário",
            img:
              "/static/image/DocumentosInicio/imgProvasocial2.jpg",
            text:
              "SLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
          },
          /*{
            id: 5,
            name: "san",
            job: "the boss",
            img:
              "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
            text:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
          }*/
        ];
    
    const img = document.getElementById("person-img");
    const author = document.getElementById("author");
    const job = document.getElementById("job");
    const info = document.getElementById("info");
    
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    
    let currentItem = 0;
    
    // Carrega o item inicial
    window.addEventListener("DOMContentLoaded", () => {
        showFeedback(currentItem);
    });
    
    // Mostra o feedback com base no índice
    function showFeedback(index) {
        const feedback = feedbacks[index];
        img.src = feedback.img;
        author.textContent = feedback.name;
        job.textContent = feedback.job;
        info.textContent = feedback.text;
    }
    
    // Mostra o próximo feedback
    nextBtn.addEventListener("click", () => {
        currentItem++;
        if (currentItem > feedbacks.length - 1) {
            currentItem = 0;
        }
        showFeedback(currentItem);
    });
    
    // Mostra o feedback anterior
    prevBtn.addEventListener("click", () => {
        currentItem--;
        if (currentItem < 0) {
            currentItem = feedbacks.length - 1;
        }
        showFeedback(currentItem);
    });
});


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












//FAZENDO CONEXÃO COM AS FOTOS DAS RECORDAÇÕES

document.addEventListener('DOMContentLoaded', () => {
    const foto1 = document.getElementById('foto1');

    if (foto1) {
        foto1.addEventListener('click', () => {
            window.location.href = "/templates/FotosIImaio.html";
        });
    }
});

//-----------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const foto1 = document.getElementById('foto2');

    if (foto1) {
        foto1.addEventListener('click', () => {
            window.location.href = "/templates/FotosIMaio.html";
        });
    }
});

//------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const foto1 = document.getElementById('foto3');

    if (foto1) {
        foto1.addEventListener('click', () => {
            window.location.href = "/templates/FotosSaudAbr.html";
        });
    }
});

//------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const foto1 = document.getElementById('foto4');

    if (foto1) {
        foto1.addEventListener('click', () => {
            window.location.href = "/templates/FotosIAbril.html";
        });
    }
});

//------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const foto1 = document.getElementById('foto5');

    if (foto1) {
        foto1.addEventListener('click', () => {
            window.location.href = "/templates/FotoIIMarco.html";
        });
    }
});

//------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const foto1 = document.getElementById('foto6');

    if (foto1) {
        foto1.addEventListener('click', () => {
            window.location.href = "/templates/FotosMarcoI.html";
        });
    }
});

//------------------------------------------------------

//Ver mais conseguindo ser redirecionado
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('RedirecionarRecordacoes').addEventListener('click', function() {
        var url = this.getAttribute('data-url');
        window.location.href = url;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var fotosRecordacoes = document.getElementsByClassName('fotosRecordacoes');
    for (var i = 0; i < fotosRecordacoes.length; i++) {
        fotosRecordacoes[i].addEventListener('click', function() {
            var url = this.getAttribute('data-url');
            window.location.href = url;
        });
    }
});

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

//Acessar dinâmicamente as imagens
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('#corpoParaTerFoots img');
    
    images.forEach(image => {
        image.addEventListener('click', () => {
            const url = image.getAttribute('data-href');
            if (url) {
                window.location.href = url;
            }
        });
    });
});


//Para acessar dinâmicamente as páginas

document.querySelectorAll('#informativo .FotosInformativos').forEach(div => {
    div.addEventListener('click', function() {
        const url = this.getAttribute('data-url'); // Corrigido para data-url
        if (url) {
            window.location.href = url;
        }
    });
});

// Manipuladores para divs dentro de #noticias
document.querySelectorAll('#noticias .FotosNoticias').forEach(div => {
    div.addEventListener('click', function() {
        const url = this.getAttribute('data-url'); // Corrigido para data-url
        if (url) {
            window.location.href = url;
        }
    });
});

// Manipuladores para divs dentro de .OutrosEventosBtn
document.querySelectorAll('.OutrosEventosBtn').forEach(button => {
    button.addEventListener('click', function() {
        const url = this.getAttribute('data-href');
        if (url) {
            window.location.href = url;
        }
    });
});

//Testando no ver mais fotos
document.querySelectorAll('#corpoParaTerFoots .fotoss').forEach(img => {
    img.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        if (url) {
            window.location.href = url;
        }
    });
});

//Testando no ver mais fotos
document.querySelectorAll('#fundo .blocos').forEach(img => {
    img.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        if (url) {
            window.location.href = url;
        }
    });
});

//Testando no ver mais fotos
document.querySelectorAll('.container .not').forEach(img => {
    img.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        if (url) {
            window.location.href = url;
        }
    });
});

// DOAÇÕES

document.getElementById('paypal-button').addEventListener('click', function() {
    window.open('https://www.paypal.com/donate/?hosted_button_id=FV22LWCERQRSA', '_blank');
});


//Enviando menssagem por email
(function() {
    emailjs.init('seu_user_id'); // Substitua 'seu_user_id' pelo seu USER_ID

    document.getElementById('btnContato').addEventListener('click', function(event) {
        event.preventDefault();

        // Obtém os valores do formulário
        var nome = document.getElementById('nomeCont').value;
        var email = document.getElementById('emailCont').value;
        var telefone = document.getElementById('telCont').value;
        var assunto = document.getElementById('assuntoCont').value;
        var mensagem = document.getElementById('mensg').value;

        // Envia o e-mail
        emailjs.send('seu_service_id', 'seu_template_id', {
            nome: nome,
            email: email,
            telefone: telefone,
            assunto: assunto,
            mensagem: mensagem
        }).then(function(response) {
            console.log('E-mail enviado com sucesso!', response);
            // Limpa o formulário e exibe uma mensagem de sucesso
            document.getElementById('contatoSuccessMessage').innerHTML = 'E-mail enviado com sucesso!';
            document.getElementById('nomeCont').value = '';
            document.getElementById('emailCont').value = '';
            document.getElementById('telCont').value = '';
            document.getElementById('assuntoCont').value = '';
            document.getElementById('mensg').value = '';
        }, function(error) {
            console.error('Erro ao enviar o e-mail:', error);
            // Exibe uma mensagem de erro
            document.getElementById('contatoSuccessMessage').innerHTML = 'Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente mais tarde.';
        });
    });
})();