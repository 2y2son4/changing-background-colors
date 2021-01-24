'use strict';

const body = document.querySelector('.body');

const title = document.querySelector('.page__title');

const subtitle = document.querySelector('.page__subtitle');

const footer = document.querySelector('.footer');


function changeBg (event) {

  body.classList = '';
  title.classList.remove('page__title');
  title.classList.add('hidden');
  subtitle.classList.remove('page__subtitle');
  subtitle.classList.add('hidden');
  footer.classList.remove('footer');
  footer.classList.add('hidden');

  if (event.key === 'a') {
    body.classList.toggle('bg-a');
  } else if(event.key === 'b') {
    body.classList.toggle('bg-b');
  } else if(event.key === 'c') {
    body.classList.toggle('bg-c');
  } else if(event.key === 'd') {
    body.classList.toggle('bg-d');
  } else if(event.key === 'e') {
    body.classList.toggle('bg-e');
  } else if(event.key === 'f') {
    body.classList.toggle('bg-f');
  } else if(event.key === 'g') {
    body.classList.toggle('bg-g');
  } else if(event.key === 'h') {
    body.classList.toggle('bg-h');
  } else if(event.key === 'i') {
    body.classList.toggle('bg-i');
  } else if(event.key === 'j') {
    body.classList.toggle('bg-j');
  } else if(event.key === 'k') {
    body.classList.toggle('bg-k');
  } else if(event.key === 'l') {
    body.classList.toggle('bg-l');
  } else if(event.key === 'm') {
    body.classList.toggle('bg-m');
  } else if(event.key === 'n') {
    body.classList.toggle('bg-n');
  } else if(event.key === 'o') {
    body.classList.toggle('bg-o');
  } else if(event.key === 'p') {
    body.classList.toggle('bg-p');
  } else if(event.key === 'q') {
    body.classList.toggle('bg-q');
  } else if(event.key === 'r') {
    body.classList.toggle('bg-r');
  } else if(event.key === 's') {
    body.classList.toggle('bg-s');
  } else if(event.key === 't') {
    body.classList.toggle('bg-t');
  } else if(event.key === 'u') {
    body.classList.toggle('bg-u');
  } else if(event.key === 'v') {
    body.classList.toggle('bg-v');
  } else if(event.key === 'w') {
    body.classList.toggle('bg-w');
  } else if(event.key === 'x') {
    body.classList.toggle('bg-x');
  } else if(event.key === 'y') {
    body.classList.toggle('bg-y');
  } else if(event.key === 'z') {
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
