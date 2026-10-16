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

}
//const fahrenhietToCelsius= (f)= 
//4
function formatprice(amount,currency ="RWF"){
        return `${amount.toLocaleString()},${currency}`;
}

formatprice(20,"USD");
console.log(`${formatprice(1000)}`);
