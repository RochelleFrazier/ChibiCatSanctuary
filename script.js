const IMAGES = document.querySelectorAll("img"); //constant  which will contain an  array  with all the images
const SIZES = {
    reason: "(max-width: 799px) 100vw, 412px", // reason
    story: "(max-width: 799px) 100vw, 471px", //story
};

function makeSrcset(imgSrc) {
    let markup = [];
    let width = 400;

    for (let i = 0; i<5; i++) { // loop less than 5 times, increments.
        markup[i] = imgSrc + "-" + width + ".jpg " + width + "w";
        width+=400;
    }

    return markup.join();
}

for (let i = 0; i<IMAGES.length; i++) { //through a for loop we will cycle through all the images in that array and display in console.
    let imgSrc = IMAGES[i].getAttribute("src");// .getAttribute from html document that use src attribute.
    imgSrc = imgSrc.slice(0,-8);
    let srcset = makeSrcset(imgSrc);
    IMAGES[i].setAttribute("srcset", srcset); 

    let type = IMAGES[i].getAttribute("data-type"); //.getAttribute from html document that use data type attribute.
    let sizes = SIZES[type];
    IMAGES[i].setAttribute("sizes", sizes); 

}
