let x = 10;
const y = 20;

x = 250; //here we update (not-redeclare) the x variable
y = 30;   //gives error: Assignment to constant variable.

console.log(y); // outputs: 20
console.log(x);

