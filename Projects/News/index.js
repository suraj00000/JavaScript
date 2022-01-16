console.log("index");
let apiKey = "ffaf0e05bdd143ce8a9b76014d4a3c6d";
let source = "bbc-News";
// Grab the new container
let newsAccordion = document.getElementById("accordionExample");
// Create a AJAX get Request
const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
  true
);

xhr.onload = function () {
  if (this.status == 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    let newsHtml = "";
    console.log(json);
    articles.forEach(function (element, index) {
      console.log(articles[element]);
      let news1 = ` <div class="accordion-item">
                        <h2 class="accordion-header" id="heading${index}">
                        <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse${index}"
                            aria-expanded="true"
                            aria-controls="collapse${index}"
                        >
                        <strong>Breaking News #${index + 1} ${
        element["title"]
      }</strong>
                        </button>
                        </h2>
                        <div
                        id="collapse${index}"
                        class="accordion-collapse collapse "
                        aria-labelledby="heading${index}"
                        data-bs-parent="#accordionExample"
                        >
                        <div class="accordion-body">
                            ${element["content"]}. <a target="_blanck"href="${
        element["url"]
      }">Read more here</a>
                        </div>
                        </div>
                        </div>  `;
      newsHtml += news1;
    });

    newsAccordion.innerHTML = newsHtml;
  }
};

xhr.send();
