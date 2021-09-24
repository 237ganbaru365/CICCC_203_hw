// return true if the array is sorted either
// ascending, or descending.
// [] => true
// [42] => true
// [39, 42] => true
// [42, 39] => true
// [1, 2, 3, 4, 5] => true
// [5, 4, 3, 2, 1] => true
// [1, 5, 2] => false

var arr = [];

function isSorted(arr) {

  //_1 function for  ascending ---> lexical scope
  var ascArr = arr.sort( 
    function (a, b) {
      return a - b;
    }
  );

  //_2 function for descending. ---> lexical scope
  var desArr = arr.sort(
    function(i, j) {
      return b - a;
    }
  );

  //_3 check the array 
  var result =  ( arr.length === ascArr || arr.length === desArr ) && (arr.every(item => ascArr.includes( item )) || arr.every(item => desArr.includes( item )) );

}

function isSorted();

console.log(arr);
console.log(arr = [42]);
console.log(arr = [39, 42]);
console.log(arr = [42, 39]);
console.log(arr = [1, 2, 3, 4, 5]);
console.log(arr = [5, 4, 3, 2, 1]);
console.log(arr = [1, 5, 2]);
