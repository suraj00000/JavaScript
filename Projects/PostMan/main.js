// Utility functions:
// 1. DOM element from String
function getElementFromString(string) {
  let div = document.createElement("div");
  div.innerHTML = string;
  return div.firstElementChild;
}

// Hide the parameter box initially
let parameterBox = document.getElementById("parameterBox");
parameterBox.style.display = "none";

// IF the user clicks on params box, then hide json parameter
let params = document.getElementById("params");
params.addEventListener("click", () => {
  document.getElementById("requestJSONBox").style.display = "none";
  document.getElementById("parameterBox").style.display = "block";
});
// IF the user clicks on JSON box, then hide params parameter
let JSONRadio = document.getElementById("JSONRadio");
JSONRadio.addEventListener("click", () => {
  document.getElementById("requestJSONBox").style.display = "block";
  document.getElementById("parameterBox").style.display = "none";
});

// Initialize no of parameters
let addParamCount = 0;

// If the user clicks th + button, add more parameters
let addParam = document.getElementById("addParam");
addParam.addEventListener("click", () => {  
  let paramsBox = document.getElementById("paramsBox");
  let html = `<div class="row mt-2">
            <label for="urlField" class="col-sm-2 col-form-label"
            >Parameter ${addParamCount + 2} </label
            >
            <div class="col-4">
            <input
                id="parameterKey${addParamCount+ 2}"
                type="text"
                class="form-control"
                placeholder="Enter Parameter ${addParamCount+ 2} Key"
            />
            </div>
            <div class="col-4">
            <input
                type="text"
                id="parameterValue${addParamCount+ 2}"
                class="form-control"
                placeholder="Enter Parameter ${addParamCount+ 2} Value"
            />
            </div>
            <div class="col">
            <button class="btn btn-primary deleteParam" >-</button>
            </div>
        </div>`;
  // convert the element string to DOM node
  let paramElement = getElementFromString(html);
  paramsBox.appendChild(paramElement);
  // Add the event listener to remove the parameter on click
  let deleteParam = document.getElementsByClassName("deleteParam");
  for (item of deleteParam) {
    item.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();
    });
  }
  addParamCount++;
});

// If the user Submit
let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  document.getElementById("reponsePrism").innerHTML = "please wait..";
  Prism.highlightAll();
  // fetch all the values
  let url = document.getElementById("urlField").value;
  let requestType = document.querySelector("input[name='RequestType']:checked").value;
  let contentType = document.querySelector("input[name='ContentType']:checked").value;
  // all the value to consol
  // If user has used params option then collenct all the parameters in an object
  
  if (contentType === "param") {
    console.log("*******");
    data = {};
    for (i = 0; i < addParamCount + 1; i++) {
      if (document.getElementById("parameterKey" + (i + 1)) != undefined) {
        let key = document.getElementById("parameterKey" + (i + 1)).value;
        let value = document.getElementById("parameterValue" + (i + 1)).value;
        data[key] = value;
      }      
    }
    data=JSON.stringify(data);

  } else {
    data = document.getElementById("requestJSONBox").value;    
  }  
  console.log(
    url,
    requestType,
    contentType,
    data
  );
  // if the request type is get, then invoke fetch api to create a post request
  if (requestType == "GET") {
    fetch(url, {
      method: "GET",
    })
      .then((response)=> response.text())
      .then((text) => {
        document.getElementById("reponsePrism").innerHTML = text;
        Prism.highlightAll();
      });
  } else {
    fetch(url, {
      method: "POST",
      body:data,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    })
      .then((response) => response.text())
      .then((text) => {
        document.getElementById("reponsePrism").innerHTML = text;
        Prism.highlightAll();        
      });
  }
});
