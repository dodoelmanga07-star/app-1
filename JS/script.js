

var home = document.getElementById("out")

let allProducts = document.querySelector(".products")
let products = [
    {
        id: 1,
        title : " Winsor & Newton Cotman" ,
        dis : "مجموعه مبتدئين جوده عاليه. الوان ثابته غير شفافه. مناسبه للطلاب المبتدئين" ,
        price : "400$",
        imageUrl : "images/1.jpg"
    },
    {
        id: 2,
        title : "Liquitex Basics",
        dis : ".سريع الجفاف .متددة الاستخدامات  .سلسه فى التطبيق",
        price : "200$",
        imageUrl : "images/2.jpg"
    },
    {
        id: 3,
        title : "Golden Heavy Body",
        dis : ".جوده احترافيه عاليه .قوام كثيف  .الوان ثابته " ,
        price : "600$",
        imageUrl : "images/3.jpg"
    },
    {
        id: 4,
        title : "Van Gogh",
        dis : ".جوده فنيه احترافيه .الوان نابضه بالحياه .مقاومه للبهوت" ,
        price : "400$",
        imageUrl : "images/4.jpg"
    },
    {
        id: 5,
        title : "Canson",
        dis : "متنوعه السماكات  .سطح مناسب لتقنيات متعدده" ,
        price : "100$",
        imageUrl : "images/1.jpg"
    },
    {
        id: 6,
        title : "Staedtler",
        dis : ".مجموعه 12 قلم بدرجات مختلفه .من HB الى 8B" ,
        price : "100$",
        imageUrl : "images/1.jpg"
    },
    {
        id: 7,
        title : "Capic Sketch",
        dis : ".قابله لاعادة التعبئه .راس مزدوج .الوان متعدده " ,
        price : "40$",
        imageUrl : "images/2.jpg"
    },
    {
        id: 8,
        title : "Micron",
        dis : ".حبر مقاوم للماء .احجام متنوعه" ,
        price : "25$",
        imageUrl : "images/3.jpg"
    },
    {
        id: 9,
        title : "مجموعة الرسم الاساسيه",
        dis : ".12 قلم رصاص  .ممحاه  .10اقلام فحم  .canson " ,
        price : "400$",
        imageUrl : "images/4.jpg"
    },
    {
        id: 10,
        title : "مجموعة الالوان المائيه ",
        dis : ".24 لون مائى .3 فرش  .لوح الوان .ورق مائى" ,
        price : "500$",
        imageUrl : "images/1.jpg"
    },
]

function drowProduct(){
    let y = products.map((item) =>{
        return`
        
            <div class="product-item">
                        <img src="${item.imageUrl}" alt="">

                        <div class="product-desc">
                            <h2>${item.title}</h2>
                            <p>dis : ${item.dis}</p>
                            <span>${item.price}</span>
                        </div><!-- /product-desc -->
                        
                        <div class="product-action">
                            <i class="fa-solid fa-heart"></i>
                            <button class="add_to_cart" onclick= "addToCart(${item.id})">Add To Cart</button>
                        </div>

                    </div>
        `
    })

    allProducts.innerHTML = y.join(" ")
}
drowProduct()


let viewProductsDiv = document.querySelector(".veiwProduct div")
let badge = document.querySelector(".badge")

let addedItem = localStorage.getItem("productInCart") ?JSON.parse(localStorage.getItem("productInCart")) : [];
if(addedItem){
    addedItem.map(item =>{
    viewProductsDiv.innerHTML += `<p>${item.title}</p>`
    })
    badge.style.display = "block"
    badge.innerHTML = addedItem.length
}


function addToCart(id){
    let chooseItem = products.find((item) => item.id === id)
    viewProductsDiv.innerHTML += `<p>${chooseItem.title}</p>`

    addedItem = [...addedItem , chooseItem] 
    localStorage.setItem("productInCart" , JSON.stringify(addedItem))

    let viewProductsDivP = document.querySelectorAll(".veiwProduct div p") 
    badge.innerHTML = viewProductsDivP.length
            badge.style.display = "block"
    
            veiwProduct.style.display = "block"
     
     alert("product added to cart successfully")       
}



let cart = document.querySelector(".cart")
let veiwProduct = document.querySelector(".veiwProduct")
cart.addEventListener("click" , () =>{
    if(veiwProduct.innerHTML !=""){
        if(veiwProduct.style.display == "block"){
            veiwProduct.style.display = "none"
        }else {
            veiwProduct.style.display = "block"
        }
    }
})

window.addEventListener("scroll" , () =>{
    if(window.scrollY > 500){
        home.style.display = "block"
    }else{
        home.style.display = "none"
    }
})