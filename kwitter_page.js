//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAm99wfYGIEO8AtYCb8HxBVexJS3QNXUE4",
      authDomain: "kwitter-2fac2.firebaseapp.com",
      databaseURL: "https://kwitter-2fac2-default-rtdb.firebaseio.com",
      projectId: "kwitter-2fac2",
      storageBucket: "kwitter-2fac2.appspot.com",
      messagingSenderId: "361473083025",
      appId: "1:361473083025:web:f06457ea55da1bee592130"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    room_name = localStorage.getItem("roomname");
user_name = localStorage.getItem("username");

console.log("roomname"+room_name);
console.log("username"+user_name);

function logout(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_login.html";
}

function send() {
msg = document.getElementById("msg").value;
console.log("Message"+msg);
firebase.datatbase().ref(room_name).push{(
username: user_name, 
message: msg
like: 0
});
document.getElementById("msg").value = "";
}

  

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
