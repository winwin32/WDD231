import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

// Update the link in the disclaimer area to read the name of the park and navigate to that park’s official site.
// Update the title of the page to read the name of the park.
// Use the first image in the list in the data for the hero image.
// Update the name, designation, and states of the park in the hero.

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
  }

const parkImage = document.querySelector(".park-img");
parkImage.src = parkData.images[0]["url"];
parkImage.alt = parkData.images[0]["altText"];

const parkTitle = document.querySelector(".caption-title");
parkTitle.innerHTML = parkData.name;

const parkDesig = document.querySelector(".caption-desig");
parkDesig.innerHTML = parkData.designation;

const parkStates = document.querySelector(".caption-states");
parkStates.innerHTML = parkData.states;