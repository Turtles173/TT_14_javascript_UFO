// from data.js
var tableData = data;

// Console.log the UFO data from data.js
console.log(tableData);

// Create a d3 reference to the table body
var tbody = d3.select("tbody");

// Create a d3 reference to the filter button (Exercise 3/04, 06 & 08)
var filterButton = d3.select("#filter-btn");

// Create a d3 reference to the datetime input
var inputDate = d3.select("#datetime");


 
// Create a reference to the required columns
var columnData = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]



// 



