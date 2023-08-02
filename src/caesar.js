// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
    // you can add any code you want within this function scope

    // Create alphabet for caesar cypher
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    function caesar(input, shift, encode = true) {
        // Return false if shift is 0 or outside length of alphabet
        if (shift < -25 || shift === 0 || shift > 25) return false;

        // Reverse the shift if decoding
        if (!encode) shift *= -1;

        // Make all letters lowercase and create result string
        input = input.toLowerCase();
        let result = "";

        // Loop through input string
        for (const letter of input) {
            // Find index of letter
            let index = alphabet.indexOf(letter);

            // Add spaces to result and continue loop
            if (index === -1) {
                result += letter;
                continue;
            }

            // Apply shift to index
            index += shift;

            // If shift is beyond bounds of alphabet length, adjust to wrap around alphabet
            if (index > 25) index -= 26;
            if (index < 0) index += 26;

            // Add new letter to result
            result += alphabet[index];
        }
        return result;
    }

    return {
        caesar,
    };
})();

module.exports = { caesar: caesarModule.caesar };
