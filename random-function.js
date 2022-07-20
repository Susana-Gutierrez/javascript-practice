(function(a){
  return (function(){
    console.log(a);
    a = 23;
  })()
})(45);


function bigFunc(element) {
  let newArray = new Array(700).fill('♥');
  return newArray[element];
}

console.log(bigFunc(599));
console.log(bigFunc(670));


function randomFunc() {
  for (var i = 0; i < 2; i++ ) {
    setTimeout(()=> console.log(i), 1000);
  }
}

randomFunc();

function randomFunc2() {
  for(var i =0;  i < 2; i++) {
    (function(i) {
      setTimeout(()=> console.log(i), 1000);
    })(i);
  }
}

randomFunc2();
