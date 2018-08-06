//Input Action
document.getElementById("output").style.visibility = "hidden";

document.getElementById("lbsInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let lbs = e.target.value;
  document.getElementById("GramsOutput").innerHTML = lbs / 0.0022046;
  document.getElementById("KgOutput").innerHTML = lbs / 2.2046;
  document.getElementById("OzOutput").innerHTML = lbs * 16;
});

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBfOkcJ_xBQDOmHg0rPj0bTXO19S9LuCnk",
    authDomain: "weight-converter-a5d61.firebaseapp.com",
    databaseURL: "https://weight-converter-a5d61.firebaseio.com",
    projectId: "weight-converter-a5d61",
    storageBucket: "",
    messagingSenderId: "989160804104"
  };
  firebase.initializeApp(config);
