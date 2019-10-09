//4. Write a JavaScript program to remove a character
//at the specified position of a given string and return the new string
let string="Helllo Bangladesh..";
const stringValueReplaceByIndex=(str,index,value)=>{
    
    let newStr= str.split('');
    newStr[index]=value;
    newStrAfter=newStr.join('');
    return newStrAfter;
}
console.log(stringValueReplaceByIndex(string,0,'Y'))
