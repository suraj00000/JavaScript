class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}

class Display {
  BookShow() {
    let books = localStorage.getItem("Book");
    let BookObj;
    if (books == null) {
       BookObj = [];
    } else {
       BookObj = JSON.parse(books);
    }

    let uiString = "";
    BookObj.forEach(function (element, index) {
      uiString += `
          <tr>        
          <td>${index + 1}</td>
          <td>${element.author}</td>
          <td>${element.name}</td>
          <td>${element.type}</td>
          <td><button type="button" onclick="deleteButtonFunction(${index})" value ="${index}"id="deleteButton" class="btn btn-danger">Delete</button></td>
          </tr>
          `;
    });
    let table = document.getElementById("tableBody");
    if (BookObj.length != 0) {
      table.innerHTML = uiString;
    } else {
      table.innerHTML = "Nothing to show hear Add Some books";
    }
  }
  // Add method to
  add(book) {
    let books = localStorage.getItem("Book");
    let BookObj;
    if (books == null) {
      BookObj = [];
    } else {
      BookObj = JSON.parse(books);
    }
    BookObj.push(book);
    localStorage.setItem("Book", JSON.stringify(BookObj));
  }
  clear() {
    let libarayForm = document.getElementById("libarayForm");
    libarayForm.reset();
  }
  validate(book) {
    if (book.name.length < 2 || book.author.length < 2) return false;
    return true;
  }
  show(type, displaymessage) {
    let message = document.getElementById("message");
    let UIalert = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                          <strong>Message:!</strong> ${displaymessage}.
                          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>`;
    message.innerHTML = UIalert;
    setTimeout(() => {
      message.innerHTML = "";
    }, 2000);
  }
}

// Showing already added books
let temp = new Display();
temp.BookShow();
// let deleteButton = document.getElementById('deleteButton');
// deleteButton.addEventListener('click',deleteButtonFunction);
function deleteButtonFunction(index) {
  let books = localStorage.getItem("Book");
  let BookObj;
  if (books == null) {
    BookObj = [];
  } else {
    BookObj = JSON.parse(books);
  }
  BookObj.splice(index, 1);
  localStorage.setItem("Book", JSON.stringify(BookObj));
  temp.BookShow();
}

// Add submit event listener for libarayForm
let libarayForm = document.getElementById("libarayForm");
libarayForm.addEventListener("submit", libarayFormsubmit);
// let

function libarayFormsubmit(e) {
  e.preventDefault(); //defaut behavior will not be functional
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  let type;
  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }
  // console.log(type,name,author);

  let book = new Book(name, author, type);
  // console.log(book);
  // console.log("Submit");
  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "Your book has been successfully added");
    display.BookShow();
  } else {
    display.show("danger", "fail to add your books");
  }
}
