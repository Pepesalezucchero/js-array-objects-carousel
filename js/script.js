/*



//creiamo un carosello con le immagini a disposizione, le frecce serviranno per scorrere le immagini.

let pageImage = document.getElementsByClassName("image");
console.log(pageImage);

let activeItem = 0;

//frecce e navigazione dei contenuti

//imposto la freccia inferiore per far scorrere le immagini
const next = document.querySelector(".next");
next.addEventListener("click",

    function () {

        if (activeItem < pageImage.length - 1) {
            pageImage[activeItem].classList.remove("active");
            activeItem++;
            pageImage[activeItem].classList.add("active");
        }
    }
);

//imposto la freccia superiore per far scorrere le immagini
const previous = document.querySelector(".previous");
previous.addEventListener("click",

    function () {

        if (activeItem > 0) {
            pageImage[activeItem].classList.remove("active");
            activeItem--;
            pageImage[activeItem].classList.add("active");
        }
    }
);

*/