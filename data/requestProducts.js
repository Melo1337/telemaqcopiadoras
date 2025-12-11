export async function getProdutos() {
        const response = await fetch('/data/products.json');
        return await response.json();
}