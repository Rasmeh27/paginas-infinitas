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


// Compra de libros actualizando informacion 