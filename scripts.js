const myLibrary = [];

function Book(title, author, pages, read) {
    // the constructor...
    this.title = String(title);
    this.author = String(author);
    this.pages = Number(pages);
    this.read = String(read);
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
    // take params, create a book then store it in the array
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayBooks() {
    const container = document.getElementById('libraryContainer');
    container.innerHTML = ''; // Clear previous books

    for (const book of myLibrary) {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add("bookCard");
        bookDiv.innerHTML = `
            <p>${book.title}</p>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read}</p>
        `;
        container.appendChild(bookDiv);
    }
}

document.addEventListener('DOMContentLoaded', function() {
  const newBook = document.getElementById('newBook');
  const closePopupBtn = document.getElementById('closePopupBtn');
  const popupOverlay = document.getElementById('popupOverlay');
  const form = document.querySelector('form');
  const title = document.getElementById('titleInput');
  const authName = document.getElementById('authNameInput');
  const pages = document.getElementById('pagesInput');
  const read = document.getElementById('readInput');

  newBook.addEventListener('click', function() {
    popupOverlay.style.display = 'flex'; 
  });

  closePopupBtn.addEventListener('click', function() {
    popupOverlay.style.display = 'none';
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    addBookToLibrary(title.value, authName.value, pages.value, read.value);
    displayBooks();
    form.reset();
    popupOverlay.style.display = 'none';
  });
});

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, "yes");
addBookToLibrary("1984", "George Orwell", 328, "no");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "yes");

displayBooks();