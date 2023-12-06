function repeat(input, word) {
    while (input.includes(word)) {
        input = input.replace(word, "*".repeat(word.length));
    }
    console.log(input);
}

