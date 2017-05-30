console.log("condiments.js")

var sandwichMaker = (function(orgsandwichMaker){

	var condiments = {
		"Mustard": 1.50,
		"Horseradish": 1.50,
		"Secret Sauce": 2.00,
		"Spicy Brown": 2.00,
		"Avocado Spread": 2.50,
	}
	sandwichMaker.getCondiment = function(){
		return condiments
	}
	sandwichMaker.addCondiment = function(condiment){
		sandwichPrice += condiments[condiment];
	}
	return orgsandwichMaker
}(sandwichMaker || {}));

makeOptionList()