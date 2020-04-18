//sol 2:

function flattenThis(arr) {
  let newArr = [];
  function flatten(arr) {
    arr.forEach(function(item) {
        if(!Array.isArray(item)) {
          newArr.push(item);
        } else {
          flatten(item);
        }
    }); 
  }
  flatten(arr);
  return newArr;
}
