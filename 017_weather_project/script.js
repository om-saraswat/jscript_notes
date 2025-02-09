const city_name = document.querySelector(".city_name");
const button = document.querySelector("button");
const citym = document.querySelector("#city");
const imag = document.querySelector(".weathericon");
const tempshow = document.querySelector('#tempshow');
const description = document.querySelector('#description')
const windspeed = document.querySelector('#windspeed')
console.log(citym);

const apikey = "e35a50a782cc095566bfe6b40b308433";

let city;
button.addEventListener("click", () => {
  city = city_name.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
  console.log(city);
  console.log(url);
  citym.innerHTML = `${city}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod == 200) {
        imag.innerHTML = ""; // clear previous weather image if exist
        weatherfn(data);
      } else {
        alert("Enter the invalid city");
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
    
});
  

const weatherfn = (data) => {
    
    
    const img = document.createElement('img')
    img.setAttribute("id","weathericoni")
    img.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    imag.appendChild(img);
    
  
  tempshow.innerHTML = `${data.main.temp} °C`
  description.innerHTML = `${data.weather[0].description}`;
  windspeed.innerHTML = `Wind speed is ${data.wind.speed}km/h`
};
