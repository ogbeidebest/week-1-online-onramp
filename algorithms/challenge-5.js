// Implement the function replaceDivisible(x, y) which replaces all numbers in an array, x divisible by an integer, y with string “isDivisible”

// ## Examples
// replaceDivisible([2, 4, 3, 6, 5], 3) => [2, 4, “isDivisible”, “isDivisible”, 5]
// replaceDivisible([12, 4, 3, 6, 5], 2) => [“isDivisible”, “isDivisible”, 3, “isDivisible”, 5]


function replaceDivisible(x, y) {

    for (let char = 0; char < x.length; char++) {

        if (x[char] % y === 0) {
            x[char] = "IsDivisible";
        }

    }


    return x;
}



console.log(replaceDivisible([2, 4, 3, 6, 5], 3));
console.log(replaceDivisible([12, 4, 3, 6, 5], 2));
module.exports = replaceDivisible;
