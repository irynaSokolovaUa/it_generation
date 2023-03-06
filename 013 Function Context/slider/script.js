class Slider{
    constructor(selector, gallery) {
        this.image = document.querySelector(selector + "img");
        this.btnNext = Document.querySelector(selector + "button")
        this.gallery = gallery;
        this.i = 0;
                this.btnNext.addEventListener('click', ()=>{
                    this.i++;
                    this.image.src = 'image/' + this.gallery[this.i];
                })
    }

}


const slider1 = new Slider(".slider1", ['11.jpg', '22.jpg', '12.jpg']
);
const slider2 = new Slider(".slider2", ['21.jpg','12.jpg','11.jpg']);
const slider3 = new Slider(".slider3", ['22.jpg','11.jpg', '21.jpg']);
       
console.log(slider1);
console.log(slider2);
console.log(slider3);