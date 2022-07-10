function darkModeHandler() {
  if (document.querySelector(".dark_mode").innerHTML == "주간모드") {
    // 다크 => 주간
    document.querySelector(".main").style.color = "black";
    document.querySelector(".nav").style.backgroundColor = "rgba(100, 100, 100, 0.7)";
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black";
    document.querySelector(".dark_mode").style.backgroundColor =
      "rgba(100, 100, 100, 0.7)";
    document.querySelector(".dark_mode").style.color = "white";
    document.querySelector(".info_1").style.color = "black";
    document.querySelector(".right_info").style.borderColor = "black";
    document.querySelector(".a1").style.color = "black";
    document.querySelector(".a2").style.color = "black";
    document.querySelector(".dark_mode").innerHTML = "다크모드";
  } else if (document.querySelector(".dark_mode").innerHTML == "다크모드") {
    // 주간 => 다크
    document.querySelector(".main").style.color = "white";
    document.querySelector(".nav").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    document.querySelector("body").style.backgroundColor = "rgb(40, 40, 40)";
    document.querySelector("body").style.color = "white";
    document.querySelector(".dark_mode").style.backgroundColor =
      "rgba(255, 255, 255, 0.6)";
    document.querySelector(".dark_mode").style.color = "black";
    document.querySelector(".info_1").style.color = "white";
    document.querySelector(".right_info").style.borderColor = "white";
    document.querySelector(".a1").style.color = "white";
    document.querySelector(".a2").style.color = "white";
    document.querySelector(".dark_mode").innerHTML = "주간모드";
  }
}
