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


let imageCnt = 0;


const searchBarHandler = () =>{
    searchBar.classList.toggle("active")
    backdrop.classList.toggle("active")
}

let photos = [];
const setPhotos = () =>{
    for(let i = 0; i <11;i++){
        photos.push(`img/${i}.jpg`)
    }
    console.log(photos)
}
setPhotos();

const nextBtn = () =>{
    for(let i = 0; i < 5; i++){
        if(imageCnt >= 10){
            imageCnt = 0;
        }else{
            imageCnt++;
        }
        cards[i].src = photos[imageCnt]
    }
}
if(typeof(btnNext) != 'undefined' && btnNext != null){
    btnNext.addEventListener('click',nextBtn);
}
if(typeof(searchInputBtn) != 'undefined' && searchInputBtn != null){
    searchInputBtn.addEventListener('click',searchBarHandler)
}

searchBtn.addEventListener('click',searchBarHandler)
backdrop.addEventListener('click', searchBarHandler)
