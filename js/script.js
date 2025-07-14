document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
    
    // Fechar menu ao clicar em um link
    const navItems = document.querySelectorAll('.nav-links li a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('show');
        });
    });
    
    // Smooth scrolling para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Formulário de contato
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            
            console.log('Formulário enviado:', formValues);
            
            // Exibir mensagem de sucesso
            alert('Obrigado por entrar em contato! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.');
            
            // Limpar formulário
            this.reset();
        });
    }
    
    // Adicionar classe de scroll ao header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});