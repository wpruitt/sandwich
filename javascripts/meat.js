console.log("meat.js")

var sandwichMaker = (function(orgsandwichMaker){

	var meats = {
		"Turkey": 1.50,
		"Salami": 1.50,
		"Honey Ham": 2.00,
		"Roast Beef": 2.00,
		"Fried Egg": 2.50,
	}
	sandwichMaker.getMeat = function(){
		return meats
	}
	sandwichMaker.addMeat = function(meat){
		sandwichPrice += meats[meat];
		
	}
	return orgsandwichMaker
}(sandwichMaker || {}));
