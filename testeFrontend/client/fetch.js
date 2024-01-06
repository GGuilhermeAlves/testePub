function letraMaiuscula(string) {
    // Retorna a string com a primeira letra em maiúsculo
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function fetchPokemon() {
    // Faz uma busca na API do Pokémon
    const pokemonName = document.getElementById('pokemon-input').value.toLowerCase();
    let url;
    if (pokemonName === '') {
        // Se o campo de entrada estiver vazio, busca um Pokémon aleatório
        const randomId = Math.floor(Math.random() * 920) + 1; // Gera um número aleatório entre 1 e 898
        url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
    } else {
        // Se o campo de entrada não estiver vazio, busca o Pokémon pelo nome
        url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    }
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Cria um objeto com as informações do Pokémon
            const pokemon = {
                name: letraMaiuscula(data.name),
                image: data.sprites.other['showdown'].front_default,
                baseExperience: data.base_experience,
                moves: data.moves.map(move => move.move.name),
                weight: data.weight / 10, // Converte para quilogramas
                height: data.height / 10 // Converte para metros
            };
            // Atualiza a página com as informações do Pokémon
            document.getElementById('pokemon-image').src = pokemon.image;
            document.getElementById('pokemon-name').textContent = pokemon.name;
            document.getElementById('pokemon-base-experience').textContent = 'Experiência base: ' + pokemon.baseExperience;
            document.getElementById('pokemon-moves').textContent = 'Movimentos: ' + pokemon.moves.join(', ');
            document.getElementById('pokemon-weight').textContent = 'Peso: ' + pokemon.weight + ' kg'; // Adiciona ' kg' ao final
            document.getElementById('pokemon-height').textContent = 'Altura: ' + pokemon.height + ' m'; // Adiciona ' m' ao final
            document.getElementById('pokemon-info').style.display = 'block';
        })
        .catch(error => {
            // Caso ocorra um erro, exibe no console
            console.error('Ocorreu um erro:', error);
        });
}

// Quando a página é carregada, seleciona um pokémon aleatório
document.addEventListener('DOMContentLoaded', (event) => {
    fetchPokemon();
});