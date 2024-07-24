document.addEventListener('DOMContentLoaded', function () {
    let productosEnCarrito = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];
    const carritoProductos = document.getElementById('carrito__menu__productos');
    const carritoTotal = document.getElementById('carrito__total');
    const carritoComprar = document.getElementById('carrito__comprar');
    let total = 0;

    function actualizarCarrito() {
        carritoProductos.innerHTML = '';
        total = 0;

        productosEnCarrito.forEach((producto, index) => {
            total += producto.precio;

            const li = document.createElement('li');
            li.classList.add('carrito__producto');

            const img = document.createElement('img');
            img.src = producto.imagen;
            img.classList.add('carrito__producto__imagen');

            const span = document.createElement('span');
            span.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;

            const botonEliminar = document.createElement('button');
            botonEliminar.classList.add('boton__eliminar');
            const iconoTrash = document.createElement('i');
            iconoTrash.classList.add('fas', 'fa-trash');

            botonEliminar.appendChild(iconoTrash);

            botonEliminar.onclick = function () {
                productosEnCarrito.splice(index, 1);
                actualizarCarrito();
                localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
            };

            li.appendChild(img);
            li.appendChild(span);
            li.appendChild(botonEliminar);
            carritoProductos.appendChild(li);
        });

        carritoTotal.textContent = `Total: $${total.toFixed(2)}`;
    }

    carritoComprar.onclick = function () {
        if (productosEnCarrito.length > 0) {
            Swal.fire({
                title: "Compra realizada",
                text: `Has comprado ${productosEnCarrito.length} productos por un total de $${total.toFixed(2)}`,
                icon: "success"
            });
            productosEnCarrito = [];
            localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
            actualizarCarrito();
        } else {
            Swal.fire({
                title: "Carrito vacío",
                text: "No tienes productos en el carrito para comprar",
                icon: "error"
            });
        }
    };

    actualizarCarrito();
});