// Implement the function divisible(a) which returns the number of the elements in that array a that are divisible by 2 and greater than 15.

// ## Examples

// divisible([2,3,12,18,42,24]) to return 3
// divisible([100,84,37]) to return 2
// divisible([5,8,6,12]) to return 0
function divisible(a) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0 && a[i] > 15) {
            count++
        }
    }
    return count;
}
console.log(divisible([2, 3, 12, 18, 42, 24]))
console.log(divisible([100, 84, 37]))
console.log(divisible([5, 8, 6, 12]))
module.exports = divisible
