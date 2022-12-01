let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function () {

  describe("#palindrome", function () {

    it("should return false for a non-palindrome", function () {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for a plain palindrome", function () {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("should return true for a mixed-case palindrome", function () {
      let mixedCase = new Phrase("RaceCar");
      assert(mixedCase.palindrome());
    });

    it("should return true for a non_ASCII palindrome", function () {
      let nonASCII = new Phrase("我是我");
      assert(nonASCII.palindrome());
    });

    it("should return true for a palindrome with punctuation", function () {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctuatedPalindrome.palindrome());
    });

    it("should return false for a empty string", function () {
      let emptyString = new Phrase("");
      assert(!emptyString.palindrome());
    });

    it("should return false for a numeric non-palindrome", function () {
      let numericNonPalindrome = new Phrase(123);
      assert(!numericNonPalindrome.palindrome());
    });

    it("should return true for a numeric palindrome", function () {
      let numericPalindrome = new Phrase(123.21);
      assert(numericPalindrome.palindrome());
    });
  });
});
