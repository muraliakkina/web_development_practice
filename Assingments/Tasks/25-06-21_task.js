// To Get all the countries from Asia continent /region using Filter function
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
     data = JSON.parse(this.response);
    console.log(data.filter(ele=>ele.region == 'Asia'))
    };
xhr.send();


// To Get all the countries with a population of less than 2 lakhs using Filter function
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
     data = JSON.parse(this.response);
    console.log(data.filter(ele=>ele.population<200000))
    };
xhr.send();

//To Print the following details name, capital, flag using forEach function
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
     data = JSON.parse(this.response);
     data.forEach(element => {
        console.log('CountryName: '+element.name + ' Capital: '+ element.capital )
        console.log('Flag :'+ element.flag) 
     });
    };
xhr.send();

// To Print the total population of countries using reduce function
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
     data = JSON.parse(this.response);
     var pop = []
     data.forEach(ele => pop.push(ele.population))
     console.log("Total World Population is: "+pop.reduce((a,b) => a+b))
    };
xhr.send();

// To Print the country which use US Dollars as currency
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
     data = JSON.parse(this.response);
     var currency = data.filter(ele => ele.currencies[0].symbol=="$")
     currency.forEach(element => console.log('CountryName: '+ element.name))
    };
xhr.send();
