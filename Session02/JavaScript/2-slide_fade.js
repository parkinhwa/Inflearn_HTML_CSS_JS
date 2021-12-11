function slideUp(el) {
  var elem = document.getElementById(el);
  elem.style.transition = "all 2s ease-in-out";
  elem.style.height = "0px";
}
function slideDown(el) {
  var elem = document.getElementById(el);
  elem.style.transition = "all 2s ease-in-out";
  elem.style.height = "400px";
}
var opacity = 0;
var intervalID = 0;

//순수 자바스크립트 클릭 이벤트 Fsade out 실행
document.getElementById("btnfadeOut").addEventListener("click", function () {
  intervalID = setInterval(hide, 100);
});

//순수 자바스크립트 클릭 이벤트 Fade in
document.getElementById("btnfadeIn").addEventListener("click", function () {
  intervalID = setInterval(show, 100);
});

function hide() {
  var div = document.getElementById("box");
  opacity = Number(window.getComputedStyle(div).getPropertyValue("opacity"));

  if (opacity > 0) {
    //Fade out 핵심 부분
    opacity = opacity - 0.1;
    div.style.opacity = opacity;
    //img.style.opacity=opacity;
  } else {
    clearInterval(intervalID);
  }
}

function show() {
  var div = document.getElementById("box");
  opacity = Number(window.getComputedStyle(div).getPropertyValue("opacity"));

  if (opacity < 1) {
    //Fade in 핵심 부분
    opacity = opacity + 0.1;
    div.style.opacity = opacity;
    //img.style.opacity=opacity;
  } else {
    clearInterval(intervalID);
  }
}
// function fadeIn(target) {
//   var tar = document.getElementById(target);
//   level = level + 0.1;
//   tar.style.opacity = level;
//   settime_func = setTimeout(fadeIn, 100);
//   if (level > 1) {
//     clearTimeout(settime_func);
//     settime1_func = setTimeout(fadeOut, 5000);
//     level = 1;
//   }
// }
// function fadeOut(target) {
//   var tar = document.getElementById(target);
//   level = level - 0.1;
//   tar.style.opacity = level;
//   settime_func = setTimeout(fadeOut, 100);
//   if (level < 0) {
//     clearTimeout(settime_func);
//     level = 0;
//   }
// }
// function changeOpacity(target, level) {
//   var obj = target;
//   obj.style.opacity = level;
//   obj.style.MozOpacity = level;
//   obj.style.KhtmlOpacity = level;
//   obj.style.MsFilter =
//     "'progid: DXImageTransform.Microsoft.Alpha(Opacity=" + level * 100 + ")'";
//   obj.style.filter = "alpha(opacity=" + level * 100 + ");";
// }
