var randQuote;
var randQuoteNum;
var message;
var quotes = [
  {
    quote: "Effort is only effort when it begins to hurt.",
    source: "José Ortega y Gasset",
    citation: "In Search of Goethe",
    year: "1949"
  },
  {
    quote: "A mind that is stretched by a new experience can never go back to its old dimensions.",
    source: "Oliver Wendell Holmes",
    citation: "The Autocrat of the Breakfast Table",
    year: "1858"
  },
  {
    quote: "Success is almost totally dependent upon drive and persistence. The extra energy required to make another effort or try another approach is the secret of winning.",
    source: "Denis Waitley"
  },
  {
    quote: "The person who tries to live alone will not succeed as a human being. His heart withers if it does not answer another heart. His mind shrinks away if he hears only the echoes of his own thoughts and finds no other inspiration.",
    source: "Pearl S. Buck",
    citation: "To My Daughters, With Love",
    year: "1967"
  },
  {
    quote: "They who lack talent expect things to happen without effort. They ascribe failure to a lack of inspiration or ability, or to misfortune, rather than to insufficient application. At the core of every true talent there is an awareness of the difficulties inherent in any achievement, and the confidence that by persistence and patience something worthwhile will be realized. Thus talent is a species of vigor.",
    source: "Eric Hoffer",
    citation: "Harper & Row, p. 67",
    year: "1982"
  },
]
var quotesLength = quotes.length;
function getRandNum() {
  var randNum = Math.floor( Math.random() * quotesLength );
  return randNum;
}

function getRandomQuote() {
  for ( var i=0; i < quotesLength; i++ ) {
    randQuoteNum = getRandNum();
    /* In this part of the fuction, the quote and all its contents are stored in a new varible called "randQuote". Using the "getRandNum" function, a random whole number is generated, then its returned value is placed into the quotes array index. Thus creating random index numbers / random quotes.  */
    randQuote = quotes[i];
    // Using the dot dot object notation, the quote stored in randQuote and all its values can now be accessed.
    if ( randQuote.citation === undefined && randQuote.year === undefined ) {
      console.log ('Citation and year are missing.');
    } else {
      var message = '<p class="quote">'+ randQuote.quote + '</p>' +
                    '<p class="source">'+ randQuote.source +
                      '<span class="citation">'+ randQuote.citation + '</span>' +
                      '<span class="year">'+ randQuote.year + '</span>' +
                    '</p>';
      console.log ('No errors present');
    }
  }
  return message;
}
function quoteTransition () {
  var timer = setInterval(printQuote, 5000);
}
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById( 'loadQuote' ).addEventListener( "click", function printQuote() {
  message = getRandomQuote();
  document.querySelector('#quote-box').innerHTML = message;
  console.log (message);
});
