
// var home = document.getElementById("out")

// let allProducts = document.querySelector(".products")
// let item = []
// let getCart = localStorage.getItem("productInCart")
// if(getCart){
//     let item = JSON.parse(getCart)
//     drowProduct(item)
// }

// function drowProduct(products){
//     let y = products.map((item) =>{
//         return`
        
//             <div class="product-item">
//                         <img src="${item.imageUrl}" alt="">

//                         <div class="product-desc">
//                             <h2>${item.title}</h2>
//                             <p>${item.dis}</p>
//                             <span>${item.color}</span>
//                         </div><!-- /product-desc -->
                        
//                         <div class="product-action">
//                             <button class="add_to_cart remove"  onclick= "remove(${item.id})">Remove From Cart</button>
//                         </div>

//                     </div>
//         `
//     })

//     allProducts.innerHTML = y.join(" ")
// }

// function remove(id){
                      
//     let index = item.map(product =>product.id).indexOf(id)
//     if(index !== -1){
//         item.splice(index , 1)
//     }
//     localStorage.setItem("productInCart" , JSON.stringify(item))
//     drowProduct(item)
// }

// console.log(item)

//////////////////////////////////////////////////////////////////////////////////////////////////////


var home = document.getElementById("out");
let allProducts = document.querySelector('.products');
let item = [];

let getCart = localStorage.getItem("productInCart");
if(getCart){
    item = JSON.parse(getCart); 
    drawProduct(item);
}

function drawProduct(products){
    let y = products.map((product) => { 
        return `
        <div class="product-item">
            <img src="${product.imageUrl}" alt="">
            <div class="product-desc">
                <>${product.title}
                <>${product.dis}
                <>${product.price}
            </div> <!-- /product-desc -->
            <div class="product-action">
                <button class="add_to_cart remove" onclick="removeFromCart(${product.id})">Remove From Cart</button>
            </div>
        </div>`;
    });
    allProducts.innerHTML = y.join("");
}

function removeFromCart(id){
    console.log("جاري حذف العنصر:", id);
    
    let index = item.findIndex(product => product.id == id);
    
    if(index !== -1){

        item.splice(index, 1);
        
        localStorage.setItem("productInCart", JSON.stringify(item));
        
        drawProduct(item);
        
        console.log(" ", item.length);
    } else {
        console.log(" ");
    }

    alert("تمت ازاله المنتج من السله")
}

window.addEventListener("scroll" , () =>{
    if(window.scrollY > 500){
        home.style.display = "block"
    }else{
        home.style.display = "none"
    }
})


