import {getProdutos} from '../data/requestProducts.js'

document.addEventListener('DOMContentLoaded', async () => {
    
    const containerPrinter = document.querySelector('.container-printer');
    const idDiv = localStorage.getItem('idDiv');
    const listaDeProdutos = await getProdutos();
    const produto = listaDeProdutos[idDiv];

    function loadHeadFeatures(headFeatures) {
        return headFeatures
            .map(item => `<li>${item}</li>`)
            .join("");
    }

    function loadFeatures() {

        console.log(produto.feature);
        

        return `<div class="feature">
                <div class="btn-features">
                    <p>IMPRESSÃO</p>
                    <img src="./images/arrow.png" alt="">
                </div>
                <table>
                    <tbody>

                    </tbody>
                </table>
            </div>`
    }

    if (containerPrinter && produto) {
        containerPrinter.innerHTML = `
        <div class="container-head">
            <img src="${produto.imagemSrc}" alt="">
            <div>
                <h1>${produto.nome}</h1>
                <h2>${produto.descricao}</h2>
                <ul>
                    ${loadHeadFeatures(produto.headFeatures)}
                </ul>
                <a href="https://wa.me/5532984195001?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20loca%C3%A7%C3%A3o!">
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
});
