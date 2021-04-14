function renderTotalBooks() {
  const count = totalBooksCount(books);
  if (typeof count !== "number") return;

  const span = document.querySelector("#total-book-count");
  span.innerHTML = count;
}

function renderBooksBorrowed() {
  const count = booksBorrowedCount(books);
  if (typeof count !== "number") return;

  const span = document.querySelector("#total-borrow-count");
  span.innerHTML = count;
}

function renderTotalAccounts() {
  const count = totalAccountsCount(accounts);
  if (typeof count !== "number") return;

  const span = document.querySelector("#total-accounts-count");
  span.innerHTML = count;
}

function renderMostCommonGenres() {
  const result = mostCommonGenres(books);
  if (typeof result !== "object") return;

  const lis = result
    .map((genre) => {
      return `<li class="list-group-item">${genre.name} <span class="text-primary">(${genre.count})</span></li>`;
    })
    .join("");

  const ul = document.querySelector("#most-common-genres");
  ul.innerHTML = lis;
}

function renderMostPopularBooks() {
  const result = mostPopularBooks(books);
  if (typeof result !== "object") return;

  const lis = result
    .map((book) => {
      return `<li class="list-group-item">${book.name} <span class="text-primary">(${book.count} borrows)</span></li>`;
    })
    .join("");

  const ul = document.querySelector("#most-popular-books");
  ul.innerHTML = lis;
}

function renderMostPopularAuthors() {
  const result = mostPopularAuthors(books, authors);
  if (typeof result !== "object") return;

  const lis = result
    .map((author) => {
      return `<li class="list-group-item">${author.name} <span class="text-primary">(${author.count} borrows)</span></li>`;
    })
    .join("");

  const ul = document.querySelector("#most-popular-authors");
  ul.innerHTML = lis;
}

function render() {
  renderTotalBooks();
  renderBooksBorrowed();
  renderTotalAccounts();
  renderMostCommonGenres();
  renderMostPopularBooks();
  renderMostPopularAuthors();
}

document.addEventListener("DOMContentLoaded", render);
