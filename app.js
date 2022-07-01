const arrow = document.querySelector('.datalist img');
const filterRegion = document.querySelector('.filter-region');
const head = document.querySelector('.head')
const img = arrow.src;

arrow.addEventListener('click', () => {
    filterRegion.classList.toggle('show');
    arrow.src.includes(`/images/chevron-down-solid.svg`) ? arrow.src = "./images/chevron-up-solid.svg" : arrow.src = "./images/chevron-down-solid.svg";
});

head.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo(0, 0);
});