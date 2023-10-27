/* variables padre*/
const navEmail = document.querySelector('.navbar-email')
const buguerMenu = document.querySelector('.menu')
const cartMenu = document.querySelector('.navbar-shopping-cart')
const cardsContainer = document.querySelector('.cards-container')
/* variables hijas */
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const asideProductDetail = document.querySelector('.shopping-cart-detail')
const asideProductDetailCard = document.querySelector('.producto-detail-card')
const asideProductDetailCardClose = document.querySelector('.producto-detail-card-close')


navEmail.addEventListener('click', toogleDesktopMenu);
buguerMenu.addEventListener('click', toogleMobileMenu);
cartMenu.addEventListener('click', toogleCartAside);
asideProductDetailCardClose.addEventListener('click', closeProductDetailAside);

function toogleDesktopMenu(){

    const isAsideDetailsClose = asideProductDetail.classList.contains('inactive')
    if(!isAsideDetailsClose){
        asideProductDetail.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}
function toogleMobileMenu(){

    const isAsideDetailsClose = asideProductDetail.classList.contains('inactive')
    if(!isAsideDetailsClose){
        asideProductDetail.classList.add('inactive')
    }

    closeProductDetailAside()
    mobileMenu.classList.toggle('inactive')
}
function toogleCartAside(){

    const isMobileMenuClose = mobileMenu.classList.contains('inactive')

    if(!isMobileMenuClose){
        mobileMenu.classList.add('inactive')
    }
    
    const isProductDetailClose = asideProductDetailCard.classList.contains('inactive')
    
    if(!isProductDetailClose){
        asideProductDetailCard.classList.add('inactive')
    }
    
    asideProductDetail.classList.toggle('inactive')
}

function openProductDetailAside(){

    asideProductDetail.classList.add('inactive')
    asideProductDetailCard.classList.remove('inactive')
}
function closeProductDetailAside(){
    asideProductDetail.classList.add('inactive')
    asideProductDetailCard.classList.add('inactive')
}


const productList = [];

productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 

/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
    <div>
    <p>$120,00</p>
    <p>Bike</p>
    </div>
    <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
</div>
</div> 
*/


function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
        
        const productImag = document.createElement('img')
        productImag.setAttribute('src', product.image)
        productImag.addEventListener('click', openProductDetailAside)
        
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
        

        const productInfoDiv = document.createElement('div')
        const productPrice = document.createElement('p')
        productPrice.innerText = `$ ${product.price}`
        const productName = document.createElement('p')
        productName.innerText = `${product.name}`
        
        
        const productInfoFigure = document.createElement('figure')
        const productImagCart = document.createElement('img')
        productImagCart.setAttribute('src', './icons/bt_add_to_cart.svg')
        
        productInfoFigure.appendChild(productImagCart)
        productInfoDiv.append(productPrice, productName)
        productInfo.append(productInfoDiv, productInfoFigure)
        productCard.append(productImag, productInfo)

        cardsContainer.append(productCard)
    }
}

renderProducts(productList)