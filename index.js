// Array of images matching your GitHub file names
const images = [
  'image-2.png',
  'image-3.png',
  'image-4.png',
  'image-5.png'
];

const imageContent = document.querySelector('.image-content');
const mainButton = document.getElementById('main-button');
const finalMessage = document.querySelector('.final-message');

let currentIndex = 0;

function updateImage() {
  // Directly set the background image using the array
  imageContent.style.backgroundImage = `url('${images[currentIndex]}')`;
}

// Show first image on load
updateImage();

mainButton.addEventListener('click', () => {
  currentIndex++;
  
  if (currentIndex < images.length) {
    updateImage();
  }
  
  // When we reach the last image (image-5.png)
  if (currentIndex === images.length - 1) {
    mainButton.style.display = 'none';
    finalMessage.style.display = 'block';
  }
});
