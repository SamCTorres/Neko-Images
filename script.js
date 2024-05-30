const getNekoButton = document.getElementById('get-neko');

const nekoImage = document.getElementById('neko-image')

const loadingElement = document.getElementById('loading');

async function fetchNekoImage() {
  loadingElement.classList.remove('hidden'); // Show loading indicator
  try {
    const response = await fetch('https://nekos.best/api/v2/neko');
    const data = await response.json();
    const imageUrl = data.results[0].url;
    nekoImage.src = imageUrl;
    
  } catch (error) {
    console.error('Error fetching neko image:', error);
    
  } finally {
    loadingElement.classList.add('hidden'); // Hide loading indicator after fetch
  }
}

// Call fetchNekoImage on page load
window.onload = fetchNekoImage;

// Optional button click event listener
getNekoButton.addEventListener('click', async () => {
  await fetchNekoImage();
});
