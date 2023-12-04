/*
Usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell’utente sulle frecce verso sinistra o destra,
l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Aggiungere il **ciclo infinito** del carosello.
Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra,
la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.
*/

//creo l'array dei giochi
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

//creo lo spazio per le immagini
const workSpace = document.querySelector(".container");
const card = document.createElement("div");
card.classList.add("card");
workSpace.append(card);

//creo quello che verrà stampato in pagina, uso il ciclo forEach per selezionare ogni silngolo elemento dell'array
gamesImages.forEach ((element) => {
    console.log(element);

    let image = `
    <img class="image" src="${element.image}" alt="immagine di gioco">
    <div>
        <h2 class="game-title inactive">${element.title}</h2>
        <p class="game-description inactive">${element.text}</p>
    </div>`
    card.innerHTML += image;
});

//bonus 1
//creo lo spazio per le immagini nella thumbnail
const thumbnail = document.createElement("div");
thumbnail.classList.add("side-container");
workSpace.append(thumbnail);
//bonus 1
//creo quello che verrà stampato in pagina, uso il ciclo forEach per selezionare ogni silngolo elemento dell'array (nelle thumbnails qua)
gamesImages.forEach ((element) => {
    console.log(element);

    let imageThumb = `
    <img class="dark borders" src="${element.image}" alt="immagine di gioco">`
    thumbnail.innerHTML += imageThumb;
});

//creo le frecce e le rispettive classi
let userBtnUp = `<div class="btn next"><i class="fa-solid fa-chevron-down fa-2xl" style="color: #000000;"></i></div>`;
card.innerHTML += userBtnUp;
let userBtnDown = `<div class="btn previous"><i class="fa-solid fa-chevron-up fa-2xl" style="color: #000000;"></i></div>`;
card.innerHTML += userBtnDown;

//seleziono le immagini e i testi, per inserirli in pagina
let pageImage = document.getElementsByClassName("image");
let gameTitle = document.getElementsByClassName("game-title");
let gameDescription = document.getElementsByClassName("game-description");

//bonus 1
let pageThumbs = document.getElementsByClassName("dark");
let pageBordersThumbs = document.getElementsByClassName("borders");
console.log(pageImage);

//immagine di partenza
let activeItem = 0;

if(activeItem === 0) {
    pageImage[activeItem].classList.add("active"); //aggiungendo active, l'immagine e i testi saranno visualizzati in pagina
    gameTitle[activeItem].classList.add("active");
    gameDescription[activeItem].classList.add("active");

    //bonus 1
    pageThumbs[activeItem].classList.remove("dark");
    pageBordersThumbs[activeItem].classList.add("borders");
};

//imposto la freccia inferiore per far scorrere le immagini
const next = document.querySelector(".next");
next.addEventListener("click",

    function () {

        if (activeItem < pageImage.length - 1) {
            pageImage[activeItem].classList.remove("active"); //rimuovendo l'active, le immagini e i testi verranno nascosti
            gameTitle[activeItem].classList.remove("active");
            gameDescription[activeItem].classList.remove("active");

            //bonus 1
            pageThumbs[activeItem].classList.add("dark");
            pageBordersThumbs[activeItem].classList.remove("borders");

            activeItem++;
            pageImage[activeItem].classList.add("active");
            gameTitle[activeItem].classList.add("active");
            gameDescription[activeItem].classList.add("active");

            //bonus 1
            pageThumbs[activeItem].classList.remove("dark");
            pageBordersThumbs[activeItem].classList.add("borders");

            //imposto il loop
        } else if (activeItem === pageImage.length - 1) {
            pageImage[activeItem].classList.remove("active");
            gameTitle[activeItem].classList.remove("active");
            gameDescription[activeItem].classList.remove("active");

            //bonus 1
            pageThumbs[activeItem].classList.add("dark");
            pageBordersThumbs[activeItem].classList.remove("borders");

            activeItem = 0;
            pageImage[activeItem].classList.add("active");
            gameTitle[activeItem].classList.add("active");
            gameDescription[activeItem].classList.add("active");

            //bonus 1
            pageThumbs[activeItem].classList.remove("dark");
            pageBordersThumbs[activeItem].classList.add("borders");
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

            //bonus 1
            pageThumbs[activeItem].classList.add("dark");
            pageBordersThumbs[activeItem].classList.remove("borders");

            activeItem--;
            pageImage[activeItem].classList.add("active");
            gameTitle[activeItem].classList.add("active");
            gameDescription[activeItem].classList.add("active");

            //bonus 1
            pageThumbs[activeItem].classList.remove("dark");
            pageBordersThumbs[activeItem].classList.add("borders");
            
            //imposto il loop
        } else if (activeItem === 0) {
            pageImage[activeItem].classList.remove("active");
            gameTitle[activeItem].classList.remove("active");
            gameDescription[activeItem].classList.remove("active");

            //bonus 1
            pageThumbs[activeItem].classList.add("dark");
            pageBordersThumbs[activeItem].classList.remove("borders");

            activeItem = pageImage.length - 1;
            pageImage[activeItem].classList.add("active");
            gameTitle[activeItem].classList.add("active");
            gameDescription[activeItem].classList.add("active");

            //bonus 1
            pageThumbs[activeItem].classList.remove("dark");
            pageBordersThumbs[activeItem].classList.add("borders");
        }
    }
);