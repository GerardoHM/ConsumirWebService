$(document).ready(function(){
	$("#put").click(function(){
		var clave = document.getElementById("clave").value;
		var descripcion = document.getElementById("descripcion").value;
		var uniMed = document.getElementById("uniMed").value;
		var stockMin = document.getElementById("stockMin").value;
		var stockMax = document.getElementById("stockMax").value;
		var tipoCosteo = document.getElementById("tipoCosteo").value;
		var fechaCompra = document.getElementById("fechaCompra").value;
		var fechaVenta = document.getElementById("fechaVenta").value;
		var existencia = document.getElementById("existencia").value;
		var costoProm = document.getElementById("costoProm").value;
		var ultCosto = document.getElementById("ultCosto").value;
		var cveImpuesto = document.getElementById("cveImpuesto").value;
		var descripcionEquipo = document.getElementById("descripcionEquipo").value;
		var status = document.getElementById("status").value;
		
		var productos = '{ "clave":'+clave+
		', "descripcion": "'+descripcion+'"'+
		', "uniMed":"'+uniMed+'"'+
		', "stockMin":'+stockMin+
		', "stockMax":'+stockMax+
		', "tipoCosteo":"'+tipoCosteo+'"'+
		', "fechaCompra":"'+fechaCompra+'"'+
		' }';
		
		$.ajax({
			type: "PUT",
			url: " http://192.168.1.15:8008/demo/saveProductos",
			data: productos,
			contentType: "application/json",
			success : function() {
				alert('El PUT se realizo correctamente');
		    },
		    error : function(xhr, status) {
		        alert('Disculpe, existio un problema');
		    },
		    complete : function(xhr, status) {
		        alert('Peticion realizada');
		    }
		});
	})
});