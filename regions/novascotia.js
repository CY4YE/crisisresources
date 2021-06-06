novascotia_regions = [
  {
    name: "Halifax",
    region: "Nova Scotia County",
    file_path: "/posts/halifax.html",
  },
]

const showNovascotiaRegions = () => {
  let p = document.getElementById('resource-list')
  for (let i = 0; i < novascotia_regions.length; i++) {
    let a = document.createElement('a')
    a.id = "resource_link"
    // get json specified file path and put that in href
    a.href = novascotia_regions[i].file_path
    // change text to name
    a.innerHTML = novascotia_regions[i].name + ", "
    // append <a> element inside <p>
    p.appendChild(a)
  }
}

const createListNovaScotia = () => {
  let ul = document.getElementById("results")
  for (let i = 0; i < novascotia_regions.length; i++) {
    let li = document.createElement('li')
    let a = document.createElement('a')
    li.style.display = "none"
    a.href = novascotia_regions[i].file_path
    a.innerHTML = novascotia_regions[i].name
    li.appendChild(a)
    ul.appendChild(li)
  }
}

createListNovaScotia()
showNovascotiaRegions()