// object can be created by 2 type literal and by constructor 
//singleton is created when a object is created by constructor
//object.create this way is used to create a object through constructor.

// ************** this is object literals*
const mysym = Symbol("key1")// symbol datatype 

const jsuser ={
    name : "shiv",
    "full-name" : "shiv sundar mallick",
    email: "shiv@gmail.com",
    [mysym]: "mykey1", // syntax for decalring symbol in an object
    age : 17,
    isloggin:false,
    lastloggedin:["monday","tuesday"]
}

console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full-name"]);
console.log(jsuser[mysym]);

jsuser.email ="mallick@gmail.com";
// Object.freeze(jsuser); this is use to freez the object so that changes canot be done .
jsuser.email = "sundar@gammil.com";

jsuser.greeting = function(){
    console.log("hello js users");
}
console.log(greeting());
jsuser.greetingtwo = function(){
    console.log(`hello js user ${this.name}`) // here the this command is used to refer the same object.
}
console.log(greetingtwo());


