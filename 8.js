//9.Write a JavaScript function that reverse a number
let num=1000087
const stringReverse=(num)=>{
    return parseFloat(num.toString().split('').reverse().join(''))* Math.sign(num)
}

console.log(stringReverse(num))