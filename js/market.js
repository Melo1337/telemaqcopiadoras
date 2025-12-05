import { listaDeProdutos } from '../data/products.js';

function renderItens(listPrinters) {
    const htmlProducts = listPrinters.map(product => {
        const precoFormatado = product.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        return `<div class="printer"  id="${product.modelo}" >
                    <h3>${product.nome}</h3>
                    <img src="${product.imagemSrc || '/images/default.jpg'}" alt="${product.nome}" srcset="">
                    <p>${product.descricao}</p>
                    <p><strong>${precoFormatado}</strong></p>
                    <a href="https://wa.me/5532984195001?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20impressora%20${product.nome}%20que%20esta%20anunciada%20no%20site%20!">
                        <div class="btn whatsapp">
                            <img src="/images/whatsapp.png" alt="" srcset="">
                            <h4>Comprar via Whatsapp</h4>
                        </div>
                    </a>
                </div>`;
    });
    
    const printersContainer = document.querySelector(".printers");

    if (printersContainer) {
        printersContainer.innerHTML = htmlProducts.join('');
    } 
}

renderItens(listaDeProdutos);