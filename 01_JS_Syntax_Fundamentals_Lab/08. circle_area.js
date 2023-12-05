function area(arg) {
    let result;
    const radius = 3.14159;
    if (typeof arg == 'number') {
        result = radius * (arg) ** 2
        console.log(result.toFixed(2))
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof arg}.`)
    }
}
