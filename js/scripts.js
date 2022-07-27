const pokemonList = [
    { name: 'Bulbasaur', height: 0.7, type: ['grass', 'poison'] },
    { name: 'Ivysaur', height: 1, type: ['grass', 'poison'] },
    { name: 'Venusaur', height: 2, type: ['grass', 'poison'] },
    { name: 'Charmander', height: 0.6, type: ['fire'] },
    { name: 'Charmeleon', height: 1.1, type: ['fire'] },
    { name: 'Charizard', height: 1.7, type: ['fire', 'flying'] },
    { name: 'Squirtle', height: 0.5, type: ['water'] }
];

document.write('<div class="pokemonList">');
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 1.7) {
        document.write('<div class="pokemon--big">');
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")");
        document.write(' - Wow, that\'s big!');
    } else {
        document.write('<div class="pokemon">');
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")");
    }
    document.write('</div>');
}
document.write('</div>');
