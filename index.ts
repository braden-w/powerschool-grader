function calculateSplitGrades() {
  // Select the table element with id "scoreTable"
  const table = <HTMLTableElement>document.getElementById("scoreTable")
  // Select the table body within table
  const tableBody = table.tBodies[0]
  const rows = tableBody.rows
  console.log(
    "🚀 ~ file: index.ts ~ line 6 ~ calculateSplitGrades ~ tableBody",
    tableBody
  )

  let categories = []
  let points = []
  let total = []
  function getCat(cat) {
    for (let a = 0; a < categories.length; a++) {
      if (categories[a] === cat) return a
    }
    return categories.push(cat) - 1
  }
  function output() {
    let outp = ""
    for (let a = 0; a < categories.length; a++) {
      let perc = (points[a] * 100) / total[a] + "     "
      if (perc.indexOf(".") > 0) perc = perc.substring(0, perc.indexOf(".") + 4)
    }
    return outp
  }
  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    let row = rows.item(rowIndex)
    let cat = row.children[0].innerText
    let points = row.children[1].innerText
    let total = row.children[2].innerText
    let catIndex = getCat(cat)
    points[catIndex] = points
    total[catIndex] = total
  }
  alert(output())
}

function openModal() {
  let modal: HTMLDivElement = document.createElement("div")
  modal.innerHTML =
    "<div style='position:fixed; top:0;left:0;bottom:0;right:0; z-index:100; background-color:rgba(0,0,0,0.4);'><div style='background-color:white; border: 1px solid #888; width:300px; padding:5px; margin: 20px auto;'><span onclick='this.close()' style='cursor:pointer; float:right'>×</span></div></div>"
  document.body.appendChild(modal)
  modal.children[0].children[0].children[0].close = function() {
    document.body.removeChild(modal)
  }
  let cont: HTMLDivElement = document.createElement("div")
  modal.children[0].children[0].appendChild(cont)
  cont.innerHTML =
    "<p>Do you want to split by category?</p><form style='display:inline-block'><input type='submit' value='Yes'></form><form style='display:inline-block'><input type='submit' value='No '></form>"
  const yesInputButton: HTMLInputElement = cont.children[1] as HTMLInputElement
  const noInputButton: HTMLInputElement = cont.children[2] as HTMLInputElement
  yesInputButton.onsubmit = function(e) {
    e.preventDefault()
    calculateSplitGrades()
    return false
  }
  noInputButton.onsubmit = function(e) {
    e.preventDefault()
    //     calculateNoSplit()
    return false
  }
}
function main() {
  openModal()
}

main()
