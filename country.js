const prms = window.location.href.slice(window.location.href.indexOf("?") + 1)
const sp = new URLSearchParams(prms)


const name = sp.get("name");


const getCountries = async () => {

    const response = await fetch(`https://restcountries.com/v2/name/${name}`);

    const data = await response.json();

    return data;
}

getCountries().then(res => {
    const mainInnerInner = document.querySelector('.main-inner-inner')

    const bana = res[0].languages;

    const mala = res[0].currencies || ['Nil'];

    const badda = res[0].borders || ['Nil', 'Nil', 'Nil'];


    const countryImageTwo = document.createElement('div');
    countryImageTwo.classList.add('country-image');

    const imageDivTwo = document.createElement('img');
    imageDivTwo.src = res[0].flag;
    imageDivTwo.alt = res.name;


    const moreDiv = document.createElement('div');
    moreDiv.classList.add('more');

    const moreDetails = document.createElement('div');
    moreDetails.classList.add('more-details');


    const topDetails = document.createElement('div');
    topDetails.classList.add('top-detail');

    const countryPara = document.createElement('p');
    countryPara.innerText = res[0].name;

    const middleDetail = document.createElement('div');
    middleDetail.classList.add('middle-detail');


    const innerMiddleDetailOne = document.createElement('div');
    innerMiddleDetailOne.classList.add('inner-middle-detail-one');

    const nativeName = document.createElement('p');
    nativeName.classList.add('native-name');
    nativeName.classList.add('changer');
    nativeName.innerText = `Native Name: `;

    const spanName = document.createElement('span');
    spanName.innerText = ` ${res[0].nativeName}`;

    const nativePopulation = document.createElement('p');
    nativePopulation.classList.add('native-population');
    nativePopulation.classList.add('changer');
    nativePopulation.innerText = `Population: `;

    const spanPopulation = document.createElement('span');
    spanPopulation.innerText = ` ${res[0].population}`;

    const nativeRegion = document.createElement('p');
    nativeRegion.classList.add('native-region');
    nativeRegion.classList.add('changer');
    nativeRegion.innerText = `Region: `;

    const spanRegion = document.createElement('span');
    spanRegion.innerText = ` ${res[0].region}`;

    const nativeSubregion = document.createElement('p');
    nativeSubregion.classList.add('native-subregion');
    nativeSubregion.classList.add('changer');
    nativeSubregion.innerText = `Sub Region: `;

    const spanSubregion = document.createElement('span');
    spanSubregion.innerText = `${res[0].subregion}`;

    const nativeCapital = document.createElement('p');
    nativeCapital.classList.add('native-capital');
    nativeCapital.classList.add('changer');
    nativeCapital.innerText = `Capital: `;

    const spanCapital = document.createElement('span');
    spanCapital.innerText = ` ${res[0].capital}`;


    const innerMiddleDetailTwo = document.createElement('div');
    innerMiddleDetailTwo.classList.add('inner-middle-detail-two');

    const topDomain = document.createElement('p');
    topDomain.classList.add('top-domain');
    topDomain.classList.add('changer');
    topDomain.innerText = `Top Level Domain:  `;

    const spanDomain = document.createElement('span');
    spanDomain.innerText = `${res[0].topLevelDomain}`;



    const currencies = document.createElement('p');
    currencies.classList.add('currencies');
    currencies.classList.add('changer');
    currencies.innerText = `Currencies:`

    const spanCurrencies = document.createElement('span');

    spanCurrencies.innerText = `${mala[0].name}`;

    const languages = document.createElement('p');
    languages.classList.add('Languages');
    languages.classList.add('changer');
    languages.innerText = `Languages: `;

    const spanLanguages = document.createElement('span');
    bana.forEach(element => {
        spanLanguages.innerText = `${element.name}`;
        console.log(element.name);
    });

    const base = document.createElement('div');
    base.classList.add('base');

    const borderCountries = document.createElement('div');
    borderCountries.classList.add('border-countries');

    const borderPara = document.createElement('p');
    borderPara.classList.add('changer')
    borderPara.innerText = `Border Countries:`;


    const borderOne = document.createElement('div');
    const borderOnePara = document.createElement('p');
    const borderTwo = document.createElement('div');
    const borderTwoPara = document.createElement('p');
    const borderThree = document.createElement('div');
    const borderThreePara = document.createElement('p');



    const borderman = [res.borders];
    Array.from(borderman);


    borderOne.classList.add('border-one');
    borderOne.classList.add('stubborn');
    borderOne.classList.add('changer');
    borderOne.classList.add('boddo');

    borderOnePara.innerText = `${badda[0]}`;


    borderTwo.classList.add('border-two');
    borderTwo.classList.add('stubborn');
    borderTwo.classList.add('changer');
    borderTwo.classList.add('boddo');

    borderTwoPara.innerText = `${badda[1]}`;


    borderThree.classList.add('border-three');
    borderThree.classList.add('stubborn');
    borderThree.classList.add('changer');
    borderThree.classList.add('boddo');

    borderThreePara.innerText = `${badda[2]}`;

    countryImageTwo.appendChild(imageDivTwo);
    topDetails.appendChild(countryPara);
    moreDiv.appendChild(moreDetails);
    moreDetails.appendChild(topDetails);
    moreDetails.appendChild(middleDetail);
    moreDetails.appendChild(base);
    middleDetail.appendChild(innerMiddleDetailOne);
    middleDetail.appendChild(innerMiddleDetailTwo);
    nativeName.appendChild(spanName);
    nativePopulation.appendChild(spanPopulation);
    nativeRegion.appendChild(spanRegion);
    nativeSubregion.appendChild(spanSubregion);
    nativeCapital.appendChild(spanCapital);
    innerMiddleDetailOne.appendChild(nativeName);
    innerMiddleDetailOne.appendChild(nativePopulation);
    innerMiddleDetailOne.appendChild(nativeRegion);
    innerMiddleDetailOne.appendChild(nativeSubregion);
    innerMiddleDetailOne.appendChild(nativeCapital);
    topDomain.appendChild(spanDomain);
    currencies.appendChild(spanCurrencies);
    languages.appendChild(spanLanguages);
    innerMiddleDetailTwo.appendChild(topDomain);
    innerMiddleDetailTwo.appendChild(currencies);
    innerMiddleDetailTwo.appendChild(languages);
    borderCountries.appendChild(borderPara);
    borderOne.appendChild(borderOnePara);
    borderTwo.appendChild(borderTwoPara);
    borderThree.appendChild(borderThreePara);
    base.appendChild(borderCountries);
    base.appendChild(borderOne);
    base.appendChild(borderTwo);
    base.appendChild(borderThree);
    mainInnerInner.appendChild(countryImageTwo);
    mainInnerInner.appendChild(moreDiv);
}).catch((err) => {
    console.log('Error', err);
});

const back = document.querySelector('.inner-back');
back.addEventListener('click', () => {
    const man = window.location.assign(`/index.html`);
});
