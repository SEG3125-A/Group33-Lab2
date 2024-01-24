var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00
	},
	{
		name: "steak",
		vegetarian: false,
		glutenFree: true,
		price: 15.00
	},
	{
		name: "potatoes",
		vegetarian: true,
		glutenFree: true,
		price: 8.00
	},
	{
		name: "cereal",
		vegetarian: true,
		glutenFree: false,
		price: 6.50
	},
	{
		name: "crab",
		vegetarian: false,
		glutenFree: true,
		price: 13.00
	},
	{
		name: "jam",
		vegetarian: true,
		glutenFree: true,
		price: 4.99
	},
	{
		name: "chicken strips",
		vegetarian: false,
		glutenFree: false,
		price: 11.20
	},
	{
		name: "grape juice",
		vegetarian: true,
		glutenFree: false,
		price: 7.60
	},
		
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	var hold;
	for(let count=0;count<products.length-1;count+=1){
		for(let innerCount=count;innerCount<products.length;innerCount+=1){
			if(products[innerCount].price < products[innerCount+1].price){
				hold = products[innerCount];
				products[innerCount] = products[innerCount+1];
				products[innerCount+1] = hold;
			}
		
		}
	}
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
