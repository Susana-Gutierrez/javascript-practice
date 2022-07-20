
let x = {}, y = {name: "Ronny"}, z = {name: "John"};
let a = {name: "susy"};
/* x[y] = {name: "Vivek"}; */

console.log('x: ', x);

x[z] = {name: "Akki"};

console.log ('x[y]: ', x[y]);
console.log('x[a]: ', x[a]);
console.log ('x: ', x);
console.log ('y: ', y);


function runFunc() {
  console.log ("1" + 1);
  console.log ("A" - 1);
  console.log (2 + "-2" + "2");
  console.log ("Hello" - "World" + 78);
  console.log ("Hello" + "78");
  console.log ( 1 - false );
}

function runFunc2() {
  let a = 0;
  let b = false;
  console.log ((a == b ));
  console.log (( a === b ));
}
