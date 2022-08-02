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

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    function buttonEvent(buttonEl, pokemon) {
        buttonEl.addEventListener('click', function () {
            showDetails(pokemon);
        })
    }

    function addListItem(pokemon) {
        const pokemonList = document.querySelector('.pokemon-list');
        const listItem = document.createElement('li');
        const button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('my-button');
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        buttonEvent(button, pokemon);
    }


    return { getAll, addListItem };
})();

// console.log(pokemonRepository.getAll());

// Rendering DOM
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});