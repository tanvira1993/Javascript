// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "bandi Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));
// console.log(collectionCopy);
// Only change code below this line

  function updateRecords(id, prop, value) {
        if(prop==='tracks' && value != '')
        {
            if(collection[id][prop])
            {
                collection[id][prop].push(value)
                return collection;
            }
            
            else 
            {
                collection[id][prop]=[value];
                return collection;
            }
        }

        else if(value!==''){
            collection[id][prop]=value
            return collection;
        }
        else
            delete collection[id][prop]
            return collection;
       
        
}
  


// Alter values below to test your code
console.log(updateRecords(5439, "album", "66"));

function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for(var i=0;i<arr.length;i++){
      for(var j=0; j<arr[i].length;j++){
        product = product* arr[i][j];
      }
  
    }
    // Only change code above this line
    return product;
  }
  
  // Modify values below to test your code
//   console.log(multiplyAll([[1],[2],[3]]));


  //Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
    for(var i=0; i<contacts.length;i++){
        if(contacts[i].firstName===name)
        {
            // return contacts[i]['firstName'][prop]
            return contacts[i][name][prop]
        }
      
    }
       
        
    
// Only change code above this line
}

// Change these values to test your function
// console.log(lookUpProfile("Kristian", "lastName"));

function randomWholeNum(max,min) {

    // Only change code below this line.
  
    return Math.floor(Math.random()*(max-min+1))+min;
  }
//   console.log(randomWholeNum(5,10))
function checkScope() {
    "use strict";
      let i = "function scope";
      if (true) {
        let i = "block scope";
        console.log(i);
      }
      console.log(i);
      return i;
    }