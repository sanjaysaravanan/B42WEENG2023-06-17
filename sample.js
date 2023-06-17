

var x = 0;


function sample() {
  var x = 100;

  {
    let x = 999;
  }

  console.log(x);
}

sample();

var str = "snjaay";

console.log(str[2]);

// console.log(x);