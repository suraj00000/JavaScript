let populateBtn = document.getElementById("populateBtn");
populateBtn.addEventListener("click", popHandler);
function popHandler() {
  console.log("you have clicked POPULATE handler");
  // Instantiate an xhr object
  const xhr = new XMLHttpRequest();
  //   open the object
  xhr.open("GET", "wordsapi_sample.json", true); //true=>asyncronous GET => in URL data POST=>hidden

  // What to do when response is ready
  let word = document.getElementById("word").value;
  xhr.onload = function () {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      let definition = document.getElementById("defination");
      definition.innerHTML = "";
      console.log(obj);
      let defina = `<h1>definition:${obj[word].definitions[0].definition}</h1>`;
      let partOfSpeech = `<h2>part of speech:${obj[word].definitions[0].partOfSpeech}</h2>`;
      let synonyms = `<h3>sysnonyms:${obj[word].definitions[0].synonyms}</h3>`;
      let hasTypes = `<h4>has Type:${obj[word].definitions[0].hasTypes}</h4>`;

      let element = document.createElement("div");
      element.innerHTML = `${defina}<br>${partOfSpeech}<br>${synonyms}<br>${hasTypes}`;
      definition.appendChild(element);

      // definition.innerHTML = defina;
    } else {
      console.log("Some error!");
    }
  };
  xhr.send();
  console.log("done");
}
