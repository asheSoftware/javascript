function calculateTip(amount,tip)
{
    let percent=(tip/100);
    let tipAmount=amount+percent;
    let totalAmount=tipAmount+amount;
    console.log("This is your tip percente   "+percent);
    console.log("This is the tip amount  "+tipAmount);
    console.log("This is the total Amount  "+totalAmount);

}
calculateTip(100,23);
