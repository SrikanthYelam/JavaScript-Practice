//Date and Time in JavaScript

alert(new Date());

//new Date(milliseconds) - Create a Date object with the time equal to number of milliseconds (1/1000 of a second) passed after the Jan 1st of 1970 UTC+0.
//The number of milliseconds that has passed since the beginning of 1970 is called a timestamp.
alert(new Date(13075883489890));

//new Date(datestring) 
let date = new Date("2017-04-04");
alert(date);

//new Date(year, month, date, hours, minutes, seconds, ms)
alert(new Date(2011, 0, 1, 0, 0, 0, 0));


//Access methods - getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds(), getMilliSeconds(), getDay()
//All the methods above return the components relative to the local time zone.
//UTC Access methods - add UTC after get in every method like getUTCFullYear(), getUTCMonth().....

//Besides the given methods, there are two special ones, that do not have a UTC-variant:
//getTime() - Returns the timestamp for the date – a number of milliseconds passed from the January 1st of 1970 UTC+0.
//getTimezoneOffset() - Returns the difference between the local time zene and UTC, in minutes:

alert(new Date().getTime());
alert(new Date().getTimezoneOffset());

//The following methods allow to set date/time components:
//setFullYear(year [, month, date])
//setMonth(month [, date])
//setDate(date)
//setHours(hour [, min, sec, ms])
//setMinutes(min [, sec, ms])
//setSeconds(sec [, ms])
//setMilliseconds(ms)
//setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)

//Every one of them except setTime() has a UTC-variant, for instance: setUTCHours().

//When a Date object is converted to number, it becomes the timestamp same as date.getTime():
let date1 = new Date();
alert(+date1);

//Date difference
let start = new Date(); // start counting
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
let end = new Date(); // done
alert( `The loop took ${end - start} ms` );

//Date.now() method - returns current timestamp 
//Can be used to measure the difference, like previous example
let start1 = Date.now(); // start counting
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
let end1 = Date.now(); // done
alert( `The loop took ${end1 - start1} ms` );


//The method Date.parse(str) can read a date from a string.
//The string format should be: YYYY-MM-DDTHH:mm:ss.sssZ

let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
alert(ms); // 1327611110417  (timestamp)

let date2 = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );
alert(date2);

//Summary
//Date and time in JavaScript are represented with the Date object. We can’t create “only date” or “only time”: Date objects always carry both.
//Months are counted from the zero (yes, January is a zero month).
//Days of week in getDay() are also counted from the zero (that’s Sunday).
//Date auto-corrects itself when out-of-range components are set. Good for adding/substracting days/months/hours.
//Dates can be substructed, giving their difference in milliseconds. That’s because a Date becomes the timestamp if converted to a number.
//Use Date.now() to get the current timestamp fast.
