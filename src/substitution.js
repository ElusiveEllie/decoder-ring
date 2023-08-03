// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
    // you can add any code you want within this function scope

    // Helper function to apply substitution
    function applySubstitution(input, startingAlphabet, endingAlphabet) {
        // Create empty result string and object
        const result = [];
        const foundSubstitutions = {};

        // Loop through input
        for (const character of input) {
            // Substitute and continue if character has already been found before
            if (foundSubstitutions[character]) {
                result.push(foundSubstitutions[character]);
                continue;
            }

            // Find index of character
            index = startingAlphabet.indexOf(character);

            // If character is not in startingAlphabet, add to result as is and place in foundSubstitutions
            if (index === -1) {
                result.push(character);
                foundSubstitutions[character] = character;
                continue;
            }

            // Add character from endingAlphabet in same position to result and add to foundSubstitutions
            result.push(endingAlphabet[index]);
            foundSubstitutions[character] = endingAlphabet[index];
        }
        return result.join("");
    }

    // Helper function to determine if alphabet is unique
    function isUnique(input) {
        // Create empty object
        const result = {};

        // Loop through input
        for (const character of input) {
            // If object already has a key for the character, return false
            if (result[character]) return false;

            // Otherwise, create a key for the character
            result[character] = true;
        }
        return true;
    }

    // Create default alphabet for translation
    const englishAlphabet = "abcdefghijklmnopqrstuvwxyz";
    function substitution(input, alphabet, encode = true) {
        // Return false if alphabet isn't the proper length
        if (!alphabet || alphabet.length != englishAlphabet.length)
            return false;

        // Return false if characters aren't all unique
        if (!isUnique(alphabet)) return false;

        alphabet = alphabet.toLowerCase();
        input = input.toLowerCase();
        // Apply substitution based on encoding or decoding
        return encode
            ? applySubstitution(input, englishAlphabet, alphabet)
            : applySubstitution(input, alphabet, englishAlphabet);
    }

    return {
        substitution,
    };
})();

module.exports = { substitution: substitutionModule.substitution };
