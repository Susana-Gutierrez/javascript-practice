function func1(){
  setTimeout(() => {
    console.log(x);
    console.log(y);
  }, 3000);

  var x = 2;
  let y = 12
}

function func2() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 2000);
  }
}

(function(){
  setTimeout( ()=> console.log(1), 2000);
  console.log(2);
  setTimeout(()=> console.log(3), 0);
  console.log(4);
})();
