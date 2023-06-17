var firebaseConfig = {
  apiKey: "AIzaSyCJeNz8Oo6YEQpYvg0K-mK861U8Ho2Qgzs",
  authDomain: "kwitter-b88ee.firebaseapp.com",
  databaseURL: "https://kwitter-b88ee-default-rtdb.firebaseio.com",
  projectId: "kwitter-b88ee",
  storageBucket: "kwitter-b88ee.appspot.com",
  messagingSenderId: "825876319141",
  appId: "1:825876319141:web:078bae183b781dc1c6b64c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}

