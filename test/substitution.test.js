// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution").substitution;

describe("#substitution", () => {
    it("should encode message with provided alphabet", () => {
        const actual = substitution("ellie", "zyxwvutsrqponmlkjihgfedcba");
        const expected = "voorv";
        expect(actual).to.equal(expected);
    });

    it("should decode encoded message with provided alphabet", () => {
        const actual = substitution(
            "voorv",
            "zyxwvutsrqponmlkjihgfedcba",
            false
        );
        const expected = "ellie";
        expect(actual).to.equal(expected);
    });

    it("should return false if length of provided alphabet is not 26", () => {
        const actual1 = substitution("ellie", "zyxwvutsrqpokjihgfedcba");
        const actual2 = substitution("ellie", "zyxwvutsréçqponmlkjihgfedcba");
        expect(actual1).to.be.false;
        expect(actual2).to.be.false;
    });

    it("should return false if provided alphabet does not contain only unique characters", () => {
        const actual = substitution("ellie", "zyzwzuzszqzozmzkzizgzezcza");
        expect(actual).to.be.false;
    });

    it("should be able to work with any special characters in key", () => {
        const actual = substitution("ellie", "z1x2v3t4r5p6n7l8j9h0f!d@b#");
        const expected = "v66rv";
        expect(actual).to.equal(expected);
    });

    it("should ignore any spaces or special characters not in provided alphabet", () => {
        const actual = substitution("1 ellie #", "zyxwvutsrqponmlkjihgfedcba");
        const expected = "1 voorv #";
        expect(actual).to.equal(expected);
    });

    it("should convert capital characters lowercase", () => {
        const actual = substitution("Ellie", "zyxwvutsrqponmlkjihgfedcba");
        const expected = "voorv";
        expect(actual).to.equal(expected);
    });

    it("should return the same value when run both encoded and decoded", () => {
        const actual = substitution(substitution("ellie", "zyxwvutsrqponmlkjihgfedcba"), "zyxwvutsrqponmlkjihgfedcba", false);
        const expected = "ellie";
        expect(actual).to.equal(expected);
    })
});
