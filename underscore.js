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
var shuffle =function(arr){
  for(var i=0; i<50; i++){
   var rand1 =Math.floor(Math.random() * arr.length);
   var rand2 =Math.floor(Math.random() * arr.length);
   var temp = arr[rand2];
   arr[rand2]=arr[rand1];
   arr[rand1]= temp;
   console.log(arr);
}
};
var nums = [1,2,3,4,5,6,7,8];
shuffle(nums);

//Sample: Gives random element from the array
var sample =function(array,numberOfReturns) {
  if (numberOfReturns){
  }
  else {
  var rand = Math.floor(Math.random()* array.length)
  return array[rand];
  }
};
var nums = [1,2,3,4,5,6,7,8];
console.log(sample(nums));

//Sample: Can choose multiple random numbers
var sample =function(array,numberOfReturns) {
  var rand;
  if (numberOfReturns){
    var result = [];
    for(var i=0; i <numberOfReturns; i++){
      rand = Math.floor(Math.random()* array.length);
      result.push(array[rand]);
    }
    console.log(result);
  } else {
      var rand = Math.floor(Math.random()* array.length);
      console.log(array[rand]);
  }
};
var nums = [1,2,3,4,5,6,7,8];
sample(nums,5);

//Difference

//Index Of
function indexOf(array, value){
  for(i=0;i<array.length;i++){
    if (array[i]===value){
      return "true";
    }
  } 
   return "false";
}
 console.log(indexOf([1,2,3,4],7));

var indexOf =function(array1){
  for (i=0; i<=array1.length; i++)
    if (array1[i]===4)
      return ("true");
    else
      return (array1);
};

//Pluck
function pluck(list, inputKey) {
  var pluckArray = [];
  for(var i=0; i < list.length; i++) {
    pluckArray.push(list[i][inputKey]);
  }
  console.log(pluckArray)
}
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
pluck(stooges, 'name');

//PART TWO

//Each
function each(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
} 
var names = [1,2,3];
each (names,alert);

//Compact
function compact(array){
  var array2 = [];
  for(var i =0; i<array.length; i++){
    if (array[i] != undefined)
      array2.push(array[i])
  }
  return array2
}
var array = [1, "hello", undefined, 3, undefined, 10];
console.log(compact(array))

//Map
function map(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
} 
map([1,2,3], function(num){return num * 3;});

//Filter
function filter(array){
  var array2 = [];
  for(var i =0; i<array.length; i++){
    if (array[i] % 2 === 0)
      array2.push(array[i])
  }
  return array2
}
var array = [1,2,3,4,5,6];
console.log(filter(array))







