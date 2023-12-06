function fruit(typeOfFruit, grams, price) {
    let kilograms = grams * 0.001;
    console.log(`I need $${(kilograms * price).toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${typeOfFruit}.`);
}
