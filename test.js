// function myProfile(education){
//     var profileObject={
//         name : "Tanvir",
//         age: "23",
//         education: education
//     }
//     return profileObject
// }

// console.log(myProfile([{
//     instituteName: education,
//     instituteLocation: '',
//     instituteCertificate: "",
//     instituteResult: "",
// }]))

// var someObj = {
//     propName: "John"
//   };
//   function propPrefix(str) {
//     var s = "prop";
//     return s + str;
//   }
//   var someProp = propPrefix("Name"); // someProp now holds the value 'propName'


//   // Setup
// var myObj = {
//     gift: "pony",
//     pet: "kitten",
//     bed: "sleigh"
//   };
  
//   function fun(checkProp) {
//     // Your Code Here
//     var check=myObj.hasOwnProperty(checkProp)
//     return check;
//   }
  
//   // Test your code by modifying these values
//   console.log(fun("gift1"));


var ourStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": {
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };
  ourStorage.cabinet["top drawer"].folder2; // "secrets"
  ourStorage.desk.drawer; // "stapler"
  console.log(ourStorage.cabinet["bottom drawer"])


  var myPlants = [
    { 
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }  
  ];
  
  console.log(myPlants[1].list[1]); // "Fluffy"

  

  //1.Create a function which will determine leap year 
function checkLeapYear(year){
    if(year%4===0){
        if(year%100===0){
            if(year%400===0){
                return "Leap Year"
            }
            else 
            return "Not a Leap Year3"
        }
        else
         return "Not a Leap Year2"
    }
    else
        return "Not a Leap Year1"
}
console.log(checkLeapYear(2006));

//2.Write a function to display current date and time in proper format
function getCurrentDateAndTime(){
    var currentdate = new Date();
    return 'Date '+currentdate.getDate()+':'+(currentdate.getMonth()+1)+':'+currentdate.getFullYear() +"\n"+'Time ' +currentdate.getHours()+':'+currentdate.getMinutes() +':'+currentdate.getSeconds();
    ;
}

function getAnotherCurrentDateAndTime(){
    var currentdate = new Date();
    return 'Date '+currentdate.toLocaleDateString()+ " time "+currentdate.toLocaleTimeString();
    
}

console.log(getCurrentDateAndTime());
console.log(getAnotherCurrentDateAndTime())

//3.Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
function getTriangleArea(base,height,thirdEdge){
    return ((1/2*base)*height)

}
console.log(getTriangleArea(5,6,7));

//4.Write a JavaScript program where the program takes a random integer between 1 to 10, 
// the user is then prompted to input a guess number. If the user input matches with guess number, 
//the program will display a message "Good Work" otherwise display a message "Not matched".

function guessGame(userNumber){
    var randomNumber = Math.floor(Math.random()*10)
    if(randomNumber===userNumber){
        return "good Work"
    }
    else
      return  "Not Matched"
}
console.log(guessGame(5));

//5.Write a function to calculate multiplication or division of two numbers 
//(note: user will decide if it will be multiplication or division)
function getCalculatedValue(a,b,value){
    if(value==='division'){
        return a/b;
    }

    if(value==='multiplication'){
        return a*b;
    }
    else 
        return "Worng Command"
}
console.log(getCalculatedValue(10,10,'tg'))

//6.Write a JavaScript program to check two given numbers and return true if one of the numbers is 50 or if their sum is 50.
function checkTwoNumbers(a,b){
    if(a===50 || b===50){
        return true;
    }

    if((a+b)===50){
        return true;
    }

    else
        return false; 
}
console.log(checkTwoNumbers(50,0));

//7.Write a JavaScript program to create a new string adding "Py" in front of a given string. 
//If the given string begins with "Py" then return the original string. 
function stringAdding(str){
    if((str.charAt(0)+str.charAt(1))==="Py")
    {
        return str;
    }
    else
        return 'Py'+str;
}
console.log(stringAdding("poooooo"))

//8.Write a JavaScript program to find the largest of three given integers.
function getLargestNumber(num1,num2,num3){
    if(num2>=num1 && num2>=num3){
        return num2;
    }
    else if(num1>=num2 && num1>=num3){
        return num1;
    }
    else if(num3>=num2 && num3>=num1){
        return num3;
    }
    else
        return "something Wrong"
}

console.log(getLargestNumber(2,3,3));
