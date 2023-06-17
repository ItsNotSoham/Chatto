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
 room_name=localStorage.getItem("room_name")
function send(){
  msg=document.getElementById("msg").value
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  })
document.getElementById("msg").value=""

}

function getData() {
  firebase.database().ref("/" + room_name).on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;
        //Start code
         console.log(firebase_message_id)
         console.log(message_data)
         name1=message_data['name']
         message=message_data['message']
         like=message_data['like']
         ticki="<h4> "+name1+" <img class='user_tick'src='tick.png'></h4>"
         m="<h4 class='message_h4'>"+message+"</h4>"
         lb="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updatelike(this.id)'>"
         ti="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>"
         y=ticki+m+lb+ti
         document.getElementById("output").innerHTML+=y



        //End code
      }
    });
  });
}
getData();

function updatelike(message_id){
  console.log("Message Id"+message_id)
  button_id=message_id
  likes=document.getElementById(button_id).value
  update_likes=Number(likes)+1
  console.log(update_likes)
  if(update_likes>=2){
    update_likes=1
  }
  firebase.database().ref(room_name).child(message_id).update({like:update_likes})
  }

function logout(){
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
window.location="index.html"}
 





