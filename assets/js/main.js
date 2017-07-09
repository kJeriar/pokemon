$(document).ready(function() {
   // Llama a todos los pokemones
   $.get('http://pokeapi.co/api/v2/pokedex/1/', function(resultado) {
       console.log(resultado);
       resultado.pokemon_entries.forEach(function(pokemon) {
           $('.pokemon').append('<div>' + pokemon.pokemon_species.name + '</div>')
       });

     
   });
});



//x.pokemon_entries.forEach(function(pokemon, i){
//var numero = i + 1;
//$(".pokemon").append("<div class='elemento'><a href='#' id='modal" + numero + "'><img src='http://pokeapi.co/media/img/" + numero + ".png'>" + element.pokemon_species.name + "</a></div>")
//$("#modal" + numero).click(function() {
//$('#myModal').modal('show')
//