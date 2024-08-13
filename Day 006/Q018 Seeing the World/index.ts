let places:string[] = ["Saudi Arabia", "Palestine", "Turkia", "Switzerland", "Middle East"]
console.log(`Original Array:`, places);

console.log(`Alphabetical Order:`, [...places].sort());
console.log(`Still Original Array:`, places);

console.log(`Reverse alphabetical Order Array`, [...places].sort().reverse());
console.log(`Still Original Array:`, places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);


