//TIME FUNCTION - TOP BAR
function updateTime() {
        var currentTime = new Date().toLocaleString();
        var timeText = document.querySelector("#timeElement");
        timeText.innerHTML = currentTime
    }
    setInterval(updateTime, 1000);


//MOVEABLE WINDOWSSS
// Make the DIV element draggable:
dragElement(document.getElementById("start"));
dragElement(document.getElementById("issGuide"));
dragElement(document.getElementById("starlinkGuide"));
dragElement(document.getElementById("JamesWebbSpaceTelescopeApp"));
dragElement(document.getElementById("NASCApp"));
dragElement(document.getElementById("HubbleSpaceTelescopeApp"));
dragElement(document.getElementById("ArtemisApp"));
dragElement(document.getElementById("PlaylistApp"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


//OPEN AND CLOSE WINDOW

var startScreen = document.querySelector("#start")

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "flex"
}

//BUTTTONS

var startScreenClose = document.querySelector("#startclose")

var startScreenOpen = document.querySelector("#startopen")

//EVENT LISTENERS bc if you don't add one then it wont listen lol

startScreenClose.addEventListener("click", function() {
  closeWindow(startScreen);
});
startScreenOpen.addEventListener("click", function() {
  openWindow(startScreen);
});



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


//CLOSE JAMESWEBBAPP

var JamesWebbSpaceTelescopeAppScreen = document.querySelector("#JamesWebbSpaceTelescopeApp")

var JamesWebbSpaceTelescopeAppScreenClose = document.querySelector("#JamesWebbSpaceTelescopeAppclose")

JamesWebbSpaceTelescopeAppScreenClose.addEventListener("click", () => closeWindow(JamesWebbSpaceTelescopeAppScreen));

//CLOSE NASCAPP

var NASCAppScreen = document.querySelector("#NASCApp")

var NASCAppScreenClose = document.querySelector("#NASCAppclose")

NASCAppScreenClose.addEventListener("click", () => closeWindow(NASCAppScreen));

//CLOSE HUBBLEAPP

var HubbleSpaceTelescopeAppScreen = document.querySelector("#HubbleSpaceTelescopeApp")

var HubbleSpaceTelescopeAppScreenClose = document.querySelector("#HubbleSpaceTelescopeAppclose")

HubbleSpaceTelescopeAppScreenClose.addEventListener("click", () => closeWindow(HubbleSpaceTelescopeAppScreen));

//CLOSE ARTEMISAPP

var ArtemisAppScreen = document.querySelector("#ArtemisApp")

var ArtemisAppScreenClose = document.querySelector("#ArtemisAppclose")

ArtemisAppScreenClose.addEventListener("click", () => closeWindow(ArtemisAppScreen));

//CLOSE PLAYLISTAPP 

var PlaylistAppScreen = document.querySelector("#PlaylistApp")

var PlaylistAppScreenClose = document.querySelector("#PlaylistAppclose")

PlaylistAppScreenClose.addEventListener("click", () => closeWindow(PlaylistAppScreen));



//RISING ON TOP
var biggestIndex = 1;

function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () =>
    handleWindowTap(element)
  )
}
addWindowTapHandling(startScreen)
addWindowTapHandling(issGuideScreen)
addWindowTapHandling(starlinkGuideScreen)
addWindowTapHandling(JamesWebbSpaceTelescopeAppScreen)
addWindowTapHandling(NASCAppScreen)
addWindowTapHandling(HubbleSpaceTelescopeAppScreen)
addWindowTapHandling(ArtemisAppScreen)
addWindowTapHandling(PlaylistAppScreen)

function handleWindowTap(element) {
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
}

function openWindow(element) {
  element.style.display = "flex";
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
}

//TOP (musi miec position relative bo inaczej nie zadziala)
var topBar = document.querySelector("#top")

function openWindow(element) {
  element.style.display = "flex";
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}

function handleWindowTap(element) {
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
  deselectIcon(selectedIcon)
}




//APPS!

var selectedIcon = undefined

function selectIcon(element) {
  element.classList.add("selected");
  selectedIcon = element
}

function deselectIcon(element) {
  element.classList.remove("selected");
  selectedIcon = undefined
}

function handleIconTap(element, window) {
  if (element.classList.contains("selected")) {
    deselectIcon(element)
    openWindow(window)
  } else {
    selectIcon(element)
  }
}

//INITIALIZE ICON
function initializeIcon(name) {
var icon = document.querySelector("#" + name + "Icon")
var screen = document.querySelector("#" + name)
icon.addEventListener("click", () => handleIconTap(icon, screen));
}
initializeIcon("JamesWebbSpaceTelescopeApp")
initializeIcon("NASCApp")
initializeIcon("HubbleSpaceTelescopeApp")
initializeIcon("ArtemisApp")
initializeIcon("PlaylistApp")

//INITIALIZE WINDOW
function initializeWindow(elementName) {
var screen = document.querySelector("#" + elementName)
addWindowTapHandling(screen)
makeClosable(elementName)
dragElement(screen)
}
initializeWindow("start")
initializeWindow("JamesWebbSpaceTelescopeApp")
initializeWindow("NASCApp")
initializeWindow("HubbleSpaceTelescopeApp")
initializeWindow("ArtemisApp")
initializeWindow("PlaylistApp")


