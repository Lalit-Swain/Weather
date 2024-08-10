


// var cityinput = document.querySelector("#cityinput");
// var btn = document.querySelector("#btn");
// var cityname = document.querySelector("#cityname");
// var sunrise = document.querySelector("#sunrise");
// var sunset = document.querySelector("#sunset");
// var cloud = document.querySelector("#cloud");
// var humidity = document.querySelector("#humidity");
// var tempreture = document.querySelector("#tempreture");
// var wind = document.querySelector("#wind");
// var pressure = document.querySelector("#pressure");

// const apik="ea2fa9dd6a1f2f71e78adf1c6c2545c9";

// function converstion(val) {
//   return (val - 273).tofixed(2);
// }
// btn.addEventListener("click", function(){
//     fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityinput + "&appid=" + apik)
//     .then(res => res.json())

//     .then(data => {
//         var namevalue = data.name;
//         var sunrisevalue = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
//         var sunsetvalue = new Date(data.sys.sunset * 1000).toLocaleTimeString();
//         var tempvalue = data.main.temp;
//         var windvalue = data.wind.speed;

//         cityname.innerhtml=`${namevalue}`
//         sunrise.innerhtml=`Sun rise:${sunrisevalue}`
//         sunset.innerhtml=`Sun set:${sunsetvalue}`
//         tempreture.innerhtml=`Tempreture:${converstion(tempvalue)}`
//         wind.innerhtml=`Wind:${windvalue}`

//     })
//     .catch(err=> alert("you enter a wrong city"))

// })

var cityinput = document.querySelector("#cityinput");
var btn = document.querySelector("#btn");
var cityname = document.querySelector("#cityname");
var sunrise = document.querySelector("#sunrise");
var sunset = document.querySelector("#sunset");
var cloud = document.querySelector("#cloud");
var humidity = document.querySelector("#humidity");
var tempreture = document.querySelector("#tempreture");
var wind = document.querySelector("#wind");
var pressure = document.querySelector("#pressure");

const apik = "9cffe5b36e094cb0caa25f65e0671448";

function conversion(val) {
  return (val - 273.15).toFixed(2);
}

btn.addEventListener("click", function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityinput.value + "&appid=" + apik)
    .then(res => res.json())
    .then(data => {
        var namevalue = data.name;
        var sunrisevalue = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        var sunsetvalue = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        var tempvalue = data.main.temp;
        var windvalue = data.wind.speed;

        cityname.innerHTML = ` ${namevalue} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cloud-sun" viewBox="0 0 16 16">
  <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.5 3.5 0 0 1 7 8m4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z"/>
  <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708zm1.734 3.374a2 2 0 1 1 3.296 2.198q.3.423.516.898a3 3 0 1 0-4.84-3.225q.529.017 1.028.129m4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377M14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
</svg>`;
        sunrise.innerHTML = `Sunrise: ${sunrisevalue}`;
        sunset.innerHTML = `Sunset: ${sunsetvalue}`;
        tempreture.innerHTML = `Temperature: ${conversion(tempvalue)} °C`;
        wind.innerHTML = `Wind Speed: ${windvalue} m/s`;
    })
    .catch(err => alert("You entered a wrong city"));
});
