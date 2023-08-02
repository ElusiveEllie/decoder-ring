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
    function validityChecker(input) {
        // Remove spaces
        input = input.split(" ");
        input = input.join("");
        return input.length % 2;
    }

    // Encode letters to numbers
    function encoder(input) {
        // Create empty result string
        let result = "";

        // Loop through input string
        for (let character of input) {
            // Skip spaces
            if (character === " ") {
                result += character;
                continue;
            }

            // Convert i's and j's to "(i/j)"
            if (character === "i" || character === "j") character = "(i/j)";

            // Loop through square
            for (const row in square) {
                for (const column in square[row]) {
                    // If character is found in polybius square, add numbers of square to result
                    if (square[row][column] === character) {
                        result += Number(column) + 1;
                        result += Number(row) + 1;
                    }
                }
            }
        }
        return result;
    }

    // Decode numbers to letters
    function decoder(input) {
        // Create empty result string
        let result = "";

        // Loop through input string, increasing i by 2 each loop to loop through pairs of numbers
        for (let i = 0; i < input.length; i += 2) {
            // If current character is a space, add to result string and subtract 1 from i to progress to immediate next character at loop
            if (input[i] === " ") {
                result += input[i];
                i -= 1;
                continue;
            }

            // Turn number pair from input string into column and row to access polybius square
            const column = Number(input[i]);
            const row = Number(input[i + 1]);

            // Add letters from polybius square into result string
            result += square[row - 1][column - 1];
        }
        return result;
    }

    function polybius(input, encode = true) {
        // Check if number provided is valid when decoding
        if (!encode && validityChecker(input)) return false;

        // Make all letters lowercase
        input = input.toLowerCase();
        return encode ? encoder(input) : decoder(input);
    }

    return {
        polybius,
    };
})();

module.exports = { polybius: polybiusModule.polybius };
