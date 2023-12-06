function cooking(number,...operations) {
    for(let i = 0; i < operations.length; i++) {
        if (operations[i] == "chop") {
            number /= 2;
        } else if (operations[i] == "dice") {
            number = Math.sqrt(number);
        } else if (operations[i] == "spice") {
            number += 1;
        } else if (operations[i] == "bake") {
            number *= 3;
        } else if (operations[i] == "fillet") {
            number -= number * 0.2
        }
        console.log(number)
    }
}
