
var randomNumber = Math.floor( Math.random() * quotes.length);
var quotes = [
  "Effort is only effort when it begins to hurt.",

  "Success is almost totally dependent upon drive and persistence. The extra energy required to make another effort or try another approach is the secret of winning.",

  "In the past, those who foolishly sought power by riding on the back of the tiger ended up inside.",

  "The results you achieve will be in direct proportion to the effort you apply.",

  "It is easier to go down a hill than up, but the view is from the top."
]
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
