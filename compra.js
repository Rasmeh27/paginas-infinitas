async function alertMessege() {
    const {
        value: formValues
    } = await Swal.fire({
        title: 'Registro',
        html: `
            <div style="text-align: left; width: 100%;">
                <label for="swal-input1">Nombre:</label>
                <input id="swal-input1" class="swal2-input">
                <label for="swal-input2">Correo Electrónico:</label>
                <input id="swal-input2" class="swal2-input" type="email">
                <label for="swal-input3">Direccion postal:</label>
                <input id="swal-input3" class="swal2-input" type="number">
            </div>
        `,
        focusConfirm: false,
        confirmButtonText: 'Registrar',
        customClass: {
            confirmButton: 'custom-confirm'
        },
        preConfirm: () => {
            return [
                document.getElementById('swal-input1').value,
                document.getElementById('swal-input2').value
            ];
        }
    });

    if (formValues) {
        Swal.fire(`Nombre: ${formValues[0]}, Correo: ${formValues[1]}`);
    }
}

// Login
async function alertLogin() {
    const {
        value: formValues
    } = await Swal.fire({
        title: 'Iniciar sesion',
        html: `
            <div style="text-align: left; width: 100%;">
                <label for="swal-input1">Nombre:</label>
                <input id="swal-input1" class="swal2-input">
                <label for="swal-input2">Correo Electrónico:</label>
                <input id="swal-input2" class="swal2-input" type="email">
            </div>
        `,
        focusConfirm: false,
        confirmButtonText: 'Iniciar Sesión',
        customClass: {
            confirmButton: 'custom-confirm'
        },
        preConfirm: () => {
            return [
                document.getElementById('swal-input1').value,
                document.getElementById('swal-input2').value
            ];
        }
    });

    if (formValues) {
        Swal.fire(`Nombre: ${formValues[0]}, Correo: ${formValues[1]}`);
    }
}

// Purshase - only example 
async function purshase() {
    Swal.fire({
        title: 'Método de Pago',
        html: `
          <div style="text-align: left; width: 100%;">
            <label for="swal-input1">Nombre del Titular:</label>
            <input id="swal-input1" class="swal2-input" placeholder="Nombre completo">
            <label for="swal-input2">Número de Tarjeta:</label>
            <input id="swal-input2" class="swal2-input" placeholder="XXXX-XXXX-XXXX-XXXX" maxlength="16">
            <label for="swal-input3">Fecha de Vencimiento:</label>
            <input id="swal-input3" class="swal2-input" placeholder="MM/AA" maxlength="5">
            <label for="swal-input4">CVV:</label>
            <input id="swal-input4" class="swal2-input" placeholder="XXX" maxlength="3" type="password">
          </div>
        `,
        focusConfirm: false,
        confirmButtonText: 'Confirmar pago',
        customClass: {
            confirmButton: 'custom-confirm'
        },
        preConfirm: () => {
            return [
                document.getElementById('swal-input1').value,
                document.getElementById('swal-input2').value,
                document.getElementById('swal-input3').value,
                document.getElementById('swal-input4').value
            ];
        }
    }).then((formResult) => {
        if (formResult.value) {
            Swal.fire({
                title: "¿Quieres guardar metodo de pago?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Guardar",
                denyButtonText: `No guardar`
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire("¡Pago procesado!", "", "success");
                } else if (result.isDenied) {
                    Swal.fire("¡Pago procesado! Los cambios no se han guardado", "", "info");
                }
            });
        }
    });
}


// Compra de libros actualizando informacion 
document.addEventListener("DOMContentLoaded", function () {
    const carrito = document.getElementById('carrito');
    const carritoMenu = document.getElementById('carrito__menu');
    const carritoProductos = document.getElementById('carrito__menu__productos');
    const carritoTotal = document.getElementById('carrito__total');
    const carritoComprar = document.getElementById('carrito__comprar');
    let productosEnCarrito = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];
    let total = 0;

    carrito.addEventListener('click', function () {
        carritoMenu.style.display = carritoMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Cerrar ventana
    const botonCerrar = document.getElementById('carrito__cerrar');
    botonCerrar.textContent = 'x';
    botonCerrar.onclick = function () {
        carritoMenu.style.display = 'none';
    };

    window.addShoppingCart = async function (nombre, precio, imagen) {
        const producto = {
            nombre: nombre,
            precio: precio,
            imagen: imagen
        };

        productosEnCarrito.push(producto);
        actualizarCarrito();

        await Swal.fire({
            title: "Agregado al carrito",
            text: `${nombre} ha sido agregado correctamente`,
            icon: "success"
        });
    };

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
            botonEliminar.innerHTML = '<i class="fas fa-trash"></i>';
            botonEliminar.onclick = function () {
                productosEnCarrito.splice(index, 1);
                actualizarCarrito();
            };

            li.appendChild(img);
            li.appendChild(span);
            li.appendChild(botonEliminar);
            carritoProductos.appendChild(li);
        });

        carritoTotal.textContent = `Total: $${total.toFixed(2)}`;
        localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
    }

    // Evento de compra
    carritoComprar.onclick = function () {
        if (productosEnCarrito.length > 0) {
            Swal.fire({
                title: "Compra realizada",
                text: `Has comprado ${productosEnCarrito.length} productos por un total de $${total.toFixed(2)}`,
                icon: "success"
            });
            productosEnCarrito = [];
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