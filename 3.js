//3. Write a JavaScript program to get the difference between a given number and 
// 13, if the number is greater than 13 return double the absolute difference.

const getDifference=(num)=>{
    if(num>13){
        if(num%2==0 && num%3!==0){
            return (num-13)*2
        }
        
    }
    if(num===13){
        return "both equal"
    }
    else
    return "13 is Greater than input"
} 
console.log(getDifference(13))