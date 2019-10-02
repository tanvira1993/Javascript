//10.Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
let param="I am Bangladesh yyyyyyyyyyyyyyyyyyyyyyy"
const findLongestString=(param)=>{
    let makeArray=param.split(" ")

    let longestWord=makeArray.reduce(function(longest, currentWord) {
        if(currentWord.length > longest.length)
           return currentWord;
        else
           return longest;
      }, "");
        

        return longestWord

}
console.log(findLongestString(param))