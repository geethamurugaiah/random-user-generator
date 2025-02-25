//alert("welcome")
// console.log("Hello World");
//string function-string manipulation.
//var x=10;
//if(true){
    //var x=20;//same variable is reassigned
//}
//console.log(x)

//let y=10;
//if(true){
  //  let y=20;
    //console.log(y);
//}
//console.log(y);//10

//length property return the length of a string
// let text="geetha";
// alert(text.length);
//For extracting parts of string we can use three method 
//slice,substring and substr
//let str="Hello And Welcome";//count starts from0
//let part=str.slice(3,9);//willl slice 3rd position to 9-1
//alert(part);

//substring() is similer to slice(),
//but  cannot accept negative values
//let str="Hello And Welcome";//count starts from0
//let part=str.substring(3,10);//willl slice 3rd position to 9-1
//alert(part);

//let part=str.substring(3);
//alert(part);

//substr() is also similer to slice,but do slice in length wise
//let str="Hello And Welcome";
//let part=str.substr(3,2);//second parameter is length
//alert(part);

//javascript string replacement
//let text="Hi there! how are you";
//let newText=text.replace("how","who");
//alert(newText);

//string joining
//concat() joins two or more strings
//let text1="Hi There";
//let text2="How are you";
//let newText=text1.concat(" John ",text2);
//alert(newText)//Hi There John How are you

//touppercase and tolowercase - to change string case
//let text1="Hi There";
//let text2=text1.toUpperCase();
//alert(text2);

//trim() to remove white sapces at the ends
//let text1="   Hi There   ";
//let text2=text1.trim();
//alert(text2);

//charAt() method returns the character at a specified index
//in a string
//charCodeAt() method returns the unicode of the character
//at a specified index
// let text1="Hi There";

//let text2=text1.charAt(0);
//alert(text2);//H

// let text2=text1.charCodeAt(0);
// alert(text2);

//Arithmetic operation

//basic arithmetic operation add,substract,multiply.divide
// var a=5;
// var b=10;
// var result=a+b;
// alert(result);

//javascript eval() method

//used to evaluate or execute javascript code /expression

// var x=10;
// var y=20;
// var a=eval("x*y+2+1");
// alert(a);

//logical operation

//basic logical operation equality,greater/less then,combined
//operations
// var a=5;
// var b=10;
// var c=5;

// var result=a===b;
// alert(result);//false

// var result=a>b;
// alert(result);

// var result=a<b;
// alert(result);

// var result=a>=b;
// alert(result);

// var result=a<=b;
// alert(result);

//conditional operator
// var a=prompt("enter the value for a");
// var b=prompt("enter the value for b");

// if(a<b){
//     alert(a+"is less then " +b);
// }
// else if(a>b){
//     alert(a+"is greater then"+b);
// }
// else{
//     alert(a+"is equal to"+b);
// }

// let day;
// switch(new Date().getDay()){//return the current day of the we as anumber
//     case 1:
//      day="monday";
//      break;
//     case 2:
//      day="Tuesday";
//      break;
//     case 3:
//      day="Wednesday";
//      break;
//     case 4:
//      day="Thursday";
//      break;
//     case 5:
//      day="Friday";
//      break;
//     dafault:
//      day="It's weekend"
// }
// console.log(day);

//user input
// let daynumber = parseInt(prompt("Enter a day number (1-7):"));

// switch (daynumber) {
//     case 1:
//         alert("Monday");
//         break;
//     case 2:
//         alert("Tuesday");
//         break;
//     case 3:
//         alert("Wednesday");
//         break;
//     case 4:
//         alert("Thursday");
//         break;
//     case 5:
//         alert("Friday");
//         break;
//     case 6:
//         alert("Saturday");
//         break;
//     case 7:
//         alert("Sunday");
//         break;
//     default:
//         alert("Invalid day number");
// }

//looping statement
//while loop

//Repeating the same block of code over and over

// var a=5;
// while(a<10){
//     alert(a);
//     a=a+1;
// }
//for loop

    // for(var i=1;i<10;i++){
    //     alert(i);
    // }
//javascript arrays

//list of data

//arrays are list of any kind of data 
//each item in the array has an index

//array declaration
//var myArray=[];

// var myItems=['milk','bread','butter'];
// alert(myItems[0]);//milk

// myItems[0]='orange';
// alert(myItems[0]);//orange

//length() to find the number of elements
//push() to insert data and pop() to delete data

// var myItems=['milk','bread','butter'];
// alert(myItems.length);

//inserting a data
// myItems.push('biscuit');
// alert(myItems);

//removing a data
// myItems.pop();
// alert(myItems);

// for(var i=0;i<myItems.length;i++){
//     alert(myItems[i]);
// }

//Javascript functions
// reusable block of code that carry out a specific task

// function add(a,b){
//   return a+b;
// }

// call the function
// var result=add(5,2);
// alert(result);

// function sub(a,b){
//     return a-b;
//   }
  
//   // call the function
//   var result=sub(5,2);
//   alert(result);

//   function mul(a,b){
//     return a*b;
//   }
  
//   // call the function
//   var result=mul(5,2);
//   alert(result);

//   function div(a,b){
//     return a/b;
//   }
  
//   // call the function
//   var result=div(5,2);
//   alert(result);

// javascript objects

// collection of variables and functions
// object can be stored in a variable

// var student={
//     name:"geetha",
//     age:22,
//     talk:function(){
//         alert("Haii all");
//     }
// };

// student.name="kavi";
// alert(student.name);
// alert(student.age);
// student.talk();
// nested object

// var person={
//     name:"geetha",
//     age:22,
//     address:{
//         street:"kollam",
//         city:"kollam",
//         state:"kerala"
//     },
//     contact:{
//         email:"geetha@gmail.com",
//         phone:"3456783456"
//     }

//     };
//     console.log(person.name);
//     console.log(person.address.city);
//     console.log(person.contact.email);

// var car={
//     make:"corolla",
//     model:"toyota",
//     year:2020,
//     color:"blue",
//     talk:function(){
//         alert("This is a 2020 Toyota Corolla in Blue")

//       },
// };
// car.color="red";

// console.log(car.make);
// console.log(car.model);
// console.log(car.year);
// console.log(car.color);
// car.talk();





    











