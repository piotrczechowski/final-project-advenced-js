import fetchSportEnergy from './aplication/apiEnergy';
import { loader } from './utils/loadEmail';
import { message } from './utils/massage';

const form = document.querySelector('#subscribe-form');
const input = form.querySelector('#email');

form.addEventListener('submit', handlerSendEmail);

async function handlerSendEmail(event) {
  event.preventDefault();

  const { value } = input;
  const PATTERN = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  PATTERN.test(value);

  if (!PATTERN.test(value)) {
    message.info("Please provide a valid email address");
    input.value = '';
    return;
  }

    try {
      loader.open()
    const result = await fetchSportEnergy.addSubscription({ email: value });
        loader.close()
        message.success(result.message);
  } catch (error) {
    console.log(error);
  } finally {
    input.value = '';
  }

}