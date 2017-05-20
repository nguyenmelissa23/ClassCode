// Startup mongod and the mongo shell and switch to a new db named zoo.

// Insert into a collection named animals:
// One entry for each of your five favorite animals.

// Each entry should have
// 1. A field of numlegs with an integer of the number of legs that animal has.
// 2. A field of class with that animal's class (mammal, reptile, etc).
// 3. A field of weight with an integer of the weight of the animal in pounds (any reasonable weight, really).
// 4. A field of name, with the animal's name.
// 5. A field of whatIWouldReallyCallIt with the name of what you would call the animal if you got to name it.

// Example:

{
  "name": "Panda",
  "numlegs": 4,
  "class": "mammal",
  "weight": 254,
  "whatIWouldReallyCallIt": "Captain Fuzzy Face"
}


db.animals.insert([{"name":"elephant", "numlegs":"4", "class":"mammal", "weight":"1034", "whatIWouldReallyCallIt": "Zen animal" }, {"name":"Polar bear", "numlegs":"4", "class":"mammal", "weight":"540", "whatIWouldReallyCallIt": "Big Fluffy Happy Face" }, {"name":"panda", "numlegs":"4", "class":"mammal", "weight":"170", "whatIWouldReallyCallIt": "Need sleep" }, {"name":"Wolf", "numlegs":"4", "class":"mammal", "weight":"300", "whatIWouldReallyCallIt": "Spirit animal" }, {"name":"", "numlegs":"Spider", "class":"Insect", "weight":".0001", "whatIWouldReallyCallIt": "roommate" }])
