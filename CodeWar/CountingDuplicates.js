/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and 
numeric digits that occur more than once in the input string.
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits. */

function duplicateCount(text) {
    let count = 0;
    let textArray = text.toLowerCase().split("");
    let uniqueArray = textArray.filter((letter, index) => {
        return textArray.indexOf(letter) === index;
    });
    uniqueArray.forEach((letter) => {
        if (textArray.filter((l) => l === letter).length > 1) {
            count++;
        }
    });
    return count;
}
console.log(duplicateCount("Indivisibilities"));