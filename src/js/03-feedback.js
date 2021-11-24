import throttle from 'lodash.throttle';

const inputRef = document.querySelector('input');
const textAreaRef = document.querySelector('textarea');
const formRef = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';
updateForm();

formRef.addEventListener('input', throttle(formInputHandler, 500));

formRef.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(localStorage.getItem(STORAGE_KEY));
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
});

function formInputHandler() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({email: inputRef.value, text: textAreaRef.value}));
}

function updateForm() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    inputRef.value = JSON.parse(savedMessage).email;
    textAreaRef.value = JSON.parse(savedMessage).text;
  }
};