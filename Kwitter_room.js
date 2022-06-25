function addRoom()
{
    room_name= document.getElementById("room_name").ariaValueMax;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    })

    localStorage.setItem("room_name, room_name");

    window.location = "kwitter_login.html";

}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id' >#"+Room_names +"</div<hr>";
document.getElementById("output").innerHTML += row;
});});}
getData(); 

function logout(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_login.html";
}
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
