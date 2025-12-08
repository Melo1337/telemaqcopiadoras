import { listaDeProdutos } from '../data/products.js';

document.addEventListener('DOMContentLoaded', (event) => {

    const containerPrinter = document.querySelector('.container-printer');
    let idDiv = localStorage.getItem('idDiv')

    function loadHeadFeatures() {
        const head = listaDeProdutos[idDiv].headFeatures;

        return head
            .map(item => `<li>${item}</li>`)
            .join("");
    }

    if (containerPrinter) {
        containerPrinter.innerHTML = `
        <div class="container-head">
            <img src="${listaDeProdutos[idDiv].imagemSrc}" alt="" srcset="">
            <div>
                <h1>${listaDeProdutos[idDiv].nome}</h1>
                <h2>${listaDeProdutos[idDiv].descricao}</h2>
                <ul>
                    ${loadHeadFeatures()}
                </ul>
                <a
                    href="https://wa.me/5532984195001?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20loca%C3%A7%C3%A3o!">
                    <div class="btn whatsapp">
                        <img src="./images/whatsapp.png" alt="whatsapp-icon" srcset="">
                        <h4>Solicitar Orçamento</h4>
                    </div>
                </a>
            </div>
        </div>
        <div class="container-main">
            <div class="feature1">
                <div class="btn-features">
                    <p>IMPRESSÃO</p>
                    <img src="./images/arrow.png" alt="" srcset="">
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th>Padrão de impressão frente e verso</th>
                            <td>Sim</td>
                        </tr>
                        <tr>
                            <th>Velocidade de impressão em preto A4 (max. ppm)</th>
                            <td>40</td>
                        </tr>
                        <tr>
                            <th>Tipo de consumível</th>
                            <td>Cartucho de toner e unidade de cilindro</td>
                        </tr>
                        <tr>
                            <th>Resolução de impressão (dpi)</th>
                            <td>1200 x 1200 dpi</td>
                        </tr>
                        <tr>
                            <th>Tecnologia de impressão</th>
                            <td>Monocromática</td>
                        </tr>
                        <tr>
                            <th>Compatibilidade com o driver de impressora</th>
                            <td>Windows, Mac OS, Linux</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>`;
    }
});
