/*//use DESTRUCTURING assignment to extract values from Objects
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES;

//use DESTRUCTURING assignment to assign variables from objects

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES; */

//use DESTRUCTURING assignment to assign variables from nested objects

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75},
    today: { low: 64, high: 77},
    tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;

// use DESTRUCTURING assignment to assign variables from Arrays
 let a = 8, b = 6;

 [a, b] = [b, a];

 //DESTRUCTURING via rest elements

 function removeFirstTwo(list) {
    return list;
 }
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

//use DESTRUCTURING assignment to pass an object as a function's parameters

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = ({ max, min}) => (max + min) / 2.0;
 