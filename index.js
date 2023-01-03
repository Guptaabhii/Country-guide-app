let countryInput = document.getElementById("country_input");
let searchBtn = document.getElementById("search_btn");
let outputResult = document.getElementsByClassName("output_result")[0];
// console.log(outputResult);

searchBtn.addEventListener("click", () => {
  let countryName = countryInput.value;
  let URL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  //   console.log(URL);

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // console.log(data[0]);
      // console.log(data[0].capital);
      // console.log(data[0].flags.svg);
      // console.log(data[0].currencies.Inr.name);

      outputResult.innerHTML = `
      <img src="${data[0].flags.svg}" class = "country-flag">
      <h2 class = "country-name"> ${data[0].name.common} </h2>

      <div class = "other-facts">

      <h4>Capital: <span>${data[0].capital}</span></h4>
      <h4>Continent: <span>${data[0].continents}</span></h4>
      <h4>Population: <span>${data[0].population}</span></h4>
      <h4>Status: <span>${data[0].status}</span></h4>
      <h4>Sub Region: <span>${data[0].subregion}</span></h4>
      <h4>Currency: <span>${
        data[0].currencies[Object.keys(data[0].currencies)].name
      } - ${Object.keys(data[0].currencies)[0]}</span></h4>
      <h4>Languages: <span>${Object.values(data[0].languages)
        .toString()
        .split(",")
        .join(", ")}</span></h4>
      
      </div>
      `;
    })
    .catch(() => {
      if (countryName.length == 0) {
        outputResult.innerHTML = `<h3 class = "error-msg">Input field cannot be empty.</h3>`;
      } else {
        outputResult.innerHTML = `<h3 class = "error-msg">Write valid country name.</h3>`;
      }
    });
});
