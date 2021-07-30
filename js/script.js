window.addEventListener('DOMContentLoaded', () => {

    const URL = 'http://hp-api.herokuapp.com/api/characters';

    const searchInput = document.getElementById('searchBar');
    const searchBtn = document.querySelector('.submit');
    const contentInside = document.querySelector('.characterList');

    getContent(URL);
    async function getContent(url) {
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            getDisplay(data);
        }
        catch (err) {
            console.log(err)
        }

    }

    function getDisplay(characters) {
        console.log(characters);
        let card = characters.map((character) => {
            return `
            <li>
                <img src="${character.image}" alt="${character.name}">
                <div class="character-info">
                    <h2 class="characterName">${character.name}</h2>
                    <p class="characterHouse">House: ${character.house}</p>
                </div>
            </li>
            `;
        }).join('');

        contentInside.innerHTML = card;

    }


});