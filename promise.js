
  
const newTerm =new Promise((resolve,reject)=>{
    setTimeout(()=>reject("ok"),3000)
}).then(result=>result/0).catch(redError=>{
    console.log(redError +" bad job")
})
console.log(newTerm)
newTerm.then(result=>console.log(result))

const getData=async()=>"Less Work"
getData().then(result=>console.log(result))

function chunkArrayInGroups(arr, size) {
    // Break it up.
    const arr1=arr.split(',')
  
    return arr1;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));