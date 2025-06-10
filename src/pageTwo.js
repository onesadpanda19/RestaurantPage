const mainDiv = document.querySelector('#main');

//
function pageTwo() {
  const pageTwoDiv = document.createElement('div');
  pageTwoDiv.classList.add('page-two');
  pageTwoDiv.innerHTML = `
    <div class="title-two">
        <h1>Menu</h1>
    </div>
        <div class="appetizers">
            <h2 class="h-title">Appetizers</h2>
            <div class="app">
                <h3>Fry's</h3>
                <p>A basket of fry's</p>
                <p>8$</p>
            </div>
            <div class="app">
                <h3>Tot's</h3>
                <p>A basket of tot's</p>
                <p>10$</p>
            </div>
            <div class="app">
                <h3>Onion Rings</h3>
                <p>A basket of onion rings</p>
                <p>10$</p>
            </div>
            <div class="app">
                <h3>Falafel Plate</h3>
                <p>Falafel balls on a bed of spring mix with lettuce, tomato, onion, feta cheese, hummus, and olives</p>
                <p>10$</p>
            </div>
        </div>
        <div class="entrees">
            <h2 class="h-title">Entrees</h2>
            <div class="entree">
                <h3>The Single</h3>
                <p>A classic burger served with fry sauce, lettuce, tomato, onion, pickle, and cheddar cheese</p>
                <p>18$</p>
            </div>
            <div class="entree">
                <h3>The Double</h3>
                <p>Same as The Single, but with two burger patties</p>
                <p>20$</p>
            </div>
            <div class="entree">
                <h3>The Triple Threat</h3>
                <p>A burger made of one patty, pastrami, bacon, stone-ground mustard, and swiss cheese</p>
                <p>23$</p>
            </div>
            <div class="Beef">
                <h3>entree-four</h3>
                <p>this is a brief description of entree-four</p>
                <p>20</p>
            </div>
            <div class="entree">
                <h3>entree-five</h3>
                <p>this is a brief description of entree-five</p>
                <p>20$</p>
            </div>
        </div>
        <div class="sides">
            <h2 class="h-title">Sides</h2>
            <div class="side">
                <h3>side-one</h3>
                <p>this is a brief description of side-one</p>
                <p>30$</p>
            </div>
            <div class="side">
                <h3>side-two</h3>
                <p>this is a brief description of side-two</p>
                <p>30$</p>
            </div>
            <div class="side">
                <h3>side-three</h3>
                <p>this is a brief description of side-three</p>
                <p>30$</p>
            </div>
            <div class="side">
                <h3>side-four</h3>
                <p>this is a brief description of side-four</p>
                <p>30$</p>
            </div>
        </div>
        <div class="beverages">
            <h2 class="h-title">Beverages</h2>
            <div class="bev">
                <h3>bev-one</h3>
                <p>this is a brief description of bev-one</p>
                <p>40$</p>
            </div>
            <div class="bev">
                <h3>bev-two</h3>
                <p>this is a brief description of bev-two</p>
                <p>40$</p>
            </div>
            <div class="bev">
                <h3>bev-three</h3>
                <p>this is a brief description of bev-three</p>
                <p>40$</p>
            </div>
        </div>

<button id="page-three-button">Go to Page Three</button>
  `;
  mainDiv.appendChild(pageTwoDiv);

  return 'Page Two';
}

export default pageTwo;
