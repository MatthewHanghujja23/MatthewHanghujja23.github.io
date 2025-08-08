// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';
showHideBtn.setAttribute('aria_expanded', 'false');

showHideBtn.onclick = function() {
   let showHideText = showHideBtn.textContent;
  if (showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
};

// Enable toggle on Enter key (for keyboard accessibility)
showHideBtn.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' || e.keyCode === 13) {
    showHideBtn.click();
  }
});

// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  listItem.classList.add('comment-item');

  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');

  const nameValue = nameField.value.trim();
  const commentValue = commentField.value.trim();

  if (!nameValue  || commentValue ) return;

  namePara.textContent = nameValue;
  namePara.classList.add('comment-author');

  commentPara.textContent = commentValue;
  commentPara.classList.add('comment-text');

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
}
