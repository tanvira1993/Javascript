//8.Write a JavaScript program to create an object from the given key-value pairs.
let key=123
let value='hello'
const objCreate=(key,value)=>{
    const newObj={}
    newObj[key]=value
    return newObj
}
console.log(objCreate(key,value))