// Initialize an empty array to hold the book objects
let books = [];

// Function to display all books in the book list
function displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; // Clear the list before repopulating it

    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            Title: ${book.title}, Author: ${book.author}
            <button onclick="deleteBook(${index})">Delete</button>
        `;
        bookList.appendChild(li);
    });
}

// Function to handle adding a new book
document.getElementById('add-book-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page
    
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;

    // Add the new book to the books array
    books.push({ title, author });

    // Clear the input fields
    document.getElementById('book-title').value = '';
    document.getElementById('book-author').value = '';

    // Update the book list on the page
    displayBooks();
});

// Function to search books by title or author
function searchBooks() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) || 
        book.author.toLowerCase().includes(searchTerm)
    );

    // Display filtered books based on the search term
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; // Clear the list before repopulating it

    filteredBooks.forEach((book, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            Title: ${book.title}, Author: ${book.author}
            <button onclick="deleteBook(${index})">Delete</button>
        `;
        bookList.appendChild(li);
    });
}

// Function to delete a book
function deleteBook(index) {
    // Remove the book from the books array
    books.splice(index, 1);

    // Re-display the updated book list
    displayBooks();
}

// Initial display of all books (empty initially)
displayBooks();
