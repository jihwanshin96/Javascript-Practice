//01-stringCompare.js//

if ('ABC' > 'AB'){
  alert('true')
} else {
  alert('false')
}

//02-numberCompare.js//

var num = 15;

if (num === 25){
  alert('correct!')
} else if (num > 25){
  alert('too large!')
} else{
  alert('please try again')
}

//03-functionCombine.js//

var firstName = "Eric";
var lastName = "Shin";
var space = " ";

function fullName() {
  console.log(firstName + space +lastName);
}

fullName();

//04-functionConditions.js//

function person(num){
  if (num === 1){
    return "Taylor Swift";
  } else if (num === 2){
    return "Ariana Grande";
  } else if (num === 3){
    return "Miley Cyrus"
  } else {
    return "Mariah Carey because she is the Queen of Christmas"
  }
}

console.log(person(1));
console.log(person(2));
console.log(person(3));
console.log(person(4));

//05-randomWords.js//

var firstArray = ["sexy","awful","gross","gorgeous","enormous"];
var secondArray = ["pancakes","handcuffs","carousels","toast","giraffes"];

var randomIndex1 = Math.floor( Math.random() * firstArray.length );
var randomIndex2 = Math.floor( Math.random() * secondArray.length );
//console.log(randomIndex);

console.log(firstArray[randomIndex1] + " " + secondArray[randomIndex2]);
