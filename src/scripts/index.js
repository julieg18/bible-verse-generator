import 'normalize.css/normalize.css';
import '../styles/style.css';
import '../styles/index.css';

const dropdownInputBox = document.querySelector('.dropdown__input-box');
const dropdownButton = document.querySelector('.dropdown__button');
const dropdownIcon = document.querySelector('.dropdown__icon');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = document.querySelectorAll('.dropdown__item');

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

function goToHref(e) {
  window.location.href = e.target.getAttribute('href');
}

dropdownButton.addEventListener('click', toggleDropdownList);
dropdownInputBox.addEventListener('focus', showDropdownList);
dropdownInputBox.addEventListener('focusout', hideDropdownList);
dropdownInputBox.addEventListener('keyup', filterDropdownList);
dropdownItems.forEach((dropdownItem) => {
  dropdownItem.addEventListener('mousedown', goToHref);
  return dropdownItem;
});
