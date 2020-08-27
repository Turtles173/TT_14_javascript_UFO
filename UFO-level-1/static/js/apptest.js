// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Select the button
var filterButton = d3.select("#filter-btn");

// Create a d3 reference to the datetime input
var inputDate = d3.select("#datetime");

// Create event handlers 
filterButton.on("click", runEnter);
inputDate.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {
  
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = inputDate.select("input");
  
  // Get the value property of the input element
  var userInput = inputElement.property("value");  
  
  // Use the form input to filter the data by date of UFO sighting
  var matchingResults = tableData.filter(tableData => tableData.datetime == userInput);
  
  // get the element for printing out the results
  var ufoElement = d3.select(".ufo-table");
  
  // handle no matching results
  if (matchingResults.length == 0) {
    ufoElement.html("");
    ufoElement.append("td").text(`There were no UFO's on the ${userInput}`);
    return;
  }

console.log(ufoElement);
  
};