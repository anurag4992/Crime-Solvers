function rotate1() {
    if(document.getElementById("dis").style.display=="none"){
    document.getElementById("dis").style.display="block";
    document.getElementById("symbol").style.transform="rotate(45deg)";
    }
    else{
    document.getElementById("dis").style.display="none";
    document.getElementById("symbol").style.transform="rotate(90deg)"
    }
}