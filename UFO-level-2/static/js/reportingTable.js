// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

data.forEach(function (UFOreporting) {
  console.log(UFOreporting);
  var row = tbody.append("tr");
  Object.entries(UFOreporting).forEach(function ([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

// Assign the data from `data.js` to a descriptive variable
var UFOsightingData = data;

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function () {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  //console.log(UFOsightingData);

  var filteredSightingData = UFOsightingData.filter(UFOsightingData => UFOsightingData.datetime === inputValue);

  console.log(filteredSightingData);

  // // Material Select Initialization
  // $(document).ready(function () {
  //   $('.mdb-select').materialSelect();
  // });


  tbody.html("");

  filteredSightingData.forEach(function (UpdateTable) {
    console.log(UpdateTable);
    var row = tbody.append("tr");
    Object.entries(UpdateTable).forEach(function ([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

});