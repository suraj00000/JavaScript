// console.log("Hello");
// If user add a note user , add it to localstrage
showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("InputTitle");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let obj = {
    title: addTitle.value,
    text: addTxt.value,
  };
  notesObj.push(obj);
  // notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
  // console.log(notesObj);
  showNotes();
  console.log(notesObj);
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.text}</p>
            <button id="${index}"onclick= "deleteNote(this.id)" class="btn btn-danger">Delete Note</a>
          </div>
        </div>
        `;
    // this.id can be used to pass id value to a onclick functions
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show here<br>Please add notes!!`;
  }
}

function deleteNote(index) {
  console.log("delete" + index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  // console.log(inputVal);
  let noteCard = document.getElementsByClassName("noteCard");
  Array.from(noteCard).forEach(function (element) {
    let cartTxt = element.getElementsByTagName("p")[0].innerHTML;
    if (cartTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
