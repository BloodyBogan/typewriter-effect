const textContainer = document.querySelector('.type');
const text = 'This is just a test';

const initialWait = 1000;
const speed = 180;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeWriter() {
  await sleep(initialWait);

  for (let i = 0; i <text.length; i++) {
  textContainer.innerHTML += text[i];
  await sleep(Math.round(Math.random() * speed));
  }
}

typeWriter();