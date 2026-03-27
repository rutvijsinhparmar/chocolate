// =============================================
// STEP 1: Set up the image array 
// =============================================
// FIXED: Removed "./assets/image-content/" because your files are in the root
const images = [
  'image-2.png', 
  'image-3.png',
  'image-4.png',
  'image-5.png'
];

// =============================================
// STEP 2: Reference HTML elements 
// =============================================
const imageContent = document.querySelector('.image-content');
const mainButton = document.getElementById('main-button');
const finalMessage = document.querySelector('.final-message');

// =============================================
// STEP 3: Track what image we're at 
// =============================================
let currentIndex = 0;

// =============================================
// STEP 4: Update image function 
// =============================================
function updateImage() {
  // Use the current index to set the background
  imageContent.style.backgroundImage = `url('${images[currentIndex]}')`;
}

// =============================================
// STEP 5: Initial image display 
// =============================================
updateImage();

// =============================================
// STEP 6: Button click handler 
// =============================================
mainButton.addEventListener('click', () => {
  // Go to next image
  currentIndex++;
  
  // If we still have images left in the array
  if (currentIndex < images.length) {
    updateImage();
  }
  
  // Once we reach the last image (the cat with the chocolate)
  if (currentIndex === images.length - 1) {
    mainButton.style.display = 'none'; // Hide the button
    finalMessage.style.display = 'block'; // Show "Chocolate for youuu"
  }
});
