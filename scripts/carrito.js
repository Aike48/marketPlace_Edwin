import { carrito } from './app.js';

// Función para renderizar el carrito
function renderCarrito() {
    console.log('funciona');
    const carritoContainer = document.getElementById('carritoContainer');
    carritoContainer.innerHTML = '';

    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.className = 'producto-carrito';

        const h2 = document.createElement('h2');
        h2.textContent = producto.name;

        const img = document.createElement('img');
        img.src = producto.image;
        img.alt = producto.name;
        img.className = 'imageProd';

        const inputCantidad = document.createElement('input');
        inputCantidad.type = 'number';
        inputCantidad.value = producto.cantidad;
        inputCantidad.min = 1;
        inputCantidad.addEventListener('input', (e) => actualizarCantidad(producto.id, e.target.value));

        div.appendChild(h2);
        div.appendChild(img);
        div.appendChild(inputCantidad);

        carritoContainer.appendChild(div);
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