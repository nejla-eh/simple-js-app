const pokemonRepository = (function () {
    const pokemonList = [
        { name: 'Bulbasaur', height: 0.7, type: ['grass', 'poison'] },
        { name: 'Ivysaur', height: 1, type: ['grass', 'poison'] },
        { name: 'Venusaur', height: 2, type: ['grass', 'poison'] },
        { name: 'Charmander', height: 0.6, type: ['fire'] },
        { name: 'Charmeleon', height: 1.1, type: ['fire'] },
        { name: 'Charizard', height: 1.7, type: ['fire', 'flying'] },
        { name: 'Squirtle', height: 0.5, type: ['water'] }
    ];

    function add(pokemon) {
        const fields = Object.keys(pokemon);
        if (!(fields.includes('name') && fields.includes('height') && fields.includes('type'))) {
            console.log('Not all fields are present, please add all!');
            return;
        }

        if (typeof pokemon.name !== 'string') {
            console.log('Pokemon name needs to be a string!');
            return;
        }

        if (typeof pokemon.height !== 'number' && pokemon.height > 0) {
            console.log('Pokemon height needs to be a positive number!');
            return;
        }

        if (typeof pokemon.type !== 'object') {
            console.log('Pokemon type needs an array!');
            return;
        }

        if (pokemon.type.length === 0) {
            console.log('Pokemon type needs to be a non empty array!');
            return;
        }

        const nonStringType = pokemon.type.find(function (t) {
            if (typeof t !== 'string') {
                return t;
            }
        });

        if (nonStringType) {
            console.log('Atleast one pokemon type is not a string. All pokemon types need to be strings!');
            return;
        }

        pokemonList.push(pokemon);
    };

    function getAll() {
        return pokemonList;
    };

    function filter(name) {
        return pokemonList.filter(function (pokemon) {
            return pokemon.name === name;
        });
    };

    return { add, getAll, filter };
})();

// These pokemons should not be added, should throw errors
pokemonRepository.add({ name: 'Pikachu' });
pokemonRepository.add({ name: 23 });
pokemonRepository.add({ name: 'Pikachu1', height: 0.4, type: [] });
pokemonRepository.add({ name: 'Pikachu', height: 0.4, type: [23, 'flying'] });

// These pokemons should be added
pokemonRepository.add({ name: 'Pikachu', height: 0.4, type: ['electric'] });
pokemonRepository.add({ name: 'Snorflax', height: 2.1, type: ['normal'] });

console.log(pokemonRepository.filter('Bulbasaur'));
console.log(pokemonRepository.filter('Bulbasaur1'));

console.log(pokemonRepository.getAll());

// Rendering DOM
document.write('<div class="pokemonList">');
pokemonRepository.getAll().forEach(function (pokemon) {
    if (pokemon.height > 1.7) {
        document.write('<div class="pokemon--big">');
        document.write(pokemon.name + " (height: " + pokemon.height + ")");
        document.write(' - Wow, that\'s big!');
    } else {
        document.write('<div class="pokemon">');
        document.write(pokemon.name + " (height: " + pokemon.height + ")");
    }
    document.write('</div>');
})
document.write('</div>');