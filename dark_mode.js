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

let changeDarkMode = localStorage.getItem('changeDarkMode');


const enableDarkMode = () => {

    localStorage.setItem('changeDarkMode', 'enabled');

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
        molder.src = "./images/darkmode.svg";
    } else {
        molder.src = "./images/lightmode.svg";
    }

    if (modeText.innerText.includes(`Light Mode`)) {
        modeText.innerText = "Dark Mode";
    } else {
        modeText.innerText = "Light Mode";
    }
}




// const disableDarkMode = () => {

//     localStorage.setItem('changeDarkMode', null);

//     document.body.classList.remove('dark-mode');

//     for (const selectee of selector) {
//         selectee.classList.remove('dark-mode-element');
//     }

//     for (const populater of populationSelector) {
//         populater.classList.remove('span-class');
//     }

//     for (const regioner of regionSelector) {
//         regioner.classList.remove('span-class');
//     }

//     for (const capitalia of capitalSelector) {
//         capitalia.classList.remove('span-class');
//     }

//     for (const pallle of parll) {
//         pallle.classList.remove('span-class');
//     }

//     for (const inter of deep) {
//         inter.classList.remove('darker-mode');
//     }

//     stubber.forEach((stubee) => {
//         stubee.classList.remove('darker-mode');
//     });

//     if (molder.src.includes(`/images/lightmode.svg`)) {
//         molder.src = "./images/darkmode.svg";
//     } else {
//         molder.src = "./images/lightmode.svg";
//     }

//     if (modeText.innerText.includes(`Light Mode`)) {
//         modeText.innerText = "Dark Mode";
//     } else {
//         modeText.innerText = "Light Mode";
//     }


// }

// if (changeDarkMode === 'enabled') {
//     enableDarkMode();
// }

mode.addEventListener('click', () => {
    
    enableDarkMode()
    // changeDarkMode = localStorage.getItem('changeDarkMode');

    // if (changeDarkMode !== 'enabled') {
        // console.log('fufilled');
    // }else{
    //     disableDarkMode()
    // }
});



