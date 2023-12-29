export function magicNuts() {
  const magicNutElements = document.querySelectorAll('.magic-nut');
  
  magicNutElements.forEach((element) => {
    element.addEventListener('click', function() {
      console.log('Clicked element:', this);
      this.classList.add('magic-nut--active');
      
      const allActive = Array.from(magicNutElements).every((el) => el.classList.contains('magic-nut--active'));
      if (allActive) {
        const linkNextElement = document.querySelector('.link-next');
        linkNextElement.classList.remove('disabled');
      }
    });
  });
}
