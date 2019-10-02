//5.Write a JavaScript program to count the number of vowels in a given string.
let str="aaaba"
let count=0;
const countVowel=(str)=>{
    let charArray=str.split('')
    for(let i=0;i<charArray.length;i++){
        if(charArray[i]==='a' ||charArray[i]==='e' ||charArray[i]==='i'||charArray[i]==='o' ||charArray[i]==='u' ||charArray[i]==='A' ||charArray[i]==='E' ||charArray[i]==='I'||charArray[i]==='O' ||charArray[i]==='U' ){
            count=count+1
        }
    }
    return count
}

console.log(countVowel(str))
