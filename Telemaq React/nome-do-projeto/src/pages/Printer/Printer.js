import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './PrinterDetails.css';
import listaProdutos from '../../data/json/products.json'
import { useLocation } from "react-router-dom";

function Printer() {

    const location = useLocation();
    const IndexClick = location.state || {};

    const itemDetails = listaProdutos[IndexClick.id]

    function loadHeadFeatures(headFeatures) {
        return headFeatures.map(item => <li>{item}</li>)
    }

    function loadTable(detalhe) {
        detalhe.map(([titulo, valor]) => {
            return <tr>
                      <th>{titulo}</th>
                      <td>{valor}</td>
                    </tr>
        })
    }

    function loadFeatures() {
        const featuresHTML = Object.entries(itemDetails.feature).map(([tituloFeature, detalhe]) => {
            return <div className="feature">
                <div className="btn-features">
                    <p>{tituloFeature}</p>
                </div>
                <table>
                    <tbody>
                        {loadTable(detalhe)}
                    </tbody>
                </table>
            </div>
        });

        return featuresHTML
    }

    return (
        <>
            <Header />
            <div className="container-printer">
                <div><img className="close" src={'/img/close.png'} alt="" /></div>
                <div className="container-head">
                    <img src={`/img/${itemDetails.imagemSrc}.jpg`} alt="" />
                    <div className="head-details">
                        <h1>{itemDetails.nome}</h1>
                        <ul>
                            {loadHeadFeatures(itemDetails.headFeatures)}
                        </ul>
                        <h2>Valor: R$ {itemDetails.preco},00</h2>
                        <a href="https://wa.me/5532984195001?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20impressora%20{itemDetails.nome}!">
                            <div className="btn whatsapp">
                                <img src="./img/whatsapp.png" alt="whatsapp-icon" />
                                <h4>Comprar via whatsapp</h4>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="container-main">
                    {loadFeatures()}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Printer;
