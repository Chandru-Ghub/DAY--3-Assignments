
/////To get countries SUB-REGION
function printData() {
    let countries = JSON.parse(this.responseText);
    //console.log(JSON.parse(this.responseText))
    countries.forEach((c) => console.log(c.subregion))
      
    }
    
    var request = new XMLHttpRequest();
    request.addEventListener("load", printData);
    request.open("GET",'https://restcountries.com/v3.1/all');
    request.send(); 