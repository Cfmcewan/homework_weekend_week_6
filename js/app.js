document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const form = document.querySelector('#new-item-form');

  const deleteButton = document.querySelector('#delete-all-button');

  const handleDeleteButton = function(event){
    const favfilms = document.querySelector('#favourite-christmas-films');
    favfilms.innerHTML = '';
  }

  deleteButton.addEventListener('click', handleDeleteButton);

  const addElement = function(type){
    return document.createElement(type);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('event', event);
    const title = event.target.title.value;
    const year = event.target.year.value;
    const category = event.target.category.value;
    const rating = event.target.rating.value;

    const favfilms = document.querySelector('#favourite-christmas-films');

    const filmDetails = addElement('div');
    const titlePara = addElement('p');
    const yearPara = addElement('p');
    const categoryPara = addElement('p');
    const ratingPara = addElement('p');

    titlePara.textContent = title;
    yearPara.textContent = year;
    categoryPara.textContent = category;
    ratingPara.textContent = `Film Rating is: ${rating} out of 5`;

    filmDetails.appendChild(titlePara);
    filmDetails.appendChild(yearPara);
    filmDetails.appendChild(categoryPara);
    filmDetails.appendChild(ratingPara);

    favfilms.appendChild(filmDetails);

    form.reset();
  }

form.addEventListener('submit', handleFormSubmit);
})
