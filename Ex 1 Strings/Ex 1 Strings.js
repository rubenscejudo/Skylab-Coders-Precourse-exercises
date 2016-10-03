
//a) Define a string var with your name b) Now, show your name in console terminalvar name = "ruben";
console.log(name);
ruben

//c) Fine, now, define a var with your age and show your age and name also using the console
var age = 37;
console.log(name + ", " + age);
ruben, 37

//e) Now, show your info with a pretty presentation message
function showMyData (name, age) {
  console.log("My name is " + name + ", and I'm " + age + " years old");
}
showMyData("ruben", 37);
"My name is ruben, and I'm 37 years old"

//f) Add a new parameter to the function for your current city, Can you RETURN the updated presentation message?
var myData = showMyData("ruben", 37, "granada");
function myData (name, age, city) {
  console.log("My name is " + name + ", and I'm " + age + " years old and I live in " + city);
}

"My name is ruben, and I'm 37 years old and I live in granada"

//g) Modify your function to receive data in an array. Should return the same
var showMyData = ["ruben", bbbbb, "granada"];
var myData = showMyData;
function myData () {
    if (typeof myData[1] === 'undefined'){
        console.log("ERROR!")
    }

}
console.log(myData);
//i) Modify your function to receive values in a string separated by '|'. Should return the same (also the error logic)
var myData = "Ruben|37|Granada"
function showMyData(){
    var array=myData.split("|");
    if (typeof array[1] != "number") {
        console.log("El segundo valor debe ser un número");
    }
    else {
console.log("My name is " + array[0] + " " + ", i am " + array[1] + " "+"years old and i am from" +" "+ array[2]);
}
}
showMyData()

//j) Add a new function to your program that insert a new value in the array, asure the changes are completed in console.
var myData = ["ruben", 37, "granada"];
function addValue(value) {
    myData.push(value);
    console.log(myData);
}
addValue("well-travelled");

Array [ "ruben", 37, "granada", "well-travelled" ]

//k) Now, after insert some new values, modify the function for return the array values separated by '&'.
var myData = ["ruben", 37, "granada", "well-travelled"];
function addValue(value) {
    myData.push(value);
    var separator = myData.join(" & ");
    console.log(separator);
}

ruben & 37 & granada & well-travelled










