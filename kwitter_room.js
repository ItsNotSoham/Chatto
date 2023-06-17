
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDBClMKJwc8OeMqDrdm_QYYomHCr1jhiq0",
      authDomain: "chatto-a884a.firebaseapp.com",
      databaseURL:"https://chatto-a884a-default-rtdb.firebaseio.com/",
      projectId: "chatto-a884a",
      storageBucket: "chatto-a884a.appspot.com",
      messagingSenderId: "226926875330",
      appId: "1:226926875330:web:af2515a05644b78607a15b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="Welcome My Dear "+user_name+"❤️"

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}
 function addroom(){
      room_name=document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({purpose:"toAddRoomName"})
      localStorage.setItem("room_name",room_name)
      window.location="chat.html"
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names)
      x="<div class = 'room_name' id="+Room_names+" onclick='lejao(this.id)' >#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=x

      //End code
      });});}
getData();

function lejao(name){
      console.log(name)
      localStorage.setItem("room_name",name)
      window.location="chat.html"
}
