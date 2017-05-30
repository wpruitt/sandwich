console.log("cheese.js")

var sandwichMaker = (function(orgsandwichMaker){

	var cheeses = {
		"Cheddar": 1.50,
		"Feta": 1.50,
		"Pepper-Jack": 2.00,
		"Swiss": 2.00,
		"Provolone": 2.50,
	}
		sandwichMaker.getCheese = function(){
		return cheeses
	}
	sandwichMaker.addCheese = function(){
		
	}
	return orgsandwichMaker
}(sandwichMaker || {}));