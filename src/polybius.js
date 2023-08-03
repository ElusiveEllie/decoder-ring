// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
    // you can add any code you want within this function scope

    // Set up Polybius Square as array of arrays
    const square = [
        ["a", "b", "c", "d", "e"],
        ["f", "g", "h", "(i/j)", "k"],
        ["l", "m", "n", "o", "p"],
        ["q", "r", "s", "t", "u"],
        ["v", "w", "x", "y", "z"],
    ];

    // Verify numbers provided when decoding are divisible by 2
    function checkValidity(input) {
        // Remove spaces
        input = input.split(" ").join("");
        return input.length % 2 === 0;
    }

    // Encode letters to numbers
    function encoder(input) {
        // Create empty result string
        const result = [];

        // Dictionary to hold letters for later access
        const seenLetters = {};

        // Loop through input string
        characterLoop: for (let character of input) {
            // Convert i's and j's to "(i/j)"
            if (character === "i" || character === "j") character = "(i/j)";

            // If letter has already been seen, add to result and move to next loop
            if (seenLetters[character]) {
                result.push(seenLetters[character]);
                continue characterLoop;
            }

            // Loop through square
            for (let row = 0; row < square.length; row++) {
                for (let column = 0; column < square[row].length; column++) {
                    // Add each letter and its number to seenLetters if it's not already present
                    if (!seenLetters[square[row][column]]) {
                        seenLetters[square[row][column]] = `${column + 1}${row + 1}`;
                    };

                    // Push letter to result if it matches current spot in square and continue to next character
                    if (square[row][column] === character) {
                        result.push(seenLetters[character]);
                        continue characterLoop;
                    }
                }
            }
        }
        return result.join("");
    }

    // Decode numbers to letters
    function decoder(input) {
        // Create empty result string
        const result = [];

        // Loop through input string, increasing i by 2 each loop to loop through pairs of numbers
        for (let i = 0; i < input.length; i += 2) {
            // Turn number pair from input string into column and row to access polybius square
            const column = Number(input[i]);
            const row = Number(input[i + 1]);

            // Add letters from polybius square into result string
            result.push(square[row - 1][column - 1]);
        }
        return result.join("");
    }

    function polybius(input, encode = true) {
        // Check if number provided is valid when decoding
        if (!encode && !checkValidity(input)) return false;

        // Make all letters lowercase
        input = input.toLowerCase();

        // Split input by spaces
        const words = input.split(" ");
        const translatedWords = [];

        // Add to array each word translated
        for (const word of words) {
            translatedWords.push(encode ? encoder(word) : decoder(word));
        }

        // Rejoin array with spaces
        return translatedWords.join(" ");
    }

    return {
        polybius,
    };
})();

module.exports = { polybius: polybiusModule.polybius };
