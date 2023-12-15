// $(document).ready(function() {
//   setTimeout(function() {
//     $("body").addClass("loaded");
//   },3000);
// });
const loader = document.getElementById("loader");

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

const blurImg = document.getElementsByClassName("blur-img");

let img = document.getElementById("heroImage");
let dropdownContent = document.querySelector(".dropdown-content");
let options = dropdownContent.getElementsByTagName('a')
const images = [];

images[0] = "./images/imgZERO.jpeg";
images[1] = "./images/imgONE.jpeg";
images[2] = "./images/imgTWO.jpeg";
images[3] = "./images/imgTHREE.jpeg";
images[4] = "./images/imgFOUR.jpeg";
images[5] = "./images/imgFIVE.jpeg"
images[6] = "./images/imgSIX.jpeg";
images[7] = "./images/imgSEVEN.jpeg";
images[8] = "./images/imgEIGHT.jpeg";



img.innerHTML = `<img src="${images[0]}" />`;

// options.onmouseenter = () => {
  for(let i = 0; i < options.length||i < images.length; i++) {
    options[i].addEventListener("mouseover", function(){
      // images[i].classList.remove("transition2");
      // images[i].setAttribute("class", "transition1");
      img.innerHTML = `<img src="${images[i+1]}" />`;
    })
  }
// }
// options.onmouseleave = () => {
  for(let i = 0; i < options.length||i < images.length; i++) {
    dropdownContent.addEventListener("mouseout", function(){
      // images.classList.remove("transition1");
      // images.setAttribute("class", "transition2");

      img.innerHTML = `<img src="${images[0]}" />`;
    })
  }
// }

