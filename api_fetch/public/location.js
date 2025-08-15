

console.log("Script Start");

 function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

 function success(position) {
  console.log(position);
}

getLocation();