let friendsArray = [
  {
    name: "Chris",
    dob: "10/31/1989"
  },
  {
    name: "Charlie",
    dob: "02/01/2010"
  }
]


//getNextBirthday function
function getNextBirthday(string){ //input is dob 03/14/1989
  //get current year birthday
  let arr = string.split("/");
  //change year to current year (2017)
  arr[2] = new Date().getFullYear();
  let nextBirthday = arr.join("/"); //reversing the split
  if (today > new Date(nextBirthday).getTime()){ //if birthday already passed
    arr[2] = Number(arr[2]) + 1; //change string to number in order to add 1
    nextBirthday = arr.join("/"); //update nextBirthday with new year date
  }
  return nextBirthday;
}


//creat a function
function daysUntilDate(dateString){
  //convert string into date format
  //today - "mm/dd/yyyy" returns a number format
  let today = Date.now();
  let inputDate = new Date(dateString).getTime();
  let numOfMilliseconds = inputDate - today;
  let seconds = numOfMilliseconds/1000;
  let minutes = seconds/60;
  let hours = minutes/60;
  let days = hours/24;
  return Math.ceil(days);
}

console.log(daysUntilDate("03/14/2018"));



//create function
function birthdayReminder(friendsArray){
  let friendsBirthdayReminder = [];
  friendsArray.forEach(function(friend){
     friendsBirthdayReminder.push(friend.name + "'s birthday is in " + daysUntilDate(getNextBirthday(friend.dob)) + " days");
  });
  return friendsBirthdayReminder;
}

console.log(birthdayReminder(friendsArray));
//
//   Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
//   date of birth (dob), and returns an array of reminder messages (strings).
//
//   ```javascript
//   birthdayReminder([
//     {
//       name: "Jack",
//       dob: "10/31/2013"
//     },
//     {
//       name: "Jill",
//       dob: "4/01/1975"
//     }
//   ]);
//
//   //=> [
//   //      "Jack's birthday is in 75 days",
//   //      "Jill's birthday is in 305 days"
//   //    ]
//   ```
//
//   Bonuses
//   - Will your function still work tomorrow when the date is different? Is it future proofed?
//   - To make your output more relevant, can you sort by days remaining (ascending)?
//
// */
//
// // YOUR CODE HERE
