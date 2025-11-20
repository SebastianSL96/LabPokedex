const url = 'https://pokeapi.co/api/v2/pokemon/pikachu';


fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let pokemon = {}

        pokemon.name = data.name;
        pokemon.image = data.sprites.front_default;

        localStorage.setItem('pikachu', JSON.stringify(pokemon));
    })
    .catch((error) => {
        return `${error}, Pokemon no encontrado!!`;
    })