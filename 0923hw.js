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

  for (let i = 0; i < arr.length; i++) {
    //_1 check if ascending  or not
    if (arr[ i - 1] > arr[ i ]) {
      return true
    }

    //_2 check if descending. or not
    else if (arr[ i - 1] < arr[ i ]) {
      return true
    }
  }
}


console.log(isSorted());
