ontario_regions = [
  {
    name: "Toronto",
    region: "Greater Toronto Area",
    file_path: "/posts/toronto.html",
  },
  {
    name: "Markham",
    region: "York Region, Greater Toronto Area",
    file_path: "/posts/markham.html",
  },
  {
    name: "Aurora",
    region: "York Region",
    file_path: "/posts/aurora.html",
  },
]

const showOntarioRegions = () => {
  let p = document.getElementById('resource-list')
  for (let i = 0; i < ontario_regions.length; i++) {
    let a = document.createElement('a')
    a.id = "resource_link"
    // get json specified file path and put that in href
    a.href = ontario_regions[i].file_path
    // change text to name
    a.innerHTML = ontario_regions[i].name + ", "
    // append <a> element inside <p>
    p.appendChild(a)
  }
}

const createListOntario = () => {
  let ul = document.getElementById("results")
  for (let i = 0; i < ontario_regions.length; i++) {
    let li = document.createElement('li')
    let a = document.createElement('a')
    li.style.display = "none"
    a.href = ontario_regions[i].file_path
    a.innerHTML = ontario_regions[i].name
    li.appendChild(a)
    ul.appendChild(li)
  }
}

const searchOntario = () => {
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

searchOntario()
createListOntario()
showOntarioRegions()