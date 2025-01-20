import { myModal } from "./modal-window/modal";
import {
  getExerciseModal,
  getRatingModal,
} from "./modal-window/generation-to-modal";
import { createInteractiveRaiting } from "../js/raiting.js";
import fetchSportEnergy from "./aplication/apiEnergy.js";
import { addLocalFavorites, deleteLocalFavorites } from "./utils/localStor";
import { message } from "./notifications.js";
import sprite from "../images/svg/sprite.svg";
import { addContent } from "../js/favorite/favorite.js";
// import { loader } from "./loader/loader";

const listExercises = document.querySelector(".filter-list-js");
let id = "";
const validNodeNames = ["BUTTON", "svg", "use", "P"];
let addRaitingButton;
let addFavoriteButton;
let sendRaitingForm;

async function sendRaitingHandler(event) {
  event.preventDefault();

  const exerciseID = document.querySelector(".modal-get-raiting").dataset.id;
  const ratingContainer = document.querySelector(".rating-container-js");
  const ratingFromUser = ratingContainer.dataset.rating;
  const email = document.querySelector(".raiting-form-field-input").value;
  const review = document.querySelector(".raiting-form-field-comment").value;

  const request = {
    rate: Number(ratingFromUser),
    email,
    review,
  };

  const response = await fetchSportEnergy.addExercisesRate(exerciseID, request);

  if (response.message) {
    message.error(`${response.message}`);
  } else {
    message.success(
      `Thank you for your mark - ${request.rate} for ${response.name}`
    );
    myModal.close();
  }
}

async function getRaitingHandler() {
  const exerciseID = document.querySelector(".modal-info").dataset.id;
  myModal.close();
  myModal.open(getRatingModal(exerciseID));

  createInteractiveRaiting();

  sendRaitingForm = document.querySelector(".raiting-form");
  sendRaitingForm.addEventListener("submit", sendRaitingHandler);
}

async function addFavoriteHandler() {
  const favoriteButton = document.querySelector(".refresh-button-js");
  const cardId = document.querySelector(".modal-info").dataset.id;
  const currentUrl = window.location.href;
  const isFavoritesPage = currentUrl.endsWith("favorites.html");

  if (favoriteButton.dataset.favorite === "false") {
    favoriteButton.innerHTML = `
      <button class="add-favorite-js" type="button">
        <span class="remote-favorites">Remove from favorites</span>
        <svg class="trash-icon-img" width="18" height="18" aria-label="trash-icon">
          <use href="${sprite}#icon-trash"></use>
        </svg>
      </button>`;
    favoriteButton.dataset.favorite = "true";

    //loader.open();
    const data = await fetchSportEnergy.getOneExercises(cardId);
    //loader.close();

    addLocalFavorites(data);
    if (isFavoritesPage) addContent();
  } else {
    favoriteButton.innerHTML = `
      <button class="add-favorite-js" type="button">
        <span>Add to favorites</span>
        <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
          <use href="${sprite}#icon-heart"></use>
        </svg>
      </button>`;
    favoriteButton.dataset.favorite = "false";

    deleteLocalFavorites(cardId);
    if (isFavoritesPage) addContent();
  }
}

// Handles the initial click event on the exercise list
function getStartHandler({ target }) {
  const { nodeName, classList, dataset } = target;

  if (
    validNodeNames.includes(nodeName) &&
    !classList.contains("fav-btn-trash-icon") &&
    !classList.contains("fav-btn-workout")
  ) {
    id = dataset.id;
    return oneCard(id);
  } else if (classList.contains("fav-btn-trash-icon")) {
    const cardId = dataset.id;
    deleteLocalFavorites(cardId);
    addContent();
  }
}

const oneCard = async (id) => {
  //loader.open();
  const data = await fetchSportEnergy.getOneExercises(id);
  //loader.close();

  const favoriteData = localStorage.getItem("favorites");
  if (favoriteData) {
    const favoriteList = JSON.parse(favoriteData);
    const isFavorite = favoriteList.some(({ _id }) => _id === id);
    data.favorite = isFavorite;
  } else {
    data.favorite = false;
  }

  myModal.open(getExerciseModal(data));

  addFavoriteButton = document.querySelector(".refresh-button-js");
  addRaitingButton = document.querySelector(".add-rating");

  addRaitingButton.addEventListener("click", getRaitingHandler);
  addFavoriteButton.addEventListener("click", addFavoriteHandler);
};

listExercises.addEventListener("click", getStartHandler);
