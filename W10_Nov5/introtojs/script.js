//send any messages to the developer's console

//console.log('Hellooooooooooooo!');

//defining variables

//something that stands for something else
//sets a value to something
//puts a name to a value
//storing a value inside 

//a variable that contains a string
var firstName = 'Sarah'
var lastName = ' Dahnke'
//console.log(firstName)
//console.log(lastName)

//console.log(firstName[2]);

//string concatenation 
//console.log(firstName + lastName)

//storing integers 
var num = 5

//storing float
var num2 = 5.4

//console.log(num + num2)
// subtract -
// divide /
// multiply * 

//creating an array

//holds a set
//is a list

//arrays in JS can have mixed data types
var firstArray = ['bert', 'ernie', 'big bird', 'snuffie']

//console.log(firstArray);

//arrays are indexed
//console.log(firstArray[0]);

var secondArray = ['kermit', 'miss piggy', 'gonzo', 'swedish chef']

//multidimensional array
var thirdArray = [firstArray, secondArray]

//console.log(thirdArray[1][2]);

//set up control flow
//if and else statements

// <
// >
//<=
//>=
// ==
// ===

var num3 = 10

//if (num3 === 14){
//    console.log('your number is the correct number')
//}else if{ (num > 10)
//    console.log ('your number is too big')
//}else{
//    console.log('you did not choose a number')
//}

//functions are operations or methods

function sayHello(){
    console.log('helloooooooooooo')
}

function addNumber(numberOne, numberTwo){
    return numberOne + numberTwo //return exists the function
}

//console.log(addNumber(40, 60));

//create a function that is a virtual door
//if the user goes through the tacos door, give them a message about delicious tacos
//if the user goes through the pizza door, give them a message about yummy pizza
//if the user goes through the noodles door, give them a message about awesome noodles

//function that holds an if/else statement inside of it

//you will test your doors by calling the function 

//function foodDoor(){
//    if //goes through the tacos door
//    //give message about delicious tacos
//        //alert
//        else if //goes through the pizza door
//            //give them a message about yummy pizza
//            else //if the user goes through the noodles door
//                //give them a message about noodles
//}

//function foodDoor(door){
//     //goes through the tacos door, give message about delicious tacos
//    if (door ==='tacos'){
//        console.log('Tacos are delicious')
//    }else if( door === 'pizza'){//goes through the pizza door, give tjem a message about yummy pizza
//        console.log('Pizza is yummy')
//    } else if(door === 'noodle'){ // if the  user goes through the noodle door, give them message about awesome noodles
//        console.log('Noodles are awesome')
//    }else{
//        console.log('please pick an appropriate door!')
//    }
//}
//
//foodDoor('mcdonalds')


function foodDoor(door) {
	var output = 'Behind this door there is '
	if (door === 1) {
		output += 'Super Tacos'
	} else if (door === 2) {
		output += 'NY Pizzas'
	} else if (door === 3) {
		output += 'Ramen Noodles'
	} else {
		output += 'Nothing'
	}
	console.log(output)
}

foodDoor(3)




















































