// Assign the data from `data.js` to a descriptive variable
var tableData = data;
var tbody = d3.select("tbody")

// Select the button
var filterButton = d3.select("#filter-btn");

// Create a d3 reference to the datetime input
var inputDate = d3.select("#datetime");

// Create a reference to the required columns
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Create event handlers 
filterButton.on("click", runEnter);


// Complete the event handler function for the form
function runEnter() {
  
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = inputDate.select("input");
  
  // Get the value property of the input element
  var userInput = inputElement.property("value");  
  
  // Use the form input to filter the data by date of UFO sighting
  var matchingResults = tableData.filter(ufoSighting => ufoSighting.datetime == userInput);
  
  // Get the element for printing out the results
  var ufoElement = d3.select("tr");
  
  // Handle no matching results
  if (matchingResults.length == 0) {
    ufoElement.html("");
    ufoElement.append("td").text(`There were no UFO's on the ${userInput}`);
    return;
  }

 //  Add the output to the table using the "tr" tag 
  ufoElement.html("");
  ufoElement.append("td").text(columns);

console.log(ufoElement);
  
};