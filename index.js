import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
const final2014 = fifaData.filter(function(element){
    if(element["Year"] === 2014 && element["Stage"] === "Final"){
        return element;
    }
})
console.log(final2014[0]["Home Team Name"])
console.log(final2014[0]["Away Team Name"])
console.log(final2014[0]["Home Team Goals"])
console.log(final2014[0]["Away Team Goals"])
if(final2014[0]["Home Team Goals"] > final2014[0]["Away Team Goals"]){
    console.log(final2014[0]["Home Team Name"])
}
else{
    console.log(final2014[0]["Away Team Name"])
}

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(array) {

    let newarray = [];
    for(let i = 0; i < array.length; i++){
      if(array[i].Stage === "Final"){
        newarray.push(array[i]);
      }
    }
    return newarray
};
console.log(getFinals(fifaData))

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(array,func) {

let newarray = func(array);
let yearArray = [];
for(let i = 0; i < newarray.length; i++){
    yearArray.push(newarray[i].Year);
}
return yearArray
};
console.log(getYears(fifaData, getFinals))

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(array, func) {

    let newarray = func(array);
    let winnerArray = [];
    for(let i = 0; i < newarray.length; i++){
        if(newarray[i]["Home Team Goals"] > newarray[i]["Away Team Goals"]){
            winnerArray.push(newarray[i]["Home Team Name"]);
        }
        else {
            winnerArray.push(newarray[i]["Away Team Name"]);
        }
    }   
    return winnerArray
};
console.log(getWinners(fifaData, getFinals))

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(yearF, winnerF) {
    let yearArray = yearF(fifaData, getFinals)
    let winnerArray = winnerF(fifaData, getFinals)
    for(let i = 0; i < yearArray.length; i++){
    console.log("In " + yearArray[i] +", "+ winnerArray[i] + " won the world cup!")
    }
};
getWinnersByYear(getYears, getWinners);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let homeGoals = [];
    let awayGoals = [];

    data.forEach(function(element){
         homeGoals.push(element["Home Team Goals"])
    });
    data.forEach(function(element){
        awayGoals.push(element["Away Team Goals"])
   });
     const reducer = (accumulator, currentValue, length) => accumulator + currentValue;
     let homeAverage = homeGoals.reduce(reducer) / homeGoals.length
     let awayAverage = awayGoals.reduce(reducer) / awayGoals.length
     return "Average Home Goals: " + homeAverage +"\nAverage Away Goals: " + awayAverage

};
console.log(getAverageGoals(fifaData))

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
