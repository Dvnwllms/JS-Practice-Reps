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
/*
var age = 29;

if (age < 20) {
    console.log('Devon is a teenager');
} else if (age >= 20 && age < 30) {
    console.log('Devon is a young man.');
}else {
    console.log('Devon is a man.');
}

var job = 'teacher';

job = prompt('What does Devon do?');

switch (job) {
    case 'teacher':
        console.log('Devon taught Liam Neeson his particular set of skills.');
        break
    case 'driver':
        console.log('Devon is Dom Torettos favorite driver.');
        break
    case 'cop':
        console.log('Devon is Batman and fights crime.');
        break
    default:
        console.log('Devon does things.');
}
*/

/////////////////////////////////////////////////////
// CODING CHALLENGE 1 //
/*
var johnAge = 32;
var dudeAge = 30;
var johnHeight = 180;
var dudeHeight = 170;

var johnScore = johnHeight + johnAge * 5;
// console.log(johnScore);

var dudeScore = dudeHeight + dudeAge * 5;
// console.log(dudeScore);

/*
if (johnScore > dudeScore) {
    console.log('John is the winner with a score of ' + johnScore + ' points!');
} else if (dudeScore > johnScore) {
    console.log('Dude is the winner with a score of ' + dudeScore + ' points!');
} else {
    console.log('Its a tie!');
}

var maryHeight = 150;
var maryAge = 31;
var maryScore = maryHeight + maryAge * 5;

if (johnScore > dudeScore && maryScore) {
    console.log('John is the winner with a score of ' + johnScore + ' points!');
} else if (dudeScore > johnScore && maryScore) {
    console.log('Dude is the winner with a score of ' + dudeScore + ' points!');
} else if (maryScore > johnScore && dudeScore) {
    console.log('Mary is the winner with a score of ' + maryScore + ' points!');
} else {
    console.log('It\'s a three way tie!');
}
*/

////////////////////////////////////////////////////
// Functions //
/*
function calculateAge (birthYear) {
    return 2018 - birthYear;
}

var ageDevon = calculateAge(1989);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageDevon, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
   var age = calculateAge(year);
   var retirement = 65 - age;
   
   if (retirement > 0) {
   console.log(firstName + ' retires in ' + retirement + ' years.')
   } else {
       console.log(firstName + ' is already retired.');
   }
}

yearsUntilRetirement(1989, 'Devon');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

////////////////////////////////////////////////////
// Functions Statements and Expressions //

// Function Declaration //
//function whatDoYouDo(job, firstName) {} //

//Function Expression //
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstname + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' design beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
