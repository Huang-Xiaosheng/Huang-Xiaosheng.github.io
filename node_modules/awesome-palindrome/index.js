module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = String(content);

  // Returns content processed for palindrome testing.
  this.processedContent = () => {
    return (this.content.match(/[\p{L}0-9]+/gu) || []).join("").toLowerCase();
  };

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = () => {
    let testedContent = this.processedContent();

    return testedContent === testedContent.reverse() &&
           testedContent.length > 0;
  }
}
