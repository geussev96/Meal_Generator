let meal = {
    protein : ["Chicken", "Beef", "Pork", "Lamb", "Fish"],
    salad : ["Nicoise", "Caesar", "Cobb", "Greek", "Tabbouleh", "Coleslaw", "Caprese" ],
    carb : ["White Rice", "Pasta", "Baked Potatoes", "French Fries"]
}

function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

let protein = meal.protein[randomNumber(meal.protein.length)];
let salad = meal.salad[randomNumber(meal.salad.length)];
let carb = meal.carb[randomNumber(meal.carb.length)];

console.log (`Your Balanced meal for today is composed of 200 grams of ${protein}, 200 grams of ${salad} salad and 100 grams of ${carb}.`)
