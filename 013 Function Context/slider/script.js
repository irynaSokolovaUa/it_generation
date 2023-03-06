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