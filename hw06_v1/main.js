// กด + และ - เพื่อเพิ่มและลดทีละ 1
// ตัวเลขสุดที่ 0 และห้ามติดลบ
// กด C จะ reset เลขเป็น 0
const counter = document.querySelector('.counter')
const btnInc = document.querySelector('.btn-inc')
const btnDec = document.querySelector('.btn-dec')
const btnClr = document.querySelector('.btn-clr')
const number = document.querySelector('.number')

let countNum = 0

btnClr.addEventListener('click', ()=>updateCounter(0))
btnInc.addEventListener('click', ()=>updateCounter(countNum+=1))
btnDec.addEventListener('click', ()=>updateCounter(countNum-=1))

function updateCounter(n) {
  if(n<0) {
    countNum = 0
    return
  }
  number.textContent = n
}



