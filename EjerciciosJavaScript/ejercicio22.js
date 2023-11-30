const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

const usedFruits = [];

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    const availableFruits = fruits.filter(fruit => !usedFruits.includes(fruit));
    if (availableFruits.length > 0) {
      foodSchedule[i] = { name: availableFruits[0], isVegan: true };
      usedFruits.push(availableFruits[0]);
    }
  }
}
console.log(foodSchedule);