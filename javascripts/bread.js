console.log("bread.js")

var sandwichMaker = (function(orgsandwichMaker){
	var breads = {
		"White": 1.50,
		"Wheat": 1.50,
		"Whole Grain": 2.00,
		"Rye": 2.00,
		"Gluten-Free": 2.50,
	}
	sandwichMaker.getBread = function(){
		return breads
	}
	sandwichMaker.addBread = function(bread){
		console.log(sandwichPrice);
		sandwichPrice += breads[bread];
		console.log(sandwichPrice);
	}
	return orgsandwichMaker
}(sandwichMaker || {}));