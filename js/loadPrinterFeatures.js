import { getProdutos } from '../data/requestProducts.js'

document.addEventListener('DOMContentLoaded', async () => {

    const containerPrinter = document.querySelector('.container-printer');
    const idDiv = localStorage.getItem('idDiv');
    const listaDeProdutos = await getProdutos();
    // Use Number() para garantir que idDiv seja tratado como índice numérico, se necessário
    const produto = listaDeProdutos[Number(idDiv)];

    function loadHeadFeatures(headFeatures) {
        return headFeatures
            .map(item => `<li>${item}</li>`)
            .join("");
    }

    // FUNÇÃO loadTable CORRIGIDA:
    function loadTable(detalhe) {
        // Use [titulo, valor] para desestruturar corretamente cada entrada
        const detalheHTML = Object.entries(detalhe).map(([titulo, valor]) => {
            return `<tr>
                      <th>${titulo}</th>
                      <td>${valor}</td>
                    </tr>`;
        });
        // Retorna as linhas completas (<tr>...</tr>)
        return detalheHTML.join('');
    }

    function loadFeatures() {
        const featuresHTML = Object.entries(produto.feature).map(([tituloFeature, detalhe]) => {
            // Nota: Adicione a classe 'active' ou similar a um dos elementos se quiser gerenciar o estado do dropdown via JS/CSS
            return `<div class="feature">
                <div class="btn-features">
                    <p>${tituloFeature.toUpperCase()}</p>
                </div>
                <table>
                    <tbody>
                        ${loadTable(detalhe)}
                    </tbody>
                </table>
            </div>`;
        });

        return featuresHTML.join('');
    }

    if (containerPrinter && produto) {
        containerPrinter.innerHTML = `
        <div><img class="close" src="../images/close.png" alt=""></div>
        <div class="container-head">
            <img src="${produto.imagemSrc}" alt="">
            <div class="head-details">
                <h1>${produto.nome}</h1>
                <ul>
                    ${loadHeadFeatures(produto.headFeatures)}
                </ul>
                <h2>Valor: R$ ${produto.preco},00</h2>
                <a href="https://wa.me/5532984195001?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20impressora%20${produto.nome}!">
                    <div class="btn whatsapp">
                        <img src="./images/whatsapp.png" alt="whatsapp-icon">
                        <h4>Comprar via whatsapp</h4>
                    </div>
                </a>
            </div>
        </div>

        <div class="container-main">
            ${loadFeatures()}
        </div>`;
    }

    function closeFunc() {
        history.back();
    }
    const close = document.querySelector(".close");
    close.addEventListener('click', closeFunc)
});
