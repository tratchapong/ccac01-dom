// setTimeout( ()=> {
//   console.log(1)
//   setTimeout( ()=> {
//       console.log(2)
//       setTimeout( ()=> {
//           console.log(3)
//           setTimeout( ()=> {
//               console.log(4)
//           },1000)
//       },1000)
//   },1000)
// },1000)

// let pm = new Promise( (resolve, reject) => {
//   setTimeout( ()=> {
//     console.log(1)
//     resolve(2)
//   }, 1000)
// })

// ************** CC_AC_HW09

// function pm(n) {
//   return new Promise( (resolve, reject) => {
//     if(n>4) {
//       return reject('ok')
//     }
//     setTimeout( ()=>{
//       console.log(n)
//       resolve(n+1)
//     }, 1000)
//   })
// }

// pm(1).then( n=> pm(n) ).then( n=> pm(n) ).then(n=> pm(n)).then(n=> pm(n)).catch(console.log)

// ******************* CC_AC_HW09+

// function show(n) {
//   return new Promise( (resolve, reject) => {
//   console.log(n)
//     setTimeout( ()=>{
//     if(n>1000) {
//       return console.log('end')
//     }
//       resolve(show(n*2))
//     }, 1000)
//   })
// }

// show(1)


