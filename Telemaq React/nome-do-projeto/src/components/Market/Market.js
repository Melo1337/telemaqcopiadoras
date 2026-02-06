import listPrinters from "../../data/json/products.json";
import { Link } from "react-router-dom"; // Não precisa do useNavigate aqui
import './Market.css'

function Market() {
    return (
        <div className="printers">
            {listPrinters.map((product, index) => {
                const precoFormatado = product.preco.toLocaleString("pt-BR", { 
                    style: "currency", 
                    currency: "BRL", 
                });

                return (
                    <div className="printer" id={index}>
                        <Link to={`/PrinterDetails`} state={{ id: index }}>
                            <h3>{product.nome}</h3>
                            <img src={`/img/${product.imagemSrc}.jpg`} alt={product.nome} />
                            <p>{product.descricao}</p>
                            <p><strong>{precoFormatado}</strong></p>
                        </Link>

                        <a href={`https://wa.me/5532984195001?text=Olá! Gostaria de saber mais sobre a impressora ${product.nome} que está anunciada no site!`} target="_blank" rel="noopener noreferrer">
                            <div className="btn whatsapp">
                                <i className="fab fa-whatsapp"></i>
                                <h4>Comprar via Whatsapp</h4>
                            </div>
                        </a>
                    </div>
                );
            })}
        </div>
    );
}

export default Market;
