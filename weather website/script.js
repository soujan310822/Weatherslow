const searchBar = document.getElementById("searchbar");
const submitB = document.getElementById("submit");
const el = document.getElementById("report");
const API_Key = "";
let city;
let temperature, humidity, country, msg, id;

// async function to get weather

async function getWeather(city) {
    try {
        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`,
        );
        if(!response.ok) {
             let status = response.status;
             if(status>400 && status<500){alert("please enter a valid country name!!")

             }
             else if (status > 500){
                alert("Sorry we cant provide you with weather info as there is an server problem!")

             }
        }
        response = await response.json();
        humidity = response.main.humidity + "%";
        temperature = response.main.temp + "°C";
        country = response.sys.country.toUpperCase();
        msg = response.weather[0].description;
        id=response.weather[0].id;
        console.log(humidity,temperature,country,msg,id);
        updateInfo(city,el);
    }
    catch(error) {
        console.log(error);
    }
}

function updateInfo(city,ele) {
    let humid = document.getElementById("humidity");
    let temp = document.getElementById("temp");
    let desc = document.getElementById("msg");
    let cntry = document.getElementById("country");
    let cty = document.getElementById("city_name");

    humid.innerHTML = `<span style='font-weight: 700;'>Humidity:</span> ${humidity}`;
    temp.innerHTML = `<span style="font-weight: 700;">Temperature:</span> ${temperature}`;
    desc.innerHTML = msg;
    desc.style.fontStyle = "italic";
    cntry.textContent = country;
    cty.textContent=city.toUpperCase();
    setBackground(ele,id);
    ele.style.visibility ="visible";
}

function setBackground(el,id){
    if(id >= 200 && id<300) {
        if(window.innerWidth<479){
        el.style.color="white";
        document.body.style.backgroundImage = "url('images/thunder strom.jpeg')"; // thunder strom 
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        }
        else{
        el.style.color="white";
        document.body.style.backgroundImage = "url('images/thunder strom.jpeg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        }
       
        
    }
    else if(id >= 300 && id<=400) {
        if(window.innerWidth < 479) {
        el.style.color="white";
        document.body.style.backgroundImage="url('images/drizzle mobile.jpeg')"; // drizzle
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        }
        else {
        el.style.color="white";
        document.body.style.backgroundImage="url('images/drizzle.jpeg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        }
    }
    else if(id >= 500 && id< 502) {

        if (window.innerWidth < 479) {
        document.body.style.backgroundImage="url('images/normalrain mobile.jpeg')"; // normal rain 
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        el.style.color="white"

        }
        else{
        document.body.style.backgroundImage="url('images/normal rain.jpeg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        el.style.color="white"
        }

    }
    else if(id >= 502 && id<600) {
        if(window.innerWidth <479) {
        el.style.color="white";
        document.body.style.backgroundImage="url('images/heavyrain mobile.jpeg')"; // heavy rain 
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        }
        else{
        el.style.color="white";
        document.body.style.backgroundImage="url('images/heavyrain.jpeg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        }
  

    }
    else if(id >= 600 && id<700) {

        if(window.innerWidth <479) {
        document.body.style.backgroundImage="url('images/snow mobile.jpeg')"; // snow 
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        el.style.color="white";
        }

        else{
        document.body.style.backgroundImage="url('images/snow.jpeg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        el.style.color="white";
        }
    }
    else if(id == 800) {
        if (window.innerWidth <= 478){
              document.body.style.backgroundImage="url('images/clear skies mobile.png')";
              document.body.style.backgroundRepeat = "no-repeat";
              document.body.style.backgroundSize = "cover";
              el.style.color="white";
        }
       else {
         console.log("this is clear sky id = 800")
        document.body.style.backgroundImage="url('images/clear skies.jpeg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        el.style.color="white";
       }

        
    }
    else if (id> 800) {
        if(window.innerWidth<479){
        el.style.color="white";
        document.body.style.backgroundImage="url('images/cloudy skies mobile.jpeg')"; // cloudy skies 
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
        else{
        el.style.color="white";
        document.body.style.backgroundImage="url('images/cloudy skies.jpeg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";

    }
}
    else if(id==781) {
        if(window.innerWidth<479) {el.style.backgroundImage = "url('images/tornado.png')"} // tornado 
        else {
            el.style.backgroundImage = "url('images/tornado.png')"
            el.style.color = "red";
        }
    }
    
}

searchBar.addEventListener("keydown", (event) =>{
    if(event.key === "Enter"){
        city=searchBar.value;
        console.log(city);
        getWeather(city);

    }
});


submitB.addEventListener("click", (event) => {
    city = searchBar.value;
    if (city) {
        getWeather(city);
    } 
    else {
        alert("enter a city name to get details");
    }
});




