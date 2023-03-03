let filters = document.querySelectorAll("ul li input");
let saturation = document.querySelector("#saturation")
let contrast = document.querySelector("#contrast")
let brigthness = document.querySelector("#brigthness")
let sepia = document.querySelector("#sepia")
let grayScale = document.querySelector("#grayScale")
let blur = document.querySelector("#blur")
let hueRotate = document.querySelector("#hueRotate")


let download = document.querySelector("li a")
let reset = document.querySelector("li span")
let upload = document.querySelector(".image input")
let img = document.querySelector("img")
console.log(img)

window.onload = ()=> {
    download.style.display = 'none';
    reset.style.display = 'none';
    filters.forEach((filter)=> {
        filter.style.display = 'none'
    })
}


upload.onchange = ()=> {
    resetAll();
    download.style.display = 'block';
    reset.style.display = 'block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = () => img.src = file.result;
    filters.forEach((filter)=> {
        filter.style.display = 'block'
    })
} 



    filters.forEach((filter) => {
                filter.addEventListener("input" , ()=> {
                    img.style.filter = `
                    saturate(${saturation.value}%)
                    contrast(${contrast.value}%)
                    brightness(${brigthness.value}%)
                    sepia(${sepia.value}%)
                    grayscale(${grayScale.value})
                    blur(${blur.value}px)
                    hue-rotate(${hueRotate.value}deg)
                    `
                })
            })

    function resetAll() {
        img.style.filter = "none";
        saturation.value = 100;
        contrast.value = 100;
        brigthness.value = 100;
        sepia.value = 0;
        grayScale.value = 0; 
        blur.value = 0;
        hueRotate.value = 0
    }