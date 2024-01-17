const cardsContainer = document.querySelector('.cards-container');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
// Obtener todas las opciones del menú
const opcionesMenu = document.querySelectorAll('.mobile-menu');


menuHamIcon.addEventListener('click', toggleMobileMenu);

opcionesMenu.forEach(opcion => {
  opcion.addEventListener('click', () => {
    //oculatar menú
    mobileMenu.classList.toogle('oculto');
  })
})



function toggleMobileMenu() {

  mobileMenu.classList.toggle('oculto');
}



const swiper = new Swiper('.swiper-hero', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove:true,
    effect: "fade",  // se cambio el efecto "cube"
    autoplay: true,
  

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      // type: "progressbar"
      clickable: true,
      dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      // el: '.swiper-scrollbar',
    },
  });


const productList = [];
  productList.push({
  image: 'https://housecarwash.com/Storage/modsnw/image/48-d8Zx4Ps0Or0Et0A.jpg',
});
  productList.push({
  name: "Velas multicolor",
  price: 120,
  image: "./imgproducto/producto2.jpeg",
});
  productList.push({
  name: "Globos para fiesta",
  price: 150,
  image: "./imgproducto/producto3.jpeg",

});
  productList.push({
  name: "Spacious kitchen",
  price: 170,
  image: "./imgproducto/producto4.jpeg",
});
  productList.push ({
  name:'Tennis Montain Bike',
  price: 200,
  image: './imgproducto/producto5.jpeg'
});
  productList.push ({
  name:'Sunglasses',
  price: 800,
  image: './imgproducto/producto6.jpeg'
});
  productList.push ({
  name:'Sunglasses',
  price: 600,
  image: './imgproducto/producto7.jpeg'
});
  productList.push ({
  name:'Sunglasses',
  price: 600,
  image: './imgproducto/producto8.jpeg'
});
  productList.push ({
  name:'Sunglasses',
  price: 600,
  image: './imgproducto/producto9.jpeg'
});
function renderProducts(arr) {
  for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // product = {name, price, image} => product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    

    // Sección de precio y nombre del producto
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText =  'S/.' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name
    productInfoDiv.append(productName); //productPrice

      //Sección del ícono 
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','../assets/bt_add_to_cart.svg' );

    //Empezando a organizar el html
    // productInfoFigure.appendChild(productImgCart);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);
    cardsContainer.appendChild(productCard);
}
};

renderProducts(productList);