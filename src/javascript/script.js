$(document).ready(function () {
    // Menu mobile toggle
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    // Sombra no header ao rolar
    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }
    });

    // Destacar o item ativo no menu
    const currentPage = window.location.pathname.split('/').pop(); // Ex: cardapio.html

    document.querySelectorAll('#nav_list a').forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPage || (href === 'index.html' && currentPage === '')) {
            link.parentElement.classList.add('active');
        }
    });

    // ScrollReveal nas seções conhecidas
    ScrollReveal().reveal('#cta', { origin: 'left', duration: 2000, distance: '20%' });
    ScrollReveal().reveal('.dish', { origin: 'right', duration: 2000, distance: '20%' });
    ScrollReveal().reveal('#about', { origin: 'left', duration: 2000, distance: '20%' });
    ScrollReveal().reveal('#testimonials', { origin: 'right', duration: 2000, distance: '20%' });
    ScrollReveal().reveal('.forms', { origin: 'left', duration: 2000, distance: '20%' });
});

//Validando formulário
function validarFormulario(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    const formulario = document.getElementById('formulario');
    const nome = formulario.querySelector('input[name="name"]').value.trim();
    const email = formulario.querySelector('input[name="email"]').value.trim();
    const assunto = formulario.querySelector('input[name="subject"]').value.trim();
    const mensagem = formulario.querySelector('textarea[name="message"]').value.trim();

    if (nome !== '' && email !== '' && assunto !== '' && mensagem !== '') {
        alert('Mensagem enviada com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos do formulário.');
    }
}