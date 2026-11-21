//this a constant temperature measure
const kelvin = 0;
//substracting 273 from kelvin to get the temp in celsius
let celsius = kelvin - 273;
//coverting celsius to fahrenheit with formula and making sure its an integer
let fahrenheit = Math.floor(celsius * (9/5) + 32);

let newton = Math.floor(celsius * (33/100));


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)
console.log(`The temperature is ${newton} degrees newton?`)
