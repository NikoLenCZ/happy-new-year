export function countdownToNewYear() {
  let newYear = {
    year: 2024,
    month: 0, // January
    day: 1,
    hour: 0,
    minute: 0,
    second: 0
  };

  const countdownInterval = setInterval(() => {
    const now = new Date();
    const newYearDate = new Date(newYear.year, newYear.month, newYear.day, newYear.hour, newYear.minute, newYear.second);
    const timeRemaining = newYearDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    const firework = document.querySelector('dotlottie-player');
    const heading = document.querySelector('h1');
    const countdown = document.querySelector('#countdown');
    const imgFirework = document.querySelector('.img__firework');

    if (countdown) {
        countdown.innerHTML = `<p><span>${days}d</span> <span>${hours}h</span> <span>${minutes}m</span> <span>${seconds}s</span></p>`;
    }


    if (firework && timeRemaining <= 0) {
      clearInterval(countdownInterval);
      firework.removeAttribute('hidden');
      countdown.innerHTML = 'a vše nej nej nej v novém roce 2024 😊';
      heading.textContent = 'Šťastný nový rok!';
      imgFirework.setAttribute('hidden', '');
    }
  }, 1000);
}
