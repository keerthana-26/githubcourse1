function reverseNumber(number){
    let reverse = 0;

    while(number>0){
        let digit = number % 10 ; //It gives the last digit of the number.
        reverse = reverse * 10 + digit;  //we shift the number left before adding the next digit.
        number = Math.floor(number/10); //Math.floor() removes the decimal part.
    }
    return reverse;
}

console.log(reverseNumber(54654)); //45645