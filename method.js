  let randomQuote =() => {
  let random = Math.floor(Math.random() * (quotes.length - 1))
  getQuoteAndAuthor(quotes[random]);
}

let getQuoteAndAuthor = (input) => {
  document.getElementById('quote-text').innerHTML = input['quote'];
  document.getElementById('author').innerHTML = input['author'];
}

 let tweetQuoteAndAuthor = () => {
  let currentQuote = document.getElementById('quote-text').innerHTML;
  let author = document.getElementById('author').innerHTML;
  window.open("https://twitter.com/intent/tweet?text=" + currentQuote + " " + author)
}
