function countryCode1(code1){
    fetch("https://restcountries.eu/rest/v2/all",{
        method: "GET"
    })
    .then((data)=> data.json())
    .then((data)=>{
        data.forEach((elemnt)=>{
            let countryName = document.querySelector("#country1").value
            countryName = countryName.toLowerCase()
            if(countryName == elemnt.name.toLowerCase()){
                code1 = elemnt.currencies[0].code;
                code1 = code1.toLowerCase() 
            }
        })
        return code1;
    })
    .then((data)=>baseCurrency(data))
}

function countryCode2(code2){
    fetch("https://restcountries.eu/rest/v2/all",{
        method: "GET"
    })
    .then((data)=> data.json())
    .then((data)=>{
        data.forEach((element)=>{
            let countryName = document.querySelector("#country2").value;
            countryName = countryName.toLowerCase();
            if(countryName == element.name.toLowerCase()){
                code2 = element.currencies[0].code;
                code2 = code2.toLowerCase() 
            }
        })
        return code2;
    })
    .then((data)=> {
        localStorage.setItem("key", data)
    })
}

function baseCurrency(foo){
    //const ff = new URL("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/"+foo+".json")
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${foo}.json`, {
        method: "GET"
    })
    .then((data) => data.json())
    .then((data)=> {
        return data[foo][localStorage.getItem("key")]
    })
    .then((data)=>{
        return document.querySelector("#num1").value*data
    })
    .then((data)=> document.querySelector("#num2").value = data)
}

function formReset(){
    document.querySelector("#country1").value = "";
    document.querySelector("#country2").value = "";
    document.querySelector("#num1").value = "";
    document.querySelector("#num2").value = "";
}
