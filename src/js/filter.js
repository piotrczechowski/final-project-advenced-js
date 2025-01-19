import fetchSportEnergy from './aplication/apiEnergy.js';
import { message } from './notifications.js';
// import { loader } from './loader/loader';
import * as pagination from './pagination/pagination.js';
import { capitalizeFirstLetter } from './utils/firstLater.js';
import { loader } from './loader/loader.js';
const categoryList = document.querySelector('.wrap-button');

const musclesList = document.querySelector('.muscles-list');
const paginationNumbers = document.querySelector('.pagination-numbers');

const exercisesTag = document.querySelector('.title-exercises');
categoryList.addEventListener('click', handleCategoryClick);

document.addEventListener('DOMContentLoaded', () => {
  loadSectionOnClick({ filter: 'Muscles', page: 1, limit: 12 }, 'Muscles');
});

// Funkcja sprawdzająca, czy strona została przewinięta do końca
function isPageScrolledToBottom() {
  // Obecna pozycja przewijania
  var scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

  // Wysokość całego dokumentu
  var documentHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

  // Wysokość okna przeglądarki
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  // Sprawdzenie, czy strona została przewinięta do końca (z innymi warunkami, które mogą być potrzebne)
  return scrollTop + windowHeight >= documentHeight;
}

export async function handleCategoryClick(event) {
  event.preventDefault();
  exercisesTag.innerHTML = 'Exercises';
  const { target, currentTarget } = event;

  if (target.nodeName !== 'BUTTON') return;
  const categoryName = target.dataset.name;
  if (target.classList.contains('btn-filter')) {
    const categoryItem = [...currentTarget.children];
    categoryItem.forEach(item => {
      item.firstElementChild.classList.remove('btn-filter-active');
    });
  }
  // Dodanie klasy 'active' do bieżącego elementu menu
  target.classList.add('btn-filter-active');

  const dataFilter = {
    filter: categoryName,
    page: 1,
    limit: 12,
  };
  musclesList.innerHTML = '';
  loadSectionOnClick(dataFilter);
}

export async function loadSectionOnClick(dataFilter) {
  // loader.open()
  document.querySelector('.filter-list-js').classList.remove('exercises_list');
  document.querySelector('.form-js').classList.add('hidden-form');

  try {
    loader.open()
    const filter = await fetchSportEnergy.getByFilterName(dataFilter);
    loader.close();
    const filteredResult = filter.results;

    if (!filter || filteredResult.length === 0) {
      message.error("Przepraszamy, nie znaleziono nic zgodnego z Twoim zapytaniem.");
      return;
    }
    musclesList.insertAdjacentHTML('beforeend', makeMarkupMuscles(filteredResult));

    // Nasłuchiwanie zdarzeń przewijania
    window.addEventListener('scroll', function () {
      // Jeśli strona jest przewinięta do końca, wywołujemy określone akcje
      if (isPageScrolledToBottom()) {
        console.log('Strona została załadowana do końca!');
        makeMarkupMuscles(filteredResult);
        // Tutaj można wywoływać funkcje lub podejmować inne działania
      }
    });

    // Zapisanie w LocalStorage informacji do paginacji strony
    const { totalPages } = filter;
    const data = JSON.stringify({ totalPages, categoryName: dataFilter.filter });
    localStorage.setItem('infoRequest', data);
    document.querySelector('.filter-list-js').classList.add('muscles-list');
    paginationNumbers.innerHTML = '';
    pagination.getPaginationNumbers(totalPages, dataFilter);

    pagination.setCurrentPage(1);
  } catch (error) {
    console.log(error.message);
  }
  // loader.close()
}

export function makeMarkupMuscles(filteredResult) {
  const markup = filteredResult
    .map(({ filter, name, imgURL }) => {
      let filterCurrent = filter.toLocaleLowerCase().replaceAll(' ', '');
      if (filterCurrent === 'bodyparts') {
        filterCurrent = 'bodypart';
      }
      return `
      <li class="muscles-item" data-name=${name} data-filter=${filterCurrent}>
      <a href="" class="muscles-link" data-alt="${name}">
        <img loading="lazy" class="muscles-image" src="${imgURL}" alt="${name}" width="290" height="242" >
        <button class="muscles-box-menu">
          <h3 class="muscles-small-title">${capitalizeFirstLetter(name)}</h3>
          <p class="muscles-text">${filter}</p>
        </button>
      </a>
    </li>
    `;
    })
    .join('');
    return markup;
}
