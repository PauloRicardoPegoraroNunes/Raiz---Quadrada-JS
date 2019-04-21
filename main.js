function calc() {
    const x = document.getElementById('valor').value;
    const soma = Math.sqrt(x)
    document.getElementById('visor').value = soma;
}

function limpa() {
    const x = document.getElementById('visor').value;
    document.getElementById('visor').value = '';
    const y = document.getElementById('valor').value;
    document.getElementById('valor').value = '';

}
