function pessoa(tipo){
    if(tipo=="fisica"){
        document.getElementById("fisica").style.display = "inline";
        document.getElementById("juridica").style.display = "none";
    }else if(tipo=="juridica"){
        document.getElementById("fisica").style.display = "none";
        document.getElementById("juridica").style.display = "inline";
    }
}














