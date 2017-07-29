function randomQuote() {
  var random = Math.floor(Math.random() * (quotes.length - 1))
  getQuoteAndAuthor(quotes[random]);
}

function getQuoteAndAuthor(input) {
  document.getElementById('quote-text').innerHTML = input['quote'];
  document.getElementById('author').innerHTML = input['author'];
}

function tweetQuoteAndAuthor() {
  var currentQuote = document.getElementById('quote-text').innerHTML;
  var author = document.getElementById('author').innerHTML;
  window.open("https://twitter.com/intent/tweet?text=" + currentQuote + " " + author)
}
