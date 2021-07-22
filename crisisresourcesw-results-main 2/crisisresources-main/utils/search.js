const list = regionsData;

const options = {
  isCaseSensitive: false,
  shouldSort: true,
  findAllMatches: false,
  threshold: 0.4,
  distance: 100,
  useExtendedSearch: false,
  keys: [
    "title",
    "tags.tag1",
    "tags.tag2",
    "tags.tag3",
    "tags.tag4",
    "tags.tag5",
    "tags.tag6"
  ]
};

const fuse = new Fuse(list, options);

const searchElement = document.getElementById("search-input")
const resultSimilar = document.getElementById("results-container-similar")
const resultAccurate = document.getElementById("results-container-accurate")
const rawJson = document.getElementById("raw-json")

const searchRegions = () => {
  const resultJSON = fuse.search(searchElement.value);
  resultAccurate.innerHTML = `<a href="${resultJSON[0].item.url}">${resultJSON[0].item.title}</a>`
  rawJson.innerHTML = JSON.stringify(resultJSON, null, 4);
  resultSimilar.innerHTML = `1. <a href="${resultJSON[1].item.url}">${resultJSON[1].item.title}</a>\n2. <a href="${resultJSON[2].item.url}">${resultJSON[2].item.title}</a>\n3. <a href="${resultJSON[3].item.url}">${resultJSON[3].item.title}</a>`;
}

searchElement.addEventListener("input", searchRegions);

searchRegions();