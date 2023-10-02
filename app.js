


//Array1 = [15, 30, 45, 60]
//Array2 = [5, 6, 3, 10]
//Q. Write a function that divides Array1 by Array2
//And return a new array as result.

  let Array1 = [15, 30, 45, 60];
  let Array2 = [5, 6, 3, 10];

  function divideArrays(array1, array2) {
    if (array1.length !== array2.length) {
      throw Error("Both arrays should have the same length");
    }
  
 let result = [];
    for (let i = 0; i < array1.length; i++) {
      if (array2[i] === 0) {
        throw Error("Cannot divid by zero");
      }
      result.push(array1[i] / array2[i]);

   let result = divideArrays(Array1, Array2);
      console.log(result); // Output: [3, 5, 15, 6]
    }
  
    return result;
  }
  