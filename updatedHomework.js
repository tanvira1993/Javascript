const increment = (function() {
    "use strict";
    return function increment(number, value=1) {
      return number + value;
    };
  })();
//   console.log(increment(5, 2)); // returns 7
//   console.log(increment(5)); // returns 6


  const myFunc = function(value) {
    const myVar = value;
    return myVar;
  }
//   console.log(myFunc(200));

  const myFuncAnn = (value) => {
    const myVar = value;
    return myVar;
  }
//   console.log(myFuncAnn(300));

  const myFuncUpdate = (value=1) => value
//   console.log(myFuncUpdate())