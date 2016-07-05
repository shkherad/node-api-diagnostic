// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';

const fs = require('fs');

let sum = 0;

const callback = function(elementsArray) {
  let elements = elementsArray.split('\n');
  elements.pop();
  console.log(elements)
  elements.forEach((element)=>{
    console.log(element)
    if (typeof element === 'number') {
      sum += element;
      console.log('The element is '+element)
      console.log('The sum is '+sum)
    }
  });
console.log('The sum is '+sum)
}

const sumLines = (filename, callback) => {
  /* your response here */
  fs.readFile(filename, {encoding: 'utf8'}, (error, numbers)=> {
    if (error) {
      console.error(error)
    }
    callback(numbers);
    });
};

sumLines('./data/numbers.txt', callback)


module.exports = {
  sumLines,
};
