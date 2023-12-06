function reverse(n, inputArr) {
    let reversedArray = [];
    for(let i = 0; i < n; i++) {
        reversedArray.push(inputArr[i]);
    } 
    console.log(reversedArray.reverse().join(" "));
}
