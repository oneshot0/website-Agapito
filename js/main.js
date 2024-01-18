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
  image: './imgmedia/logomarcacasecontruction.png',
   });
  productList.push({
   image: "./imgmedia/logomarcacaterpilar.png",
});
  productList.push({
   image: "./imgmedia/logomarcadoosan.png",

});
  productList.push({
  image: "./imgmedia/logomarcahitachi.jpg",
});
  productList.push ({
  image: './imgmedia/logomarcahyundai.jpg'
});
  productList.push ({
  image: './imgmedia/logomarcajcb.jpg'
});
  productList.push ({
  image: './imgmedia/logomarcaJohnDeerelogo.jpg'
});
  productList.push ({
  image: './imgmedia/logomarcakobelco.jpg'
});
  productList.push ({
    image: './imgmedia/logomarcakomatsu.jpg'
});
  productList.push ({
    image: './imgmedia/logomarcaluigong.jpg'
});
  productList.push ({
    image: './imgmedia/logomarcaman.jpg'
});
  productList.push ({
    image: './imgmedia/logomarcamummins.png'
});
  productList.push ({
    image: './imgmedia/logomarcanweholland.png'
});
    productList.push ({
    image: './imgmedia/logomarcasany.png'
});
  productList.push ({
    image: './imgmedia/logomarcawartsila.png'
});


function renderProducts(arr) {
  for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    //product = {name, price, image} => product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    

    // Sección de precio y nombre del producto
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    const productInfoDiv = document.createElement('div');
    // const productPrice = document.createElement('p');
    // productPrice.innerText =  'S/.' + product.price;
    // const productName = document.createElement('p');
    // productName.innerText = product.name
    // productInfoDiv.append(productName); //productPrice

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