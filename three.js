// program to convert date to number
// create date

const d = new Date();
console.log(d);

//conversting to number
const result = d.getTime();

// The getTime() method returns the number
//  of milliseconds from midnight of 
// January 1, 1970 (EcmaScript epoch) 
// to the specified date.
console.log(result);