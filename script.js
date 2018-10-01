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
/*

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
*/

////////////////////////////////////////////////////
// Arrays //
/*
// Initialize New Array //
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate Array Data //
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different Data Types //
var john = ['John', 'Smith', 1990, 'designer', false];

// Different Methods

// .push adds data to the end of the array //
john.push('blue');

// .unshift places data at the beginning of the array //
john.unshift('Mr.');

// .pop removes data from the end of the array //
john.pop();
john.pop();

// .shift removes data from the beginning of the array //
john.shift();
console.log(john);

// .indexOf returns position of the argument that is passed in the array //
console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/

////////////////////////////////////////////////////
// Coding Challenge 3 //
/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];
var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];
console.log(tips, finalValues);
*/

////////////////////////////////////////////////////
// Objects and Properties //
/*
// Object literal //
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// New Object Syntax //
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1960;
jane['lastName'] = 'Smith';
console.log(jane);
*/

////////////////////////////////////////////////////
// Objects and Mrthods //
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear) {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/

////////////////////////////////////////////////////
// Coding Challenge 4 //
/*
var mark = {
    fullName: 'Mark Smith',
    mass: 200,
    height: 200,
    calcHeightTwo: function(height) {
        this.calcHeightTwo = this.height * this.height;
    },
    calcBmi: function(calcHeightTwo) {
        this.calcBmi = this.mass / this.calcHeightTwo;
    }
};

var john = {
    fullName: 'John Smith',
    mass: 300,
    height: 250,
    calcHeightTwo: function(height) {
        this.calcHeightTwo = this.height * this.height;
    },
    calcBmi: function(calcHeightTwo) {
        this.calcBmi = this.mass / this.calcHeightTwo;
    }
};

mark.calcHeightTwo();
mark.calcBmi();
john.calcHeightTwo();
john.calcBmi();

console.log(mark);
console.log(john);

if (john.calcBmi > mark.calcBmi) {
    console.log(john.fullName + ' has the highest BMI which is ' + john.calcBmi);
} else if (john.calcBmi < mark.calcBmi) {
    console.log (mark.fullName + ' has the highest BMI which is ' + mark.calcBmi);
} else if (john.calcBmi = mark.calcBmi) {
    console.log(john.fullName + ' and ' + mark.fullName + ' have the same BMI.');
} else {
    console.log('Something went wrong');
}
*/

////////////////////////////////////////////////////
// Loops and Iteration //
/*
for (var i = 0; i < 10; i ++) {
    console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++ //
// i = 1, 1 < 10 true, log i to console, i++ //
//...
// i = 9, 9 < 10 true, log i to console, i++ //
// i = 10, 10 < 10 false, exits the loop //

// For Loop //
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While Loop //
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}


// Continue and Break Statements //
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping Backwards //
for (var i = john.length - 1; i >= 0; i --) {
    console.log(john[i]);
}
*/

////////////////////////////////////////////////////
// Coding Challenge 4 //

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determines percentage based on tipping rules //
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;   
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1
            }

            // Add results to the corresponding arrays //
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

john.calcTips();
console.log(john);