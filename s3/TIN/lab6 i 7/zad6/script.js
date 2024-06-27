const link = "https://picsum.photos/1500/800?random="
const gallery = document.getElementById("gallery");
const next = document.getElementById("next");
const lightbox = document.getElementById("lightbox");
const close = document.getElementById("close");
const lightboxImgs = document.getElementById("lightbox-content");
const number = document.getElementById("numbertext");
const imgCon = document.getElementById("img-content");
const imgNumber = 80;
let currentPhoto = 0;

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < imgNumber; i++) {
        let img = document.createElement("img");
        img.src = link + i;
        img.alt = "image" + i;
        let divImg = document.createElement("div");
        divImg.classList.add("gallery-item");
        divImg.dataset.id = i;

        divImg.appendChild(img);
        gallery.appendChild(divImg);
        //add thumbnails
        let thumbnailDemo = document.createElement("div");
        thumbnailDemo.classList.add("thumbnail");
        thumbnailDemo.appendChild(img.cloneNode(true));
        next.before(thumbnailDemo);
    }
    let thumbnails = document.querySelectorAll(".thumbnail");
    let items = document.querySelectorAll(".gallery-item");
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function (e) {
            if (lightbox.style.display === "block") {
                document.getElementById("lightbox").style.display = "none";
            } else {
                document.getElementById("lightbox").style.display = "block";
            }
            setCounter(i);
            imgCon.src = link + i;
            currentPhoto = i;
            thumbnails[currentPhoto].style.opacity = "1";
        });
    }
    close.addEventListener("click", function (e) {
        document.getElementById("lightbox").style.display = "none";
    });

    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener("click", function (e) {
            setCounter(i)
            imgCon.src = link + i;
            currentPhoto = i;
        });
    }

    function setCounter(n) {
        number.innerText = n + 1 + "/" + items.length;
    }
    next.addEventListener("click", function (e) {
        thumbnails[currentPhoto].style.opacity = "0.5";
        let nextNumber = (currentPhoto + 1 + imgNumber) % imgNumber
        thumbnails[nextNumber].style.opacity = "1";
        imgCon.src = link + nextNumber;
        currentPhoto = nextNumber;
        setCounter(currentPhoto);
    });
    previous.addEventListener("click", function (e) {
        thumbnails[currentPhoto].style.opacity = "0.5";
        let nextNumber = (currentPhoto - 1 + imgNumber) % imgNumber
        thumbnails[nextNumber].style.opacity = "1";
        imgCon.src = link + nextNumber;
        currentPhoto = nextNumber;
        setCounter(currentPhoto);
    });
});