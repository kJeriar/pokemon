$(document).ready(function() {
    // Llama a la api con el nombre de todos los pokemon
    $.get('http://pokeapi.co/api/v2/pokedex/1/', function(result) {
        console.log(result);
        result.pokemon_entries.forEach(function(pokemon, i) {


        });


       
    });
});



