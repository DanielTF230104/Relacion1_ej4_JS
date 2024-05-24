function calcularLetraDNI() {
    const dni = document.getElementById('dni').value.trim();

    if (!/^\d{7,8}$/.test(dni)) {
        alert('Por favor, ingrese un número de DNI válido de 7 u 8 dígitos.');
        return;
    }

    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const indice = parseInt(dni) % 23;
    const letra = letras.charAt(indice);

    document.getElementById('resultado').textContent = `La letra de su DNI es: ${letra}`;
}