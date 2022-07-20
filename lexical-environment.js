var scope = "global scope";

function check() {

  var scope = "local scope";

  function f() {
    console.log('scope: ', scope);
    return scope;
  }

  console.log ('f: ', f);
  return f;

}
