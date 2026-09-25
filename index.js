const endpoint = "https://kea-alt-del.dk/t7/api/categories";

const produktliste = document.querySelector("#catlistecontainer");

fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(json) {
  console.log(json);
  json.forEach((element) => {
    catlistecontainer.innerHTML += `<a href=productdetails.html?cat=${element.catergory}> ${element.category}</a>`;
  });
}
