function pessoa(tipo){
    if(tipo=="fisica"){
        document.getElementById("fisica").style.display = "inline";
        document.getElementById("juridica").style.display = "none";
    }else if(tipo=="juridica"){
        document.getElementById("fisica").style.display = "none";
        document.getElementById("juridica").style.display = "inline";
    }
}


/*function mascara_cpf() {
    var cpf = document.getElementById('cpfpj')
    if(cpf.value.length == 3 || cpf.value.length == 7){
        cpf.value += "."
    }else if(cpf.value.length == 11){
        cpf.value +="-"
    }
}
function mascara_cnpj() {
    var cnpj = document.getElementById('cnpj')
    if(cnpj.value.length == 2 || cnpj.value.length == 6){
        cnpj.value += "."
    }else if(cnpj.value.length == 10){
        cnpj.value +="/"
    }else if(cnpj.value.length == 15){
        cnpj.value +="-"
}
}

function mascara_cpf2() {
    var cpf = document.getElementById('cpf')
    if(cpf.value.length == 3 || cpf.value.length == 7){
        cpf.value += "."
    }else if(cpf.value.length == 11){
        cpf.value +="-"
    }
}



function mascara_telefone() {
    var telefone = document.getElementById('telefone')
    if(telefone.value.length == 2 || telefone.value.length == 9){
        telefone.value += " "
    }
}
*/


function validarCPF(cpf) {	
	cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
		
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		
		
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;		
		
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		return false;		
	return true;   
}

/*mascara usando jquery

$(document).ready(function () {
	$('#telefone').mask('(00)0000-0000', {placeholder: '(__)____-____'});
})
*/