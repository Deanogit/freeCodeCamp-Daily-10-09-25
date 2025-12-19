// Array Diff
// Given two arrays with strings values, return a new array containing all the values that appear in only one of the arrays.

// The returned array should be sorted in alphabetical order.

// function arrayDiff(arr1, arr2) {
//   // console.log(arr1, arr2)
//   const obj = {};
//   // add both arr to an object
//   function pusher(x) {
//     for (i = 0; i < x.length; i++) {
//       obj.add(x, (obj.has(x) || 0) + 1);
//     }
//   }

//   pusher(arr1);
//   pusher(arr2);
//   console.log(obj);
//   // store number of occurences
//   // if occurence === 1 push to result arr
//   //return arr1;
// }

// use sets

// function arrayDiff(arr1, arr2) {
//  const set1 = new Set(arr1)
//  const set2 = new Set(arr2)

//  if (set1.has(value) && set2.has(value)) {
//skip
//  } else {

//  }

// }

function arrayDiff(arr1, arr2) {
  // create set1, set2
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  // create resultSet
  const resultSet = new Set();

  // loop over arr1
  for (let i = 0; i < arr1.length; i++) {
    // // if value not in set2
    if (!set2.has(arr1[i])) {
      // // add to resultSet
      resultSet.add(arr1[i]);
    }
  }
  // loop over arr2
  for (let i = 0; i < arr2.length; i++) {
    // // if value not in set1
    if (!set1.has(arr2[i])) {
      // // add to resultSet
      resultSet.add(arr2[i]);
    }
  }

  const resultArr = Array.from(resultSet);
  return resultArr.sort();

  // return sorted arry from resultSet
}
