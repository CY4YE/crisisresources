newfoundland_regions = [
  {
    name: "St. John's",
    region: "St. John's metropolitan area",
    file_path: "/posts/stjohns.html",
  }
]

const showNewfoundlandRegions = () => {
  let p = document.getElementById('resource-list')
  for (let i = 0; i < newfoundland_regions.length; i++) {
    let a = document.createElement('a')
    a.id = "resource_link"
    // get json specified file path and put that in href
    a.href = newfoundland_regions[i].file_path
    // change text to name
    a.innerHTML = newfoundland_regions[i].name + ", "
    // append <a> element inside <p>
    p.appendChild(a)
  }
}

const createListNewfoundland = () => {
  let ul = document.getElementById("results")
  for (let i = 0; i < newfoundland_regions.length; i++) {
    let li = document.createElement('li')
    let a = document.createElement('a')
    li.style.display = "none"
    a.href = newfoundland_regions[i].file_path
    a.innerHTML = newfoundland_regions[i].name
    li.appendChild(a)
    ul.appendChild(li)
  }
}

createListNewfoundland()
showNewfoundlandRegions()


