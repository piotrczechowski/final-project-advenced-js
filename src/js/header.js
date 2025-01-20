const home = document.getElementById("home");
const favorites = document.getElementById("favorites");
const textHome = document.getElementById("home-text");
const textFavorite = document.getElementById("favorites-text");
const currentUrl = window.location.href.toString();
import { addContent } from "../js/favorite/favorite";

// const pageTabs = document.querySelectorAll(".page-navigation-item");

// pageTabs.forEach((clickedTab) => {
//   console.log(clickedTab);
//   clickedTab.addEventListener("click", () => {
//     pageTabs.forEach((tab) => {
//       tab.classList.remove("active");
//     });

//     console.log(clickedTab);

//     clickedTab.classList.add("active");
//   });
// });

let part = currentUrl.slice(-14);

export const onClickPage = () => {
  if (part === "favorites.html") {
    console.log("no-wories");
    home.classList.remove("active");
    textHome.classList.remove("black");
    favorites.classList.add("active");
    textFavorite.classList.add("black");
    addContent();
  } else {
    console.log("HOME");
    home.classList.add("active");
    textHome.classList.add("black");
    favorites.classList.remove("active");
    textFavorite.classList.remove("black");
  }
};

onClickPage(part);
