


"use strict"

const getCharactersButton = document.getElementById('getCharacters');
getCharactersButton.addEventListener('click', function(e){
    e.preventDefault();
    updateCharacterList();
});

function updateCharacterList() {
    const characterList = document.getElementById('characterList');

    get('https://rickandmortyapi.com/api/character')
    // gets end point to get character from api. end point has list of info 
    // that we capture.
    .then((response) => {
        // .then is the promise /the response is what the api gives you back
        // => is another form of a function
        // function (response) other way it could be writen
        console.log(response.results)
        // take ALL the results, and forEach() result, 
        // add an LI to the main list...
        // 
        // allItems.forEach(item) {
        //    doStuff()
        // }
        const characters = response.results;
        // response results are equal to the variable of charcaters
        // in this the case the list of characters
        characters.forEach(function(character){
            // we going through each character on the characters list
        

            let characterItem = document.createElement('li');
            // here we are creating a list item element to characterItem
            let locationLink = document.createElement('a');
            // here we are creating an anchor element to the location link
            locationLink.setAttribute('href',character.location.url);
            // the attribute is the href and the value is character.location.url
            locationLink.textContent = character.name;
            // character.name is being set locationLink or element 'a'
            // the method .textContent set it to objects name
            // if method .textContent is deleted you have no anchor 'a' element
            

            characterItem.append(locationLink);
            // .append is another javascript method in the case the locationLink
            // is being appended to the characterItem
            characterList.append(characterItem);
            // here characterItem is being appended to the 'ul' characterList 
            // 


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

    get(character.href)
    // this line is hitting the second end point for location
    .then(response => {
        console.log(response)
        const locationName = document.createElement("p");
        locationName.textContent = response.name;
        character.parentNode.append(locationName);

    })
}




    //getAllitems();