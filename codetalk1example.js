// const is much more common than let
// but let does have its own use cases
// you may use let when you are doing calculations or coding around an algorythm
// lets look at the example below

let dataset = [25, 59, 9, 38]

function findHighestValue(numbers) {
    let highest = 0;

    for (const n of numbers) {
        if (n > highest) {
            highest = n;
        }
    }

    return highest;
}

console.log(findHighestValue(dataset));