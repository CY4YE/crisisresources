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

const searchNewfoundland = () => {
  const searchbar = document.getElementById("searchBar")
  searchbar.addEventListener("keyup", e => {
    let ul = document.getElementById("results")
    let input = document.getElementById("searchBar").value.toLowerCase()
    let li = ul.getElementsByTagName("li")

    for (let i = 0; i < li.length; i++) {
      let a = li[i].getElementsByTagName("a")[0]
      let match = a.textContent || a.innerText
      if (match.toLowerCase().indexOf(input) != -1) {
        li[i].style.display = ""
      } else {
        li[i].style.display = "none"
      }
    }
  })
}

searchNewfoundland()
createListNewfoundland()
showNewfoundlandRegions()


