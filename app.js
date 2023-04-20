let x = 5; //global scope
let z = 3; //global scope

if (x === 5) {
    let y = 7;

    if (y === 7) {
        
        let x = 47; //variable shadowing (diff variables same name)
        console.log(x);
    }

}

console.log(x);
