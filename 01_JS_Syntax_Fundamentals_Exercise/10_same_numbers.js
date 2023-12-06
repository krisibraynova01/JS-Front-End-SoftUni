function checkSameDigits(number) {
    let allDigitsSame = true;
    let sum = 0;
    const digits = number.toString();

    for (let i = 0; i < digits.length - 1; i++) {
        if (digits[i] !== digits[i + 1]) {
            allDigitsSame = false;
        }
        sum += parseInt(digits[i]);
    }

    sum += parseInt(digits[digits.length - 1]);

    console.log(allDigitsSame);
    console.log(sum);
}
