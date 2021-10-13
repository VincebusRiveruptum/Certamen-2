"use strict";

/* Validacion de Formularios */
(function () {  
    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

/* Atributos del Alumno */
var alumno = {
    "nombre": "María",
    "apellido": "Perez",
    "rut": "10121159-K",
    "telefono": "965580520",
    "email": "mariaperez666@gmail.com",
    "acudientes": "Ninguno",
    "fechaNacimiento": "13-5-1998",
    "region": "2",
    "direccion": "1",
    "comun": "XXXXXXX,XXXX",
    "curso": "4to Primaria",
    /* Arreglo estatico de 5 asignaturas */
    "asignaturas": [
        {
            /* Ramo 1 : Matematicas */
            "nombre": 1,
            "objetivos": 1,
            "nota": 6.0
        }, {
            /* Ramo 2 : Fisica */
            "nombre": 2,
            "objetivos": 2,
            "nota": 7.0
        }, {
            /* Ramo 3: Español */
            "nombre": 3,
            "objetivos": 3,
            "nota": 7.0
        }, {
            "nombre": 4,
            "objetivos": 4,
            "nota": 5
        }, {
            "nombre": 0,
            "objetivos": 0,
            "nota": 0
        }
    ]
};
var comunas = {
    "Santiago": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independecia", "La Cisterna"],
    "Valparaiso": ["Quilpue", "Villa Alemana", "Olmué", "Limache"]
};
function retornarasignatura(asignatura) {
    if (asignatura == 0) {
        return "";
    }
    if (asignatura == 1) {
        return "Matemáticas";
    }
    if (asignatura == 2) {
        return "Física";
    }
    if (asignatura == 2) {
        return "Españól";
    }
    if (asignatura == 3) {
        return "Biología";
    }
    if (asignatura == 4) {
        return "Computación";
    }
}
function retornarobjetivo(asignatura) {
    if (asignatura == 0) {
        return "";
    }
    if (asignatura == 1) {
        return "Comprensión";
    }
    if (asignatura == 2) {
        return "Lógica";
    }
    if (asignatura == 2) {
        return "Gramática";
    }
    if (asignatura == 3) {
        return "Ciencias Naturales";
    }
    if (asignatura == 4) {
        return "Programación";
    }
}
function retornarregion(numregion) {
    if (numregion > 0 && numregion < 3) {
        if (numregion == 1) {
            return "Santiago";
        }
        if (numregion == 2) {
            return "Valparaiso";
        }
    }
}
function retornarcomuna(alumno) {
    if (alumno.region > 0 && alumno.region < 3) {
        if (alumno.region == 1) {
            return comunas.Santiago[alumno.direccion];
        }
        if (alumno.region == 2) {
            return comunas.Valparaiso[alumno.direccion];
        }
    }
}
var columnaDatosEstudiante = document.getElementById("columnadatos");
var columnaNombreEstudiante = document.getElementById("nombreestudiante");
var division1 = document.createElement("div");
var etiquetaNombre = document.createElement("h");
var etiquetaNombreCompleto = document.createElement("h2");
var division2 = document.createElement("div");
var etiquetaRUT = document.createElement("h");
var etiquetaMostrarRUT = document.createElement("h");
var division3 = document.createElement("div");
var etiquetaTelefono = document.createElement("h");
var etiquetaMostrarTelefono = document.createElement("h");
var division4 = document.createElement("div");
var etiquetaCorreo = document.createElement("h");
var etiquetaMostrarCorreo = document.createElement("h");
var division5 = document.createElement("div");
var etiquetaAcudientes = document.createElement("h");
var etiquetaMostrarAcudientes = document.createElement("h");
var division6 = document.createElement("div");
var etiquetaFN = document.createElement("h");
var etiquetaMostrarFN = document.createElement("h");
var division7 = document.createElement("div");
var etiquetaRegion = document.createElement("h");
var etiquetaMostrarRegion = document.createElement("h");
var division8 = document.createElement("div");
var etiquetaComuna = document.createElement("h");
var etiquetaMostrarComuna = document.createElement("h");
var editr = document.getElementById("btneditar");
editr.onclick = editar;
var btnactualizar = document.getElementById("btnactualizar");
btnactualizar.onclick = actualizar;
/* Asignaturas */
var cantelementos = alumno.asignaturas.length;
var listaAsignaturas = document.getElementById("listaasignaturas");
var elementolista;
var divlista;
var divlista2;
var nombreasignatura;
var brevedescripcion;
var notaspan;
var botoneliminar;
var labeltcurso = document.getElementById("tcurso");
var curso = document.createElement("h3");
curso.innerHTML = alumno.curso;
labeltcurso.appendChild(curso);
/* Numero de asignaturas del alumno */
var numasignaturasinscritas = 0;
window.addEventListener("load", actualizar);
window.addEventListener("load", asignaturas);
/* Botón Agregar Asignatura */
var botonasignatura = document.getElementById("botonagregarramo");
botonasignatura.addEventListener('click', function () {
    var menuagregar = document.getElementById("menuagregarramo");
    if (menuagregar.style = "visibility:hidden") {
        menuagregar.style = "visibility:visible";
    }
    if (menuagregar.style = "visibility:visible") {
        menuagregar.style = "visibility:hidden";
    }
});
/* Elementos del Menu agregar asignatura */
var listaasignatura = document.getElementById("valoresasignaturas");
var listaobj = document.getElementById("valoresobjetivo");
var elemento;
var cantAsignaturas = 4;
var cantObj = 4;
var j;
for (j = 1; j <= cantAsignaturas; j++) {
    elemento = document.createElement("option");
    elemento.innerHTML = retornarasignatura(j);
    listaasignatura.appendChild(elemento);
}
;
for (j = 1; j <= cantObj; j++) {
    elemento = document.createElement("option");
    elemento.innerHTML = retornarobjetivo(j);
    listaobj.appendChild(elemento);
}
;
/* Boton agregar asignatura del menu */
var btnagregarramo = document.getElementById("btnadd");
btnagregarramo.addEventListener('click', function () {
});
function asignaturas() {
    var i;
    for (i = 0; i < cantelementos; i++) {
        elementolista = document.createElement("li");
        elementolista.className = "list-group-item d-flex justify-content-between lh-sm";
        listaAsignaturas.appendChild(elementolista);
        divlista = document.createElement("div");
        elementolista.appendChild(divlista);
        nombreasignatura = document.createElement("h6");
        nombreasignatura.classList.add("my-0");
        nombreasignatura.innerHTML = retornarasignatura(alumno.asignaturas[i].nombre);
        divlista.appendChild(nombreasignatura);
        brevedescripcion = document.createElement("small");
        brevedescripcion.classList.add("text-muted");
        brevedescripcion.innerHTML = retornarobjetivo(alumno.asignaturas[i].objetivos);
        divlista.appendChild(brevedescripcion);
        if (alumno.asignaturas[i].nombre != 0) {
            numasignaturasinscritas++;
            divlista = document.createElement("div");
            divlista.id = "divnota";
            elementolista.appendChild(divlista);
            notaspan = document.createElement("span");
            notaspan.classList.add("text-muted");
            notaspan.innerHTML = (alumno.asignaturas[i].nota);
            divlista.appendChild(notaspan);
            botoneliminar = document.createElement("button");
            botoneliminar.classList.add("btn-primary");
            botoneliminar.id = "idbotoneliminar" + i;
            botoneliminar.title = i;
            botoneliminar.innerHTML = "-";
            elementolista.appendChild(botoneliminar);
            botoneliminar.addEventListener("click", function () {
                var eleml = this.parentNode;
                var lista = eleml.parentNode;
                lista.removeChild(eleml);
                alumno.asignaturas[this.title].nombre = 0;
                alumno.asignaturas[this.title].nota = 0;
                alumno.asignaturas[this.title].objetivos = 0;
            });
        }
    }
}
function actualizar() {
    /* Dibujar elementos en la columna */
    /* Nombre Completo */
    columnaNombreEstudiante.appendChild(division1);
    columnaNombreEstudiante.appendChild(etiquetaNombre).innerHTML = "Nombre";
    columnaNombreEstudiante.appendChild(etiquetaNombreCompleto).innerHTML = alumno.nombre + " " + alumno.apellido;
    /* RUT */
    columnaDatosEstudiante.appendChild(division2);
    columnaDatosEstudiante.appendChild(etiquetaRUT).innerHTML = "RUT: ";
    columnaDatosEstudiante.appendChild(etiquetaMostrarRUT).innerHTML = alumno.rut;
    /* Telefono */
    columnaDatosEstudiante.appendChild(division3);
    columnaDatosEstudiante.appendChild(etiquetaTelefono).innerHTML = "Telefono: ";
    columnaDatosEstudiante.appendChild(etiquetaMostrarTelefono).innerHTML = alumno.telefono;
    /* Correo Electronico */
    columnaDatosEstudiante.appendChild(division4);
    columnaDatosEstudiante.appendChild(etiquetaCorreo).innerHTML = "E-Mail: ";
    columnaDatosEstudiante.appendChild(etiquetaMostrarCorreo).innerHTML = alumno.email;
    /* Acudientes */
    columnaDatosEstudiante.appendChild(division5);
    columnaDatosEstudiante.appendChild(etiquetaAcudientes).innerHTML = "Acudientes: ";
    columnaDatosEstudiante.appendChild(etiquetaMostrarAcudientes).innerHTML = alumno.acudientes;
    /* Fecha de nacimiento */
    columnaDatosEstudiante.appendChild(division6);
    columnaDatosEstudiante.appendChild(etiquetaFN).innerHTML = "Fecha Naciomiento: ";
    columnaDatosEstudiante.appendChild(etiquetaMostrarFN).innerHTML = alumno.fechaNacimiento;
    /* Region */
    columnaDatosEstudiante.appendChild(division7);
    columnaDatosEstudiante.appendChild(etiquetaRegion).innerHTML = "Región: ";
    columnaDatosEstudiante.appendChild(etiquetaMostrarRegion).innerHTML = retornarregion(alumno.region);
    /* Comuna */
    columnaDatosEstudiante.appendChild(division8);
    columnaDatosEstudiante.appendChild(etiquetaComuna).innerHTML = "Comuna: ";
    columnaDatosEstudiante.appendChild(etiquetaMostrarComuna).innerHTML = retornarcomuna(alumno);
}
function editar() {
    /* Desaparecer lo que estaba en pantalla */
    columnaDatosEstudiante.removeChild(etiquetaMostrarRUT);
    columnaDatosEstudiante.removeChild(etiquetaRUT);
    columnaDatosEstudiante.removeChild(etiquetaTelefono);
    columnaDatosEstudiante.removeChild(etiquetaMostrarTelefono);
    columnaDatosEstudiante.removeChild(etiquetaCorreo);
    columnaDatosEstudiante.removeChild(etiquetaMostrarCorreo);
    columnaDatosEstudiante.removeChild(etiquetaAcudientes);
    columnaDatosEstudiante.removeChild(etiquetaMostrarAcudientes);
    columnaDatosEstudiante.removeChild(etiquetaFN);
    columnaDatosEstudiante.removeChild(etiquetaMostrarFN);
    columnaDatosEstudiante.removeChild(etiquetaRegion);
    columnaDatosEstudiante.removeChild(etiquetaMostrarRegion);
    columnaDatosEstudiante.removeChild(etiquetaComuna);
    columnaDatosEstudiante.removeChild(etiquetaMostrarComuna);
    /* Muestra los textbox para modificar los datos */
    /*
        let entradanombre = document.createElement("input");
        columnaDatosEstudiante.appendChild(entradanombre);
        alumno.nombre = entradanombre.value;
        
        let apellido = document.createElement("input");
        columnaDatosEstudiante.appendChild(apellido);
        alumno.apellido = entradanombre.value;
    
        let telefono = document.createElement("input");
        columnaDatosEstudiante.appendChild(telefono);
        alumno.telefono = entradanombre.value;
    
        let correo = document.createElement("input");
        columnaDatosEstudiante.appendChild(correo);
        alumno.email = entradanombre.value;
    
        let acud = document.createElement("input");
        columnaDatosEstudiante.appendChild(acud);
        alumno.acudientes = entradanombre.value;
    
        let fn = document.createElement("input");
        columnaDatosEstudiante.appendChild(fn);
        alumno.acudientes = entradanombre.value;
        */
    var etiquetas = ["Nombre: ", "Apellido: ", "Teléfono: ", "E-Mail :", "Acud: ", "Fecha de Nacimiento: "];
    var i;
    var entrada;
    var etiqueta;
    var div;
    var div2;
    for (i = 0; i < 6; i++) {
        div = document.createElement("div");
        columnaDatosEstudiante.appendChild(div);
        etiqueta = document.createElement("h");
        etiqueta.innerHTML = etiquetas[i];
        div.appendChild(etiqueta);
        div2 = document.createElement("div");
        columnaDatosEstudiante.appendChild(div2);
        entrada = document.createElement("input");
        entrada.classList.add("form-control");
        entrada.id = "identr" + i;
        div2.appendChild(entrada);
        entrada = document.createElement("Input");
    }
}
