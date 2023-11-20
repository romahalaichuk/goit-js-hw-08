import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const saveFormStateToLocalStorage = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500);

const fillFormFieldsFromLocalStorage = () => {
  const storedFormState = localStorage.getItem('feedback-form-state');
  if (storedFormState) {
    const formState = JSON.parse(storedFormState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
};

form.addEventListener('input', saveFormStateToLocalStorage);

fillFormFieldsFromLocalStorage();

form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  console.log('Form data submitted:', {
    email: emailInput.value,
    message: messageInput.value,
  });
});
