// Array Diff
// Given two arrays with strings values, return a new array containing all the values that appear in only one of the arrays.

// The returned array should be sorted in alphabetical order.

function arrayDiff(arr1, arr2) {
  // console.log(arr1, arr2)
  const obj = {};
  // add both arr to an object
  function pusher(x) {
    for (i = 0; i < x.length; i++) {
      obj.add(x, (obj.has(x) || 0) + 1);
    }
  }

  pusher(arr1);
  pusher(arr2);
  console.log(obj);
  // store number of occurences
  // if occurence === 1 push to result arr
  //return arr1;
}
