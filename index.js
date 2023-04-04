const displayMenu = () => {
  var menu = document.getElementById('menu');
  var hamburger = document.getElementById('hamburger');
  
  if(menu.style.display === "block") {
    menu.style.display = "none";
    hamburger.innerHTML = '<svg width="32" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z"/></g></svg>';
  } else {
    menu.style.display = "block";
    hamburger.innerHTML = `<svg width="26" height="26" xmlns="http://www.w3.org/2000/svg"><path d="M23.607.98l1.414 1.413L14.414 13l10.607 10.607-1.414 1.414L13 14.414 2.393 25.021.98 23.607 11.586 13 .98 2.393 2.393.98 13 11.586 23.607.98z" fill="#FFF" fill-rule="evenodd"/></svg>
`;
  }
}

/*const displayProduct = () => {
  var menuItems = document.getElementsByClassName('menu-items');
  
  if(menuItems[0].style.display === "none") {
    menuItems[0].style.display = "flex";
  } else {
    menuItems[0].style.display = "none";
  }
}*/

const displayItems = () => {
  //alert("it's working right 🚀");
  var target = event.target;
  //var menuHeader = document.getElementsByClassName('menu-header');
  var menuItems = document.getElementsByClassName('menu-items');
  var arrow
  
  /*var toggleProduct = () => {
    menuItems[0].style.display = "none"? menuItems[0].style.display = "flex" : menuItems[0].style.display = "none";
  }*/
  switch (target.innerHTML) {
    case 'Product':
      if(menuItems[0].style.display === "flex") {
        menuItems[0].style.display = "none"
      } else {
        menuItems[0].style.display = "flex"
      }
      break;
    case 'Company':
      if(menuItems[1].style.display === "flex") {
        menuItems[1].style.display = "none"
      } else {
        menuItems[1].style.display = "flex"
      }
      break;
    case 'Connect':
      if(menuItems[2].style.display === "flex") {
        menuItems[2].style.display = "none"
      } else {
        menuItems[2].style.display = "flex"
      }
      break;
  }
}
