//a) Let's start with simple exersice, declare your name, if your name is bigger than 8 letters, show a message
var name = "ruben"
if (name.length >= 8) {
    console.log(name);
}

//b) Add your lastname and compare separated
var name = "ruben";
var surname = "sanchez";
if (name.length >= 8) {
    console.log(name);
}
if (surname.length >= 8) {
    console.log(surname);
}

//c) Now, compare between they and show who is bigger.
var name = "ruben";
var surname = "sanchez";
if (name.length > surname.length) {
    console.log(name);
} else if (name.length < surname.length) {
    console.log(surname);
}

//d) CAlCULATOR. Multiply two numbers, so, compare the result with IF conditionals, if the result is > 10, show a message, if is < 10, show other message
var product = function (num1, num2) {
    var res = num1 * num2;
        if (res > 10) {
            console.log("The product is bigger than 10 ");
        } else if (res < 10) {
            console.log("The product is smaller than 10");
        }
};
product(4,5);
The product is bigger than 10

//e) Then, what happen if we multiply 5*"word"? The result is NaN (Not a Number), then we can control this error with other conditional, right? Let's do this.
function multiplicar(num1,num2) {
    if(isNaN(num1*num2)){console.log("isNaN");}
    else if(num1*num2>=10){console.log("suma superior a 10");}
    else{console.log("suma inferior a 10");}

multiplicar(2,7);

// CLOCK. Let's do other simply program that you pass one param. to a function, and the IF conditionals should print a message saying: Good morning/afternoon/night

function saludo(hour){
    if(hour>6 && hour<12){
        console.log("good morning");
    }
    else if (hour>=12 && hour<=18){
        console.log("good afternoon");
    }
    else {console.log("good night");}
}

saludo(12)

//g) After that, Now, compare with the local hour

var d = new Date ();
var n = d.getHours();
function theHour(hour) {
    if (n < hour) {
        console.log("The specify hour is after now");
    } else {
        console.log("The specify hour is before now");
    }
}

//h) IF the specify hour is equal to local hour? Control this exception!
var d = new Date ();
var n = d.getHours();
function theHour(hour) {
    if (n < hour) {
        console.log("The specify hour is after now");
    } else if (n === hour) {
        console.log("The specify hour is now");
    } else {
        console.log("The specify hour is before now");
    }
}

//i) BEATLES. Now we want to make a program that we specify the members of the Beatles, if are all the Beatles in the array, show "We're all!", if you specify 3 Beatles for example, say other thing.
var beatles = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var answer = prompt ("What are The Beatles name's?");
if (beatles === answer) {
    console.log("We're all!");
} else {
    console.log("We aren't all!")
}

//j) Now, declare an empty array and do a function that PUSH the names of all Beatles, the conditional IF should return "We're all!".
var beatles = [];
function theBeatles (name1, name2, name3, name4) {
    beatles.push(name1, name2, name3, name4);
    if (beatles.length === 4) {
        console.log("We're all");
    } else {
        console.log("Something failed");
    }
}

theBeatles("John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr");

"We're all"


//l) ALEATORIO. Create a function that randomize a number and specify if the number are above or under the half of the maximum.
function aleat(min, max) {
    var val = Math.floor(Math.random()*max) + min;
    var mitad = max / 2;
    if (val > mitad) {
        console.log("El numero " + val + " esta por encima de la mitad (" + max + "/2)");
    } else {
        console.log("El numero " + val + " esta por debajo de la mitad (" + max + "/2)");
    }
}

"esta todavia algo falla con max"

//m) Challenge!! - Simple Scripting program. Create a program that transform a 4 number values code to diferents positions, making a new code. Something like: 3712 👇 7123 👇 1237 👇 2371 The first, go to the last position, second, third and four goes up.

var code = [3,7,1,2];
for (var i = 0; i < 3; i++){
code.push(code.shift());
console.log(code);
}

Array [ 7, 1, 2, 3 ]
Array [ 1, 2, 3, 7 ]
Array [ 2, 3, 7, 1 ]

//n) Super-Challenge!! Create a program that use the Roman form for encrypt messages, how is that? Simple. If you have SKYLAB, the encrypted form is SLKYAB... If you divided the word in two groups of 3 letters, you get: SKY |-|-| LAB Then, join the S with L, K with A and Y with B, and you get SLKYAB.

function roman (str) {

var str = 0;
var arrayStr = str.split("");
var arrayStr1 = arrayStr.slice(0, 3);
var arrayStr2 = arrayStr.slice(3);
var encryptedStr = [];
for  (var i = 0; i <= arrayStr1.length; i++) {
    if (!(i in arrayStr1)) continue ; // Skip nonexistent elements
    encryptedStr = encryptedStr + arrayStr1[i] + arrayStr2[i];
}

console.log(encryptedStr);




var encryptedStr = 0;
var arrayEncrypted = encryptedStr.split("");
var arrayDecrypted1 = [];
var arrayDecrypted2 = [];


for(var i = 0; i <= arrayEncrypted.length; i++) {
    if (i % 2 === 0) {
        arrayDecrypted1.push(arrayEncrypted[i]);
     } else {
        arrayDecrypted2.push(arrayEncrypted[i]);
     }
}
console.log(arrayDecrypted1.join("") + arrayDecrypted2.join(""));
};

// Funciona
function roman (str) {

var arrayStr = str.split("");
var arrayStr1 = arrayStr.slice(0, 3);
var arrayStr2 = arrayStr.slice(3);
var encryptedStr = [];

for  (var i = 0; i <= arrayStr1.length; i++) {
    if (!(i in arrayStr1)) continue ; // Skip nonexistent elements
    encryptedStr = encryptedStr + arrayStr1[i] + arrayStr2[i];
}

console.log(encryptedStr);


var arrayEncrypted = encryptedStr.split("");
var arrayDecrypted1 = [];
var arrayDecrypted2 = [];


for(var i = 0; i <= arrayEncrypted.length; i++) {
    if (i % 2 === 0) {
        arrayDecrypted1.push(arrayEncrypted[i]);
     } else {
        arrayDecrypted2.push(arrayEncrypted[i]);
     }
}
console.log(arrayDecrypted1.join("") + arrayDecrypted2.join(""));
};
roman("SKYLAB");






