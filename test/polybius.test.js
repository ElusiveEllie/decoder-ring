// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius").polybius;

describe("#polybius", () => {
    it("should encode letter and space strings to numbers from polybius square", () => {
        const actual = polybius("ellie");
        const expected = "5113134251";
        expect(actual).to.equal(expected);
    });

    it("should decode number pairs to letters", () => {
        const actual = polybius("5113134251", false);
        const expected = "ell(i/j)e";
        expect(actual).to.equal(expected);
    });

    it("should convert capital characters lowercase", () => {
        const actual = polybius(polybius("ELLIE"), false);
        const expected = "ell(i/j)e";
        expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42", () => {
        const actual = polybius("ij");
        const expected = "4242";
        expect(actual).to.equal(expected);
    });

    it("should translate 42 to indicate either i or j", () => {
        const actual = polybius("42", false);
        const expected = "(i/j)";
        expect(actual).to.equal(expected);
    });

    it("should add spaces to translations", () => {
        const actual1 = polybius("ellie bellie");
        const actual2 = polybius("5113134251 215113134251", false);
        const expected1 = "5113134251 215113134251";
        const expected2 = "ell(i/j)e bell(i/j)e";
        expect(actual1).to.equal(expected1);
        expect(actual2).to.equal(expected2);
    });

    it("should return false if encode is false and the number of characters excluding spaces is odd", () => {
        const actual = polybius("511313425", false);
        expect(actual).to.be.false;
    });

    it("should return the same value when run both encoded and decoded", () => {
        const actual = polybius(polybius("ellie"), false);
        const expected = "ell(i/j)e";
        expect(actual).to.equal(expected);
    })
});
