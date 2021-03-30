'use strict';

const body = document.querySelector('.body');

const title = document.querySelector('.page__title');

const subtitle = document.querySelector('.page__subtitle');

const footer = document.querySelector('.footer');

function changeBg(event) {
  body.classList = '';
  title.classList.remove('page__title');
  title.classList.add('hidden');
  subtitle.classList.remove('page__subtitle');
  subtitle.classList.add('hidden');
  footer.classList.remove('footer');
  footer.classList.add('hidden');

  let eventKeyLowerCase = event.key.toLowerCase();

  // body.classList.toggle('bg-' + event.key);
  // event.key === 'a' || event.key === 'A'

  if (eventKeyLowerCase === 'a') {
    body.classList.toggle('bg-a');
  } else if (eventKeyLowerCase === 'b') {
    body.classList.toggle('bg-b');
  } else if (eventKeyLowerCase === 'c') {
    body.classList.toggle('bg-c');
  } else if (eventKeyLowerCase === 'd') {
    body.classList.toggle('bg-d');
  } else if (eventKeyLowerCase === 'e') {
    body.classList.toggle('bg-e');
  } else if (eventKeyLowerCase === 'f') {
    body.classList.toggle('bg-f');
  } else if (eventKeyLowerCase === 'g') {
    body.classList.toggle('bg-g');
  } else if (eventKeyLowerCase === 'h') {
    body.classList.toggle('bg-h');
  } else if (eventKeyLowerCase === 'i') {
    body.classList.toggle('bg-i');
  } else if (eventKeyLowerCase === 'j') {
    body.classList.toggle('bg-j');
  } else if (eventKeyLowerCase === 'k') {
    body.classList.toggle('bg-k');
  } else if (eventKeyLowerCase === 'l') {
    body.classList.toggle('bg-l');
  } else if (eventKeyLowerCase === 'm') {
    body.classList.toggle('bg-m');
  } else if (eventKeyLowerCase === 'n') {
    body.classList.toggle('bg-n');
  } else if (eventKeyLowerCase === 'o') {
    body.classList.toggle('bg-o');
  } else if (eventKeyLowerCase === 'p') {
    body.classList.toggle('bg-p');
  } else if (eventKeyLowerCase === 'q') {
    body.classList.toggle('bg-q');
  } else if (eventKeyLowerCase === 'r') {
    body.classList.toggle('bg-r');
  } else if (eventKeyLowerCase === 's') {
    body.classList.toggle('bg-s');
  } else if (eventKeyLowerCase === 't') {
    body.classList.toggle('bg-t');
  } else if (eventKeyLowerCase === 'u') {
    body.classList.toggle('bg-u');
  } else if (eventKeyLowerCase === 'v') {
    body.classList.toggle('bg-v');
  } else if (eventKeyLowerCase === 'w') {
    body.classList.toggle('bg-w');
  } else if (eventKeyLowerCase === 'x') {
    body.classList.toggle('bg-x');
  } else if (eventKeyLowerCase === 'y') {
    body.classList.toggle('bg-y');
  } else if (eventKeyLowerCase === 'z') {
    body.classList.toggle('bg-z');
  } else {
    body.classList.add('body');
    title.classList.remove('hidden');
    title.classList.add('page__title');
    subtitle.classList.remove('hidden');
    subtitle.classList.add('page__subtitle');
    footer.classList.add('footer');
  }
}

document.addEventListener('keydown', changeBg);
