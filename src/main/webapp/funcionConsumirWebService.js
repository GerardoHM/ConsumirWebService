$(document).ready(function()
				{
			$("#productos").text("Cargando...");
			var texto = "";
			var texto1 = "";
			var clave;
			$.ajax({
				type: 'GET',
				url: 'http://192.168.1.15:8008/demo/productos',
				contentType: '"application/json; charset=utf-8"',
				xhrFields: {
				    withCredentials: false
				},
				success: function(productos){
					texto += "<select id='seleccion'>";
					$.each(productos, function(i, producto){						   
						   texto += "<option>"+producto.descripcion+"</option>";
						});
						$("#productos").html(texto);
					texto += "</select>";
			    },
				error: function() {
						  alert('Ups, hubo un error al realizar la peticion.');
					  }
			});
});

$('#seleccion').on('change', function() {
	  alert( this.value );
	});
