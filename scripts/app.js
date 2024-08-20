import { productos } from './products.js';

document.addEventListener('DOMContentLoaded', function() {
// Importamos el array de productos desde otro módulo

// Array para almacenar los productos del carrito
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(productoId) {
    // Buscamos si el producto ya está en el carrito
    const productoEnCarrito = carrito.find(prod => prod.id === productoId);

    if (productoEnCarrito) {
        // Si ya está en el carrito, incrementamos la cantidad
        productoEnCarrito.cantidad++;
    } else {
        // Si no está, lo agregamos al carrito con cantidad 1
        const producto = productos.find(prod => prod.id === productoId);
        carrito.push({ ...producto, cantidad: 1 });
    }

    // Actualizamos el ícono del carrito para mostrar el círculo rojo
    actualizarCarritoIcono();
}

// Función para actualizar el ícono del carrito
function actualizarCarritoIcono() {
    const carritoIcon = document.querySelector('.material-symbols-outlined');
    if (carrito.length > 0) {
        carritoIcon.classList.add('con-productos'); // Añade una clase especial para el círculo rojo
    } else {
        carritoIcon.classList.remove('con-productos');
    }
}

// Función para crear los elementos HTML de cada producto
function renderProducto(producto) {
    // Creamos el contenedor del producto
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.id = producto.id;

    // Creamos el h2 con el nombre del producto
    const h2 = document.createElement('h2');
    h2.textContent = producto.name;

    // Creamos la imagen del producto
    const img = document.createElement('img');
    img.src = producto.image;
    img.alt = producto.name;
    img.className = 'imageProd';

    // Creamos el h3 con el precio (si existe)
    const h3 = document.createElement('h3');
    h3.textContent = producto.precio ? `$${producto.precio}` : '';

    // Creamos el botón
    const button = document.createElement('button');
    button.textContent = '+';
    // Evento para agregar al carrito
    button.addEventListener('click', () => agregarAlCarrito(producto.id));

    // Creamos el párrafo con la descripción (si existe)
    const p = document.createElement('p');
    p.textContent = producto.description || '';

    // Creamos un div para el footer del producto
    const footerDiv = document.createElement('div');
    footerDiv.className = 'footerProd';

    // Añadimos todos los elementos al contenedor del producto
    productDiv.appendChild(h2);
    productDiv.appendChild(img);
    productDiv.appendChild(h3);
    productDiv.appendChild(button);
    productDiv.appendChild(p);
    productDiv.appendChild(footerDiv);

    // Retornamos el div completo
    return productDiv;
}

// Función para renderizar todos los productos
function renderProductos(productos) {
    const productosContainer = document.getElementById('productosContainer');

    productos.forEach(producto => {
        const productoHTML = renderProducto(producto);
        productosContainer.appendChild(productoHTML);
    });
}

// Función para navegar a la página del carrito
function irAlCarrito() {
    if (carrito.length > 0) {
        window.location.href = 'templates/car.html';
    }
}

// Añadir evento al ícono del carrito para redirigir al carrito
document.querySelector('.material-symbols-outlined').addEventListener('click', irAlCarrito);

// Llamamos a la función para renderizar los productos
renderProductos(productos);


});
export { carrito };  // Exportamos el carrito para usarlo en la página del carrito