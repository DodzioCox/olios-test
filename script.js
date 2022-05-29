const hamburger = document.querySelector('.hamburger');
const headerMenu  = document.querySelector('.header-menu');

const handleClick = () =>{
    hamburger.classList.toggle('hamburger--active');
    headerMenu.classList.toggle('header-menu--active')
};

hamburger.addEventListener('click', handleClick);

let cards = document.querySelectorAll('.card');
let btnNext = document.querySelector('.btn-next');
let searchBtn = document.querySelector('.search');
let searchBar = document.querySelector('.search-bar');
const backdrop = document.querySelector('.backdrop');
const searchInputBtn = document.querySelector('.input-btn')

function displayPhotos(){
    setPhotos();
    for(let i =0; i < cards.length; i++){
        cards[i].style.backgroundImage =  photos[i];
    }
}
let imageCnt = 0;
function nextBtn(){
    for(let i = 0; i < 5; i++){
        if(imageCnt >= 10){
            imageCnt = 0;
        }else{
            imageCnt++;
        }
        cards[i].style.backgroundImage = photos[imageCnt]
    }
}

const searchBarHandler = () =>{
    toggleBackdrop()
    toggleSearchBar()
}
const toggleSearchBar = () => {
    searchBar.classList.toggle("active")
}
const toggleBackdrop = () =>{
    backdrop.classList.toggle("active")
}
let photos = [];
const setPhotos = () =>{
    for(let i = 0; i <11;i++){
        photos.push(`url("css/img/${i}.jpg")`)
    }
    console.log(photos)
}
displayPhotos();
if(typeof(btnNext) != 'undefined' && btnNext != null){
    btnNext.addEventListener('click',nextBtn);
}

searchBtn.addEventListener('click',searchBarHandler)
backdrop.addEventListener('click', searchBarHandler)
searchInputBtn.addEventListener('click',searchBarHandler)