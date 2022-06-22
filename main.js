//DEBUT JS DU HEADER
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
//FIN JS DU HEADER
//DEBUT JS DE LA SCROLL TOP
// NOTICE: This pen may appear to not work on mobile devices, but it is  due to the codepen footer and the browser's bottom menu bar that hide the button. It should work fine when implemented for your website

// used to avoid using 255, thus generating white-ish backgrounds that make text unreadable
const colorMax = 192;

// gets the breakpoint at which the scroll-to-top button should appear
const scrollBreakpoint = window.innerHeight * 0.9;

document.addEventListener('DOMContentLoaded', () => {
    randomizeBackgrounds();
    setupScrollListener();
    setupScrollEvent();
});

// scrolls window to top
function setupScrollEvent() {
    const scrollButton = document.querySelector('.scroll-top');

    scrollButton.addEventListener('click', (e) => {
        // not the best solution until Safari/Edge support scroll behavior
        // window.scrollTo({ top: 0, behavior: 'smooth' });

        // Thanks to Geroge Daniel https://stackoverflow.com/questions/51229742/javascript-window-scroll-behavior-smooth-not-working-in-safari
        smoothVerticalScrolling(scrollButton.parentElement, 250, "top");
    });
}

// prepares the window for a scroll event to show the scroll button
function setupScrollListener() {
    window.addEventListener('scroll', (e) => {
        const scrollButton = document.querySelector('.scroll-top');

        // const scrollOffset = document.scrollingElement.scrollTop;
        const scrollOffset = window.scrollY;

        if (scrollOffset >= scrollBreakpoint) {
            scrollButton.classList.add('visible');
        } else if (scrollOffset <= 0) {
            scrollButton.classList.remove('visible');
        }
    });
}

function randomizeBackgrounds() {
    // get all the content containers
    const contentContainers = document.querySelectorAll('.content-container');

    [].forEach.call(contentContainers, container => {
        // assign random background
        container.style.background = `rgb(${randVal(colorMax)},${randVal(colorMax)},${randVal(colorMax)})`;
    });
}

// random between 0 to max
function randVal(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// uses a timeout to scroll to top
function smoothVerticalScrolling(e, time, where) {
    // gets the element's top position relative to the viewport
    const eTop = e.getBoundingClientRect().top;

    // divides the top offset into 100 steps to be ellapsed
    const eAmt = eTop / 100;

    // starting time
    let curTime = 0;

    // not to exceed the desired duration
    while (curTime <= time) {
        // call a function to execute at one hundreth of the desired scroll time
        window.setTimeout(SVS_B, curTime, eAmt, where);
        // increase by one hundreth of the desired time to execute exactly 100 times
        curTime += time / 100;
    }
}

function SVS_B(eAmt, where) {
    // scroll by half the hundredth of the top offset if destination is not top (since to center only involves scrolling either in the top or bottom half of the window)
    if (where == "center" || where == "") {
        window.scrollBy(0, eAmt / 2);
    }
    // otherwise scroll the full amount
    if (where == "top") {
        window.scrollBy(0, eAmt);
    }
}
//FIN JS DE LA SCROLL TOP

//DEBUT JS DE LA PARTIE PROET

function prev() {
    document.getElementById('slider-container').scrollLeft -= 270;
}

function next() {
    document.getElementById('slider-container').scrollLeft += 270;
}


$(".slide img").on("click", function() {
    $(this).toggleClass('zoomed');
    $(".overlay").toggleClass('active');
})

//FIN JS DE LA PARTIE PROJET

//DEBUT JS DE LA PARTIE COMPETENCE
document.getElementById("outer3").addEventListener("click", toggleState3);

function toggleState3() {
    let galleryView = document.getElementById("galleryView")
    let tilesView = document.getElementById("tilesView")
    let outer = document.getElementById("outer3");
    let slider = document.getElementById("slider3");
    let tilesContainer = document.getElementById("tilesContainer");
    if (slider.classList.contains("active")) {
        slider.classList.remove("active");
        outer.classList.remove("outerActive");
        galleryView.style.display = "flex";
        tilesView.style.display = "none";

        while (tilesContainer.hasChildNodes()) {
            tilesContainer.removeChild(tilesContainer.firstChild)
        }
    } else {
        slider.classList.add("active");
        outer.classList.add("outerActive");
        galleryView.style.display = "none";
        tilesView.style.display = "flex";

        for (let i = 0; i < imgObject.length - 1; i++) {
            let tileItem = document.createElement("div");
            tileItem.classList.add("tileItem");
            tileItem.style.background = "url(" + imgObject[i] + ")";
            tileItem.style.backgroundSize = "contain";
            tilesContainer.appendChild(tileItem);
        }
    };
}

let imgObject = [
    "images/hetic.png",
    "images/todoliste.png",
    "images/lino_maker.png",
    "images/rs.png",
    "images/Cominsun.png",
    "images/mode&style.png",

];

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

function loadGallery() {

    let mainView = document.getElementById("mainView");
    mainView.style.background = "url(" + imgObject[mainImg] + ")";

    let leftView = document.getElementById("leftView");
    leftView.style.background = "url(" + imgObject[prevImg] + ")";

    let rightView = document.getElementById("rightView");
    rightView.style.background = "url(" + imgObject[nextImg] + ")";

    let linkTag = document.getElementById("linkTag")
    linkTag.href = imgObject[mainImg];

};

function scrollRight() {

    prevImg = mainImg;
    mainImg = nextImg;
    if (nextImg >= (imgObject.length - 1)) {
        nextImg = 0;
    } else {
        nextImg++;
    };
    loadGallery();
};

function scrollLeft() {
    nextImg = mainImg
    mainImg = prevImg;

    if (prevImg === 0) {
        prevImg = imgObject.length - 1;
    } else {
        prevImg--;
    };
    loadGallery();
};

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);
document.addEventListener('keyup', function(e) {
    if (e.keyCode === 37) {
        scrollLeft();
    } else if (e.keyCode === 39) {
        scrollRight();
    }
});

loadGallery();

//FIN JS DE LA PARTIE COMPETENCE


//DEBUT JS DE LA PARTIE CHET
document.getElementById('whats-chat').addEventListener("mouseover", showchatbox);
document.getElementById('chat-top-right').addEventListener("click", closechatbox);
document.getElementById('send-btn').addEventListener("click", sendmsg);
window.addEventListener("load", showchatboxtime);

function showchatbox() {
    document.getElementById('chat-box').style.right = '8%'
}

function closechatbox() {
    document.getElementById('chat-box').style.right = '-500px'


}

function showchatboxtime() {
    setTimeout(launchbox, 5000)
}

function launchbox() {
    document.getElementById('chat-box').style.right = '8%'

}

function sendmsg() {
    var msg = document.getElementById('whats-in').value;
    var relmsg = msg.replace(/ /g, "%20");
    window.open('https://api.whatsapp.com/send?phone= 0695345230&text=' + relmsg, '_blank');

}
//FIN JS DE LA PARTIE CHAT