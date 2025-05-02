import reubenImg from "./better-reuben.jpg";

const mainDiv = document.querySelector("#main")

// HOMEPAGE
function pageOne() {

  const pageOneDiv = document.createElement("div");
  const restoTitle = document.createElement("h1");
  const imgDiv = document.createElement("div");
  const pageOneImg = document.createElement("img");
  const pageOneInfo = document.createElement("div");
  const restoIntro = document.createElement("p");
  const specialMenu = document.createElement("ul");

  restoTitle.classList.add("title");
  pageOneDiv.classList.add("pageOneNav");
  imgDiv.classList.add("image-container");
  pageOneImg.classList.add("main-pic");
  mainDiv.appendChild(pageOneDiv);
  pageOneDiv.appendChild(restoTitle);
  pageOneDiv.appendChild(imgDiv);
  imgDiv.appendChild(pageOneImg);

  restoTitle.textContent = "Odin's Bistro";
  pageOneImg.src = reubenImg;
  

 

 



  return "Page One";
}

export default pageOne;