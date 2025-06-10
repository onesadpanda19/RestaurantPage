import reubenImg from './better-reuben.jpg';
import specialImg1 from './special-menu-imgs/appetizer.jpg';
import specialImg2 from './special-menu-imgs/croquemuffins.jpg';


const mainDiv = document.querySelector('#main');

// HOMEPAGE
function pageOne() {
  const pageOneDiv = document.createElement('div');
  const restoTitle = document.createElement('h1');
  const imgDiv = document.createElement('div');
  const pageOneImg = document.createElement('img');
  const pageOneInfo = document.createElement('div');
  const restoIntro = document.createElement('p');
  const specialMenu = document.createElement('ul');
  const specialImg1div = document.createElement('img');
  const specialImg2div = document.createElement('img');
  const specialUl = [specialImg1, specialImg2];
  
  mainDiv.classList.add('main-frontpg');
  restoTitle.classList.add('title');
  pageOneDiv.classList.add('pageOneNav');
  imgDiv.classList.add('image-container');
  pageOneImg.classList.add('main-pic');
  specialMenu.classList.add('special-ul');
  


  mainDiv.appendChild(pageOneDiv);
  pageOneDiv.appendChild(restoTitle);
  pageOneDiv.appendChild(imgDiv);
  imgDiv.appendChild(pageOneImg);
  pageOneDiv.appendChild(pageOneInfo);
  pageOneInfo.appendChild(restoIntro);
  pageOneInfo.appendChild(specialMenu);
  specialMenu.appendChild(specialImg1div);
  restoTitle.textContent = "Odin's Bistro";
  restoIntro.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  specialImg1div.src = specialImg1;
  specialImg2div.src= specialImg2;
  pageOneImg.src = reubenImg;


  // ahem
  // hello
  // ahem
  // guess the gnomes got her
  /// mb was def not slacking off and making choc milk

  return 'Page One';
}

export default pageOne;
