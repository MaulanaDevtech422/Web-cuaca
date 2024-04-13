const searchButton = document.querySelector('#button-addon2');
const inputKeyword = document.querySelector('.input-keyword');
document.body.style.backgroundImage = 'url(img/sky.jpg)'

searchButton.addEventListener('click', function() {

 fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputKeyword.value + "&appid=874fe78f9ecb547104c5afc4764b6514&units=metric") 

  .then(response => response.json())
  .then(response => {
   let result = document.querySelector('.result')

   result.innerHTML = `<h2 style="margin-bottom: 15px;">🌦️ ${response.name}, ${response.sys.country}</h2>
                                <h5><span class="temp"style="color :white ">${response.main.temp}°С</span> <span class="temp"style="color :white  ">${response.weather[0].description}</span></h5>
                                <p style="margin-bottom: 17px;">Suhu dari :  ${response.main.temp_min}°С hingga  ${response.main.temp_max}°С</p>
                                <h5>Laju Angin : ${response.wind.speed} m/s</h5>
                                <h5 style="margin-bottom: 17px;">Awan : ${response.clouds.all}%</h5>
                                <h4 style="color: whit;">Titik Koordinasi : [${response.coord.lat}, ${response.coord.lon}]</h4>`
  })
 inputKeyword.value = null;

})  
