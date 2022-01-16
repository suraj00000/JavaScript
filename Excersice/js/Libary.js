class Library {
  constructor(booklist) {
    this.booklist = booklist;
    this.issuedBooks = {};
  }
  getBookList() {
    console.log("****************************");
    this.booklist.forEach((Element) => {
      console.log(Element);
    });
    console.log("****************************");
    // console.log(this.booklist);
  }
  issueBook(Bookname, user) {
    if (this.issuedBooks[Bookname] == undefined) {
      this.issuedBooks[Bookname] = user;
    } else {
      console.log("book is already issue");
    }
    // let index =this.booklist.indexOf(Bookname);
    // this.booklist.splice(index,1);
    // console.log(Bookname,'is issued by',user);
  }
  returnBook(Bookname) {
    if (this.issuedBooks[Bookname] == undefined) {
      console.log("Book is not issued yet");
    } else {
      delete this.issuedBooks[Bookname];
    }
    // console.log(this.booklist);
  }
}
let books = [
  "JavaScrip_for_dummys",
  "Win_friends",
  "Zero_to_one",
  "Start_with_Why",
  "Power_of_habbits",
];
let library = new Library(books);
// console.log(library.booklist);
// library.getBookList();
// library.issueBook('JavaScrip_for_dummys','suraj');
// library.returnBook('JavaScrip_for_dummys');
// library.getBookList();
// console.log(library.issueBookv);
