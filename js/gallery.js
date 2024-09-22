import { overlay, exitLogin, loginButton } from "../utils/variables.js";
import { login, openAndExitLogin } from "../utils/login.js";
import { renderNames1 } from "../utils/render-names.js";
import { products } from "../utils/products.js";
import { hovers } from "../utils/hover-images.js";
import { bouquets } from "../utils/bouquet.js";

let image = document.querySelector('.image1'),
    imageContainer1 = document.querySelector('.js-image1-container'),
    text1 = document.querySelector('.js-text1'),
    image2 = document.querySelector('.js-image2'),
    imageContainer2 = document.querySelector('.js-image2-container'),
    text2 = document.querySelector('.js-text2'),
    image3 = document.querySelector('.js-image3'),
    imageContainer3 = document.querySelector('.js-image3-container'),
    text3 = document.querySelector('.js-text3'),
    image4 = document.querySelector('.js-image4'),
    imageContainer4 = document.querySelector('.js-image4-container'),
    text4 = document.querySelector('.js-text4'),
    image5 = document.querySelector('.js-image5'),
    imageContainer5 = document.querySelector('.js-image5-container'),
    text5 = document.querySelector('.js-text5'),
    image6 = document.querySelector('.js-image6'),
    imageContainer6 = document.querySelector('.js-image6-container'),
    text6 = document.querySelector('.js-text6'),
    upload = document.querySelector('.js-gallery-upload'),
    uploadContainer = document.querySelector('.js-upload-container'),
    uploadContainer1 = document.querySelector('.js-upload1-container'),
    overlay1 = document.querySelector('.js-overlay1'),
    cancelButton = document.querySelector('.js-cancel-button'),
    showMessageUs = document.querySelector('.js-show-message'),
    clickContainer = document.querySelector('.click-container-js'),
    imageSliderCaption = document.querySelector('.js-image-slider-caption');
 

let imageSet = [
                image,
                image2,
                image3,
                image4,
                image5,
                image6
              ],
    containerSet = [ 
                imageContainer1,
                imageContainer2,
                imageContainer3,
                imageContainer4,
                imageContainer5,
                imageContainer6   
                ],
    textSet = [
                text1,
                text2,
                text3,
                text4,
                text5,
                text6
              ];
/*
let captionStore = JSON.parse(localStorage.getItem('captions')) ||  [];


console.log(captionStore);

let imageArray = JSON.parse(localStorage.getItem('newImage')) || [];


let cons = document.querySelector('.js-upload-container');

  let storeContent = '';
  let deletes =  [];

  */

/*displayImages();
function displayImages() {



for (let i = 0; i < imageArray.length; i++) {
  
    let styling =document.querySelector(`.js-image-container[${i}]`);
    styling.style.width = '100%';
    styling.style.background = 'black'; 

    let newurl = imageArray[i];
    const img = new Image();
    img.src = newurl;
    deletes.push(`numbers${[i]}`);

    cons.innerHTML += `<div class='imageStyle js-image-container${[i]}'> <div class="deletePost">
    <p class="js-delete-button${[i]} deleteImageStyle">&times;</p></div>
    <p class="imagesTitle">${captionStore[i]}</p></div>`
    document.querySelector(`.js-image-container${[i]}`).append(img);

    deletes[i] = document.querySelector(`.js-delete-button${[i]}`);

    deletes[i].addEventListener('click', () => {
        mydeleteImages([i]);
      })

  }
}
*/
/*
function mydeleteImages(index) {
  captionStore.splice(index,1);
  imageArray.splice(index,1);
  console.log('deleted');
  localStorage.setItem('newImage', JSON.stringify(imageArray));
  localStorage.setItem('captions', JSON.stringify(captionStore));
}
*/
/*
function uploadPhoto() {


  upload.addEventListener('change', () => {

    const fr = new FileReader();
    console.log('change');
    fr.readAsDataURL(upload.files[0]);
    fr.addEventListener('load', () => {
    const url = fr.result;
    imageArray.push(url);
    const img = new Image();
    img.src = url;
    document.querySelector(`.js-new-container`).append(img);
    localStorage.setItem('newImage', JSON.stringify(imageArray));

    })

  })
  cancelButton.addEventListener('click', () => {

    overlay1.style.display = 'none';

  })
}
*/
/*
function uploadCaption() {

  let captionSubmit = document.querySelector('.js-submit-caption');

  captionSubmit.addEventListener('click', () => {
    let caption = document.querySelector('.js-caption');
    captionStore.push(caption.value);
    localStorage.setItem('captions', JSON.stringify(captionStore));
      
    }
  )
}
uploadCaption();
*/

/*

function renderUploadContainer() {
  imageButton.addEventListener('click', () => {

    overlay1.style.display = 'block';

  })
}

renderUploadContainer();


uploadPhoto();
*/



for (let i = 0; i < imageSet.length; i++) {
  imageSet[i].addEventListener('click', () => {

    containerSet[i].classList.toggle('expandImage');
    textSet[i].classList.toggle('showText');
  })
};
function showMessage() {
  crochetImage.addEventListener('mouseover', () => {
    showMessageUs.classList.toggle('showMessages');
  })
}

function displayFlowers() {
  let html = '';


  for (let i = 0; i < products.length; i++) {
    
    html += ` <div class="itemsContainer">
                <div class="crochetImage${[i]} js-crochet-image${[i]}">
                  <a href='https://www.facebook.com/profile.php?id=61566369953654' target='_blank' class='messageUs'><i class="fa-regular fa-message"></i></a href='' target='_blank'>
                </div>
                <p>${products[i].name}</p>
                <span>Php. ${products[i].priceCents/100}</span>
              </div>`
  }
  uploadContainer.innerHTML = html;
 
  for (let i = 0; i < products.length; i++) {

    document.querySelector(`.js-crochet-image${[i]}`).style.background = `url(${products[i].image})`;

    document.querySelector(`.js-crochet-image${[i]}`).style.backgroundSize = 'cover';


    document.querySelector(`.js-crochet-image${[i]}`)
    .addEventListener('mouseover', () => {

      document.querySelector(`.js-crochet-image${[i]}`).style.background = `url(${hovers[i].image})`;
      document.querySelector(`.js-crochet-image${[i]}`).style.backgroundSize = 'cover';

    })
    document.querySelector(`.js-crochet-image${[i]}`)
    .addEventListener('mouseout', () => {

      document.querySelector(`.js-crochet-image${[i]}`).style.background = `url(${products[i].image})`;
      document.querySelector(`.js-crochet-image${[i]}`).style.backgroundSize = 'cover';

    })
  }
}

console.log(uploadContainer1);

function displayBouquets() {
  let html = '';
  let html1 = '';

  for (let i = 0; i <bouquets.length; i++) {

    html += ` <div class="itemsContainer items-container-js${[i]}">
                <div class="crochetImage${[i]} js-crochet-image1${[i]}">
                  <a href='https://www.facebook.com/profile.php?id=61566369953654' target='_blank' class='messageUs'><i class="fa-regular fa-message"></i></a href='' target='_blank'>
                </div>
                <p>${bouquets[i].name}</p>
              </div>
              <div class="overlay3 js-overlay-3${[i]}">
                <div class="clickContainer">
                  <span class="js-close-button">&times;</span>
                  <div class="clickContainerImage">
                    <img src="${bouquets[i].image}" alt="">
                  </div>
                  <div class="divisionContainer"></div>
                  <div>
                    <p>${bouquets[i].description}</p>
                  </div>
                </div>
              </div>`
  }
  uploadContainer1.innerHTML = html;
  let closeButton = document.querySelectorAll('.js-close-button');

  for (let i = 0; i < bouquets.length; i++) {

    let dispBouquest = document.querySelector(`.js-crochet-image1${[i]}`);
    dispBouquest.style.background = `url(${bouquets[i].image})`;
    dispBouquest.style.backgroundSize = 'cover';

    let itemsContainer = document.querySelector(`.items-container-js${[i]}`);
    itemsContainer.addEventListener('click', () => {
      document.querySelector(`.js-overlay-3${[i]}`).style.display = 'flex';
    })
    closeButton.forEach((closes) => [
      closes.addEventListener('click', () => {
        document.querySelector(`.js-overlay-3${[i]}`).style.display = 'none';

      })
    ])
  }





}

function slider() {
  let slider = document.querySelector('.js-slider-button'),
      slider1 = document.querySelector('.js-slider-button1'),
      slider2 = document.querySelector('.js-slider-button2'),
      imageSlide = document.querySelector('.js-image-slider'),
      imageSlide1 = document.querySelector('.js-image-slider1');
      console.log(imageSlide);

  slider1.addEventListener('click', () => {

    imageSlide.classList.add('hideSlide');
    imageSlide1.classList.add('showSlide');
    imageSliderCaption.innerHTML = `<h2>Carnation & Forget Me Not</h2>
                                    <p>Flowers are beautiful creatures</p>`
    
  })
  slider.addEventListener('click', () => {

    imageSlide.classList.remove('hideSlide');
    imageSlide1.classList.remove('showSlide');
    imageSliderCaption.innerHTML = `<h2>Sunflower</h2>
                                    <p>Flowers are beautiful creatures</p>`
  })
}



slider();
displayFlowers();
displayBouquets();
login();
renderNames1();
openAndExitLogin();





