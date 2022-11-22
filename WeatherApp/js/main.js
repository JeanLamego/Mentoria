let weather={
    "apiKey":"de44d6a961bec9dd4dce6385403fe381",
    fetchWeather: function(city){
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?&lang=pt_br&q="
        + city
        + "&units=metric&appid="
        + this.apiKey
        )
        .then((response) =>response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name}= data;
        const {icon, description} = data.weather[0];
        const {humidity, temp, feels_like} = data.main;
        const {speed}= data.wind;
        // console.log(name,icon,description,humidity,temp,feels_like,speed)
        document.querySelector(".city").innerText = "Tempo agora em " + name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".clouds").innerText= description;
        document.querySelector(".feels-like").innerText="Sensação Térmica: "+feels_like+"°C";
        document.querySelector(".temp").innerText=temp+"°C";
        document.querySelector(".humidity").innerText="Umidade: " + humidity +"%";
        document.querySelector(".wind").innerText="Vento: " + speed + "km/h";
        document.body.style.backgroundImage= "url('https://source.unsplash.com/1920x1080/?"+ name +"')"
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    } 
};

document.querySelector(".btn").addEventListener("click", function(){
    weather.search();
}
);

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key =="Enter"){
        weather.search();
    }
});