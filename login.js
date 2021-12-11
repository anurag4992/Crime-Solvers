function showFunction(){
    var x = document.getElementById("passInput");
    
    if(x.type == "password"){
        x.type = "text";
       
        x.style.fontSize = "2vw";
    }
    else{
        x.type = "password";
    }
}

