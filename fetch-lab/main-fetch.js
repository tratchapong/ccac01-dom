// ******* readme1 then readme2 *******

// fetch('./readme1.txt')
//   .then(rs => rs.text())
//   .then(data1 => {
//     return fetch('readme2.txt')
//       .then(rs => rs.text())
//       .then(data2 => ({data1, data2}))
//   }).then(console.log)
//   .catch(error => console.error(error));

// ****** readme1 & readme2 asynchronous read *****\

fetch('./readme1.txt').then(rs => {
  console.log(rs)
  return rs.text()
}).then(data => console.log(data))

fetch('./readme2.txt').then(rs => {
  console.log(rs)
  return rs.text()
}).then(data => console.log(data))


// ****** readme1 then readme2 : longer version *****
// fetch('./readme1.txt').then(rs => {
//   return rs.text()
// }).then( data1=> {
//   return fetch('./readme2.txt').then(rs => {
//     return rs.text()
//   }).then(data2 => {
//     return({data1, data2})
//   })
// }).then(console.log)