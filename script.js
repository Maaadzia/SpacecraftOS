//TIME FUNCTION - TOP BAR
function updateTime() {
        var currentTime = new Date().toLocaleString();
        var timeText = document.querySelector("#timeElement");
        timeText.innerHTML = currentTime
    }
    setInterval(updateTime, 1000);


dragElement(document.getElementById("issGuide"));
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
