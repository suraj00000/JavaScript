console.log("Ajax");
let fetchBtn = document.getElementById("fetchBtn");
// https://dummy.restapiexample.com/api/v1/employees
fetchBtn.addEventListener("click", buttonClickHandler);
function buttonClickHandler() {
  console.log("buttonclicked");
  const xhr = new XMLHttpRequest();
  //   xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true); //true=>asyncronous GET => data fetch data POST=>data give
  // use this for post
  xhr.open("POST", "https://dummy.restapiexample.com/api/v1/create", true); //true=>asyncronous GET => in URL data POST=>hidden
  xhr.getResponseHeader("Content-type", "application/JSON");
  // what to do on progress(Optional)
  xhr.onprogress = function () {
    console.log("On progress");
  };
  xhr.onreadystatechange = function () {
    console.log("Ready state is", xhr.readyState); //return different state
    /*  0	UNSENT	Client has been created. open() not called yet.
        1	OPENED	open() has been called.
        2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
        3	LOADING	Downloading; responseText holds partial data.
        4	DONE	The operation is complete. */
  };
  // What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      //here 200 is http status code
      console.log(this.responseText); //data print in response
    } else {
      console.log("Some error!");
    }
  };
  // send the request
  let params = `	{"name":"test","salary":"123","age":"23"}`;
  xhr.send(params);
  console.log("done");
}

let populateBtn = document.getElementById("populateBtn");
populateBtn.addEventListener("click", popHandler);
function popHandler() {
  console.log("you have clicked POPULATE handler");
  // Instantiate an xhr object
  const xhr = new XMLHttpRequest();
  //   open the object
  xhr.open("GET", "https://dummy.restapiexample.com/api/v1/employees", true); //true=>asyncronous GET => in URL data POST=>hidden

  // What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj);
      let list = document.getElementById("list");
      let str = "";
      for (key in obj.data) {
        str += `<li>${obj.data[key].employee_name}</li>`;
      }
      list.innerHTML = str;
    } else {
      console.log("Some error!");
    }
  };
  // send the request
  xhr.send();
  console.log("done");
}
