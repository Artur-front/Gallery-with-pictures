const url = 'https://dog.ceo/api/breeds/image/random/20';
const button = document.getElementById('fetch-btn');
const gallery = document.querySelector('.gallery');

button.addEventListener('click', () => {
  gallery.innerHTML = '';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.message.forEach(imageUrl => {
        const img = document.createElement('img');
        img.src = imageUrl;
        gallery.appendChild(img);
      });
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
});