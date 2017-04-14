//Strings in JavaScript

let str = `Hello`;

alert( str[1000] ); // undefined
alert( str.charAt(1000) ); //empty string

//-----------------------------------------------------------------------------------
//str.slice(start [, end])
let str1 = "stringify";
alert( str1.slice(0,5) ); // 'string', the substring from 0 to 5 (not including 5)
alert( str1.slice(0,1) ); 
alert( str1.slice(2) ); // ringify, from the 2nd position till the end
alert( str1.slice(-4, -1) );  // start at the 4th position from the right, end at the 1st from the right

//str.substring(start [, end])
//str.substr(start [, length])

//---------------------------------------------------------------------------------------

alert( "Midget".includes("id") ); // true
alert( "Midget".includes("id", 3) ); // false, from position 3 there is no "id"

alert( "Widget".startsWith("Wid") ); 
alert( "Widget".endsWith("get") );  

//Summary

//There are 3 types of quotes. Backticks allow a string to span multiple lines and embed expressions.
//Strings in JavaScript are encoded using UTF-16.
//We can use special characters like \n and insert letters by their unicode using \u....
//To get a character: use [].
//To get a substring: use slice, substring or substr.
//To lowercase/uppercase a string: use toLowerCase/toUpperCase.
//To look for a substring: use indexOf, or includes/startsWith/endsWith for simple checks.
//To compare strings according to the language, use localeCompare, otherwise they are compared by character codes.

//There are several other helpful methods in strings:

//str.trim() – removes (“trims”) spaces from the beginning and end of the string.
//str.repeat(n) – repeats the string n times.
