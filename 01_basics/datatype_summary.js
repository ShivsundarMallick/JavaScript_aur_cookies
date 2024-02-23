// primitive
// 7 type : String ,Number,Boolean ,null,undefined,Symbol ,Bigint

const score = 100;
const scoreval =100.3;
const isbool =false;
const outsidetemp = null;
let useremail;

const id  = Symbol('123');
const anotherid =Symbol('123');

console.log(id === anotherid); // false

const bignum = 345678902123456374758696n;
// Javascript is a dynamically typed language where we dont have to define the datattype || where the interpreter assigns variables a type at runtime based on the variable's value at the time.

//Reference or non primitive

//Arrays ,Objects, Functions

const heros = ["shhaktiman" , "krish" ,"heior"] // arrays
let myobj = {
    name : "shiv",
    age : 22,
} // object

const myfunction = function (){
    console.log("hello world");
}//function


// ++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive) ,heap (non-primitive)
//in stackmemory  the reference of the datatype is kept as a result the original value of the variable is not changed.

let myYoutubeename = "shiv.com"
let anothername = myYoutubeename;
anothername = "chaiaurcode"

console.log(anothername);// this is using stack memory when the name is changed the refernce(copy) of the original data is used to assign the value of anothername.

// these are objects which are stored in heap memory here the reference of the value is used to assign .
let userone = {
    email: "userone@gmail.com",
    upi: "aser0xal@sal"
}

let usertwo = userone;
usertwo.email = "shiv@jsa.com"

console.log(userone.email);
console.log(usertwo.email);
