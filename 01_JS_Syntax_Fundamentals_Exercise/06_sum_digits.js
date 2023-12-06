function sumDigits(number) {
    let sum = 0;
    let digits = number.toString();

    for(let i = 0; i < digits.length; i ++) {
        sum += parseInt(digits[i]);
    }
    console.log(sum);

}
