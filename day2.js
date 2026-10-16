
/*
1. EVEN OR ODD
Pseudocode:
- Take a number.
- If the number divided by 2 has remainder 0, print "even".
- Otherwise, print "odd".
*/

let number = 7;

if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}


/*
2. GRADE CALCULATOR
Pseudocode:
- Check whether the score is outside 0–100.
- If invalid, print "Invalid score" and stop.
- Otherwise, determine the grade using the score ranges.
*/

function getGrade(score) {
    if (score < 0 || score > 100) {
        return "Invalid score";
    }

    if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else if (score >= 50) {
        return "D";
    } else {
        return "F";
    }
}

console.log(getGrade(85));  // A
console.log(getGrade(75));  // B
console.log(getGrade(45));  // F
console.log(getGrade(110)); // Invalid score


/*
3. TICKET PRICE
Pseudocode:
- If the person is over 65, the ticket is free.
- Otherwise, if the person is under 12, charge 2,000 RWF.
- Otherwise, if the person is a student, charge 3,000 RWF.
- Otherwise, charge 5,000 RWF.
*/

function ticketPrice(age, isStudent) {
    if (age > 65) {
        return 0;
    } else if (age < 12) {
        return 2000;
    } else if (isStudent) {
        return 3000;
    } else {
        return 5000;
    }
}

console.log(ticketPrice(8, false));   // 2000
console.log(ticketPrice(20, true));   // 3000
console.log(ticketPrice(30, false));  // 5000
console.log(ticketPrice(70, false));  // 0


/*
4. DAY PLANNER
Pseudocode:
- Take a day name.
- Use switch to check the day.
- Print the class activity for Monday to Friday.
- Print "No class" on weekends.
*/

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("JavaScript basics");
        break;
    case "Tuesday":
        console.log("Functions");
        break;
    case "Wednesday":
        console.log("Loops");
        break;
    case "Thursday":
        console.log("Arrays");
        break;
    case "Friday":
        console.log("Practice and revision");
        break;
    case "Saturday":
    case "Sunday":
        console.log("No class");
        break;
    default:
        console.log("Invalid day");
}


/*
5. COUNTDOWN
Pseudocode:
- Start at 10.
- Use a loop to print numbers down to 1.
- After the loop, print "Liftoff!".
*/

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("Liftoff!");


/*
6. SUM AND AVERAGE
Pseudocode:
- Create the given array.
- Set sum to 0.
- Use for...of to add each number to sum.
- Calculate average by dividing sum by array length.
- Print the sum and average.
*/

const scores = [45, 78, 90, 62, 88];
let sum = 0;

for (const score of scores) {
    sum += score;
}

const average = sum / scores.length;

console.log("Sum:", sum);
console.log("Average:", average);


/*
7. FIND THE FIRST NUMBER GREATER THAN 100
Pseudocode:
- Create an array of numbers.
- Check each number using a loop.
- If a number is greater than 100, print it.
- Use break to stop the loop immediately.
*/

const numbers = [20, 55, 101, 150, 200];

for (const num of numbers) {
    if (num > 100) {
        console.log("First number greater than 100:", num);
        break;
    }
}


/*
8. SKIP NEGATIVES
Pseudocode:
- Create an array containing positive and negative numbers.
- Loop through the array.
- If a number is negative, skip it using continue.
- Otherwise, print the number.
*/

const values = [10, -5, 7, -2, 20, 0, 15];

for (const value of values) {
    if (value < 0) {
        continue;
    }

    console.log(value);
}


/*
9. MULTIPLICATION TABLE
Pseudocode:
- Start a loop at 1 and stop at 12.
- Multiply 7 by each loop number.
- Print the multiplication in the required format.
*/

for (let i = 1; i <= 12; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}


/*
10. FIZZBUZZ WITH KIGALI
Pseudocode:
- Loop through numbers from 1 to 30.
- If divisible by both 3 and 5, print "FizzBuzz".
- Otherwise, if divisible by 7, print "Kigali".
- Otherwise, if divisible by 3, print "Fizz".
- Otherwise, if divisible by 5, print "Buzz".
- Otherwise, print the number.
*/

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 7 === 0) {
        console.log("Kigali");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
