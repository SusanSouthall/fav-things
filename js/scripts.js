$(document).ready(function(){
  $("form#fav-things").submit(function(event){
    event.preventDefault();

    var name = $("input#name").val();
    var favoriteFood = $("input#favFood").val();
    var favoriteDrink = $("input#favDrink").val();
    var favoriteColor = $("input#favColor").val();
    var favoriteAnimal = $("input#favAnimal").val();
    debugger;
    var results = [name, favoriteFood, favoriteDrink, favoriteColor, favoriteAnimal];

    var resultsCloned = results.slice().reverse().join(", ");

    var newArray = [];
    var resultsClonedAgain = results.slice(0,3).join(", ");
    newArray.push(resultsClonedAgain);
    results = results.join(", ");

    //turns our array into 2 elements

    // results.toString();
    $("#user-output").text(results);
    $("#user-output-reversed").text(resultsCloned);
    $("ul#user-output-three-elements").append("<li>" + newArray + "</li>"); //resultsClonedArray

  });
});
