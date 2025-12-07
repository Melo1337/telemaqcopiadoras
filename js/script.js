import { listaDeProdutos } from "../data/products.js";

document.addEventListener('DOMContentLoaded', function () {

    localStorage.clear();

    // Menu Mobile
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });

    // Fechar menu ao clicar em um link
    const navItems = document.querySelectorAll('.nav-links li a');
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            navLinks.classList.remove('show');
        });
    });

    // Smooth scrolling para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    // Adicionar classe de scroll ao header
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const printer = document.querySelectorAll('.printer')

    printer.forEach(function(printer){
        printer.addEventListener('click', function() {
        
        const idDiv = this.id
        let arrayImp = listaDeProdutos[idDiv]
        localStorage.setItem('arrayImp', JSON.stringify(arrayImp));

        window.location.href = 'printerFeatures.html'
    })
    })
});