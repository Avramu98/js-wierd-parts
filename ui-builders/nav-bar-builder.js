const navBarContainer = document.querySelector('.nav-container');
const navBarElement = document.createElement("ul");
navBarElement.setAttribute('class', 'navbar');

navBarContainer.appendChild(navBarElement);

navBarElementsArr.map((navElement) => {
  const { href, title } = navElement;

  const menuItem = document.createElement("li");
  const refItem = document.createElement("a");

  navBarElement.appendChild(menuItem);
  menuItem.appendChild(refItem);

  refItem.href = href;
  refItem.innerHTML = title
});