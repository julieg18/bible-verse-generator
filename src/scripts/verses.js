import verseReferences from './verseReferences';
import 'normalize.css/normalize.css';
import '../styles/style.css';
import '../styles/verses.css';

const verses = document.querySelector('.page__verses');
const currentUrl = new URL(window.location.href);
const currentEmotion = currentUrl.searchParams.get('emotion');
const currentEmotionReferences = verseReferences[currentEmotion];

function createLoadingAnimation() {
  const loadingAnimation = document.createElement('div');
  loadingAnimation.className = 'loading-animation';
  for (let i = 1; i < 4; i += 1) {
    const loadingDot = document.createElement('span');
    loadingDot.className = `loading-animation__dot loading-animation__dot_num_${i}`;
    loadingAnimation.appendChild(loadingDot);
  }
  return loadingAnimation;
}

async function getVerse(verseRef) {
  const url = new URL(
    `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/passages/${verseRef}`,
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
  return { reference, content };
}

function changeCopyButtonTooltipsText(copyButtonId) {
  const copyButtonTooltips = document.querySelectorAll(
    '.verse__button-tooltip',
  );
  const lastClickedCopyButtonTooltip = document
    .querySelector(`.${copyButtonId}`)
    .querySelector('span');

  copyButtonTooltips.forEach((tooltip) => {
    if (tooltip !== lastClickedCopyButtonTooltip) {
      tooltip.innerHTML = 'Copy';
      tooltip.classList.remove('verse__button-tooltip_clicked');
    }
  });
  lastClickedCopyButtonTooltip.innerHTML = 'Copied!';
  lastClickedCopyButtonTooltip.classList.add('verse__button-tooltip_clicked');
}

function copyVerseToClipboard(e) {
  const copyButton =
    e.srcElement.classList[0] === 'far'
      ? e.srcElement.parentNode
      : e.srcElement;
  const verseReference = copyButton.parentNode.querySelector(
    '.verse__reference',
  ).innerText;
  const versePassage = copyButton.parentNode.parentNode.querySelector(
    '.verse__passage',
  ).innerText;
  const copyButtonId = copyButton.classList[1];
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

  changeCopyButtonTooltipsText(copyButtonId);
}

function createVerse(verseIdNum, verseRef, verseContent) {
  const verseBook = verseRef.split(' ')[0];
  const verseChapter = verseRef.split(' ')[1].split(':')[0];
  const verseHref = `https://www.biblestudytools.com/ceb/${verseBook}/${verseChapter}.html`;

  const verseHeader = document.createElement('div');
  const versePassage = document.createElement('div');
  const verseReference = document.createElement('p');
  const verseCopyBtn = document.createElement('button');
  const verseBibleLink = document.createElement('a');
  const copyIcon = document.createElement('i');
  const copyButtonTooltip = document.createElement('span');

  verseHeader.className = 'verse__header';
  versePassage.className = 'verse__passage';
  verseReference.className = 'verse__reference';
  verseCopyBtn.className = `verse__button verse__button_id_${verseIdNum} verse__button_type_copy`;
  verseBibleLink.className = 'verse__button verse__button_type_link';
  copyIcon.className = 'far fa-copy';
  copyButtonTooltip.className = 'verse__button-tooltip';

  verseReference.innerHTML = verseRef;
  versePassage.innerHTML = verseContent;
  verseBibleLink.innerHTML = 'Go to Chapter';
  copyButtonTooltip.innerHTML = 'Copy';

  verseBibleLink.setAttribute('href', verseHref);
  verseBibleLink.setAttribute('target', '_blank');

  verseCopyBtn.addEventListener('click', copyVerseToClipboard);

  verseCopyBtn.appendChild(copyButtonTooltip);
  verseCopyBtn.appendChild(copyIcon);
  verseHeader.appendChild(verseReference);
  verseHeader.appendChild(verseBibleLink);
  verseHeader.appendChild(verseCopyBtn);

  return { verseHeader, versePassage };
}

async function addVerse(verseRef, verseIdNum) {
  const loadingVerse = document.createElement('li');
  loadingVerse.className = `verse verse-${verseIdNum}`;
  const loadingAnimation = createLoadingAnimation();
  loadingVerse.appendChild(loadingAnimation);
  verses.appendChild(loadingVerse);

  const retrievedVerse = await getVerse(verseRef);
  const { reference, content } = retrievedVerse;

  const { verseHeader, versePassage } = createVerse(
    verseIdNum,
    reference,
    content,
  );
  loadingVerse.innerHTML = '';
  loadingVerse.appendChild(verseHeader);
  loadingVerse.appendChild(versePassage);
}

document.title = `When You're Feeling ${currentEmotion[0].toUpperCase() +
  currentEmotion.substring(1)}`;

document.querySelector(
  '.page__title',
).innerHTML = `When You're Feeling ${currentEmotion[0].toUpperCase() +
  currentEmotion.substring(1)}`;

for (let i = 0; i < currentEmotionReferences.length; i += 1) {
  addVerse(currentEmotionReferences[i], i + 1);
}
