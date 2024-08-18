// SCOPE

// FUNCTION SCOPE

function example() {
    var x = 10;
    if (true) {
      var y = 20;
    }
    console.log(x); // 10
    console.log(y); // 20 
  }
  example();


  // BLOCK SCOPE
  

  function exampleTwo() {
    let x = 10;
    if (true) {
      let y = 20;
      console.log(y); // 20
    }
    console.log(x); // 10
    console.log(y); // ReferenceError: y is not defined
  }
  exampleTwo();
  