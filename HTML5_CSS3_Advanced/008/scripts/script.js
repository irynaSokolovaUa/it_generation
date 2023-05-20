const selectTag = document.querySelector("select");
const ulTag = document.querySelector("ul");

for(let i = 0; i < selectTag.options.length; i++){
    const li =  document.createElement("li");
    li.innerHTML = selectTag.options[i].innerHTML;
    ulTag.append(li);
}

document.querySelector(".btn-select").addEventListener("click", function(){
    console.log(this);
    ulTag.classList.toggle("active");
})
 


document.querySelector(".more-info").addEventListener("click", function(){
    document.querySelector(".about").classList.toggle("active")
})

class Router {
    constructor(
        pathToProduct,
        selectorContainer,
        linksMenu,
        categoryConteiner,
    ) {
        this.container = document.querySelector(selectorContainer)
        this.categoryConteiner = document.querySelector(categoryConteiner)
        this.menuLinks = document.querySelectorAll(linksMenu)
        this.takeData(pathToProduct)
        this.createNavigation() 
        this.showCategory()
    }

    createNavigation() {
        this.menuLinks.forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                location.hash = "#" + link.dataset.category;
                this.createCards(this.data);
                this.showCategory();
            })
        })

    }
 
    takeData(path) {
        fetch(path)
            .then(res => res.json())
            .then(data => {
                this.data = data;
                this.createCards(data)
            }
            )
    }
    showCategory(){
        // this.categoryConteiner.querySelector("h1")
        //     .innerHTML = ``;
       if((location.hash).substring(1)){
        this.categoryConteiner.style.display = "block ";

        this.categoryConteiner.querySelector("h1")
        .innerHTML = `${decodeURIComponent(location.hash).substring(1)}`;
       } else {
        this.categoryConteiner.style.display = "none";
       }
    }

    createCards(products) {
        this.container.innerHTML = "";
        products.forEach(product => {
            // console.log(product.category, "|", location.hash)
            if ("#" + encodeURIComponent(product.category) == location.hash) {
                this.container.innerHTML += `
            <div class="catalog__cards__card">
                <img src='${product.image}' alt="">
                <b>${product.title}</b>
                <br>
                <span>${product.rating.rate} kg. | ${product.rating.count} pieces</span>
                <hr>
                <div class="priceAndBuy">
                <span class="card__price">${product.price} usd</span>
                <button class="btn-buy">BUY</button>
                </div>
            </div>
        `;
            }
        });
    }
};

const router = new Router(
    'https://fakestoreapi.com/products',
    '.catalog__cards',
    'aside nav a',
    ".catalog"

);

console.log(router);

// document.querySelectorAll("aside nav a").forEach(function(link){
//     link.addEventListener("click", function(e){
//         e.preventDefault();
//         location.hash = "#" + link.dataset.category;
//     })
// })

// fetch('https://fakestoreapi.com/products')
//     .then(res => res.json())
//     .then(data => createCards(data, '.catalog__cards'))

// function createCards(products, selectorContainer){
//     let container = document.querySelector(selectorContainer);

//     products.forEach(product => {
//         console.log(product.category, "|", location.hash)
//         if("#" + encodeURIComponent(product.category) == location.hash){
//             container.innerHTML += `
//         <div class="catalog__cards__card">
//             <img src='${product.image}' alt="">
//             <b>${product.title}</b>
//             <br>
//             <span>${product.rating.rate} kg. | ${product.rating.count} pieces</span>
//             <hr>
//             <div class="priceAndBuy">
//             <span class="card__price">${product.price} usd</span>
//             <button class="btn-buy">BUY</button>
//             </div>
//         </div>
//     `;
//         }
//     });
// }

// ["electronics","jewelery","men's clothing","women's clothing"]