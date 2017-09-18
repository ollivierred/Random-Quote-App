/*
Project One: Random Quote Generator
Course: Teamtreehouse Techdegree
*/

var quotes = [
  {
    quote: "To build a mighty tower, you must bet all of your effort and potential to it.",
    source: "Effort Anonymous",
    citation: "",
    year: ""
  },
  {
    quote: "There has never yet been a man in our history who led a life of ease whose name is worth remembering.",
    source: "Theodore Roosevelt",
    citation: "",
    year: ""
  },
  {
    quote: "It is easier to go down a hill than up, but the view is from the top.",
    source: "Arnold Bennett",
    citation: "",
    year: ""
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
    quote: "In the past, those who foolishly sought power by riding on the back of the tiger ended up inside.",
    source: "John F. Kennedy",
    citation: "",
    year: ""
  }
]

var randQuoteIndex;
var qLength = quotes.length;

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById( 'loadQuote' ).addEventListener( "click", function printQuote(){
  document.getElementById('quote-box').innerHTML = quoteString();
});

// This function will generate the random rbg color value, which will be used to change the background color
function getRandomColor() {
  var red = Math.floor( Math.random() * 256 );
  var green = Math.floor( Math.random() * 256 );
  var blue = Math.floor( Math.random() * 256 );
  var randColor = red + green + blue;
  // return randColor;
}

//Generates the random index number
function getRandomIndex() {
  return Math.floor( Math.random() * qLength );
}

function getRandomQuote() {
  var qIndex = getRandomIndex();
  randIndex = quotes[qIndex];
  return randIndex;
}

//Assembles the contents of the stored quote into a string, and stores it in message. Also checkes if the qoute has citation and year.
function quoteString () {
  var newIndex = getRandomQuote();
  var qString =  '<p class="quote">'+ newIndex.quote + '</p>' +
                    '<p class="source">'+ newIndex.source + '<span class="citation">'+ newIndex.citation + '</span><span class="year">'+ newIndex.year + '</span></p>';
  return qString;
}
