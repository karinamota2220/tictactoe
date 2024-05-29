// Exercise:
//1. Use the slice method to return the word "bananas".

let txt = "I can eat bananas all day";
let x = txt.slice(10,17); // didn't undstand why I had to use 10 and 17
console.log(x)

//2. Get the value "Volvo" from the cars array.
const cars = ["Saab", "Volvo", "BMW"];
let y = cars[1]
console.log(y)

//3. Use the correct Date method to extract the year (four digits) out of a date object.
const d = new Date();
year = d.getFullYear();
console.log(d.getFullYear);

//4. Write a JavaScript function to check whether an 
// `input` is an array or not.

let isArray = function(input) {
    if (toString.call(input) === "[object array]")
    // return true if the input is an array
    return true;
    return false;
}

console.log(isArray('working'));
console.log(isArray([1, 2, 4, 0]));

// Basic
// 1. Write a JavaScript program to display
// the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let today = new Date();
let day = today.getDay();
let dayList = ["Sunday", "Monday", "Tuesday", "Wedsday", "Thursday", "Friday", "Saturday"];
console.log("Today is: " + dayList[day] + ".");

// tell the computer to remember things
// DECLARING
let name = "Karina"; // string
let id = 1366; //number
let alive = true; // boolean

// OVERWRITING ASSIGNING NEW VALUES
alive = false;
id = 888
name = "Boruto"

console.log(name);
console.log(id);
console.log(alive);

// add / concatenat to name

name = name + " " + "Naruto"
console.log(name);

moDaoZuShiCharacters = ["Wei Ying", "Lan Zhan", "Jiang Cheng", "Jiang Yanli", "Jin Ling"];
console.log(moDaoZuShiCharacters[0] + " " + moDaoZuShiCharacters[1]);

// if statements

let firstName = "Ying";
let lastName = "Wei";
let age = "22";
let fear = "Darkness";
let first = true;
let last = false;

function testing() {
if (first == last) {
    console.log("This is not true")

} else {
    console.log("just test")

}
}
testing()


// TERNARY STATEMENT
first == last? console.log("nope"):console.log("yep");

// Arrays again

console.log(moDaoZuShiCharacters);
console.log(moDaoZuShiCharacters.length);
console.log(moDaoZuShiCharacters[moDaoZuShiCharacters.length-1]);
console.log(moDaoZuShiCharacters);

moDaoZuShiCharacters.push("Nie Huaisang");
moDaoZuShiCharacters.push("Lan Xichen");
console.log(moDaoZuShiCharacters)

moDaoZuShiCharacters.pop();
console.log(moDaoZuShiCharacters);

moDaoZuShiCharacters.unshift("Jin Guangyao");
console.log(moDaoZuShiCharacters);

moDaoZuShiCharacters.shift();
console.log(moDaoZuShiCharacters);


moDaoZuShiCharacters.splice(3, 1, "Lan Sizhui")
console.log(moDaoZuShiCharacters);

moDaoZuShiCharacters.sort();
console.log(moDaoZuShiCharacters);


// OBJECTS
let weiYingFear = {"whatIsIt":"animal", "type": "dog"};
let lanZhanFear = {"whatIsIt":"Losing people", "who": "Wei Ying"};
let jiangChengFear = {"whatIsIt":"Losing people", "who": "His family"};

console.log(weiYingFear)
console.log(lanZhanFear)
console.log(jiangChengFear)

let characters = ["Wei Ying", "Lan Zhan"];
console.log(characters)
let chaFears = [{"whatIsIt":"animal", "type": "dog"}];
console.log(chaFears);

chaFears.push({"nameOfTormenter":"Yu Ziyuan", "Weabon":"Whip"});
console.log(chaFears);

// adding to the object

weiYingFear.otherFear = "DEATH"
console.log(weiYingFear)

//for loops

let tianGuanCiFu = ["Hua Cheng", "San Lang", "Xie Lian", "Qi Rong", "Feng Xin", "Ling Wen", "Wind Master"]
let numNames = tianGuanCiFu.length;
console.log(numNames)

// setup/initialize; comparison/test; change/increment
for(let i = 0; i < numNames; i++) {
    console.log(tianGuanCiFu[i])

}

// for..in loop
let languages = {"Portuguese":"Brazil & Portugal", "English":"United States & United Kingdoms", "Chinese":"China & Taiwan"};
console.log(languages)

for (let separate in languages) {
    console.log(separate);
    console.log(languages[separate]);
}