import verseReferences from './verseReferences';
import 'normalize.css/normalize.css';
import '../styles/style.css';
import '../styles/index.css';

const dropdownInputBox = document.querySelector('.dropdown__input-box');
const dropdownButton = document.querySelector('.dropdown__button');
const dropdownIcon = document.querySelector('.dropdown__icon');
const dropdownList = document.querySelector('.dropdown__list');

function addDropdownListItem(emotion) {
  const listElement = document.createElement('li');
  const listLink = document.createElement('a');
  listLink.className = 'dropdown__item';
  listLink.setAttribute('href', `/verses.html?emotion=${emotion}`);
  listLink.innerText = emotion[0].toUpperCase() + emotion.slice(1);
  listElement.appendChild(listLink);
  dropdownList.appendChild(listElement);
}

function goToHref(e) {
  window.location.href = e.target.getAttribute('href');
}

function addEventListenersToDropdownItems() {
  const dropdownItems = document.querySelectorAll('.dropdown__item');
  dropdownItems.forEach((dropdownItem) => {
    dropdownItem.addEventListener('mousedown', goToHref);
    return dropdownItem;
  });
}

function showDropdownList() {
  dropdownList.classList.add('dropdown__list_show');
  dropdownIcon.classList.add('dropdown__icon_rotate');
}

function hideDropdownList() {
  dropdownList.classList.remove('dropdown__list_show');
  dropdownIcon.classList.remove('dropdown__icon_rotate');
}

function toggleDropdownList() {
  dropdownList.classList.toggle('dropdown__list_show');
  dropdownIcon.classList.toggle('dropdown__icon_rotate');
}

function filterDropdownList(e) {
  const inputValue = e.target.value.toLowerCase();
  const listItems = document.querySelectorAll('.dropdown__item');
  for (let i = 0; i < listItems.length; i++) {
    const listItem = listItems[i];
    const listItemValue = listItem.innerHTML
      .toLowerCase()
      .substring(0, inputValue.length);
    if (listItemValue !== inputValue) {
      listItem.style.display = 'none';
    } else {
      listItem.style.display = 'list-item';
    }
  }
}

Object.keys(verseReferences).forEach((emotion) => addDropdownListItem(emotion));
addEventListenersToDropdownItems();

dropdownButton.addEventListener('click', toggleDropdownList);
dropdownInputBox.addEventListener('focus', showDropdownList);
dropdownInputBox.addEventListener('focusout', hideDropdownList);
dropdownInputBox.addEventListener('keyup', filterDropdownList);
