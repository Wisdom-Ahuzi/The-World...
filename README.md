# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

![](./screenshot.jpg)
Screenshots were added and they were stored in the Screenshots folder

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
  <nav class="nav-bar stubborn">
        <div class="where">
            <p>Where in the world?</p>
        </div>

        <div class="mode">
           <img src="./images/svg" alt="Mode">
           <p>Dark Mode</p>
        </div>
    </nav>
```
```css
  .nav-bar{
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: hsl(0, 0%, 98%);
    box-shadow: 3px 3px 3px hsla(0, 3%, 85%, 0.838);
}
```
```js
  const getCountries = async () =>{

    const response = await fetch(`https://restcountries.com/v2/name/${name}`);

    const data = await response.json();

    return data;
}
```

### Useful resources

- [Mozilla Org](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) - This helped me really understand the basic concept of the window object. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.youtube.com/) - Youtube is basically a university. I'd recommend it to anyone still learning virtually anything.


## Author
- Frontend Mentor - [@Wizzy-05](https://www.frontendmentor.io/profile/Wizzy-05)
- Twitter - [@ahuzi_wisdom](https://twitter.com/home)

## Acknowledgments
Big thanks to my mentor Harry and my roommate Tobi.
