const main = document.querySelector("#main");
const trailer = document.querySelector(".trailer");
const ImgElement = [trailer.children[0], trailer.children[1], trailer.children[2]];

const [leftGallery, rightGallery] = document.querySelectorAll('#GalleryRoll');

const PERCENT_SCROLL = 0.35;
let side = leftGallery.clientWidth * PERCENT_SCROLL;
let height = leftGallery.clientHeight;

main.addEventListener("mousemove", (event) => {
    let x = event.clientX - trailer.clientWidth / 2; 
    let y = event.clientY - trailer.clientHeight / 2; 
    // SetAllInactive(ImgElement, trailer.children[0])
    trailer.animate({
        top: `${y}px`,
        left: `${x}px`
    }, {
        duration: 100,
        fill: "forwards"
    }); 

    if (x <= side && (y > 0 && y <= height)) {
        SetAllInactive(ImgElement, ImgElement[1]) 
        return       
    }if (x >= (main.clientWidth - side) && (y > 0 && y <= height)) {
        SetAllInactive(ImgElement, ImgElement[2]) 
        return       
    }
    SetAllInactive(ImgElement, ImgElement[0])        
});


function SetAllInactive(ary, except) {
    for (let index = 0; index < ary.length; index++) {
        const element = ary[index];
        if (element == except) {
            element.dataset.status ="active";
            continue
        }
        element.dataset.status = "inactive";
    }
}