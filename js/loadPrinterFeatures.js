document.addEventListener('DOMContentLoaded', (event) => {
    
    const containerPrinter = document.querySelector('.container-printer');
    const userId = localStorage.getItem('idDiv');

    if (containerPrinter) {
        containerPrinter.innerHTML = `
            <h2>Olá, Mundo!</h2>
            <p>Este parágrafo e o título foram <strong>adicionados</strong> via JavaScript usando <code>innerHTML</code>.</p>
            <ul>
                ${userId}
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
        `;
    }
});
