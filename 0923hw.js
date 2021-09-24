// return true if the array is sorted either
// ascending, or descending.
// [] => true
// [42] => true
// [39, 42] => true
// [42, 39] => true
// [1, 2, 3, 4, 5] => true
// [5, 4, 3, 2, 1] => true
// [1, 5, 2] => false


function isSorted(arr) {
  var arr = [1, 5, 2];

  for (let i = 1; i < arr.length - 1; i++) {
    //_1 check if ascending  or not
    //_2 check if descending. or not
    if (arr[ i - 1] > arr[ i ]) {
      return true;
    } else if ( arr[ i - 1] < arr[ i ]) {
      return true;
    } else {
      return false;
    }

  }

}


console.log(isSorted());
