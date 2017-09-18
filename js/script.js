/*
Project One: Random Quote Generator
Course: Teamtreehouse Techdegree
*/
// Holds the database of quotes
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

// Stores length of quotes array
var qLength = quotes.length;
var qString;

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById( 'loadQuote' ).addEventListener( "click", printQuote, false);

// Generates the random index number
function getRandomIndex() {
  return Math.floor( Math.random() * qLength );
}
// Calls and stores the value from "getRandomIndex"
// The random value is then used to retrieve an object based on its index number
// The contents of the object are then stored in the variable randIndex
function getRandomQuote() {
  var qIndex = getRandomIndex();
  var randIndex = quotes[qIndex];
  return randIndex;
}

// Assembles the quotation string
function printQuote () {
  // Stores returned value from "getRandomQuote"
  var indexForQuote = getRandomQuote();
  // Checks if citation or year is present in the quote, and constructs the string accordingly
  if (indexForQuote.citation === "" && indexForQuote.year === "") {
    qString = '<p class="quote">'+ indexForQuote.quote + '</p>' + '<p class="source">'+ indexForQuote.source + '</p>';
  } else if (indexForQuote.citation === "") {
    qString =  '<p class="quote">'+ indexForQuote.quote + '</p>' + '<p class="source">'+ indexForQuote.source + '<span class="year">'+ indexForQuote.year + '</span></p>';
  } else if (indexForQuote.year === "") {
    qString = '<p class="quote">'+ indexForQuote.quote + '</p>' + '<p class="source">'+ indexForQuote.source + '<span class="year">'+ indexForQuote.citationa +'</span></p>';
  } else {
    qString = '<p class="quote">'+indexForQuote.quote+'</p>'+'<p class="source">'+indexForQuote.source+'<span class="citation">'+ indexForQuote.citation+'</span>'+'<span class="year">'+ indexForQuote.year+'</span></p>';
  }
  // Edits the HTML code within the "quote-box" div
  document.getElementById('quote-box').innerHTML = qString;
}
