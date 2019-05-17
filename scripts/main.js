"use strict"

const getMoreQuotesButton = document.getElementById('getMoreQuotes');
getMoreQuotesButton.addEventListener('click', function(e){
    e.preventDefault();
    updateChuckSays();
});

function updateChuckSays() {
    const chuckSays = document.getElementById('chuckSays');

    get('https://rickandmortyapi.com/api/character')
    .then((response) => {
        console.log(response.results);
        // take ALL the results, and forEach() result, 
        // add an LI to the main list...
        // 
        // allItems.forEach(item) {
        //    doStuff()
        // }
        const characters = response.results;
        characters.forEach(function(character){
            console.log(character);

            let characterItem = document.createElement('li');
            let locationLink = document.createElement('a');
            locationLink.setAttribute('href',character.location.url);
            locationLink.textContent = character.name;
            characterItem.append(locationLink);
            chuckSays.append(characterItem);


        })
    });
}       
document.addEventListener('click', function(e){
    if(e.target && e.target.href !==undefined){
        e.preventDefault();
        getCharacterLocation(e.target);
    }
})

function getCharacterLocation(character){
    console.log(character.href);
    get(character.href)
    .then(response=>{
        const locationName = document.createElement("p");
        locationName.textContent=response.name;
        character.parentNode.append(locationName);

    })
}




    //getAllitems();