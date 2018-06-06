// Lecture: Variables //
/*
var name = 'Devon';
console.log(name);

var lastName = 'Williams';
console.log(lastName);

var age = 29;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// Lecture: Variables 2 //
/*
var name = 'Devon';
var age = 29;

//console.log(name + age);
//console.log(age + age);


var job, isMarried;

//console.log(job);

job = 'bawse';
isMarried = false;

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

age = 'twenty nine';
job = 'supa bawse';

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//var lastName = prompt('What is the last name?');
//console.log(lastName);

alert(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
*/

/////////////////////////////////////////////////////
// Lecture: Operators //
/*
var now = 2018;
var birthYear = now - 29;

birthYear = now - 29 * 2;
// 2018 - 58 //
// 1960 //

console.log (birthYear);

var ageDevon = 29;
var ageBob = 29;

ageDevon = ageBob = (3 + 5) * 4 - 3;
//ageDevon = ageBob = 29
//ageDevon = 29

ageDevon++;
ageBob *= 2;
ageBob = ageBob * 2;

console.log(ageDevon);
console.log(ageBob);
*/

/////////////////////////////////////////////////////
// Lecture: if/else statements //
/*
var name = 'Devon';
var age = '29';
var isMarried = 'no';

if (isMarried === 'yes') {
    // if(false) //
    console.log(name + ' is married!');
    // else(true) //
} else {
    console.log(name + ' will hopefully get married soon :)')
}

isMarried = false;


if(isMarried) {
    console.log('YES!');
} else {
    console.log('NO!');
}


if(isMarried) {
    console.log('YES!');
}

if (23 === "23") {
    console.log('Something to print...');
}
*/

/////////////////////////////////////////////////////
// Lecture: boolean logic and switch //

var age = 29;

if (age < 20) {
    console.log('Devon is a teenager');
} else {
    console.log('Devon is an adult');
}
