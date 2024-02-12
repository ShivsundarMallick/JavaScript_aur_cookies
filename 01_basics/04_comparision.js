 console.log("2" > 1); // true
 console.log("02" > 1);//true

 console.log(null > 0);//false
 console.log(null == 0);//false
 console.log(null >= 0);//true
 //reason is that an equality check == and comparision >,<,>= ,<= works differently.comparision convert null to a number treatint it as 0 thats why null>= 0 is true and null > 0 is false

 console.log(undefined == 0); //false
 console.log(undefined > 0); // false
 console.log(undefined < 0);//false

 // === for strict checking

 console.log( "2" === 2) // it checks the value as well as the datatype