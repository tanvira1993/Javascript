//2.Write a JavaScript program to rotate the string 'react-native' in the right direction by periodically 
//removing one letter from the end of the string and attaching it to the front.
//https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
let str='react-native'
const stringReverse=(str)=>{
    return str.split("").reverse().join("");
}

console.log(stringReverse(str))