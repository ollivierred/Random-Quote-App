var randQuoteIndex;
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

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById( 'loadQuote' ).addEventListener( "click", function printQuote(){
  document.getElementById('quote-box').innerHTML = quoteString();
  console.log ( getRandomIndex() );
});

var previousNum = []
var quotesLength = quotes.length;

function getRandomIndex() {
  var randIndex = Math.floor( Math.random() * quotesLength );
  return randIndex;
}

function getRandomColor() {
  var red = Math.floor( Math.random() * 256 );
  var green = Math.floor( Math.random() * 256 );
  var blue = Math.floor( Math.random() * 256 );
  // var randColor = 'rgb('+ red +',' + green+',' + blue +');';
  // return randColor;
}

function getRandomQuote() {
  for ( var i=0; i < quotesLength; i++ ) {
    randQuoteIndex = getRandomIndex();
    /* In this part of the fuction, the quote and all its contents are stored in a new varible called "randQuote". Using the "getRandNum" function, a random whole number is generated, then its returned value is placed into the quotes array index. Thus creating random index numbers / random quotes.  */
    randQuote = quotes[randQuoteIndex];
    return randQuote;
    // Using the dot dot object notation, the quote stored in randQuote and all its values can now be accessed.
    }
}

function quoteString () {
  var randQuote = getRandomQuote();
  if ( randQuote.citation === undefined || randQuote.year === undefined ) {
    return message = '<p class="quote">'+ randQuote.quote + '</p>' + '<p class="source">'+ randQuote.source + '</p>';
  } else {
    var message = '<p class="quote">'+ randQuote.quote + '</p>' +
                  '<p class="source">'+ randQuote.source +
                    '<span class="citation">'+ randQuote.citation + '</span>' +
                    '<span class="year">'+ randQuote.year + '</span>' +
                  '</p>';
    return message;
  }

}
