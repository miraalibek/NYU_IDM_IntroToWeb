//Simple JS to remember


//send any messages to the developer's console. good for debugging!
//console.log('Hellooooooooooooo!');



// VARIABLES
// Defining a variable with var + type of values: string

//var firstName


//storing integers + floats
//var num



//console.log(num+num2);







// ARRAYS
////var groceries = ['milk', 'eggs', 'bread', 'coffee'];

//console.log(groceries);

//arrays are indexed
//console.log(groceries[0]);

//var toDo = ['go to the store', 'send emails', 'call mom', 'feed the cat']

//var stuffToDo = toDo.length; // array property
//var moreStuff = groceries.join(" * "); //array method, it got those () > pop() removes last element, push() adds a new element


//console.log(stuffToDo + ' ' + moreStuff);

//multidimensional array
//var multiArray= [groceries, toDo];

//console.log(multiArray[0][2] + " and "+ multiArray[1][3]);

//writing inside an HTML Element (we'll talk about DOM next class)
//document.getElementById('here').innerText= multiArray[0][1];





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





// sometimes you need to execute a function, it's called invocation!




/*
function changeMyColor(){
  document.getElementById('func_result').style.background="green";
}

changeMyColor();
*/



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
