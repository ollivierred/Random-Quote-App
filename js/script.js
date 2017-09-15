
var randomNumber = Math.floor( Math.random() * quotes.length);
var quotes = [
  {
    quote: "Effort is only effort when it begins to hurt.",
    source: "José Ortega y Gasset",
    citation: "In Search of Goethe",
    year: "1949"
  },
  {
    quote: "A mind that is stretched by a new experience can never go back to its old dimensions."
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
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
