document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#content-container');

    fetch('blog.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const breeds = data.breeds;

            breeds.forEach(breed => {
                const card = document.createElement('div');
                card.classList.add('card');

                const image = document.createElement('img');
                image.src = breed.image || breed.url;
                image.alt = breed.name || breed.description;

                const info = document.createElement('div');
                info.classList.add('info');

                const name = document.createElement('h3');
                name.textContent = breed.name || 'Unknown Breed';

                const description = document.createElement('p');
                description.textContent = breed.description;

                info.appendChild(name);
                info.appendChild(description);

                card.appendChild(image);
                card.appendChild(info);
                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching or parsing JSON:', error);
        });
});
