var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 10.00
	},
	{
		name: "steak",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 15.00
	},
	{
		name: "potatoes",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 8.00
	},
	{
		name: "cereal",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 6.50
	},
	{
		name: "crab",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 13.00
	},
	{
		name: "jam",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.99
	},
	{
		name: "chicken strips",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 11.20
	},
	{
		name: "grape juice",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 7.60
	},
		
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction1, restriction2) {
	let product_names = [];
	var hold;

	//Sort by price
	for(let count=0;count<prods.length;count=count + 1){
		for(let innerCount=count;innerCount<prods.length-1;innerCount=innerCount + 1){
			if(prods[innerCount].price < prods[innerCount+1].price){
				hold = prods[innerCount];
				prods[innerCount] = prods[innerCount+1];
				prods[innerCount+1] = hold;
			}
		
		}
	}
 
	for (let i = 0; i < prods.length; i += 1) {
        if ( // will only "use" the condition it meets
            ((restriction1 == "Vegetarian") && (prods[i].vegetarian == true)) ||
            ((restriction1 == "GlutenFree") && (prods[i].glutenFree == true)) ||
			((restriction1 == "VegetarianGlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)) ||
            (restriction1 == "None")){
				if( // will only "use" the other condition it meets
                ((restriction2 == "Organic") && (prods[i].organic == true)) ||
                ((restriction2 == "NonOrganic") && (prods[i].organic == false)) ||
                (restriction2 == "")
            ){
                product_names.push(prods[i].name);
            }
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
