$(document).ready(function () {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const navItems = $('.nav-item');

    const currentPage = window.location.pathname.split('/').pop();

    document.querySelectorAll('#nav_list a').forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.parentElement.classList.add('active');
        }
    });

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }
    });

    // Função global para carregar páginas dinâmicas e aplicar animações e menu ativo
    window.openPage = function (pageName, clickedLink) {
        fetch(pageName + '.html')
            .then(response => response.text())
            .then(html => {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;

                // Remove header e footer
                const header = tempDiv.querySelector('header');
                const footer = tempDiv.querySelector('footer');
                if (header) header.remove();
                if (footer) footer.remove();

                // Insere conteúdo carregado
                document.getElementById('content').innerHTML = tempDiv.innerHTML;

                // Atualiza item de menu ativo
                document.querySelectorAll('.nav-item').forEach(item => {
                    item.classList.remove('active');
                });
                if (clickedLink && clickedLink.parentElement.classList.contains('nav-item')) {
                    clickedLink.parentElement.classList.add('active');
                }

                // Reaplica animações ScrollReveal no novo conteúdo
                ScrollReveal().clean('#content');
                ScrollReveal().reveal('#cta', { origin: 'left', duration: 2000, distance: '20%' });
                ScrollReveal().reveal('.dish', { origin: 'right', duration: 2000, distance: '20%' });
                ScrollReveal().reveal('#about', { origin: 'left', duration: 2000, distance: '20%' });
                ScrollReveal().reveal('#testimonials', { origin: 'right', duration: 2000, distance: '20%' });
            });
    };

    // Inicializa ScrollReveal no conteúdo inicial (página carregada por padrão)
    ScrollReveal().reveal('#cta', { origin: 'left', duration: 2000, distance: '20%' });
    ScrollReveal().reveal('.dish', { origin: 'right', duration: 2000, distance: '20%' });
    ScrollReveal().reveal('#about', { origin: 'left', duration: 2000, distance: '20%' });
    ScrollReveal().reveal('#testimonials', { origin: 'right', duration: 2000, distance: '20%' });
});
