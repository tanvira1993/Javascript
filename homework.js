let string="llHelllo Bangladesh;";
const stringValueReplaceByIndex=(str,index,value)=>{
    
    let newStr= str.split('');
    newStr[index]=value;
    newStrAfter=newStr.join('');
    return newStrAfter;
}

const subStringReplace=(str,subStr,newSubStr)=>{

    let newArrStr= str.split('');
    let arrSubStr=subStr.split('')
    let count =0;
    for(let i=0;i<arrSubStr.length;i++)
    {
        console.log(i)
        for(let j=0; j<newArrStr.length;j++)
        {
            console.log(j)
            
            if(arrSubStr[i]===newArrStr[j])
            {
                
                i++;
                count++;
                if((arrSubStr.length)===count){

                    for(let p=(arrSubStr.length)-1;p>=0;p--){
                        newArrStr[p]=''
                    }
                    
                    
                    i=0;
                    
                    j=0;
                }
                
                
            }
            
        
        }
    }
    let newStr = newArrStr.join('')
    return newStr;
}

console.log(stringValueReplaceByIndex(string,(string.length-1),'.'))
console.log(subStringReplace(string,'ll','H'))