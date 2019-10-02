class Fruit {
  constructor(name, price, season) {
    this.name = name;
    this.price = price;
    this.season = season;
  }
}
Fruit.prototype.amount = 1000;
const fruit = new Fruit("apple", "100", "12 months");

// console.log(fruit.amount);
// console.log(fruit);
// console.log(fruit instanceof Fruit);

const getObjectProperties = object => {
  let totalValue = "";
  for (let e in object) {  
    totalValue+=  e+"-"+object[e]+','   
  }
  return stringValueReplaceByIndex(totalValue,(totalValue.length-1),'.');
  
}
// console.log(getObjectProperties(fruit));


 const stringValueReplaceByIndex=(str,index,value)=>{
    
    let newStr= str.split('');
    newStr[index]=value;
    newStrAfter=newStr.join('');
    return newStrAfter;
}

const bird={
  info:{
      nextLevelInfo:{
        lastLevelInfo:{
            hello: 'number'
        },
        outputInfo:{
          hello: 'brother',
          key:"last"
        }
      }
  },

  outDoorInfo:{
    key:"final",
    status:"lastCheck"
  } 
}

const checkNestedObjectProperty=(object,property)=>{
  let status=false;
  for(let i=0;i<50;i++){
    if(object[i]===property){
      status=true;
      return object[i][key]
    }
    return "not Found"
  }
  if(!status){
    
  return checkNestedObjectProperty(object,property)
  }
}
console.log(checkNestedObjectProperty(bird,"key"));