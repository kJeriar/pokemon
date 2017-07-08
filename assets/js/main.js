$(document).ready(function() {
    // Llama a la api con el nombre de todos los pokemon
    $.get('http://pokeapi.co/api/v2/pokedex/1/', function(result) {
        console.log(result);
        result.pokemon_entries.forEach(function(pokemon, i) {


            var img=i+1;
            $(".pokemon").append("<div class='elemento'><a href='#' id='modal" + numero + "'><img src='http://pokeapi.co/media/img/" + numero + ".png'>" + element.pokemon_species.name + "</a></div>")
        $("#modal" + numero).click(function() {
        console.log("existe" + numero);
        $('#myModal').modal('show')


        });


       
    });
});



