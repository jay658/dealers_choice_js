const foods = [
    {name: "Stinky Tofu", description: "Is smelly", rating: 2},
    {name: "Brains", description: "Is mushy", rating : 1},
    {name: "Liver", description: "It taste bad", rating: 3},
    {name:"Olives", description: "It taste funky", rating: 4},
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