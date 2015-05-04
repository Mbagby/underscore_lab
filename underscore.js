// PUT YOUR CODE HERE!!!
//Average
var avr = function(array){
var sum = function(array){
  var arraySum = 0;
  for(var i=0;i<array.length;i++){
    arraySum += array[i];
}
return arraySum;
};
arrayAvr = (sum(array)/array.length);
 return arrayAvr;
};
var test = (avr([2,4,6]));
console.log(test);


//First
var first = function(array1){
  first = array1[0];
  return array1;
};
console.log(first(13,2,3));

//Last
var last = function(array2){
  array2last = array2[2];
  return array2;
};
console.log(last(7,2,3));

//Contained
var contained =function(array1){
  for (i=0; i<array1.length; i++){
    if (array1[i]===4)
      return ("true");
  }
};
var test = (contained([3,4,7]));
console.log(test);


//Max
var max = function(array2){
  var array2max = Math.max(array2);
  return array2max;
};
console.log(max(2,3,4));

//Min
var min = function(array2){
  var array2min = Math.min(array2);
  return array2max;
};
console.log(max(2,3,4));

//Shuffle
//HELP: I do not understand this one!It won't work :(
var shuffle = function(array) {
  var currentOrder = array.length, temporaryValue, randomIndex ;
  while (0 !== currentOrder) {
    randomOrder = Math.floor(Math.random() * currentOrder);
    currentOrder -= 1;
    temporaryValue = array[currentOrder];
    array[currentOrder] = array[randomOrder];
    array[randomOrder] = temporaryValue;
  }
  return array;
};
console.log(shuffle(1,6,7,9,3));

//Index Of
var indexOf =function(array1){
  for (i=0; i<=array1.length; i++)
    if (array1[i]===4)
      return ("true");
    else
      return (array1);
};