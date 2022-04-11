const nodoFormlario = document.querySelector("#myform");

nodoFormlario.addEventListener("submit",(event)=>{

    const nombre = document.querySelector("#nombre")
    const mail = document.querySelector("#mail");
    const telefono = document.querySelector("#telefono");
    const edad = document.querySelector("#edad");
    const consulta = document.querySelector("#consulta");

    if(mail.value.trim()!=="" && telefono.value.trim()!=="" && edad.value.trim()!=="" && consulta.value.trim()!=="" && nombre.value.trim()!==""){

        alert(`Gracias ${nombre.value}, su consulta ha sido enviada!`);
    }
})