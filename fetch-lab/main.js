const root = document.querySelector('#root')

function makeElement(tag, attr_n, attr_v, content) {
  let output = document.createElement(tag);
  (!!attr_n) && output.setAttribute(attr_n, attr_v);
  output.textContent = content;
  return output;
}

// console.log(makeElement('div').outerHTML)

// const table = makeElement('table','class','show-table')
// root.append(table)
// axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
// .then(rs => {
//   let filterRow  = rs.data.filter(el => el.id <10)
//   console.log(filterRow)
//   return filterRow.map(el => {
//     let tr = makeElement('tr')
//     let td_id = makeElement('td',0,0,el.id)
//     let td_title = makeElement('td', 0,0, el.title)
//     let td_img = makeElement('td')
//     let img = makeElement('img','src',el.thumbnailUrl)
//     td_img.append(img)
//     tr.append(td_id)
//     tr.append(td_title)
//     tr.append(td_img)
//     table.append(tr)
//     return tr
//   })
// }).then(row=> {
//    console.log(row[0])
// })

const table = makeElement('table','class','show-table')
root.append(table)
fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
.then(rs => rs.json())
.then(data => {
  let filterRow  = data.filter(el => el.id <10)
  console.log(filterRow)
  return filterRow.map(el => {
    let tr = makeElement('tr')
    let td_id = makeElement('td',0,0,el.id)
    let td_title = makeElement('td', 0,0, el.title)
    let td_img = makeElement('td')
    let img = makeElement('img','src',el.thumbnailUrl)
    td_img.append(img)
    tr.append(td_id)
    tr.append(td_title)
    tr.append(td_img)
    table.append(tr)
    return tr
  })
}).then(row=> {
   console.log(row[0])
})