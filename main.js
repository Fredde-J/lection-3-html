
let num1=5;
let num2=6;
let stuff= "hello";
let result1 = num1+num2+stuff;
var result2 = multipliNumbers(4,2);
function multipliNumbers(a,b){
   return a*b;
}
console.log(result2);

result3=sumThreenumbers(5,4,1)
function sumThreenumbers(a,b,c){
    return a+b+c
}
console.log(result3)

fullName("Fredrik","Jönsson")
function fullName(firstName,lastName){
    document.write("the full name is:"+ firstName+" "+lastName);
}

checkName("fredrik")
function checkName(name){
    if(name=="fredrik"){
        console.log("you name is awesome")
    }
    else{
        console.log("your name sucks ")
    }
}