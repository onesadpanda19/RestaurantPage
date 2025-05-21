const mainDiv = document.querySelector('#main');

function pageThree() {
  const pageThreeDiv = document.createElement('div');
  pageThreeDiv.innerHTML = `
    <p> this is the third page </p>
  `;

  mainDiv.appendChild(pageThreeDiv);
}

export default pageThree;
