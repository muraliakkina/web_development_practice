// To get the data from the API and accessing the flags of the countries
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
     data = JSON.parse(this.response);
    for(let i in data){
        console.log(data[i].flag)
    }
    };
xhr.send();
