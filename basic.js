var start1 = document.querySelector("#start1");
var start2 = document.querySelector("#start2");

const randomcolor = function () {
  const number = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += number[Math.floor(Math.random() * 16)];
  }
  return color;
};

const startcolorchanging1 = () => {
  var rgba1 = randomcolor();
  console.log(rgba1);
  start1.innerText = `${rgba1}`;
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgba1} , #444)`;
}

const startcolorchanging2 = () => {
  let rgba2 = randomcolor();
  console.log(rgba2);
  start2.innerText = `${rgba2}`;
  document.body.style.backgroundImage = `linear-gradient(to right, #000 ,${rgba2})`;
}

const stopcolorchanging = () => {
  document.body.style.backgroundImage = `linear-gradient(to right, #000 , #444)`;
}

// let id;
// const startcolorchanging = function () {
//   if (!id) {
//     id = setInterval(function () {
//       document.body.style.backgroundColor = randomcolor();
//     }, 1000);
//   }
// };
// const stopcolorchanging = function () {
//   clearInterval(id);
//   id = null;
// };

start1.addEventListener("click", startcolorchanging1);
start2.addEventListener("click", startcolorchanging2);
document.querySelector("#stop").addEventListener("click", stopcolorchanging);
