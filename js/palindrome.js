// Adds `reverse` to all strings.
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = String(content);

  // Returns content processed for palindrome testing.
  this.processedContent = () => {
    return (this.content.match(/[a-z0-9]/ig) || []).join("").toLowerCase();
  };

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = () => {
    let testedContent = this.processedContent();

    return testedContent === testedContent.reverse() &&
      testedContent.length > 0;
  }
}

function palindromeTester(event) {
  event.preventDefault();

  let textarea = event.target.phrase;
  let phrase = new Phrase(textarea.value || textarea.placeholder);
  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.palindrome()) {
    palindromeResult.classList.remove("result-fail");
    palindromeResult.classList.add("result-success");
    palindromeResult.innerHTML = 
            `<strong>"${phrase.content}"</strong> is a palindrome!`;
  } else {
    palindromeResult.classList.remove("result-success");
    palindromeResult.classList.add("result-fail");    
    palindromeResult.innerHTML = 
            `<strong>"${phrase.content}"</strong> is not a palindrome.`;
  }
}

let tester = document.querySelector("#palindromeTester");
tester.addEventListener("submit", function (event) {
  palindromeTester(event);
});
