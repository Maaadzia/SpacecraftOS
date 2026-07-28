//TIME FUNCTION - TOP BAR
function updateTime() {
        var currentTime = new Date().toLocaleString();
        var timeText = document.querySelector("#timeElement");
        timeText.innerHTML = currentTime
    }
    setInterval(updateTime, 1000);


dragElement(document.getElementById("issGuide"));
dragElement(document.getElementById("starlinkGuide"));
//OPEN AND CLOSE WINDOW ISS GUIDE

var issGuideScreen = document.querySelector("#issGuide")

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "flex"
}


var issGuideScreenClose = document.querySelector("#issGuideclose")

var issGuideScreenOpen = document.querySelector("#issGuideopen")


issGuideScreenClose.addEventListener("click", function() {
  closeWindow(issGuideScreen);
});
issGuideScreenOpen.addEventListener("click", function() {
  openWindow(issGuideScreen);
});


//OPEN AND CLOSE WINDOW STARLINK GUIDE

var starlinkGuideScreen = document.querySelector("#starlinkGuide")

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "flex"
}


var starlinkGuideScreenClose = document.querySelector("#starlinkGuideclose")

var starlinkGuideScreenOpen = document.querySelector("#starlinkGuideopen")


starlinkGuideScreenClose.addEventListener("click", function() {
  closeWindow(starlinkGuideScreen);
});
starlinkGuideScreenOpen.addEventListener("click", function() {
  openWindow(starlinkGuideScreen);
});


