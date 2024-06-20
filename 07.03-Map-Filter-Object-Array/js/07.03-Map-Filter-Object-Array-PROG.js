// 07.03 Lab - PROG

// Array Callback Methods Review
// use forEach(), map(), filter(), sort(), find() and reduce() methods to
// get and set this data, an array of objects:

let lakersGreats = [
  { team: "Lakers", fName: "Lebron", lName: "James", active: true, pts: 37062 },
  {
    team: "Lakers",
    fName: "Magic",
    lName: "Johnson",
    active: false,
    pts: 17707,
  },
  {
    team: "Lakers",
    fName: "Russell",
    lName: "Westbrook",
    active: true,
    pts: 23298,
  },
  {
    team: "Lakers",
    fName: "Kareem",
    lName: "Abdul-Jabbar",
    active: false,
    pts: 38387,
  },
  {
    team: "Lakers",
    fName: "Anthony",
    lName: "Davis",
    active: true,
    pts: 14390,
  },
  {
    team: "Lakers",
    fName: "Shaquille",
    lastName: "O'Neal",
    active: false,
    pts: 28596,
  },
];

// loop
// before doing forEach() version, first loop through
// the lakersGreats array and log all players, including
// boolean team.active converted to activeStatus string

// refactor:
// A. instead of a for-loop, use the forEach method
// B. simplify item.active == true to the boolean item.active
// C. trim if-else by moving "actively playing" to console.log

// refactor again:
// A. use arrow => syntax instead of function keyword for callbacks
// B. ternary instead of if-else, where possible
//    ternary set equal to variable stores true/false return value

// loop
// before doing filter() version, first loop through
// the lakersGreats array and log info for active players only
// the function has a second parameter: flag
// function expects second argument: "active" or "inactive"

// flag arg alternative to "active" does not have to be "inactive"
// any string besides "active" counts as "inactive"

// refactor:
// A. filter() method instead of for loop
// B. if-else sets isActive boolean based on flag arg "active" or not
//   two return values: filter method and the filterPlayers function

// refactor again:
// A. => instead of function keyword
// B. ternary instead of if-else

// sorting arrays of objects by string and number key
// 2nd arg can be "name" or "points"
// the sort is by points

// map()
// use map to return a new array called pointSummmaries:
// ex: "Lebron James has 37,062 career points."
//     add comma to points with points.toLocaleString("en-US");

// copy lakersGreats to lakersGreatsCopy
// use forEach() to add two new properties to each lakersGreatsCopy object:
// fullName and pointsStr
// use map() to do the same as above, except this time, you get a new array

// filter() make a team of only players with at least 25000 pts

// filter() -- less is more!
// make a team of only players with less than 20000 pts
// use ultra-concise syntax:
// no parentheses around the callback argument, item
// no curly braces for callback
// no return keyword
// no semi-colon at end of callback line

// reduce()
// first use a loop to add up all the points

// use reduce() method to add up all the points

// more concise syntax: don't need 0 accumulator which is the default datatype

// use find() to find the first player with more than 30000 pts

// use findIndex() to find the index of the first player with less than 20000 pts
// use more concise syntax
