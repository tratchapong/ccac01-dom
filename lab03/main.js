const root = document.querySelector('#root')
const products = [
  {
    id: 1,
    name: "MacBook",
    price: 1400,
    image: "https://picsum.photos/id/180/800"
  },
  {
    id: 2,
    name: "Old Car",
    price: 2400,
    image: "https://picsum.photos/id/111/800"
  },
  {
    id: 3,
    name: "Shoes",
    price: 1000,
    image: "https://picsum.photos/id/21/800"
  },
  {
    id: 4,
    name: "Castle",
    price: 10000,
    image: "https://picsum.photos/id/1040/800"
  },
  {
    id: 5,
    name: "Lychee",
    price: 500,
    image: "https://picsum.photos/id/1080/800"
  },
  {
    id: 6,
    name: "Skate Board",
    price: 3500,
    image: "https://picsum.photos/id/157/800"
  },
  {
    id: 7,
    name: "Alarm Clock",
    price: 1500,
    image: "https://picsum.photos/id/175/800"
  },
  {
    id: 8,
    name: "Book",
    price: 800,
    image: "https://picsum.photos/id/24/800"
  }
];

function makeElement(tag,attr_n, attr_v, content) {
  let output = document.createElement(tag)
  output.setAttribute(attr_n, attr_v)
  output.textContent = content
  return output
}
