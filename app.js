async function alertMessege() {
    const { value: formValues } = await Swal.fire({
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

async function alertLogin() {
    const { value: formValues } = await Swal.fire({
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