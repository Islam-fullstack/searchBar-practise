window.addEventListener('DOMContentLoaded', () => {

    const URL = 'http://hp-api.herokuapp.com/api/characters';

    const searchInput = document.getElementById('searchBar');
    const searchBtn = document.querySelector('.submit');
    const contentInside = document.querySelector('.characterList');

    let characterData = [];
    getContent(URL);

    searchInput.addEventListener('keyup', (e) => {
        const searchValue = e.target.value.toLowerCase();
        const filteredCharacter = characterData.filter(character => {
            return (character.name.toLowerCase().includes(searchValue)
                || character.house.toLowerCase().includes(searchValue)
            );
        })
        console.log(filteredCharacter);
        getDisplay(filteredCharacter);
    })



    async function getContent(url) {
        try {
            const resp = await fetch(url);
            characterData = await resp.json();
            getDisplay(characterData);
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