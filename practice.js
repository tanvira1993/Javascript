function getOdd(){
    var check=true;
    var i=0;
    while(i<=10){
        if(i%2!==0){
            console.log(i)
        }
        i++;
    }
}
// getOdd();
function replaceStringBId(previousString,id,requiredString){
    Array.from(previousString)
}

function getShoppingList(){
    var groceries =[{itemName:'pencil',itemPrice:'10'},{itemName:'pen',itemPrice:'20'}]
    var data='';
    var i=0;
    do{
         data= data+groceries[i]["itemName"]+"-"+groceries[i]["itemPrice"]+","

         i++;
    }
    
    while(i<groceries.length)
    // data1=data.replace(data.length-10,'.')
    // console.log( "Today's Shopping List:" +data1)

}
// getShoppingList()

function getShoppingListUsingFor(){
    var groceries =[{itemName:'pencil',itemPrice:'10'},{itemName:'pen',itemPrice:'20'}]
    var data='';
    var i;
    for (i=(groceries.length-1);i>=0;i--)
    {
        data= data+groceries[i]["itemName"]+"-"+groceries[i]["itemPrice"]+","

    }
    
    // console.log( "Today's Shopping List:" +data)

}
// getShoppingListUsingFor()

function es6Variable(){
    // 'use strict'
    const myName = "myTest"
    
    let changeValue={
        age: '50',
        addr: "basundhara",
    }
}

const newFunction = ()=>{
    return "new Function Syntax";
}
// console.log(newFunction());
let groceries =[{itemName:'pencil',itemPrice:'10'},{itemName:'pen',itemPrice:'20'}]

const getShoppingListUsingNewFunction=(arr)=>{
    // console.log(arr);
    return arr;
}
// console.log(getShoppingListUsingNewFunction(groceries));
//map
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
//filter
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(i => i.length > 6);

console.log(result);
//Use arrow function syntax to compute the square of only the positive integers 
//(decimal numbers are not integers) in the array realNumberArrayand store the new array in the variable squaredIntegers.

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const findInt = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers =arr.filter(t=>t>0);
  // change code above this line
  return squaredIntegers;
};
// test your code
console.log(findInt(realNumberArray));

const squareCalculation = (arr) => {
    "use strict";
    // change code below this line
    const arr1= arr.filter(i=>i>0)
    const squaredIntegers =arr1.map(i=>Math.pow(i,2));
    // change code above this line
    return squaredIntegers;
  };
  // test your code
  console.log(squareCalculation(realNumberArray));


  const squareInt = (arr) => {
    "use strict";
    const add=(a,b)=>a+b;
    // change code below this line
    // const arr1= arr.filter(i=>i>0)
    const squaredIntegers =arr.filter(i=>i>0).map(i=>Math.pow(i,2)).reduce(add);
    // change code above this line
    return squaredIntegers;
  };
  // test your code
  console.log(squareInt(realNumberArray));