"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

function start( ) {
    console.log("ready");

    //add eventlisteners


    loadJSON();
}


function loadJSON() {
    fetch("animals.json")
    .then( response => response.json() )
    .then( jsonData => {
        // when loaded, prepare objects
        prepareObjects( jsonData );
    });
}

function prepareObjects( jsonData ) {
    jsonData.forEach( animal => {
        const firstSpace = animal.fullname.indexOf(" ");
        const secondSpace = animal.fullname.indexOf(" ", firstSpace + 1)

        // TODO: Create new object with cleaned data - and store that in the allAnimals array
        animal = {
        name: animal.fullname.substring(0, animal.fullname.indexOf(" ")),
        desc: animal.fullname.substring((animal.fullname.indexOf(" ", (animal.fullname.indexOf(" ")) + 1)) + 1, animal.fullname.lastIndexOf(" ")),
        type: animal.fullname.substring(animal.fullname.lastIndexOf(" ") + 1),
        age: animal.age,
        }

        //console.log(animal)


        //add the object to the global array
        allAnimals.push(animal);
    });

    displayList();
}

function displayList() {
    // clear the list
    document.querySelector("tbody").innerHTML = "";

    // build a new list
    allAnimals.forEach( displayAnimal );
}

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}


