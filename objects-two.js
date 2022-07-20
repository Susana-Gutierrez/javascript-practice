
let hero = {
  powerLevel: 99,
  getPower(){
    return this.powerLevel;
  }
}

let getPower = hero.getPower;

let hero2 = {powerLevel: 42};
console.log (getPower());
console.log (getPower.apply(hero2));

const a = function(){

  console.log (this);

  const b = {
    func1: function(){
      console.log (this);
    }
  }

  const c = {
    func2: ()=> {
      console.log(this);
    }
  }

  b.func1();
  c.func2();

}

a();

const b = {
  name: "Vivek",
  f: function (){
    var self = this;
    console.log(this.name);
    (function(){
      console.log ('this.name: ', this.name);
      console.log ('self.name: ', self.name);
    })();
  }
}

b.f();
