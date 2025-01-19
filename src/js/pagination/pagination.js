import fetchSportEnergy from '../aplication/apiEnergy.js';
import * as filterBtn from '../filter.js';
import { makeMarkupCards } from '../exercises.js';
import { loader } from '../loader/loader.js';


const paginationNumbers = document.querySelector('.pagination-numbers');
const musclesList = document.querySelector('.muscles-list');

let currentPage = 1;
let dataRequest;
let totalPages;

try {
  paginationNumbers.addEventListener('click', e => {
    if (e.target.nodeName === 'BUTTON') {
      handleClick(e);
    }
  });
} catch (error) {
  console.error('Error initializing pagination:', error);
}

async function handleClick(e) {
  const clickedPage = Number(e.target.textContent);

  if (clickedPage === currentPage) return;

  const dataFilter = {
    ...dataRequest,
    page: clickedPage,
  };

  try {
    loader.open();

    if (dataFilter.filter) {
      const filterResponse = await fetchSportEnergy.getByFilterName(dataFilter);
      musclesList.innerHTML = filterBtn.makeMarkupMuscles(filterResponse.results);
    } else {
      const exercisesResponse = await fetchSportEnergy.getByFilterCategory(dataFilter);
      makeMarkupCards(exercisesResponse);
    }

    loader.close();
    currentPage = clickedPage;
    updatePaginationStyles();
  } catch (error) {
    console.error('Error fetching data:', error);
    loader.close();
  }
}

function appendPageNumber(index) {
  const pageNumber = document.createElement('button');
  pageNumber.className = 'pagination-number';
  pageNumber.textContent = index;
  pageNumber.setAttribute('page-index', index);
  pageNumber.setAttribute('aria-label', `Page ${index}`);
  paginationNumbers.appendChild(pageNumber);
}

export function getPaginationNumbers(pages, data) {
  totalPages = pages;
  dataRequest = data;

  if (pages <= 1) return;

  paginationNumbers.innerHTML = ''; 
  for (let i = 1; i <= pages; i++) {
    appendPageNumber(i);
  }
  updatePaginationStyles();
}

function updatePaginationStyles() {
  document.querySelectorAll('.pagination-number').forEach(button => {
    const pageIndex = Number(button.getAttribute('page-index'));
    button.classList.toggle('active', pageIndex === currentPage);
  });
}

export function setCurrentPage(pageNum) {
  if (pageNum < 1 || pageNum > totalPages) {
    console.error('Invalid page number:', pageNum);
    return;
  }
  currentPage = pageNum;
  updatePaginationStyles();
}
