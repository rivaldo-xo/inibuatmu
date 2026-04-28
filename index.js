const title = document.querySelector('.title')
const text = `aman kaga ada virusnya`.split('')

// Create container for better responsive layout
title.style.display = 'flex'
title.style.flexWrap = 'wrap'
title.style.justifyContent = 'center'
title.style.gap = '0.5rem'

for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`
  } else {
    title.innerHTML += `<span style='width: 1rem'></span>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 2;
  element.style.animationDelay = `${randomDelay}s`;
});

const night = document.querySelector('.night');
const starCount = 100;

for (let i = 0; i < starCount; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  const size = Math.random() * 2 + 1; // 1 - 3 px
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;

  star.style.animationDuration = `${Math.random() * 3 + 1.5}s`;

  night.appendChild(star);
}


