function calculateTotal()
{
   var gallons_to_liters = 4.54609;
   var total_miles = document.getElementById("miles").value;
   var total_miles_per_gallons = document.getElementById("mpg").value;
   var fuel_price = document.getElementById("fuel-price").value;
   var total_cost_fuel = ((fuel_price * gallons_to_liters) * (total_miles / total_miles_per_gallons)/100);
   total_cost_fuel = total_cost_fuel.toFixed(2);
   document.getElementById("total_cost_fuel").innerHTML = "Total Cost: £" + total_cost_fuel;
}