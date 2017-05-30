console.log("veggies.js")

var sandwichMaker = (function(orgsandwichMaker){

	var veggies = {
		"Iceberg Lettuce": .10,
		"Spinach": .40,
		"Sprouts": .70,
		"Tomato": .50,
		"Banana Peppers":.50,
	};
	sandwichMaker.getVeggie = function(){
		return veggies
	};
	sandwichMaker.addVeggie = function(veggie){
		sandwichPrice += veggies[veggie];

	}
	return orgsandwichMaker
}(sandwichMaker || {}));