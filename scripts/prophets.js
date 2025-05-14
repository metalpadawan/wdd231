// Declare a constant variable to store the URL of the JSON data source
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

// Declare a constant variable to select the HTML element with the id "cards"
const cards = document.querySelector('#cards');

// Define an asynchronous function to fetch and process the prophet data
async function getProphetData() {
  // Await the fetch request to the URL and store the response
  const response = await fetch(url);

  // Await the conversion of the response to JSON and store the resulting data
  const data = await response.json();

  // Display the prophets array in table format in the browser console (for debugging/testing)
  // console.table(data.prophets);

  // Call the displayProphets function and pass only the array of prophets from the data
  displayProphets(data.prophets);
}

// Call the getProphetData function to start the data retrieval process
getProphetData();

// Define the displayProphets function, which takes an array of prophet objects as a parameter
const displayProphets = (prophets) => {

    // Loop through each prophet in the array
    prophets.forEach((prophet) => {
  
      // Create a new <section> element to serve as the card for this prophet
      let card = document.createElement('section');
  
      // Create a new <h2> element for the prophet's full name
      let fullName = document.createElement('h2');
      // Combine first and last names to create the full name text
      fullName.textContent = `${prophet.name} ${prophet.lastname}`;
  
      // Create a new <p> element for the prophet's date of birth
      let birthDate = document.createElement('p');
      // Set the text content to show the date of birth from the data
      birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
  
      // Create a new <p> element for the prophet's place of birth
      let birthPlace = document.createElement('p');
      // Set the text content to show the place of birth from the data
      birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
  
      // Create a new <img> element for the prophet's portrait
      let portrait = document.createElement('img');
      // Set the image source to the URL provided in the data
      portrait.setAttribute('src', prophet.imageurl);
      // Set alt text for accessibility and SEO
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
      // Enable lazy loading for performance optimization
      portrait.setAttribute('loading', 'lazy');
      // Set the width of the image in pixels
      portrait.setAttribute('width', '340');
      // Set the height of the image in pixels
      portrait.setAttribute('height', '440');
  
      // Append the full name heading to the card first
      card.appendChild(fullName);
      // Then append the birth date paragraph
      card.appendChild(birthDate);
      // Then append the place of birth paragraph
      card.appendChild(birthPlace);
      // Finally append the portrait image
      card.appendChild(portrait);
  
      // Append the complete card section to the #cards container in the document
      cards.appendChild(card);
    });
  };
  