const clickableElement = document.getElementById('clickableElement');

clickableElement.addEventListener('click', () => {
  clickableElement.classList.toggle('text-gray-700');
  clickableElement.classList.toggle('text-red-500'); // Change this to the desired color class
});