function cargar() {
    let peticion = indexedDB.open('baseDatos', '1');

    peticion.addEventListener('success', function (e) {
        bd = e.target.result;
    })

    peticion.addEventListener('upgradeneeded', function (e) {
        bd = e.target.result;
        bd.createObjectStore('tareas', { keyPath: "clave" });
    })

    var solicitud=indexedDB.open('baseDatos', '1');
	//Si la base esta creada la abrimos
	solicitud.onsuccess=function(e){
		console.log("entrando en onsuccess")
		bd=e.target.result;		
	}
	//Cuando la base no está creada. Creamos el contenedor "productos" y le asignamos una clave
	solicitud.onupgradeneeded=function(e){
		console.log("entrando en upgrade")
		bd=e.target.result;	
		bd.createObjectStore("tareas",{keyPath:"clave"});
	}
	//Si se produce un error
	solicitud.onerror=(error)=>{
		console.log('Error',error);
	}
}

function añadirTarea(){
	var transaccion=bd.transaction(["tareas"],"readwrite");
	var almacen=transaccion.objectStore("tareas");	
	almacen.add({clave:clave.value,color:color.value,precio:precio.value});
}

function tareasPendientes() {
    let transac = bd.transaction('tareas', 'readonly');
    let almacenTareas = transac.objectStore('tareas');
    transac.addEventListener('complete',() => { console.log('transacción ok')});
    transac.addEventListener('error',() => { console.log('transacción nok')});
    let ordenLect = almacenTareas.getAll();
    ordenLect.addEventListener('success',(e) => {
        console.log(e)
        debugger;
        let datoLeido = e.target.result;
        if (datoLeido) console.log(datoLeido)
        else console.log('error getAll')
    });

    ordenLect.addEventListener('error',() => console.log('error en lectura'));
}

function mostrarTareas(tarea) {
    document.getElementById('resultados').innerHTML = `Tarea pendiente=${tarea}`;
}