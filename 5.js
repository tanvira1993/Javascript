//Write a JavaScript program to converts a specified number to an array of digits
let num= 12344
const makeArray=(num)=>{
    let numToArray=num.toString().split("")

    return numToArray
}

console.log(makeArray(num));