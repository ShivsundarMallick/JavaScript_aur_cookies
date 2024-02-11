let score = undefined

console.log(typeof score);

let valueinnumber = Number(score);
console.log(typeof valueinnumber)
console.log(valueinnumber);

//conversion-----------------
//"33" => 33
//"33abc" => NaN(Not a Number)
//true => 1; false => 0
//null => 0
//undefined => NaN

let islogged = 1;

let booleanislogged = Boolean(islogged);
console.log(booleanislogged); 

//1 => true ; 0 => false
//"" => false
// "shiv" => true

let somenumber = 33;

let stringNumber = String(somenumber);
console.log(somenumber);
console.log(typeof somenumber);

//********************** Operations ********

let value = 3
let negvalue = -value
console.log(negvalue); // output => -3

let str1 = "hi"
let str2 = " shiv"

let str3 = str1+str2;
console.log(str3); // output => hi shiv

console.log("1" + 2)//output=> 12
console.log(1 + "2")//output=> 12
console.log("1" + 2 + 2)//output=> 122
console.log(1 + 2 + "2") //output => 32

console.log(+true); //output => 1
console.log(+""); //output => 0

let gamecounter = 100
gamecounter++;
console.log(gamecounter);//output => 101
