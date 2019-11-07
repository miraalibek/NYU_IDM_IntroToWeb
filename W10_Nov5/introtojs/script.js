//Simple JS to remember


//send any messages to the developer's console. good for debugging!
//console.log('Hellooooooooooooo!');


console.log("Hello,class!");



// VARIABLES
// Defining a variable with var + type of values: string

//var firstName

/*
var firstName='Joe';
var lastName='Doe';
console.log(firstName + " "+ lastName);
*/

//storing integers + floats
//var num

var num1= 10;
var num2= 10.4;

console.log(num1+num2);

var shoppingList = ['bread','milk','peanut butter','apples'];
console.log(shoppingList.length);

//

console.log(shoppingList[0]);

var toDo = ['go to the store', 'send emails', 'call mom', 'feed the cat', 'clean room', 'go to the store', 'send emails', 'call mom', 'feed the cat', 'clean room'];

var multiArray= [shoppingList, toDo];

console.log(multiArray[0][2] + " and "+ multiArray[1][3]);



var stuffToDo = toDo.length;
var moreStuff = shoppingList.join(" * ");

document.getElementById('here').innerHTML=moreStuff;

// array property
//var moreStuff = groceries.join(" * "); //array method, it got those () > pop() removes last element, push() adds a new element


//console.log(stuffToDo + ' ' + moreStuff);

//multidimensional array
//

//console.log(multiArray[0][2] + " and "+ multiArray[1][3]);

//writing inside an HTML Element (we'll talk about DOM next class)
//document.getElementById('here').innerText= multiArray[0][1];

var b;
var text="";
for (b=0; b<shoppingList.length;b++ ){
   text += shoppingList[b] + " <br> ";
}
document.getElementById('loopResult').innerHTML=text;


if (toDo.length<10 && shoppingList.lenght<1){
  document.getElementById('ifResult').innerText="let's do it";
} else{
  document.getElementById('ifResult').innerText="nope";
}


//LOOP THROUGH AN ARRAY
/*var i;
var text =" ";
for (i = 0; i < groceries.length; i++) {
  text += groceries[i] + " <br> ";
}*/

// check out the innerHTML vs innerText
//document.getElementById('loopResult').innerHTML= text;

//what are all the funny operators here: https://www.w3schools.com/js/js_operators.asp
//more info on loops: https://www.w3schools.com/js/js_loop_for.asp






// IF STATEMENTS
// if too many groceries, I don't want to get them!


/*if (groceries.length<=10){
  document.getElementById('ifResult').innerText= "fine, i am going to the store";
}else{
  document.getElementById('ifResult').innerText= "i am staying home and eating chocolate";
}*/






// FUNCTIONS!
// this is how you get stuff done!






/*function myFunctionName(firstParameter, secondParamenter){
  return(firstParameter+secondParamenter);
}

var a = 6;
var b = 7;

document.getElementById('func_result').innerText=myFunctionName(a,b);
*/


function myFunctionName(firstParameter, secondParamenter){
  return(firstParameter+secondParamenter);
}

var a = 6;
var b = 7;

document.getElementById('func_result').innerText=myFunctionName(a,b);



// sometimes you need to execute a function, it's called invocation!





function changeMyColor(){
  document.getElementById('ifResult').style.background="pink";
}

changeMyColor();




//you can store function in a VARIABLES
/*var mult = function (blah1, blah2) {return blah1 * blah2};
document.getElementById("func_result2").innerHTML= mult(4, 100);*/



// you can add time to your functions by setting Intervals
//check out the text animation example

// we want to cycle through our toDo list
/*var loc=0;
var duration=0;
var addTime = setInterval(timeItOut, duration); // this gives it some timing, you say what function and how long


function timeItOut(){

  if (duration<300){
    duration++;
  }else{
    document.getElementById('animate_it').innerText=toDo[loc];
    clearInterval(addTime);
  }

}*/
