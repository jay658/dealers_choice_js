const foods = [
    {name: "Stinky Tofu", description: "smelly", rating: 2},
    {name: "Brains", description: "mushy", rating : 1},
    {name: "Liver", description: "taste bad", rating: 3},
    {name: "Tika Masala", description: "Jk, I love Tika Masala", rating: 10}
]

const list = ()=>{
    return [...foods]
}

const find = (name) => {
    const foodItem = foods.find(food => food.name === name);
    return {...foodItem}; 
  }

module.exports = {
    list,
    find
}