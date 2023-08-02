// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar").caesar;

describe("#caesar()", () => {
    it("should shift text right when encoded with a positive number", () => {
        const actual = caesar("ellie", 1);
        const expected = "fmmjf";
        expect(actual).to.equal(expected);
    });

    it("should shift text left when encoded with a negative number", () => {
        const actual = caesar("fmmjf", -1);
        const expected = "ellie";
        expect(actual).to.equal(expected);
    });

    it("should ignore non-alphabetical characters", () => {
        const actual = caesar("1 ellie bellie", 1);
        const expected = "1 fmmjf cfmmjf";
        expect(actual).to.equal(expected);
    });

    it("should convert capital letters lowercase", () => {
        const actual = caesar("ELLIE", 1);
        const expected = "fmmjf";
        expect(actual).to.equal(expected);
    });

    it("should wrap around the alphabet if necessary", () => {
        const actual1 = caesar("zebra", 1);
        const actual2 = caesar("ellie", -6);
        const expected1 = "afcsb";
        const expected2 = "yffcy";
        expect(actual1).to.equal(expected1);
        expect(actual2).to.equal(expected2);
    });

    it("should reverse direction when encode is false", () => {
        const actual = caesar("fmmjf", 1, false);
        const expected = "ellie";
        expect(actual).to.equal(expected);
    });

    it("should return false when shift is less than -25, 0, or greater than 25", () => {
        const actual1 = caesar("ellie", 0);
        const actual2 = caesar("ellie", -26);
        const actual3 = caesar("ellie", 26);
        expect(actual1).to.be.false;
        expect(actual2).to.be.false;
        expect(actual3).to.be.false;
    });

    it("should return the same value when run both encoded and decoded", () => {
        const actual = caesar(caesar("ellie", 2), 2, false);
        const expected = "ellie";
        expect(actual).to.equal(expected);
    })
});
