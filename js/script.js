/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * 1. Created an array and assigned it to the variable quotes.
 * 2. Added five objects to the array.
 * 3. Each object contained two properties. The proprties added were "quote" and "source".
 * 4. Added another property named "citation" to at least one of the objects within the array.
 * 5. Added a second property named "year" to at least one of the objects within the array.
 ***/

const quotes = [
  {
    quote:
      "If it's a good idea, go ahead and do it. It's much easier to apologize than it is to get permission.",
    source: "Grace Hopper",
    year: "July 1986",
  },
  {
    quote:
      "You may not control all the events that happen to you, but you can decide not to be reduced by them.",
    source: "Maya Angelou",
    citation: "brainyquote",
  },
  {
    quote:
      "I believe in being strong when everything seems to be going wrong. I believe that happy girls are the prettiest girls. I believe that tomorrow is another day and believe in miracles. ",
    source: "Audery Hepburn",
  },
  {
    quote:
      "How wonderful it is that nobody need wait a single moment before starting to improve the world",
    source: "Anne Frank",
  },
  {
    quote:
      " I raise up my voice -- not so that I can shout, but so that those without a voice can be heard...We cannot all succeed when half of us are held back.",
    source: "Malala Yousafzai",
  },
];

/***
 * `getRandomQuote` function
 * 1. Created a function named "getRandomQuote" 
 * 2. Inside the function I created a variable named "ranNum" that used the functions Math.floor, Math.random and .length to generate a random number. 
 * 3. I created another variable named it "randomQuote" and stored the random quote generated through using the function stored in "ranNum" with the quotes array.
 * 4. The function returned a random quote 
  /

***/

function getRandomQuote() {
  const ranNum = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[ranNum];
  return randomQuote;
}

// 1. Create a function named printQuote()

function printQuote() {
  //2. Created a variable that calls out the getRandomQuote () within the printQuote() function
  const getQuote = getRandomQuote();
  // 3. Created a variable that initiates an HTML string.
  // 4. Added a <p></p> element with the className "quote" and the quote property.
  // 5. Added a second <p></p> elemnt eith the className "source" and source property. Leave the closing tag off for now.
  // 6. Created an if statement that if the citation property exists it will concatenate a <span></span> element with the className "citation" and citation property to the HTML string.
  // 7. Created an if statement that if the year property exists it will concatenate a <span></span> element with the className "year" and year property to the HTML string.
  // 8. After the if statements, the closing </p> tag concatenates with the HTML string.

  let html = `
  <p class="quote" > ${getQuote.quote} </p>
  <p class="source"> ${getQuote.source} `;

  if (getQuote.citation) {
    html += `<span  class="citation" >${getQuote.citation}</span> `;
  }

  if (getQuote.year) html += `<span class="year">${getQuote.year}</span>`;

  html += ` </p> `;

    // 9. Have the innerHTML of the quote-box divto equal the completed HTML string.

  document.getElementById("quote-box").innerHTML = html;
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
