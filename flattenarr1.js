//sol 1:

let newArr = [];

function flattenIt(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr)) {
      newArr.push(arr);
    } else {
      flattenIt(arr[i]);
    }
  } 
  return newArr;
}
