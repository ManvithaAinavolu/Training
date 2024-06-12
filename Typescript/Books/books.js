var BookApp = /** @class */ (function () {
    function BookApp() {
        this.book = [];
    }
    BookApp.prototype.addBook = function (item) {
        this.book.push(item);
    };
    BookApp.prototype.getBook = function () {
        return this.book;
    };
    BookApp.prototype.deleteBook = function (author) {
        this.book = this.book.filter(function (b) { return b.author !== author; });
    };
    return BookApp;
}());
var BookCart = /** @class */ (function () {
    function BookCart(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
    return BookCart;
}());
var bookadd = new BookApp();
var title = document.getElementById('title');
var author = document.getElementById('author');
var price = document.getElementById('price');
var add_btn = document.getElementById('Add');
var table = document.getElementById('table-body');
var renderBooks = function () {
    table.innerHTML = '';
    bookadd.getBook().forEach(function (book, index) {
        var row = table.insertRow();
        row.innerHTML =
            "\n        <td>".concat(book.title, "</td>\n        <td>").concat(book.author, "</td>\n        <td>").concat(book.price, "</td>\n        <button class=\"edit\">Edit</button>\n        <button id=\"delete-").concat(index, "\">Delete</button>\n        ");
        var deleteBtn = document.getElementById("delete-".concat(index));
        deleteBtn.addEventListener('click', function () {
            bookadd.deleteBook(book.author);
            renderBooks();
        });
    });
};
var render = function () {
    title.innerHTML = '';
    author.innerHTML = '';
    price.innerHTML = '';
    add_btn.addEventListener('click', function () {
        if (title && author && price) {
            var bookItem = new BookCart(title.value, author.value, parseFloat(price.value));
            bookadd.addBook(bookItem);
            console.log(bookadd.getBook());
        }
        renderBooks();
    });
};
render();
