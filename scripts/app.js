import { productos } from './products.js';

let carrito = [];

function renderCardProduct(producto) {
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
    //button.id = producto.id;
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

//document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;

 

function agregarAlCarrito(productoId) {
    // Buscamos si el producto ya está en el carrito
    const productoEnCarrito = carrito.find(prod => prod.id === productoId);

    if (productoEnCarrito) {
        productoEnCarrito.quantity++;
        console.log("producto" + productoId + "sumado")
    } else {
        // Si no está, lo agregamos al carrito con cantidad 1
        const producto = productos.find(prod => prod.id === productoId);
        carrito.push({ ...producto, quantity: 1});
    
    }

    actualizarCarritoIcono();
}


function actualizarCarritoIcono() {
    const carritoIcon = document.querySelector('.material-symbols-outlined');
    if (carrito.length > 0) {
        carritoIcon.classList.add('con-productos'); // Añade una clase especial para el círculo rojo
    } else {
        carritoIcon.classList.remove('con-productos');
    }
}

// Función para crear los elementos HTML de cada producto


// Función para renderizar todos los productos
function renderAllProducts(productos) {
    const productosContainer = document.getElementById('productosContainer');

    productos.forEach(producto => {
        const productoHTML = renderCardProduct(producto);
        productosContainer.appendChild(productoHTML);
    });
}

// Función para navegar a la página del carrito
function irAlCarrito() {
    if (carrito.length > 0) {
        window.location.href = 'car.html';
    }
} 

    if (path.includes('index.html')) {
        renderAllProducts(productos);
        const carritoIcon = document.querySelector('.material-symbols-outlined');
        if (carritoIcon) {
        carritoIcon.addEventListener('click', irAlCarrito);
    } else {
        console.error('No se encontró el ícono del carrito.');
    }

    }


//});
export { carrito, renderCardProduct };  // Exportamos el carrito para usarlo en la página del carrito

function prueba (){
    if (carrito.length >0){
    console.log (carrito);}
    else {console.log('no hay nada pero sirve')}
    }

prueba();