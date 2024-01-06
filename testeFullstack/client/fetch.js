// função para validar o CPF
function verificarCPF() {
    // Pega o valor do campo de entrada
    const cpf = document.getElementById('cpf').value;
    const cpfStatus = document.getElementById('cpfStatus');
    // Faz uma requisição GET para o servidor
    fetch(`http://localhost:3000/validador-cpf/${cpf}`)
        .then(response => response.json())
        .then(data => {
            // Atualiza a página com o status do CPF
            if (data.isValid) {
                cpfStatus.innerText = 'CPF válido';
            } else {
                cpfStatus.innerText = 'CPF inválido';
            }
        })
        // Caso ocorra um erro, exibe no console
        .catch(error => {
            console.error('Erro:', error);
            cpfStatus.innerText = 'Erro ao validar o CPF';
        });
}