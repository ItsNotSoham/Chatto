function login(){
    name1=document.getElementById("user_name").value 
    localStorage.setItem("user_name",name1)
    window.location="kwitter_room.html"
}