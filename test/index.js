function darkModeHandler() {
  const anchorTag = document.querySelectorAll("a");
  if (document.querySelector(".dark_mode").innerHTML == "주간모드") {
    // 다크 => 주간
    for (var i = 0; i < anchorTag.length; i++) {
      // my-tag 태그들의 글자 색을 하얀색으로 정한다.
      anchorTag[i].style.color = "black";
    }
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black";
    document.querySelector(".dark_mode").style.backgroundColor =
      "rgba(100, 100, 100, 0.6)";
    document.querySelector(".dark_mode").innerHTML = "다크모드";
    document.querySelector(".right_profile").style.borderLeft = "3px solid black";
  } else if (document.querySelector(".dark_mode").innerHTML == "다크모드") {
    // 주간 => 다크
    for (var i = 0; i < anchorTag.length; i++) {
      // my-tag 태그들의 글자 색을 하얀색으로 정한다.
      anchorTag[i].style.color = "white";
    }
    document.querySelector("body").style.backgroundColor = "rgb(40, 40, 40)";
    document.querySelector("body").style.color = "white";
    document.querySelector(".dark_mode").style.backgroundColor =
      "rgba(255, 255, 255, 0.6)";
    document.querySelector(".dark_mode").innerHTML = "주간모드";
    document.querySelector(".right_profile").style.borderLeft = "3px solid white";
  }
}
