// Book publish
let book:{title:string; author:string; yearPublished:number} = {
    title: "The Hobbit",
    author: "J.R.R Tolkien",
    yearPublished: 1937
};
console.log(`Book info: ${book.title} wrote by ${book.author}, published in ${book.yearPublished} `);

//event occurred
let events:{occation:string; country:string; country2:string; yearIn:number} = {
    occation: "dropped atomic bomb",
    country: "USA",
    country2:"Japan",
    yearIn: 1945
};
console.log(`${events.country} ${events.occation} on ${events.country2} in 2nd World War ${events.yearIn} `);