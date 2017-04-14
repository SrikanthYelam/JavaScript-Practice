//Callback functions

function Sandwich(param1, param2, callback) {
  alert("Started eating sandwich. It has " + param1 + "," + param2);
  if(callback && typeof(callback) === "function")
  callback();
}

Sandwich("ham", "cheese", function() {
  alert("Finished eating my sandwich");
});

Sandwich("pork", "cheese");

Sandwich("chicken", "cheese", "NotFunction");
