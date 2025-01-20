import sprite from "../../images/svg/sprite.svg";
import { cutString } from "./slice-string";

export function markupList(arr) {
  const list = document.querySelector(".filter-list-js");
  list.classList.remove("hidden-form");

  if (arr.length > 6) {
    list.classList.add("scroll");
  } else {
    list.classList.remove("scroll");
  }

  const markup = arr
    .map(
      ({ _id, target, name, bodyPart, burnedCalories, time }) => `
  <li class="fav-list-item" id=${_id}>
    <div class="fav-list-item-up">
      <div class="fav-list-item-up-left">
        <span class="fav-btn-workout">${cutString(target, 6)}</span>
        <button id="btnTrash" class="fav-btn-trash-icon fav-btn-trash" data-id=${_id}>
          <svg class="fav-btn-trash-icon" width="16" height="16" aria-label="trash" data-id=${_id}>
            <use class="fav-btn-trash-icon" href="${sprite}#icon-trash" data-id=${_id}></use>
          </svg>
        </button>
      </div>
      <div class="fav-list-item-up-right">
        <button class="fav-btn-start" data-id=${_id}>
          <p class="fav-btn-start-text" data-id=${_id}>start</p>
          <svg class="fav-btn-start-icon" width="16" height="16" aria-label="arrow" data-id=${_id}>
            <use href="${sprite}#icon-arrow" data-id=${_id}></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="fav-list-item-middle">
      <div class="fav-list-item-middle-icon">
        <svg class="fav-list-item-middle-icon-svg">
          <use href="${sprite}#icon-run-man"></use>
        </svg>
      </div>
      <h3 class="fav-list-item-middle-title">${cutString(name, 16)}</h3>
    </div>
    <div class="fav-list-item-bottom">
      <ul class="fav-list-item-bottom-list">
        <li class="fav-list-item-bottom-list-item">
          <p class="fav-list-item-bottom-list-item-text">
            Burned calories: <span>${burnedCalories}/${time}</span>
          </p>
        </li>
        <li class="fav-list-item-bottom-list-item">
          <p class="fav-list-item-bottom-list-item-text">
            Body part: <span>${cutString(bodyPart, 5)}</span>
          </p>
        </li>
        <li class="fav-list-item-bottom-list-item">
          <p class="fav-list-item-bottom-list-item-text">Target: <span>${cutString(
            target,
            7
          )}</span></p>
        </li>
      </ul>
    </div>
  </li>`
    )
    .join("");

  list.innerHTML = markup;
}
