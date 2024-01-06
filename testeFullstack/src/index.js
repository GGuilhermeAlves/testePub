// 1° npm install no console para instalar as dependências
// 2° Iniciar este código primeiro para iniciar o servidor
// 3° Iniciar o index.html para iniciar o cliente

const express = require('express');
const validarCPF = require('validar-cpf');
const cors = require('cors');
// Importa o módulo de validação de CPF, CORS e o Express
// Cria uma instância do Express
const app = express();
const port = 3000;
// Define a porta que o servidor irá rodar no caso 3000

// Habilita o CORS
app.use(cors());

// Cria uma rota para validar o CPF
app.get('/validador-cpf/:cpf', (req, res) => {
    const cpf = req.params.cpf;
    const isValid = validarCPF(cpf);
    res.json({ cpf: cpf, isValid: isValid });
});

app.listen(port, () => console.log(`Validador de CPF rodando`));

