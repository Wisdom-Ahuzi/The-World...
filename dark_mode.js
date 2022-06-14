const molder = document.querySelector('.mode img');
const modeText = document.querySelector('.mode p');
const mode = document.querySelector('.mode');
const stubber = document.querySelectorAll('.stubborn');
const selector = document.getElementsByClassName('container');
const populationSelector = document.getElementsByClassName('population');
const regionSelector = document.getElementsByClassName('region');
const capitalSelector = document.getElementsByClassName('capital');
const parll = document.getElementsByClassName('changer');
const deep = document.getElementsByClassName('boddo');

mode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    for (const selectee of selector) {
        selectee.classList.toggle('dark-mode-element');
    }

    for (const populater of populationSelector) {
        populater.classList.toggle('span-class');
    }

    for (const regioner of regionSelector) {
        regioner.classList.toggle('span-class');
    }

    for (const capitalia of capitalSelector) {
        capitalia.classList.toggle('span-class');
    }

    for (const pallle of parll) {
        pallle.classList.toggle('span-class');
    }

    for (const inter of deep) {
        inter.classList.toggle('darker-mode');
    }

    stubber.forEach((stubee) => {
        stubee.classList.toggle('darker-mode');
    });

    if (molder.src.includes(`/images/lightmode.svg`)) {
        molder.src = "./images/svg";
    } else {
        molder.src = "./images/lightmode.svg";
    }

    if (modeText.innerText.includes(`Light Mode`)) {
        modeText.innerText = "Dark Mode";
    } else {
        modeText.innerText = "Light Mode";
    }
});
