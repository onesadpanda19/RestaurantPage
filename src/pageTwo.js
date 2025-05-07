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
        <h2>Appetizers</h2>
        <div class="app">
            <h3>app-one</h3>
            <p>this is a brief discription of app-one</p>
            <p>10$</p>
        </div>
        <div class="app">
            <h3>app-two</h3>
            <p>this is a brief discription of app-two</p>
            <p>10$</p>
        </div>
        <div class="app">
            <h3>app-three</h3>
            <p>this is a brief discription of app-three</p>
            <p>10$</p>
        </div>
    </div>
    <div class="entrees">
        <h2>Entrees</h2>
        <div class="entree">
            <h3>entree-one</h3>
            <p>this is a brief description of entree-one</p>
            <p>20$</p>
        </div>
        <div class="entree">
            <h3>entree-two</h3>
            <p>this is a brief description of entree-two</p>
            <p>20$</p>
        </div>
        <div class="entree">
            <h3>entree-three</h3>
            <p>this is a brief description of entree-three</p>
            <p>20$</p>
        </div>
        <div class="entree">
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
        <h2>Sides</h2>
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
        <h2>Beverages</h2>
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
