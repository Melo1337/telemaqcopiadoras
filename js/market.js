const listaDeProdutos = [
    {
        nome: "Brother MFC-9330CDW",
        preco: 2500.00,
        descricao: "Multifuncional semi-nova, laser, Colorida, wif-fi",
        imagemSrc: "/images/imp1.jpg" 
    },
    {
        nome: "Brother Mfc-9460CDN",
        preco: 2000.00,
        descricao: "Multifuncional semi-nova, laser, Colorida, wif-fi",
        imagemSrc: "/images/imp2.jpg"
    },
    {
        nome: "HP LaserJet Color CP1215",
        preco: 800.00,
        descricao: "Impressora semi-nova, laser, Colorida, wif-fi",
        imagemSrc: "/images/imp3.jpg"
    },
    {
        nome: "Brother DCP-8157DN",
        preco: 1000.00,
        descricao: "Multifuncional semi-nova, laser, wif-fi",
        imagemSrc: "/images/imp4.jpg"
    },
];

function renderItens(listPrinters) {
    const htmlProducts = listPrinters.map(product => {
        const precoFormatado = product.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        return `<div class="printer">
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

    // 2. Usando querySelector para pegar o container com a CLASSE "printers"
    const printersContainer = document.querySelector(".printers");

    if (printersContainer) {
        // Converte o array de strings HTML em uma única string e insere no DOM
        printersContainer.innerHTML = htmlProducts.join('');
    } else {
        console.error("Elemento com a classe '.printers' não encontrado!");
    }
}

// 3. Corrigido: Chamando a função com o nome da variável correta
renderItens(listaDeProdutos);
