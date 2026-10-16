//1 
const square = (n) => n*n
{
        console.log(`${square(3)}`);
        console.log(`${square(2)}`);
        console.log(`${square(0)}`)
}
//2
function isEven(n){
        return n % 2===0;
}
        console.log(`${isEven(2)}`);
        console.log(`${isEven(9)}`);
        console.log(`${isEven(0)}`);
//3
const celsiusToFahrenheit=(c) =>(c*1.8)+32
{
        console.log(`${celsiusToFahrenheit(20)}`)
        console.log(`${celsiusToFahrenheit(0)}`)
        console.log(`${celsiusToFahrenheit(41)}`)

}
//const fahrenhietToCelsius= (f)= 
//4
function formatprice(amount,currency ="RWF"){
        return `${amount.toLocaleString()},${currency}`;
}

formatprice(20,"USD");
console.log(`${formatprice(1000)}`);
//5
const getGrade = (marks) =>{
        if(marks < 0||marks >100 ){
                return "invalid marks"
        }
        if(marks >= 80){
                grade :"A";
        }
        else if(marks >=70){
                return "B"
        }
        else if (marks >= 60){
                return "C";
        }
        else if (marks >= 50){
                return "D"
        }
        else{
                return "failure"
        }
};
console.log (getGrade(70));
console.log (getGrade(40));
console.log (getGrade(-10));

//6
function max_number(number){
        let max = number[0];
        for ( let i = 0;i < number.length;i++){
              if (number[i]> max){
                max = number[i];
              }
        }
        return max;
}
console.log(max_number([20,10,30,47]));
console.log(max_number([2,3,9,7]));
console.log(max_number([20,-7,1,0,-15]));
//7

const toCapitalizer = (text) => {
    return text[0].toUpperCase() + text.slice(1);
};

console.log(toCapitalizer("kigali"));
console.log(toCapitalizer("hello"));
console.log(toCapitalizer("welcame "));
//8
const countVowels = (text) => {
    let count = 0;
    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        if (
            text[i] === "a" ||
            text[i] === "e" ||
            text[i] === "i" ||
            text[i] === "o" ||
            text[i] === "u"
        ) {
            count++;
        }
    }

    return count;
};

console.log(countVowels("kigali"));       
console.log(countVowels("EDUCATION"));    
console.log(countVowels("rhythm"));  

//9
const isPalindrome = (word) => {
    word = word.toLowerCase();

    return word === word.split("").reverse().join("");
};

console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));  
console.log(isPalindrome("Level"));   
//10
const repeatAction = (times, callback) => {
    for (let i = 1; i <= times; i++) {
        callback(i);
    }
};

repeatAction(3, (round) => {
    console.log("Round:", round);
});
//11
const createCounter = (start = 0) => {
    let count = start;

    return {
        increment: () => {
            count++;
        },

        decrement: () => {
            count--;
        },

        getValue: () => {
            return count;
        }
    };
};

const counter = createCounter(5);

console.log(counter.getValue());

counter.increment();
console.log(counter.getValue());

counter.decrement();
console.log(counter.getValue()); 

//12
const makeDiscount = (percent) => {
    return (price) => {
        return price - (price * percent / 100);
    };
};

const discount10 = makeDiscount(10);
const discount20 = makeDiscount(20);

console.log(discount10(100)); // 90
console.log(discount20(100)); // 80
console.log(discount10(500)); // 450