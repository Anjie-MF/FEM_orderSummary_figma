# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- 
## Overview

### The challenge

Users should be able to:

- See hover states for interactive elements

### Screenshot

![](./images/Screenshot%202025-09-08%205.23.49%20AM.png)


### Links

- Solution URL: [GitHub Repo](https://github.com/Anjie-MF/FEM_orderSummary_figma)
- Live Site URL: [View Live Site](https://anjie-mf.github.io/FEM_orderSummary_figma/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

To see how you can add code snippets, see below:

```html
<p class="payment-proceed" id="pulse"><span class="activate-proceed">Proceed to Payment</span></p> 

FIRST CSS ANIMATION (PULSE)

```
```css
body.party {
   background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
   background-size: 400% 400%;
   animation: gradient 7s ease infinite;
}

@keyframes gradient {
   0% {
      background-position: 0% 50%;
   }

   50% {
      background-position: 100% 50%;
   }

   100% {
      background-position: 0% 50%;
   }
} 

LEARNED HOW TO GRADIENT ANIMATION

#pulse:hover {
   animation: pulse 5s infinite;
}

@keyframes pulse {
   0% {
      transform: scale(1);
   }

   50% {
      transform: scale(1.1);
   }

   100% {
      transform: scale(1);
   }
} 

CSS FOR PULSE ANIMATION
```

```js
themeSwitchInput.addEventListener("click", function () {
    body.classList.toggle("party");
    ball.classList.toggle("move-right")
}); 
SIMPLIFIED CODE WITH CLASSLIGHT.TOGGLE VS IF/ELSE STATEMENTS
```

### Useful resources

- [Pulse Effect](https://www.geeksforgeeks.org/css/css-pulse-animation/) - how to write the HTML and CSS for pulse effect 
- [Alison Quaglia](https://www.sliderrevolution.com/resources/css-animated-background/) - Created without JavaScript, this gradient background creates a stunning effect using pure CSS3 animations

## Author

- Frontend Mentor - [@Anjie-MF](https://www.frontendmentor.io/profile/Anjie-MF)
- Dev.to - [anjelica_mf](https://dev.to/anjie_mf)
- Linkedin - [Anjelica May](www.linkedin.com/in/anjiemay23)
