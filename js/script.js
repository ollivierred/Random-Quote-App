
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
    quote: "",
    source: "",
    citation: "",
    year: ""
  },
  {
    quote: "",
    source: "",
    citation: "",
    year: ""
  },

]
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
