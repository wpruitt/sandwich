console.log("SandwichMaker.js")

let sandwichPrice = 0,
	sandwichOptions = document.getElementById("sandwichOptions"),
	totalPrice = document.getElementById("totalPrice"),
	options = document.getElementById("options"),
	toppings = [];

var sandwichMaker = (function(orgsandwichMaker){
	return orgsandwichMaker
}(sandwichMaker || {}));

let checkedlist = []
let listStructure = []
var checklistHousing = []
let makeOptionList = () => {
	for (var i = 0; i < (Object.entries(sandwichMaker).length); i+=2){
		var section = document.createElement("SECTION");
		section.setAttribute("id", `${Object.entries(sandwichMaker)[i+1][0]}`);
		section.addEventListener("click", function(event){
			console.log(event, event.target, event.currentTarget)
		});
		document.getElementById("options").append(section);
// 		checklistHousing[i] =/* `<ul class="checklist">${i}</ul>`*/ "what"
		for (var x = 0; x < Object.getOwnPropertyNames((Object.entries(sandwichMaker)[i][1])()).length; x++){
			section.innerHTML += `<input type="checkbox" class="checkbox" value="${Object.getOwnPropertyNames((Object.entries(sandwichMaker)[i][1]()))[x]}">${Object.getOwnPropertyNames((Object.entries(sandwichMaker)[i][1]()))[x]}`;
		};
	}
};
let getOptions = () => {
	let checkboxes = document.getElementsByClassName("checkbox");
	for (var i = 0; i < checkboxes.length; i++){
		whatIsChecked(checkboxes[i]);
	}
}


let whatIsChecked = (element) =>{
	// sandwichOptions.innerHTML = "";
	if (element.checked){
		if (element.parentElement.id === "addBread"){
		sandwichOptions.innerHTML += `<li>${element.value}</li>`;
		sandwichMaker.addBread(element.value);
		};
		if(element.parentElement.id === "addMeat"){
		sandwichOptions.innerHTML += `<li>${element.value}</li>`;
		sandwichMaker.addMeat(element.value);
		};
		if(element.parentElement.id === "addCheese"){
		sandwichOptions.innerHTML += `<li>${element.value}</li>`;
		sandwichMaker.addCheese(element.value);
		};
		if(element.parentElement.id === "addVeggie"){
		sandwichOptions.innerHTML += `<li>${element.value}</li>`;
		sandwichMaker.addVeggie(element.value);
		};
		if(element.parentElement.id === "addCondiment"){
		sandwichOptions.innerHTML += `<li>${element.value}</li>`;
		sandwichMaker.addCondiment(element.value);
		};
	}
	console.log(sandwichPrice);
	totalPrice.innerHTML = `Total Price: ${sandwichPrice.toFixed(2)}`;
}
// let options = document.getElementById("options");
// options.addEventListener("click", )

let makeMySandwich = document.getElementById("makeSandwich");
makeMySandwich.addEventListener("click", getOptions);
options.addEventListener("click", function(){
	totalPrice.innerHTML = "";
	sandwichOptions.innerHTML = "";
	sandwichPrice = 0;
});