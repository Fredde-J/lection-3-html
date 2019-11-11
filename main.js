
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
checkAge(19)
function checkAge(age){
    if(age>50){
        console.log("you are old");
    }
    else if(age==45){
        console.log("you are cool")
    }
    else if(age>12 && age<=19){
        console.log("you are a teenager")
    }
    else if(age>1 && age<=11){
        console.log("you are a child");
    }
    else{
        console.log("sfsff")
    }
}

greeting("kalle",60);
function greeting(name,age){
    if(age>=50){
    console.log("hello "+name+" you are old")
}

else{
    console.log("hello "+name+" you are young")
}
}

var fruits = ["banana", "orange", "lemon", "mango"];
fruits.push("apple");
fruits.unshift("melon");
console.log(fruits);
fruits.shift();
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[4]);
for(var i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
let sum=0;
let numbers = [43, 12, 66, 102, 23, 98, 11, 6, 2];
for(let i=0;i<numbers.length;i++){
   sum += numbers[i];
}
console.log(sum)

let sum2 = sum/numbers.length;
console.log(sum2);

let counter = 0;

function onparagrathClick(event){
let para = event.target;
para.innerHTML = `someone clicked me! ${++counter} times`;
}
function onparagathMouseOver(event){
    let para = event.target;
    para.innerHTML = "Mouse moved over me!"
}
function  onButtonClick(event){
    let input1 = document.querySelector("#mytext")
    let header1 = document.querySelector("#lecture3")
    header1.innerHTML= input1.value;
}
let paragraph= document.querySelector("#test1");
paragraph.onclick = onparagrathClick;

let p1 = document.querySelector("#test2");
p1.onclick = onparagrathClick;
p1.onmouseover = onparagathMouseOver;

document.querySelector("#btn1").onclick = onButtonClick;
