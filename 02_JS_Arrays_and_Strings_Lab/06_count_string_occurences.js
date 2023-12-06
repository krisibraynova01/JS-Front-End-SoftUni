function count(input, searchString) {
    let words = input.split(" ");
    let counter = 0;
    for (let w of words) {
        if (w === searchString) {
            counter++;
        }
    }
    console.log(counter);
}
