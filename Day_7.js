// Activity 1
let bookStore = {
    title : "The Bhagavad Gita ",
    author: "Lord Krishna",
    year: "500BC-200BC"
}
console.log(bookStore);
console.log(`Title: ${bookStore.title} & Authot ${bookStore.author}`);

// Activity 2
 bookStore.returnString = function() {
    return `This is best book i ever read ${bookStore.title} by ${bookStore.author}`;
 }
console.log(bookStore.returnString());

bookStore.updateYear = function (newyear) {
    this.year = newyear
}
bookStore.updateYear(1998)
console.log(bookStore);
console.log("Updated year " , bookStore.year);

let library = {
    name: "ISCON Library",
    books: [
        { title: "Rasleela", author: "Little Krishna" },
        { title: "Premleela", author: "Krishna"},
        { title: "Mahabharat", author: "Shree Hari Vashudev" }
    ]
};
console.log(library);
console.log(`Library Name: ${library.name}`);

library.books.forEach(book => {
    console.log(`Title: ${book.title}`);
});

bookStore.getDetails = function() {
    return `${this.title} was published in ${this.year}`;
};
console.log(bookStore.getDetails());

for (let key in bookStore) {
    if (bookStore.hasOwnProperty(key)) {
        console.log(`${key}: ${bookStore[key]}`);
    }
}

