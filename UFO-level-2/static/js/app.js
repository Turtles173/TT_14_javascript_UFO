// Assign the data from `data.js` to a descriptive variable (use const here)
const tableData = data;
const tbody = d3.select("tbody")

// Select the button
var filterButton = d3.select("#filter-btn");

// Function here to  enable the table to be called repeatedly
data.forEach((ufoOutput) => {
  var row = tbody.append("tr");
  Object.entries(ufoOutput).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Create event handlers 
filterButton.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {
  
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Create a d3 reference to the inputs
  var inputDate = d3.select("#datetime");
  var inputCity = d3.select("#city");
  var inputState = d3.select("#state");
  var inputCountry = d3.select("#country");
  var inputShape = d3.select("#shape");
  
  // Get the value property of the input element
  var userInputDate = inputDate.property("value");
  var userInputCity = inputCity.property("value"); 
  var userInputState = inputState.property("value");  
  var userInputCountry = inputCountry.property("value");  
  var userInputShape = inputShape.property("value");

  // Use the form input to filter the data by date of UFO sighting
  var matchingResults = tableData.filter(ufoSighting => ufoSighting.datetime == userInputDate||
                                                        ufoSighting.city == userInputCity ||
                                                        ufoSighting.state == userInputState ||
                                                        ufoSighting.country == userInputCountry ||
                                                        ufoSighting.shape == userInputShape
                                                        );
  

  // console.log(matchingResults);
  
  // Get the element for printing out the results
  var ufoElement = d3.select("tr");

  // Clear the table for filtering
  tbody.html("");

  // Populate the table based on the users's input
  matchingResults.forEach((filteredOutput) => {
    var rows = tbody.append("tr");
    Object.entries(filteredOutput).forEach(([key, value]) => {
      var cells = rows.append("td");
      cells.text(value);
    });
  });

  // Handle no matching results
  if (matchingResults.length == 0) {
    ufoElement.html("");
    ufoElement.append("td").text(`There were no UFO's on the ${userInput}, try between the dates 1/1/2010 to 1/13/2010 or another selection - there were heaps of UFO's exploring the USA!`);
    return;
  }

// console.log(ufoElement);
  
};