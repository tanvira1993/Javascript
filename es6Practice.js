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
console.log(login("level8yui","123"))