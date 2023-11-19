import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

const saveFormState = () => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
};

const loadFormState = () => {
  const storedFormState = localStorage.getItem('feedback-form-state');
  if (storedFormState) {
    const formState = JSON.parse(storedFormState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
};

const handleSubmit = event => {
  event.preventDefault();

  localStorage.removeItem('feedback-form-state');

  emailInput.value = '';
  messageInput.value = '';

  console.log('Feedback submitted:', {
    email: emailInput.value,
    message: messageInput.value,
  });
};

feedbackForm.addEventListener('input', throttle(saveFormState, 500));
feedbackForm.addEventListener('submit', handleSubmit);

loadFormState();
