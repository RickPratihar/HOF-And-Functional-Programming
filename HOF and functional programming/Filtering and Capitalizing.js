// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.

let books = [
    {
      title: "Book 1",
      author: "author 1",
      year: 2005
    },
    {
      title: "Book 2",
      author: "author 2",
      year: 2012
    },
    {
      title: "Book 3",
      author: "author 3",
      year: 2008
    },
    {
      title: "Book 4",
      author: "author 4",
      year: 2015
    }
  ];
  
  // Function to filter books published after 2010 and capitalize author names
  function filterBooks(books) {
    let filteredBooks = books.filter(function(book) {
      return book.year >= 2010;
    });
  
    let modifiedBooks = filteredBooks.map(function(book) {
      let modifiedAuthor = book.author.toUpperCase();
      return {
        title: book.title,
        author: modifiedAuthor,
        year: book.year
      };
    });
  
    return modifiedBooks;
  }
  
  // Call the filterBooks function with the list of books
  let filteredList = filterBooks(books);
  
  // Print the filtered list of books
  console.log(filteredList);