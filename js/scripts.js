const pokemonRepository = (function () {
    const pokemonList = [];
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    const loadingMessageEl = document.getElementById('loading-message');

    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log('pokemon is not correct');
        }
    }

    function getAll() {
        return pokemonList;
    };

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            console.log(pokemon);
        });
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

    function loadList() {
        showLoadingMessage();
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (pokemon) {
                add({
                    name: pokemon.name[0].toUpperCase() + pokemon.name.slice(1),
                    detailsUrl: pokemon.url
                });
            });
            hideLoadingMessage();
        }).catch(function (e) {
            console.error(e);
            hideLoadingMessage();
        })
    }

    function loadDetails(pokemon) {
        showLoadingMessage();
        return fetch(pokemon.detailsUrl).then(function (response) {
            return response.json();
        }).then(function (details) {
            pokemon.imageUrl = details.sprites.front_default;
            pokemon.height = details.height;
            pokemon.types = details.types;
            hideLoadingMessage();
        }).catch(function (e) {
            console.error(e);
            hideLoadingMessage();
        });
    }

    function showLoadingMessage() {
        loadingMessageEl.innerText = "Loading...";
    };

    function hideLoadingMessage() {
        loadingMessageEl.innerText = "";
    };

    return { getAll, addListItem, loadList, loadDetails };
})();

// Rendering DOM
pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});