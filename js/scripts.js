function pessoa(tipo){
    if(tipo=="fisica"){
        document.getElementById("fisica").style.display = "inline";
        document.getElementById("juridica").style.display = "none";
    }else if(tipo=="juridica"){
        document.getElementById("fisica").style.display = "none";
        document.getElementById("juridica").style.display = "inline";
    }
}


function mascara(mascara, input) {
    const vetmasc = mascara.split("")
    const num = input.value.replace(/\D/g, "")
    const cursor = input.selectionStart
    
    for(let i=0; i<num.lengt; i++) {
        vetmasc.splice(vetmasc.indexOf("#"), 1, num[i])
    }

    input.value = vetmasc.join("")

    if (tecla != 37 && (cursor == 3 || cursor == 7 || cursor == 11)) {
        input.selectionRanger(cursor ++, cursor++)
    }else{
        input.setSelectioRange(cursor, cursor)
    }
    

}











