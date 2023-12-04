/*
Usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell’utente sulle frecce verso sinistra o destra,
l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Aggiungere il **ciclo infinito** del carosello.
Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra,
la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.
*/

const gamesImages = [
    { 
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'
    },
    { 
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.'
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city'
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.'
    }, 
];

const workSpace = document.querySelector(".container");
const card = document.createElement("div");
card.classList.add("card");
workSpace.append(card);


gamesImages.forEach ((element) => {
    console.log(element);

    let image = `
    <img class="image" src="${element.image}" alt="immagine di gioco spiderman">
    <div>
        <h2 class="game-title inactive">${element.title}</h2>
        <p class="game-description inactive">${element.text}</p>
    </div>`
    card.innerHTML += image;
});

let userBtnUp = `<div class="btn next"><i class="fa-solid fa-chevron-down fa-2xl" style="color: #000000;"></i></div>`;
card.innerHTML += userBtnUp;
let userBtnDown = `<div class="btn previous"><i class="fa-solid fa-chevron-up fa-2xl" style="color: #000000;"></i></div>`;
card.innerHTML += userBtnDown;


let pageImage = document.getElementsByClassName("image");
let gameTitle = document.getElementsByClassName("game-title");
let gameDescription = document.getElementsByClassName("game-description");
console.log(pageImage);

let activeItem = 0;

if(activeItem === 0) {
    pageImage[activeItem].classList.add("active");
    gameTitle[activeItem].classList.add("active");
    gameDescription[activeItem].classList.add("active");
};

//frecce e navigazione dei contenuti

//imposto la freccia inferiore per far scorrere le immagini
const next = document.querySelector(".next");
next.addEventListener("click",

    function () {

        if (activeItem < pageImage.length - 1) {
            pageImage[activeItem].classList.remove("active");
            gameTitle[activeItem].classList.remove("active");
            gameDescription[activeItem].classList.remove("active");
            activeItem++;
            pageImage[activeItem].classList.add("active");
            gameTitle[activeItem].classList.add("active");
            gameDescription[activeItem].classList.add("active");

        } else if (activeItem === pageImage.length - 1) {
            pageImage[activeItem].classList.remove("active");
            gameTitle[activeItem].classList.remove("active");
            gameDescription[activeItem].classList.remove("active");
            activeItem = 0;
            pageImage[activeItem].classList.add("active");
            gameTitle[activeItem].classList.add("active");
            gameDescription[activeItem].classList.add("active");
        }
    }
);

//imposto la freccia superiore per far scorrere le immagini
const previous = document.querySelector(".previous");
previous.addEventListener("click",

    function () {

        if (activeItem > 0) {
            pageImage[activeItem].classList.remove("active");
            gameTitle[activeItem].classList.remove("active");
            gameDescription[activeItem].classList.remove("active");
            activeItem--;
            pageImage[activeItem].classList.add("active");
            gameTitle[activeItem].classList.add("active");
            gameDescription[activeItem].classList.add("active");
        } else if (activeItem === 0) {
            pageImage[activeItem].classList.remove("active");
            gameTitle[activeItem].classList.remove("active");
            gameDescription[activeItem].classList.remove("active");
            activeItem = pageImage.length - 1;
            pageImage[activeItem].classList.add("active");
            gameTitle[activeItem].classList.add("active");
            gameDescription[activeItem].classList.add("active");
        }
    }
);