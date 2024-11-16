// 気象庁の天気コード　画像取得もこのコード
const weatherCode = {
  100: ["100.svg", "500.svg", "晴れ"],
  101: ["101.svg", "501.svg", "晴れ時々曇り"],
  102: ["102.svg", "502.svg", "晴れ一時雨"],
  103: ["102.svg", "502.svg", "晴れ時々雨"],
  104: ["104.svg", "504.svg", "晴れ一時雪"],
  105: ["104.svg", "504.svg", "晴れ時々雪"],
  106: ["102.svg", "502.svg", "晴れ一時雨か雪"],
  107: ["102.svg", "502.svg", "晴れ時々雨か雪"],
  108: ["102.svg", "502.svg", "晴れ一時雨か雷雨"],
  110: ["110.svg", "510.svg", "晴れ後時々曇り"],
  111: ["110.svg", "510.svg", "晴れ後曇り"],
  112: ["112.svg", "512.svg", "晴れ後一時雨"],
  113: ["112.svg", "512.svg", "晴れ後時々雨"],
  114: ["112.svg", "512.svg", "晴れ後雨"],
  115: ["115.svg", "515.svg", "晴れ後一時雪"],
  116: ["115.svg", "515.svg", "晴れ後時々雪"],
  117: ["115.svg", "515.svg", "晴れ後雪"],
  118: ["112.svg", "512.svg", "晴れ後雨か雪"],
  119: ["112.svg", "512.svg", "晴れ後雨か雷雨"],
  120: ["102.svg", "502.svg", "晴れ朝夕一時雨"],
  121: ["102.svg", "502.svg", "晴れ朝の内一時雨"],
  122: ["112.svg", "512.svg", "晴れ夕方一時雨"],
  123: ["100.svg", "500.svg", "晴れ山沿い雷雨"],
  124: ["100.svg", "500.svg", "晴れ山沿い雪"],
  125: ["112.svg", "512.svg", "晴れ午後は雷雨"],
  126: ["112.svg", "512.svg", "晴れ昼頃から雨"],
  127: ["112.svg", "512.svg", "晴れ夕方から雨"],
  128: ["112.svg", "512.svg", "晴れ夜は雨"],
  130: ["100.svg", "500.svg", "朝の内霧後晴れ"],
  131: ["100.svg", "500.svg", "晴れ明け方霧"],
  132: ["101.svg", "501.svg", "晴れ朝夕曇り"],
  140: ["102.svg", "502.svg", "晴れ時々雨と雷"],
  160: ["104.svg", "504.svg", "晴れ一時雪か雨"],
  170: ["104.svg", "504.svg", "晴れ時々雪か雨"],
  181: ["115.svg", "515.svg", "晴れ後雪か雨"],
  200: ["200.svg", "200.svg", "曇り"],
  201: ["201.svg", "601.svg", "曇り時々晴れ"],
  202: ["202.svg", "202.svg", "曇り一時雨"],
  203: ["202.svg", "202.svg", "曇り時々雨"],
  204: ["204.svg", "204.svg", "曇り一時雪"],
  205: ["204.svg", "204.svg", "曇り時々雪"],
  206: ["202.svg", "202.svg", "曇り一時雨か雪"],
  207: ["202.svg", "202.svg", "曇り時々雨か雪"],
  208: ["202.svg", "202.svg", "曇り一時雨か雷雨"],
  209: ["200.svg", "200.svg", "霧"],
  210: ["210.svg", "610.svg", "曇り後時々晴れ"],
  211: ["210.svg", "610.svg", "曇り後晴れ"],
  212: ["212.svg", "212.svg", "曇り後一時雨"],
  213: ["212.svg", "212.svg", "曇り後時々雨"],
  214: ["212.svg", "212.svg", "曇り後雨"],
  215: ["215.svg", "215.svg", "曇り後一時雪"],
  216: ["215.svg", "215.svg", "曇り後時々雪"],
  217: ["215.svg", "215.svg", "曇り後雪"],
  218: ["212.svg", "212.svg", "曇り後雨か雪"],
  219: ["212.svg", "212.svg", "曇り後雨か雷雨"],
  220: ["202.svg", "202.svg", "曇り朝夕一時雨"],
  221: ["202.svg", "202.svg", "曇り朝の内一時雨"],
  222: ["212.svg", "212.svg", "曇り夕方一時雨"],
  223: ["201.svg", "601.svg", "曇り日中時々晴れ"],
  224: ["212.svg", "212.svg", "曇り昼頃から雨"],
  225: ["212.svg", "212.svg", "曇り夕方から雨"],
  226: ["212.svg", "212.svg", "曇り夜は雨"],
  228: ["215.svg", "215.svg", "曇り昼頃から雪"],
  229: ["215.svg", "215.svg", "曇り夕方から雪"],
  230: ["215.svg", "215.svg", "曇り夜は雪"],
  231: ["200.svg", "200.svg", "曇り海岸霧か霧雨"],
  240: ["202.svg", "202.svg", "曇り時々雨と雷"],
  250: ["204.svg", "204.svg", "曇り時々雪と雷"],
  260: ["204.svg", "204.svg", "曇り一時雪か雨"],
  270: ["204.svg", "204.svg", "曇り時々雪か雨"],
  281: ["215.svg", "215.svg", "曇り後雪か雨"],
  300: ["300.svg", "300.svg", "雨"],
  301: ["301.svg", "701.svg", "雨時々晴れ"],
  302: ["302.svg", "302.svg", "雨時々止む"],
  303: ["303.svg", "303.svg", "雨時々雪"],
  304: ["300.svg", "300.svg", "雨か雪"],
  306: ["300.svg", "300.svg", "大雨"],
  308: ["308.svg", "308.svg", "雨で暴風を伴う"],
  309: ["303.svg", "303.svg", "雨一時雪"],
  311: ["311.svg", "711.svg", "雨後晴れ"],
  313: ["313.svg", "313.svg", "雨後曇り"],
  314: ["314.svg", "314.svg", "雨後時々雪"],
  315: ["314.svg", "314.svg", "雨後雪"],
  316: ["311.svg", "711.svg", "雨か雪後晴れ"],
  317: ["313.svg", "313.svg", "雨か雪後曇り"],
  320: ["311.svg", "711.svg", "朝の内雨後晴れ"],
  321: ["313.svg", "313.svg", "朝の内雨後曇り"],
  322: ["303.svg", "303.svg", "雨朝晩一時雪"],
  323: ["311.svg", "711.svg", "雨昼頃から晴れ"],
  324: ["311.svg", "711.svg", "雨夕方から晴れ"],
  325: ["311.svg", "711.svg", "雨夜は晴れ"],
  326: ["314.svg", "314.svg", "雨夕方から雪"],
  327: ["314.svg", "314.svg", "雨夜は雪"],
  328: ["300.svg", "300.svg", "雨一時強く降る"],
  329: ["300.svg", "300.svg", "雨一時みぞれ"],
  340: ["400.svg", "400.svg", "雪か雨"],
  350: ["300.svg", "300.svg", "雨で雷を伴う"],
  361: ["411.svg", "811.svg", "雪か雨後晴れ"],
  371: ["413.svg", "413.svg", "雪か雨後曇り"],
  400: ["400.svg", "400.svg", "雪"],
  401: ["401.svg", "801.svg", "雪時々晴れ"],
  402: ["402.svg", "402.svg", "雪時々止む"],
  403: ["403.svg", "403.svg", "雪時々雨"],
  405: ["400.svg", "400.svg", "大雪"],
  406: ["406.svg", "406.svg", "風雪強い"],
  407: ["406.svg", "406.svg", "暴風雪"],
  409: ["403.svg", "403.svg", "雪一時雨"],
  411: ["411.svg", "811.svg", "雪後晴れ"],
  413: ["413.svg", "413.svg", "雪後曇り"],
  414: ["414.svg", "414.svg", "雪後雨"],
  420: ["411.svg", "811.svg", "朝の内雪後晴れ"],
  421: ["413.svg", "413.svg", "朝の内雪後曇り"],
  422: ["414.svg", "414.svg", "雪昼頃から雨"],
  423: ["414.svg", "414.svg", "雪夕方から雨"],
  425: ["400.svg", "400.svg", "雪一時強く降る"],
  426: ["400.svg", "400.svg", "雪後みぞれ"],
  427: ["400.svg", "400.svg", "雪一時みぞれ"],
  450: ["400.svg", "400.svg", "雪で雷を伴う"],
};

// 札幌管区気象台の情報
let url = "https://www.jma.go.jp/bosai/forecast/data/forecast/016000.json";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (weather) {
    console.log(weather);

    // weatherの階層：weather[0]:石狩地方:天気 / weather[1]:札幌
    let area = weather[0].timeSeries[0].areas[0];
    console.log(area);

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

 let week = ["日", "月", "火", "水", "木", "金", "土"];
 let now = new Date();
 let year = now.getFullYear();
 let month = now.getMonth() + 1;
 let date = now.getDate();
 let day = now.getDay();
 let str = year + "-" + month + "-" + date + "(" + week[day] + ") ";
 $("#view").html(str);

 $(document).ready(function () {
   // ラジオボタンをクリックしたときの処理
   $(".toggle-radio").on("click", function (e) {
     const $this = $(this);

     // 状態を保存するためにカスタム属性 'data-was-checked' を確認
     if ($this.data("was-checked")) {
       $this.prop("checked", false); // 解除
       $this.data("was-checked", false); // 状態を更新
     } else {
       // 他のラジオボタンが選択されているときの処理
       $('input[name="condition"]').data("was-checked", false); // 全て未選択に
       $this.data("was-checked", true); // 自分を選択状態に
     }
   });
 });

 //1.Save クリックイベント
 $("#save").on("click", function () {
   const key = $("#view").html();
   const value_1 = $("#today td").text();
   const value_2 = $("#health select").val();
   const value_3 = $("#body-temp input").val();
   const value_4 =
     $("#pressure input[name='upper']").val() +
     "/" +
     $("#pressure input[name='lower']").val();
   const value_5 = $("input[name='condition']:checked").val();
   const value_6 = $("#free textarea").val();

   const data = {
     value_1: value_1 || "N/A",
     value_2: value_2 || "N/A",
     value_3: value_3 || "N/A",
     value_4: value_4 || "N/A",
     value_5: value_5 || "N/A",
     value_6: value_6 || "N/A",
   };
   localStorage.setItem(key, JSON.stringify(data));

   const html = `
        <li>
            <p>${key}</p>
            <p>${data.value_1}</p>
            <p>${data.value_2}</p>
            <p>${data.value_3}</p>
            <p>${data.value_4}</p>
            <p>${data.value_5}</p>
            <p>${data.value_6}</p>
        </li>
    `;
   $("#list").append(html);
 });
 console.log(data.value_2);
 console.log(data.value_3);

 //2.clear クリックイベント
  $(document).ready(function () {
    // Clearボタンのクリックイベント
    $("#clear").on("click", function () {
      if (confirm("すべてのデータを削除してもよろしいですか？")) {
        // ローカルストレージをクリア
        localStorage.clear();
        // 表示されているリストをクリア
        $("#list").empty();
        alert("データを削除しました。");
      }
    });
  });
  console.log($("#clear").length); // ボタンが見つかると 1 が表示される


 //3.ページ読み込み：保存データ取得表示
 for (let i = 0; i < localStorage.length; i++) {
   const key = localStorage.key(i);
   const storedData = JSON.parse(localStorage.getItem(key));
   const html = `
        <li>
            <p>${key}</p>
            <p>${storedData.value_1 || "N/A"}</p>
            <p>${storedData.value_2 || "N/A"}</p>
            <p>${storedData.value_3 || "N/A"}</p>
            <p>${storedData.value_4 || "N/A"}</p>
            <p>${storedData.value_5 || "N/A"}</p>
            <p>${storedData.value_6 || "N/A"}</p>
        </li>
    `;
   $("#list").append(html);
 }

