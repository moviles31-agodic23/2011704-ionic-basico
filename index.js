const lista = document.getElementById('lista');
const total = document.getElementById('total');

function calcularTotal() {
    const articuloInput = document.getElementById('articulo');
    const precioInput = document.getElementById('precio');

    const articulo = articuloInput.value;
    const precio = parseFloat(precioInput.value);

    if (articulo && !isNaN(precio)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${articulo}: $${precio.toFixed(2)}`;
        lista.appendChild(listItem);
        articuloInput.value = '';
        precioInput.value = '';

        const currentTotal = parseInt(total.textContent);
        total.textContent = currentTotal + precio;
    }
}