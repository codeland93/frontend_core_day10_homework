function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

Book.prototype.displayInfo = function() {
  return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
};

const library = [];

function addBook(book) {
    library.push(book);
}

function searchByTitle(title) {
    return library.filter(book => book.title === title);
}

function searchByAuthor(author) {
    return library.filter(book => book.author === author);
}

function filterBooksByPages() {
  return library.filter(book => book.pages > 100);
}

function addPrefixes() {
  return library.map(book => ({
      title: `Title: ${book.title}`,
      author: `Author: ${book.author}`
  }));
}
