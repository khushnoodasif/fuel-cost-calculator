function calculateTotal() {
	var gallons_to_liters = 4.54609;
	var calculation_method = document.getElementById("calculation-method").value;
	var total_miles, start_miles, end_miles;
	var total_cost = 0;

	if (calculation_method === "total") {
		total_miles = parseFloat(document.getElementById("miles").value);
		var total_miles_per_gallon = parseFloat(document.getElementById("mpg").value);
		var fuel_price = parseFloat(document.getElementById("fuel-price").value);
		var number_of_people = parseFloat(document.getElementById("people").value);

		total_cost = ((fuel_price * gallons_to_liters) * (total_miles / total_miles_per_gallon) / 100) / number_of_people;
	} else if (calculation_method === "start-end") {
		start_miles = parseFloat(document.getElementById("start-miles").value);
		end_miles = parseFloat(document.getElementById("end-miles").value);
		var total_miles_per_gallon = parseFloat(document.getElementById("mpg").value);
		var fuel_price = parseFloat(document.getElementById("fuel-price").value);
		var number_of_people = parseFloat(document.getElementById("people").value);

		total_miles = end_miles - start_miles;
		total_cost = ((fuel_price * gallons_to_liters) * (total_miles / total_miles_per_gallon) / 100) / number_of_people;
	} else if (calculation_method === "mpg") {
		start_miles = parseFloat(document.getElementById("start-miles").value);
		end_miles = parseFloat(document.getElementById("end-miles").value);
		var total_fuel_cost = parseFloat(document.getElementById("total_cost_fuel").value);
		var fuel_consumption = parseFloat(document.getElementById("fuel_consumption").value);
		var fuel_price = parseFloat(document.getElementById("fuel-price").value);
		var number_of_people = parseFloat(document.getElementById("people").value);

		total_miles = end_miles - start_miles;
		var total_fuel_used = total_fuel_cost / (fuel_price * gallons_to_liters);
		var total_miles_per_gallon = total_miles / total_fuel_used;
		total_cost = total_miles_per_gallon / fuel_consumption / number_of_people;
	}

	total_cost = total_cost.toFixed(2);
	document.getElementById("total_cost").innerHTML = "Total Cost per Person: £" + total_cost;
}
 
function toggleCalculationMethod() {
	var calculation_method = document.getElementById("calculation-method").value;
	var totalMilesRow = document.getElementById("total-miles-row");
	var startEndMilesRow = document.getElementById("start-end-miles-row");
	var totalCostFuel = document.getElementById("total-fuel-row");
	var mpgRow = document.getElementById("mpg-row");
	var pricePerson = document.getElementById("number-of-people-row")
	var totalCost = document.getElementById("total_cost")
	var totalMPG = document.getElementById("total_mpg")

	if (calculation_method === "total") {
		totalMilesRow.classList.remove("hidden");
		startEndMilesRow.classList.add("hidden");
		mpgRow.classList.add("hidden");
	} else if (calculation_method === "start-end") {
		totalMilesRow.classList.add("hidden");
		startEndMilesRow.classList.remove("hidden");
		mpgRow.classList.add("hidden");
	} else if (calculation_method === "mpg") {
    totalMilesRow.classList.add("hidden");
    startEndMilesRow.classList.remove("hidden");
    totalCostFuel.classList.remove("hidden");
    mpgRow.classList.add("hidden");
    pricePerson.classList.add("hidden");
    totalCost.style.display = "none";
	}

	calculateTotal();
}

function calculateMPG() {
  var start_miles = parseFloat(document.getElementById("start-miles").value);
  var end_miles = parseFloat(document.getElementById("end-miles").value);
  var total_fuel_cost = parseFloat(document.getElementById("total_cost_fuel").value);
  var fuel_price = parseFloat(document.getElementById("fuel-price").value);

  var total_miles = end_miles - start_miles;
  var total_fuel_liters = total_fuel_cost / (fuel_price * 0.264172); // Conversion from pence to gallons
  var miles_per_gallon = total_miles / total_fuel_liters;

  miles_per_gallon = miles_per_gallon.toFixed(1);
	document.getElementById("total_mpg").innerHTML = "MPG: " + miles_per_gallon;
}


 