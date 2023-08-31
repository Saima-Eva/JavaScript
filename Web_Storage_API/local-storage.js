// Web storage API - allows us to store & read data in browser
// Web storage API - localStorage, sessionStorage

// localStorage - store, read, update and remove data
// no expiry date: data never gets lost even if you close the browser

// localStorage store data as key value pair - string


// setItem(key,value)
/* localStorage.setItem("userName", "Saima Eva");
localStorage.setItem("password", "123456"); */

// setItem(key,value) when value is array not string
const countries = ["Canada","USA","Bangladesh"]
localStorage.setItem("countries", JSON.stringify(countries));

// getItem(key)
const countriesList = JSON.parse(localStorage.getItem("countries"));
console.log(countries);

// getItem(key)
/* const userName = localStorage.getItem("userName");
const userPassword = localStorage.getItem("password");
console.log(userName, userPassword); */

//removeItem(key)
/* localStorage.removeItem("userName");
localStorage.removeItem("password");
 */


//localStorage.clear

