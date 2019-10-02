const education ={
    ssc :{
        year:444
    }

}

const updateEducation = (currentEducation,newInfo)=>{

    let update={...currentEducation,...newInfo}
    currentEducation.ssc.year=34;
    return update
}

const currentEducation={...education}

const newInfo= {
    hsc:{
        year:67
    }
}
// console.log(updateEducation(currentEducation,newInfo));



const userCredentials=[{ name : "level1", pass: "123"},{name : "level2", pass: "123"},{name : "level1", pass: "123"},{name : "level3", pass: "123"},{name : "level4", pass: "123"},{name : "level5", pass: "123"},{name : "level6", pass: "123"},{name : "level7", pass: "123"},{name : "level8", pass: "123"}]
const signUp=(name,pass)=>{
    let credentials={
        name: name,
        pass: pass,
    }
    userCredentials.push(credentials)
    return userCredentials
}

const login=(userName,password)=>{
    let found=false;
    userCredentials.forEach(e => {
        
        if(e.name===userName && e.pass===password){
            found=true;
            return `Hello, ${e.name}`
        }
        
    });


/*     
    
    for(let i=0;i<userCredentials.length;i++){
        if(userCredentials[i]['name']===userName && userCredentials[i]['pass']===password){
            found=true;
            return `Hello, ${userName}`
        }
       
    }*/
    if(!found){
        return "please Sign UP"
    }
    return "working"

}

// console.log(signUp("hello","123"))
// console.log(login("level8yui","123"))
/* let obje={
    name:'Tanvir',
    key: 'number'
} */

/* const objectValueChangeByKey=(obj)=>{
    let value,key
    const newObj={}
    
    for(let originalkey in obj){
    
    value= originalkey    
    key=obj[originalkey]
    originalkey=key
    
    newObj[originalkey]= value
}

    return newObj

} */
// console.log(objectValueChangeByKey(obje));

/* const arrayMapping=()=>{
    let arr=[1,2,3,4,5,5]
    let newArr=arr.map((item1)=>
    {
        return item1*2
        
    })
    return newArr
} */
// console.log(arrayMapping())

const deleteDuplicateValueInArray=()=>{
    let arr=[1,1,1,2,3,4,5,5,5,5,1]
    let newArr=[]
    for (let i=0; i<arr.length;i++){
        for(let j=i+1; j<arr.length;j++){
        if(arr[i]===arr[j]){
            arr[j]=''
            
        }
    }
        if(arr[i]!==''){
            newArr.push(arr[i])
        }
    }
    arr=[...newArr]
    return arr
    
}
// console.log(deleteDuplicateValueInArray()); 
const arrayOfDoctors=[
    {
        Sector:'Health',
        Carrer:'surgne',
        salary:'12000',
        company:'govt',
    },
    {
        Sector:'Health',
        Carrer:'bad',
        salary:'10000',
        company:'govt',
    },
    {
        Sector:'Health',
        Carrer:'fokira',
        salary:'9000',
        company:'govt',
    },
    {
        Sector:'Health',
        Carrer:'surgne',
        salary:'17000',
        company:'govt',
    },
]

const objectFilter=(arrayOfDoctors)=>{
    
  let newArrayOfDoctors=arrayOfDoctors.map((item)=>{
    let newObj={}
      newObj["company"]= item.company
      newObj["salary"]= item.salary
    return newObj
  }).filter(item=> item.salary>10000)
  return newArrayOfDoctors
}

// console.log(objectFilter(arrayOfDoctors));

const arr1=[1,2,3,4,4,3,3]
const arr2=[1,2,3,43]

const joinArray=(arr1,arr2)=>{
    let newArr=[]
    let arr=[...arr2,...arr1]
    // return arr
    for (let i=0; i<arr.length;i++){
        for(let j=i+1; j<arr.length;j++){
        if(arr[i]===arr[j]){
            arr[j]=''
            
        }
    }
        if(arr[i]!==''){
            newArr.push(arr[i])
        }
    }
   
    return newArr
}
// console.log(joinArray(arr1,arr2))


function makeClass() {
    "use strict";
    /* Alter code below this line */
    
    class Thermostat{
      constructor(farenheit){
        this.farenheit = farenheit;
      }
      get temperature(){
        return 5 / 9 * (this.farenheit - 32);
      }
      set temperature(celsius){
        this.farenheit = celsius * 9.0 / 5 + 32;
      }
    }
    
    /* Alter code above this line */
    return Thermostat;
  }
  makeClass()