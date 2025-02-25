
// var a=prompt("Enter the value for a");
// if(a<0){
//     alert("a is negative");
// }
// else if(a>0){
//     alert("a is positive");
// }
// else{
//     alert("a is zero")
// }
// var a=prompt("Enter the value for a");
// if(a % 2 ==0){
//   alert("a is even");
// }
// else{
//     alert("a is odd")
// }
// var age=prompt("Enter your age:");
//  if(age >= 18){
//    alert("you are eligible to vote");
//    }
//  else{
//     alert("you are not eligible to vote");
//  }
// ----4---
// var a=prompt("enter your first number");
// var b=prompt("enter your second number");
// var c=prompt("enter your third number");
// if(a>b && a>c){
//     alert("largest number is a")
// }
// else if(b>a && b>c){
//     alert("largest number is b")
// }
// else if(c>a && c>b){
//     alert("largest number is c")
// }
// else{
//     alert("all are equal")
// }
// ----6----
// var a=prompt("enter a number");
// if(a%5 == 0){
//     alert("number is divisible by 5")
// }
// else{
//     alert("number is not divisible by 5");
// }
// -----5----
// var grade=prompt("enter your grade");
// if(grade>=50){
//     alert("you are pass");
// }
// else{
//     alert("you are fail")
// }
//---1---
// let text="Javascript is a powerful programming language";
// let newText=text.replace("Javascript","Js");
// alert(newText);
//---2---
// let text1="Javascript is a powerful programming language";
// let text2=text1.toUpperCase();
// alert(text2);
//---3---
// let text1="JAVASCRIPT IS A POWERFUL PROGRAMMING LANGUAGE";
// let text2=text1.toLowerCase();
// alert(text2);
//----4----
// let text="javascript is a powerful programming language";
// alert(text.length);
//----5----
// let text="Javascript is a powerful programming language";
// let newText=text.replace("Javascript","Js");
// alert(newText);
// ----6----
// let text1="  javascript is a powerful programming language ";
// let text2=text1.trim();
//alert(text2);

excercise:
var car={
    make:"corolla",
    model:"toyota",
    year:2020,
    color:"blue",
    talk:function(){
        alert("This is a 2020 Toyota Corolla in Blue")

      },
};
car.color="red";

console.log(car.make);
console.log(car.model);
console.log(car.year);
console.log(car.color);
car.talk();






