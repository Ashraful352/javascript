const age = 45;
const price = 5000;
if ( age<12){
    console.log('give service free')
}
else if( age>60){
    // 50% discount
    const discount = price*50/100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if ( age>40){
    // 20% discount
    const discount = price*20/100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if (age>50){
    //30% discount
    const discount = price*30/100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else{
    console.log(price);
}