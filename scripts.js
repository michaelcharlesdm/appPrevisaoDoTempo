
const key = '5bc63a2719bbd25a820b1665333789d6'


function enterDataScreen(data) {
    console.log(data)
    document.querySelector(".cidade").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "ºC"
    document.querySelector(".text-previsão").innerHTML = data.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + data.main.humidity + "%"
    document.querySelector(".img-previsão").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.querySelector(".temp2").innerHTML = Math.floor(data.main.temp_max) + "ºC"
    document.querySelector(".temp1").innerHTML = Math.floor(data.main.temp_min) + "ºC"
    document.querySelector(".speed").innerHTML = "Vento: " + data.wind.speed
    document.querySelector(".time").innerHTML = "Time: " + new Date().toLocaleTimeString("pt-BR")
    document.querySelector(".data").innerHTML = "Data: " + new Date().toLocaleDateString("pt-BR")
}


async function searchCity(city) {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())


    enterDataScreen(data)
}


function clickButton() {

    const city = document.querySelector(".input-city").value

    searchCity(city)
}