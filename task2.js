

//*Free Drinks 

let burgerprice = 200;
if(burgerprice>300){
    console.log('free Coke');
}
else{
   console.log('cook price 30tk') 
}

//*** BMI Calculator and Health Category

let weight = 9;
let height = 20;
let heightMeaters = height * 0.0254;
let bmi = weight / (heightMeaters*heightMeaters);
console.log(bmi.toFixed(2));
if(bmi>18.5){
    console.log('underweight');
}
else if(bmi>=18.5 && bmi<=24.9){
    console.log('you are normal');
}
else if (bmi>=25 && bmi<=29.9){
    console.log('you are overweight');
}
else{
    console.log('you are obese');
}

// if you get more then 80 then inside your friend score.

let friendScore = 65;
let myscore = 70;
if(myscore>80){
    if (friendScore>80){ 

        console.log('go for a lunch');
    }
else if(friendScore<80 && friendScore>=60){

    console.log('good luck next time');
}
else if(friendScore>60 && friendScore>=40){
    console.log('friends message unseen');
}
else{
    console.log('lock your friend');
}
    }
else{
    console.log("sleep and act sad");
}
    
// you have two numbers in two variables, called: num1, num2 ternary operator 
// condition ? value if true : value of false.

let num1 = 10;
let num2 = 9;

let result = (num1>num2) ? num1*2 : num1 + num2;
console.log(result);

//if(num1>num2){
   // result = num1*2;
//}
//else{
   // result = num1 + num2;
//}
//console.log(result);

// Ticket fare Calculator
let ticketprice = 800;
let isstudent = true;
let age = 60;

if(age<10){
    console.log('childrean free')
}
else if (age >= 60) {
    // senior 15% discount
    let discount = ticketprice * 15 / 100;
    let citizenspay = ticketprice - discount;
    console.log(citizenspay);
}
else if (isstudent){
    // student 50% discount 
    let discount = ticketprice*50/100
    let studentPay = (ticketprice - discount);
    console.log(studentPay);
}

else{
    console.log(ticketprice);
}


  

