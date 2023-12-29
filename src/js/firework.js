// firework.js
export function createFirework() {
  const firework = document.createElement('div');
  firework.classList.add('firework');

  // Náhodné umístění
  firework.style.left = `${Math.random() * 100}%`;

  document.body.appendChild(firework);

  // Nastavení animace "výstřelu"
  firework.style.animation = `shoot 1s linear`;

  firework.addEventListener('animationend', () => {
      // Nastavení animace "exploze"
      firework.style.animation = `explode 0.5s linear forwards`;

      // Odstranění prvku po skončení animace
      firework.addEventListener('animationend', () => {
          firework.remove();
      }, { once: true });
  }, { once: true });
}

// Tento kód spustí vytváření ohňostrojů v intervalu.
export function startFireworks() {
  setInterval(createFirework, 5000);
}
