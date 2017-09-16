var randQuoteIndex;
var quotes = [
  // {
  //   quote: "",
  //   source: "",
  //   citation: "",
  //   year: ""
  // },
  {
    quote: "To build a mighty tower, you must bet all of your effort and potential to it.",
    source: "Effort Anonymous",
  },
  {
    quote: "There has never yet been a man in our history who led a life of ease whose name is worth remembering.",
    source: "Theodore Roosevelt",
  },
  {
    quote: "Inscribe all human effort with one word, artistry's haunting curse, the Incomplete!",
    source: "Robert Browning",
  },
  {
    quote: "It is easier to go down a hill than up, but the view is from the top.",
    source: "Arnold Bennett",
  },
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
    quote: "In the past, those who foolishly sought power by riding on the back of the tiger ended up inside.",
    source: "John F. Kennedy",
  }
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
    return message = '<p class="quote">'+ randQuote.quote + '</p>' +
                  '<p class="source">'+ randQuote.source +
                    '<span class="citation">'+ randQuote.citation + '</span>' +
                    '<span class="year">'+ randQuote.year + '</span>' +
                  '</p>';
  }

}
