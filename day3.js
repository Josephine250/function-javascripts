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
