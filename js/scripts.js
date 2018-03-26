$(document).ready(function(){
  $("form#fav-things").submit(function(event){
    event.preventDefault();

    var name = $("input#name").val();
    var favoriteFood = $("input#favFood").val();
    var favoriteColor = $("input#favColor").val();
    var favoriteAnimal = $("input#favAnimal").val();
    debugger;
    var results = [name, favoriteFood, favoriteColor, favoriteAnimal];

    // results.toString();
    $("#user-output").text(results);

  });
});
