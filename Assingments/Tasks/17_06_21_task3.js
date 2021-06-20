var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
     data = JSON.parse(this.response);
    for(let i in data){
        console.log('countryName'+':'+data[i].name,"Region"+":"+data[i].region,"SubRegion"+":"+data[i].subregion,"Popu;ation"+"-"+data[i].population)
    }
    };
xhr.send();
