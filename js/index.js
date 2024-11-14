// 札幌管区気象台の情報
let url = "https://www.jma.go.jp/bosai/forecast/data/forecast/016000.json";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (weather) {
    console.log(weather);

    // weather[0]:石狩地方:天気 / weather[1]:札幌
    let area = weather[0].timeSeries[0].areas[0];
      console.log(area) 
      
    document.getElementById("today").lastElementChild.textContent =
       area.weathers[0];
    document.getElementById("tomorrow").lastElementChild.textContent =
       area.weathers[1];
    document.getElementById("dayAfterTomorrow").lastElementChild.textContent =
        area.weathers[2];
      
    let temps = weather[0].timeSeries[2].areas[0];
    console.log(temps);
      
 
    document.getElementById("tempsMin").lastElementChild.textContent =
        temps.temps[0] + "℃";
    document.getElementById("tempsMax").lastElementChild.textContent =
      temps.temps[1] + "℃";
      

      



  });

