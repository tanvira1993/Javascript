const increment = (function() {
    "use strict";
    return function increment(number, value=1) {
      return number + value;
    };
  })();
//   console.log(increment(5, 2)); // returns 7
//   console.log(increment(5)); // returns 6


  const myFunc = function(value) {
    const myVar = value;
    return myVar;
  }
//   console.log(myFunc(200));

  const myFuncAnn = (value) => {
    const myVar = value;
    return myVar;
  }
//   console.log(myFuncAnn(300));

  const myFuncUpdate = (value=1) => value
//   console.log(myFuncUpdate())

//Write a JavaScript program to list the properties of a JavaScript object

const obj =
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    }
 const ListPropertiesOfObject=(object)=>{
        return Object.keys(object)
        // return obj
 }
//  console.log(ListPropertiesOfObject(obj))

//Write a JavaScript program to delete the passed property from the  object.
// Also print the object before or after deleting the prop
const deletePropertiesOfObject=(object,key)=>{
    console.log( Object.keys(object))
    delete obj[key];
    console.log( Object.keys(object))

}
deletePropertiesOfObject(obj,"author")


//Write a JavaScript program to display the reading status 
//(i.e. display book name, author name and reading status) of the matched  books. 
const lib = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

    const getReadingStatus =(store,title) =>{
        let status=false;
        for(let i=0; i<store.length;i++){
            if(store[i]['title']===title){
                if( store[i]["readingStatus"]===true){
                    status=true
                    return "Completed";
                }
                else{
                    status=true
                    return "Incompleted";
                }
            }
            

        }
        if(!status){
            return "Book not Found"
        }
        
    }

    console.log(getReadingStatus(lib,'Walter Isaacson'));
 