//1.Write a JavaScript program to display the current date and time in the following format. 
//Sample Output : Today is : Tuesday. Current time is : 10 PM : 30 : 38

const findDateAndTime=()=>{
    // let today = new Date(); 
     
    // let day=1;
    // let time = today.getHours() + ":" 
    // let min =  today.getMinutes() + ":" + today.getSeconds();
    // return dateTime = day+' '+'Current time is :'+time +''+min;

    // var currentdate = new Date();
    // return 'Date '+currentdate.getDate()+':'+(currentdate.getMonth()+1)+':'+currentdate.getFullYear() +"\n"+'Time ' +currentdate.getHours()+':'+currentdate.getMinutes() +':'+currentdate.getSeconds();
    var currentdate = new Date();
    let particularDay
    let day=currentdate.getDate()
    if(day===0){
        particularDay='Sunday'
    }
    if(day===2){
        particularDay='Tuesday'
    }
    if(day===4){
        particularDay='thrusday'
    }

    return 'Today is :'+ particularDay + ". Current time is : "+currentdate.toLocaleTimeString();
}
console.log(findDateAndTime());