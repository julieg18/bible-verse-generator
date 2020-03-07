import verseReferences from './verseReferences';
import 'normalize.css/normalize.css';
import '../styles/style.css';
import '../styles/verses.css';

const currentUrl = new URL(window.location.href);
const currentEmotion = currentUrl.searchParams.get('emotion');
const verses = document.querySelector('.page__verses');
const currentEmotionReferences = verseReferences[currentEmotion];

document.title = `When You're Feeling ${currentEmotion[0].toUpperCase() +
  currentEmotion.substring(1)}`;

document.querySelector(
  '.page__title',
).innerHTML = `When You're Feeling ${currentEmotion[0].toUpperCase() +
  currentEmotion.substring(1)}`;

function copyVerseToClipboard(e) {
  const verseReference = e.srcElement.parentNode.querySelector(
    '.verse__reference',
  ).innerText;
  const versePassage = e.srcElement.parentNode.parentNode.querySelector(
    '.verse__passage',
  ).innerText;
  const verse = `${versePassage} - ${verseReference}`;

  const textArea = document.createElement('textarea');
  textArea.value = verse;
  textArea.setAttribute('readOnly', '');
  textArea.style.position = 'absolute';
  textArea.style.left = '-9999px';

  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);

  const copyButtons = document.querySelectorAll('.verse__copy-button');
  copyButtons.forEach((button) => {
    if (button !== e.srcElement) {
      button.innerHTML = 'Copy';
    }
  });
  e.srcElement.innerHTML = 'Copied!';
}

function createVerseHtml(verseIdNum, verseRef, verseContent) {
  const verseHeader = document.createElement('div');
  const versePassage = document.createElement('div');
  const verseReference = document.createElement('p');
  const verseCopyBtn = document.createElement('button');
  const verse = document.querySelector(`.verse-${verseIdNum}`);

  verseHeader.className = 'verse__header';
  versePassage.className = 'verse__passage';
  verseReference.className = 'verse__reference';
  verseCopyBtn.className = 'verse__copy-button';

  verseReference.innerHTML = verseRef;
  verseCopyBtn.innerHTML = 'Copy';
  versePassage.innerHTML = verseContent;

  verseCopyBtn.addEventListener('click', copyVerseToClipboard);

  verseHeader.appendChild(verseReference);
  verseHeader.appendChild(verseCopyBtn);

  verse.innerHTML = '';
  verse.appendChild(verseHeader);
  verse.appendChild(versePassage);
}

function createLoadingVerse(verseIdNum) {
  const loadingVerse = document.createElement('li');
  loadingVerse.className = `verse verse-${verseIdNum}`;
  const loadingAnimation = document.createElement('div');
  loadingAnimation.className = 'loading-animation';
  for (let i = 1; i < 4; i += 1) {
    const loadingDot = document.createElement('span');
    loadingDot.className = `loading-animation__dot loading-animation__dot_num_${i}`;
    loadingAnimation.appendChild(loadingDot);
  }
  loadingVerse.appendChild(loadingAnimation);
  return loadingVerse;
}

async function addVerse(verseRef, verseIdNum) {
  const loadingVerse = createLoadingVerse(verseIdNum);
  verses.appendChild(loadingVerse);

  const url = new URL(
    `https://api.scripture.api.bible/v1/bibles/06125adad2d5898a-01/passages/${verseRef}`,
  );
  const queryParams = {
    'content-type': 'text',
    'include-notes': 'false',
    'include-titles': 'false',
    'include-chapter-numbers': 'false',
    'include-verse-numbers': 'false',
    'include-verse-spans': 'false',
  };
  Object.entries(queryParams).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });
  const verseRequest = await fetch(url, {
    headers: { 'api-key': process.env.API_TOKEN },
  });
  const parsedReq = await verseRequest.json();
  const {
    data: { reference, content },
  } = parsedReq;
  createVerseHtml(verseIdNum, reference, content);
}

for (let i = 0; i < currentEmotionReferences.length; i += 1) {
  addVerse(currentEmotionReferences[i], i + 1);
}
