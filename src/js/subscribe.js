import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { Notifications } from './notifications.js';

const subscriptionForm = document.querySelector('#subscribeForm');
const emailField = subscriptionForm.querySelector('input[name="email"]');
const submitButton = document.querySelector('#subscribeBtn');

emailField.addEventListener('input', validateEmailField);
subscriptionForm.addEventListener('submit', handleSubscription);

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateEmailField() {
  const email = emailField.value;
  const isEmailValid = validateEmail(email);

  emailField.style.borderColor = isEmailValid ? 'green' : 'red';
}

async function handleSubscription(event) {
  event.preventDefault();
  const email = emailField.value;

  if (!validateEmail(email)) {
    console.error('Invalid email format');
    Notifications.error('Invalid email address');
    return;
  }

  const formData = new FormData(subscriptionForm);
  submitButton.disabled = true;

  try {
    const response = await axios.post(
      'https://your-energy.b.goit.study/api/subscription',
      formData,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );

    if (response.status >= 200 && response.status < 300) {
      subscriptionForm.reset();
      emailField.style.borderColor = '';
      Notifications.success(response.data.message);
    } else {
      console.error(`Server responded with status: ${response.status}`);
      Notifications.error(`Server Error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error('Request failed:', error);
    Notifications.error(`Error: ${error.message}`);
  } finally {
    submitButton.disabled = false;
  }
}
