const fetch = require("node-fetch");

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books") //returning a response that can be converted into json. Without the return this won't work
  .then(res => res.json()) //parsing the json string into a JS object
  .then((json) => renderBooks(json)); //calling the renderBooks function to take place after the json has been parsed
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
