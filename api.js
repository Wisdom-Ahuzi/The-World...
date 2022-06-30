const mainUnder = document.querySelector('.main-under');

const getCountries = async () => {

    const response = await fetch('https://restcountries.com/v2/all');

    const data = await response.json();

    return data;
}

getCountries().then(data => {
    data.forEach((dat) => {

        const container = document.createElement('div');

        container.id = dat.name;
        container.classList.add('container');

        const imageDiv = document.createElement('div');
        imageDiv.classList.add('img');


        const countryImage = document.createElement('img');
        countryImage.src = dat.flag;
        countryImage.alt = dat.name;

        const details = document.createElement('div');
        details.classList.add('details');

        const countryName = document.createElement('div');
        countryName.classList.add('country');
        countryName.innerText = dat.name;


        const otherDetails = document.createElement('div');
        otherDetails.classList.add('other-details');

        const firstPara = document.createElement('p');
        firstPara.classList.add('population');
        firstPara.innerText = `Population:`;
        const firstSpan = document.createElement('span');
        firstSpan.classList.add('span');
        firstSpan.setAttribute('id', 'population');
        firstSpan.innerText = dat.population;



        const secondPara = document.createElement('p');
        secondPara.classList.add('region');
        secondPara.innerText = `Region: `;
        const secondSpan = document.createElement('span');
        secondSpan.classList.add('span');
        secondSpan.setAttribute('id', 'region');
        secondSpan.innerText = dat.region;



        const thirdPara = document.createElement('p');
        thirdPara.classList.add('capital');
        thirdPara.innerText = `Capital:`;
        const thirdSpan = document.createElement('span');
        thirdSpan.classList.add('span');
        thirdSpan.setAttribute('id', 'capital');
        thirdSpan.innerText = dat.capital;


        container.appendChild(imageDiv);
        container.appendChild(details);
        imageDiv.appendChild(countryImage);
        details.appendChild(countryName);
        details.appendChild(otherDetails);
        otherDetails.appendChild(firstPara);
        otherDetails.appendChild(secondPara);
        otherDetails.appendChild(thirdPara);
        firstPara.appendChild(firstSpan);
        secondPara.appendChild(secondSpan);
        thirdPara.appendChild(thirdSpan);
        mainUnder.appendChild(container);

        const elements = document.querySelectorAll('.container');

        elements.forEach(element => {
            element.addEventListener('click', () => {
                window.location.assign(`/country.html?name=${element.id}`)
            });
        });

    });

    const countrySelector = document.querySelectorAll('.country');
    const mana = Array.from(countrySelector);


    const finder = document.querySelector('#searcher');

    finder.addEventListener('keyup', () => {
        const searchedValue = finder.value;

        mana.forEach((one) => {
            if (!one.innerText.includes(searchedValue)) {
                one.parentElement.parentElement.classList.add('filtered')
            } else if (one.innerText.includes(searchedValue)) {
                one.parentElement.parentElement.classList.remove('filtered');
                one.parentElement.parentElement.classList.add('unfiltered');
            }
        })
    });

    const manna = document.querySelectorAll('.span');
    const defender = document.querySelectorAll('.container');
    const defence = Array.from(defender);
    const regionFilter = document.querySelectorAll('.items');
    const reFi = Array.from(regionFilter);

    // Potential work on if else, if else statements
    defence.forEach((defend) => {
        reFi.forEach((reLii, index) => {
            const regionizer = defend.lastElementChild.lastElementChild.childNodes[1].lastElementChild;
            reLii.addEventListener('click', () => {
                if (index === 0 && regionizer.innerText !== 'Africa') {
                    const africaFilter = regionizer.parentElement.parentElement.parentElement.parentElement;
                    africaFilter.classList.add('filtered');
                } else if (index === 1 && regionizer.innerText !== 'Americas') {
                    const americasFilter = regionizer.parentElement.parentElement.parentElement.parentElement;
                    americasFilter.classList.add('filtered');
                } else if (index === 2 && regionizer.innerText !== 'Asia') {
                    const asiaFilter = regionizer.parentElement.parentElement.parentElement.parentElement;
                    asiaFilter.classList.add('filtered');
                } else if (index === 3 && regionizer.innerText !== 'Europe') {
                    const europeFilter = regionizer.parentElement.parentElement.parentElement.parentElement;
                    europeFilter.classList.add('filtered');
                } else if (index === 4 && regionizer.innerText !== 'Oceania') {
                    const oceaniaFilter = regionizer.parentElement.parentElement.parentElement.parentElement;
                    oceaniaFilter.classList.add('filtered');
                }
            });
        });
    });

}).catch((err) => {
    console.log('Error', err);
});

