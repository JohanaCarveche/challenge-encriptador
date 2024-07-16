var textoEntrada="";
var textoSalida="";


//función para encriptar texto de entrada
function encriptar() {
    textoEntrada=document.getElementById('texto-entrada').value;
    textoSalida="";
    var validar = /^[a-zñ\s]+$/.test(textoEntrada);
            
        for (var i=0; i < textoEntrada.length; i++){
            if(validar===false){
            textoSalida='El texto de entrada no cumple los requisitos.\n\nIngresa sólo minúsculas sin puntuación';
            }else{
                if (textoEntrada[i]==="a"){
                textoSalida+="ai";
                }else{
                    if(textoEntrada[i]==="e"){
                        textoSalida+="enter";
                    }else{
                        if(textoEntrada[i]==="i"){
                            textoSalida+="imes";
                        }else{
                            if(textoEntrada[i]==="o"){
                                textoSalida+="ober";
                            }else{
                                if(textoEntrada[i]==="u"){
                                    textoSalida+="ufat";
                                }else{
                                    textoSalida+=textoEntrada[i];
                                    
                            };
                            
                        };
                    };
                };
            };
           
        };  
    };
        document.getElementById('texto-salida').value=textoSalida;
        return; 
};


//función para desencriptar 
function desencriptar() {
    textoEntrada=document.getElementById('texto-entrada').value;
    textoSalida="";
    var validar = /^[a-zñ\s]+$/.test(textoEntrada);
    
   if(validar===false&&textoEntrada!=""){
        textoSalida='El texto de entrada no cumple los requisitos.\n\nIngresa sólo minúsculas sin puntuación';
   }else{
    textoSalida=textoEntrada;
    if (textoSalida.includes("ai")){
        textoSalida=textoSalida.replace(new RegExp("ai", `g`),"a")};

    if(textoSalida.includes("enter")){
        textoSalida=textoSalida.replace(new RegExp("enter", `g`),"e")};

    if(textoSalida.includes("imes")){
        textoSalida=textoSalida.replace(new RegExp("imes", `g`),"i")};

    if(textoSalida.includes("ober")){
        textoSalida=textoSalida.replace(new RegExp("ober", `g`),"o")};

    if(textoSalida.includes("ufat")){
        textoSalida=textoSalida.replace(new RegExp("ufat", `g`),"u")};
    };
    document.getElementById('texto-salida').value=textoSalida;
    return; 
};
  


function copiar(){
    var copia = document.getElementById("texto-salida");
    copia.select();
    document.execCommand("copy");
    return;
};