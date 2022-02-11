function sub(){
    user_email = document.getElementById("email").value;
    user_password = document.getElementById("password").value;

    if (user_email == "") {
        window.alert("Email id required"); 
    } 
    else if(user_password == "") 
    {
        window.alert("Password required");
    }
    else
    {
        window.location = "kwitter_room.html";
    }
}