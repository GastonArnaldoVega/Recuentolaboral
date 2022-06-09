const formulario = document.getElementById("formularios");
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    let formularioformdata = new FormData(formulario);
    insertRowparatablas(formularioformdata)
})
function insertRowparatablas(formularioformdata){
    let refdeformularios = document.getElementById("tabladeresultados");
    let newtablaformularios = refdeformularios.insertRow(-1);
    let newcelltabla = newtablaformularios.insertCell(0);
    newcelltabla.textContent = formularioformdata.get("Type")

    newcell2tabla = newtablaformularios.insertCell(1);
    newcell2tabla.textContent = formularioformdata.get("numerticket")
    
//    newcell3tabla = newtablaformularios.insertCell(2);
//    newcell3tabla.textContent = formularioformdata.get("time")

    newcell4tabla = newtablaformularios.insertCell(2);
    newcell4tabla.textContent = formularioformdata.get("Email")
}
///let d = new Date();
    document.getElementById("time").innerHTML = d.getHours()+":"+d.getMinutes()
    d();
 /////

    