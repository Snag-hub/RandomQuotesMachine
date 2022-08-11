// Thanks to Useful Programmer Youtube channel
window.onload = go;
function go() {
  // Triggers genRandQuote when New Quote button is clicked
  $("#new-quote").click(function() {
    genRandQuote();
  });
  
  $("#tweet-quote").click(function() {
    
  });

  // Generate a random quote when window is loaded initially
  genRandQuote();
}
const API_url = "https://type.fit/api/quotes";
// Generates a random quote from the quote variable and renders it to DOM
function genRandQuote() {
  // Get a random quote from the quote variable
  $.getJSON(API_url, function(data) {
    var randNum = Math.floor(Math.random() * data.length);
    var quote = data[randNum].text;
    var author = data[randNum].author;
    var tweetURL = stringToClickToTweetURL(quote + " - " + author);
    $("#tweet-quote").attr("href", tweetURL);
    $("#text").html(quote);
    $("#author").html(author);
  });
}


// This function makes strings into click to tweet URLS
function stringToClickToTweetURL(str) {
  
  // Convert to Click to Tweet URL
  var stringToConvert = str.split(" ").join("%20").split("@").join("%40").split("!").join("%21");

  // Put 'Click to Tweet' URL suffix at the begining
  var resultString = "https://twitter.com/intent/tweet?text=" + stringToConvert;

  // Return properly formatted "Click to Tweet URL"
  return resultString;
}