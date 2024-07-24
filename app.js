// Register
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

// Add to shopping cart 

async function addShoppingCart() {
    Swal.fire({
        title: "Agregado al carrito",
        icon: "success"
    });
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


// transicion de imagenes home
document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "images/books/sherlockHolmes.jpg",
        "images/books/theLordRings.jpg",
        "images/books/leyesIndispensables.jpg",
        "images/books/sexoAmorNoviazgo.jpg",
        "images/books/cienAniosDeSoledad.jpg",
        "images/books/harryPotter.jpg",
        "images/books/power.jpg"
    ];

    const titles = [
        "Las Aventuras de Sherlock Holmes",
        "El Señor de los Anillos: La Comunidad del Anillo",
        "Las 15 Leyes Indispensables del Crecimiento",
        "Amor, Sexo y Noviazgo",
        "Cien Años de Soledad",
        "Harry Potter: El Legado Maldito",
        "Las 48 Leyes del Poder"
    ];

    const authors = [
        "Arthur Conan Doyle",
        "J.R.R. Tolkien",
        "John C. Maxwell",
        "Sixto Porras",
        "Gabriel García Márquez",
        "J.K. Rowling",
        "Robert Greene"
    ];

    const prices = [
        "$50.00",
        "$35.00",
        "$45.00",
        "$50.00",
        "$50.00",
        "$45.00",
        "$60.00"

    ];

    const descriptions = [
        "Las Aventuras de Sherlock Holmes es una colección de doce relatos cortos escritos por Arthur Conan Doyle, que presenta las ingeniosas y cautivadoras historias del detective más famoso del mundo, Sherlock Holmes, y su fiel amigo, el Dr. John Watson.",
        "El Señor de los Anillos es una novela de fantasía escrita por el filólogo y escritor británico J. R. R. Tolkien.",
        "Las 15 Leyes Indispensables del Crecimiento es un libro de John C. Maxwell que define las leyes esenciales para el crecimiento que usted debe seguir.",
        "Amor, Sexo y Noviazgo es un libro de Sixto Porras que aborda las relaciones amorosas desde una perspectiva cristiana.",
        "Cien Años de Soledad es una novela escrita por el colombiano Gabriel García Márquez, considerada una obra maestra de la literatura hispanoamericana y universal.",
        "Harry Potter es una serie de novelas fantásticas escritas por la autora británica J. K. Rowling.",
        "Las 48 Leyes del Poder es un libro de Robert Greene que nos enseña sobre la estrategia, el poder, la seducción, la maestría de nuestras habilidades y las motivaciones psicológicas, sociales y culturales que guían nuestras decisiones cada día."
    ];

    let currentImageIndex = 0;
    const imageContainer = document.querySelector(".image__container");
    let imgElement = document.createElement("img");
    imgElement.src = images[currentImageIndex];
    imgElement.classList.add("home__contenido__imagen", "active");
    imageContainer.appendChild(imgElement);

    const titleElement = document.querySelector(".home__conteindo__titulo");
    const authorElement = document.querySelector(".home__contenido__autor");
    const descriptionTitleElement = document.querySelector(".home__contenido__titulo__descripcion");
    const descriptionElement = document.querySelector(".home__contenido__descripcion");

    titleElement.textContent = titles[currentImageIndex];
    authorElement.textContent = `Autor: ${authors[currentImageIndex]}`;
    descriptionTitleElement.textContent = titles[currentImageIndex];
    descriptionElement.textContent = descriptions[currentImageIndex];

    // Inicializa los textos con la clase fade y active
    titleElement.classList.add("fade", "active");
    authorElement.classList.add("fade", "active");
    descriptionTitleElement.classList.add("fade", "active");
    descriptionElement.classList.add("fade", "active");

    const updateContent = () => {
        titleElement.classList.remove("active");
        authorElement.classList.remove("active");
        descriptionTitleElement.classList.remove("active");
        descriptionElement.classList.remove("active");
        priceElement = document.querySelector(".home__contenido__precio");
        priceElement.textContent = prices[currentImageIndex];

        setTimeout(() => {
            titleElement.textContent = titles[currentImageIndex];
            authorElement.textContent = `Autor: ${authors[currentImageIndex]}`;
            descriptionTitleElement.textContent = titles[currentImageIndex];
            descriptionElement.textContent = descriptions[currentImageIndex];

            titleElement.classList.add("active");
            authorElement.classList.add("active");
            descriptionTitleElement.classList.add("active");
            descriptionElement.classList.add("active");
        }, 50); // Sincronizar con el retraso de la clase active
    };

    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        const newImgElement = document.createElement("img");
        newImgElement.src = images[currentImageIndex];
        newImgElement.classList.add("home__contenido__imagen");
        imageContainer.appendChild(newImgElement);

        setTimeout(() => {
            newImgElement.classList.add("active");
            imgElement.classList.remove("active");

            setTimeout(() => {
                imageContainer.removeChild(imgElement);
                imgElement = newImgElement;
            }, 1000); // Duración de la transición en ms
        }, 50); // Pequeño retraso para asegurar que la clase active se añade correctamente

        updateContent();
    }, 5000); // Cambia la imagen cada 5 segundos
});



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