// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("#caesar()", () => {
    it("should shift text right when encoded with a positive number", () => {
        actual = caesar.caesar("ellie", 1);
        expected = "fmmjf";
        expect(actual).to.equal(expected);
    });

    it("should shift text left when encoded with a negative number", () => {
        actual = caesar.caesar("fmmjf", -1);
        expected = "ellie";
        expect(actual).to.equal(expected);
    });

    it("should ignore non-alphabetical characters", () => {
        actual = caesar.caesar("1 ellie bellie", 1);
        expected = "1 fmmjf cfmmjf";
        expect(actual).to.equal(expected);
    });

    it("should convert capital letters lowercase", () => {
        actual = caesar.caesar("ELLIE", 1);
        expected = "fmmjf";
        expect(actual).to.equal(expected);
    });

    it("should wrap around the alphabet if necessary", () => {
        actual1 = caesar.caesar("zebra", 1);
        actual2 = caesar.caesar("ellie", -6);
        expected1 = "afcsb";
        expected2 = "yffcy";
        expect(actual1).to.equal(expected1);
        expect(actual2).to.equal(expected2);
    });

    it("should reverse direction when encode is false", () => {
        actual = caesar.caesar("fmmjf", 1, false);
        expected = "ellie";
        expect(actual).to.equal(expected);
    });

    it("should return false when shift is less than -25, 0, or greater than 25", () => {
        actual1 = caesar.caesar("ellie", 0);
        actual2 = caesar.caesar("ellie", -26);
        actual3 = caesar.caesar("ellie", 26);
        expect(actual1).to.be.false;
        expect(actual2).to.be.false;
        expect(actual3).to.be.false;
    });
});
