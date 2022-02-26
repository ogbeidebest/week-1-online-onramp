
// Implement the function highestSum(x, y) where x and y are both arrays, return the sum of the array with the highest value when it's elements are summed respectively.

// ## Examples

// highestSum([2, 5, 1, 0, 5, 7], [2, 3, 5, 6, 2, 1]) to return 20
// highestSum([15, 7], [12, 17]) to return 29
// highestSum([30], [3, 6, 2, 6]) to return 30
function highestSum(x, y) {
    let addX = 0;
    let addY = 0;
    for (let i = 0; i < x.length; i++) {
        addX += x[i];
        
    }
    for (let k = 0; k < y.length; k++) {
        addY += y[k];
        
    }
    if (addY > addX) {
        return addY
    } else{
        return addX
    }
    
 }
console.log(highestSum([2, 5, 1, 0, 5, 7], [2, 3, 5, 6, 2, 1]) );
console.log(highestSum([15, 7], [12, 17]));
console.log(highestSum([30], [3, 6, 2, 6]));
module.exports = highestSum