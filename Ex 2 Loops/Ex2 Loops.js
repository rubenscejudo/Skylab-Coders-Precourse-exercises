//a) We want to do a counter, from 0 to 5.
for (var i = 0; i <= 5; i++){
    console.log(i);
}

//b) You can add a message when the count is over?
for (var i = 0; i <= 5; i++){
    console.log(i);
        if (i === 5){
            console.log("COUNT FINISH");
        }
}

COUNT FINISH
//c) Now we want to increase the count to 10. d) You can do the same, but with an array?
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i <= array.length; i++) {
    console.log(array[i]);
}

//e) So, how about create a friend list? Change the array values for your friends names and show in console.
var array = ["enrique", "juanjo", "victor", "pepe"];
for (var i = 0; i <= array.length; i++) {
    console.log(array[i]);
}

//f) Now we want add a number, show for console the array position of your friends behind their names.
var array = ["enrique", "juanjo", "victor", "pepe"];
for (var i = 0; i <= array.length; i++) {
        if (!(i in array)) continue ; // Skip nonexistent elements
        console.log(array[i] + " - nº " + [i + 1]);
}


//Without if (!(i in array)) continue ;
var array = ["enrique", "juanjo", "victor", "pepe"];
for (var i = 0; i <= array.length; i++) {
    console.log(array[i] + " - nº " + [i + 1]);
}
/*enrique - nº 1
juanjo - nº 2
victor - nº 3
pepe - nº 4
undefined - nº 5
 undefined number 5 appears*/

//g) You can add a last friend into a array? Show the updated array for console.
var array = ["enrique", "juanjo", "victor", "pepe"];
array.push("manel");
for (var i = 0; i <= array.length; i++) {
        if (!(i in array)) continue ; // Skip nonexistent elements
        console.log(array[i] + " - nº " + [i + 1]);
}


//h) FINAL!We turn back to numbers... So, we want do a sumatory, the next number in count must sum to previously number

for (var i = 0; i >= 10; i = i + i){
    var result = 0;
    result = result + i;
    console.log(result);
}

//i) You can add the position of all sums?
var n1 = 0;
var n2 = 1;
var n3 = null;
for (var i=0; i<100; i++){
    console.log((n3=n1 + n2) + " POS " + i); 
    n1 = n2;
    n2 = n3;
}

//j) create a loop for show in console the results from 0 to 50 in 5 to 5.
for( var i = 0 ; i <= 50; i = i + 5) {
    console.log(i);
    if (i === 50) {
        console.log("Finish");
    }
}

//k) Now, modify your program for shows the results to 0 to 100, in 10 to 10.
for( var i = 0; i <= 100; i = i + 10) {
    console.log(i);
    if(i === 100){
        console.log("Finish");
    }
}









