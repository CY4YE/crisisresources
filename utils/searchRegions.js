const searchRegions = () => {
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

searchRegions()