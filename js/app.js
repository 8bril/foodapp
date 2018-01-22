var data = {
    "Mexicana": {
      "menu": [
            { "nombre": "Tacos", "precio": 55 },
            { "nombre": "Mole", "precio": 85 }
          ]
    },
    "Italiana": {
      "menu": [
            { "nombre": "pizza", "precio": 55 },
            { "nombre": "pasta", "precio": 85 }
          ]
        },
    "China": {
      "menu": [
            { "nombre": "tofu", "precio": 55 },
            { "nombre": "chow mein", "precio": 85 }
          ]
        },
};


var foodOption = function(event){

  var index = (event.target.selectedIndex);
  console.log(index);

  var food = event.target[index].dataset.food;
  console.log(food);

  getFood(food);

}

var getFood = function(food){

  var dataFood = data[food]; 
  console.log(dataFood);
  
  for( var i = 0; i < dataFood.length; i++){
    var menu = dataFood[i].menu;
    console.log(menu);
  }
};





$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(500);
   }, 2000);

   /*$("select").on('change', function(){
    console.log($(this).val());
    console.log($(this).find('option:selected').attr('data-attribute')); 
});*/

});


