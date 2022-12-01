let Phrase = require("awesome-palindrome");

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

document.addEventListener("DOMContentLoaded", function () {
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit", function (event) {
    palindromeTester(event);
  });
});
