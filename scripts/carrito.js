import { carrito, renderCardProduct, } from './app.js';


document.addEventListener('DOMContentLoaded', function() {

    function renderCarrito() {
        console.log('funciona');
        const carritoContainer = document.getElementById('carritoContainer');
        carritoContainer.innerHTML = '';
    
        carrito.forEach(producto => {
            const productoHTML = renderCardProduct(producto);
            carritoContainer.appendChild(productoHTML);
        });
    }

// Función para actualizar la cantidad de un producto en el carrito
function actualizarCantidad(productoId, nuevaCantidad) {
    const producto = carrito.find(prod => prod.id === productoId);
    if (producto) {
        producto.cantidad = parseInt(nuevaCantidad);
    }
}

// Renderizar el carrito al cargar la página
renderCarrito();
})