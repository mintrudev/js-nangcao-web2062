"use strict";

const ordersSet = new Set(["Pasta", "Pizza", "Risotto", "Pizza"]);
console.log(ordersSet);

console.log(new Set("Jonas"));

console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");
console.log(ordersSet);
ordersSet.clear();
console.log(ordersSet);

for (const item of ordersSet) {
  console.log(item);
}

// Example
const staff = ["Waiter", "Chef", "Manager", "Chef", "Waiter"];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(["Waiter", "Chef", "Manager", "Chef", "Waiter"]).size);

console.log(new Set('jonashahameme').size);