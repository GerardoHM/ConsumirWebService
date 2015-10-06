$(document).ready(function(){
	$("#productos").text("Cargando...");
	var texto = "";
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
					var claves = new Array();
					claves += producto.clave; 
					"<input type='hidden' name='id' value="+claves+"\>"
					texto += "<option>"+producto.descripcion+"</option>";
					});
				$("#productos").html(texto);
				texto += "</select>";
			    },
		error: function() {
						  alert('Ups, hubo un error al realizar la peticion.');
		}
	});
	$("body").on('change', 'select',function() {
		$("#valoresProductos").text("Cargando...");
		var texto1 = "";
		$.ajax({
			type: 'GET',
			url: 'http://192.168.1.15:8008/demo/productos',
			contentType: '"application/json; charset=utf-8"',
			xhrFields: {
				withCredentials: false
			},
			success: function(productos){
				$.each(productos, function(i, producto){
					var descripcion=(document.getElementById("seleccion").value);
					if(descripcion == producto.descripcion){
						texto1 += "<label>Descripcion:  <strong>"+producto.descripcion+"</strong></label><br/>";
						texto1 += "<label>UnidMed:  <strong>"+producto.uniMed+"</strong></label><br/>";
						texto1 += "<label>StockMin:  <strong>"+producto.stockMin+"</strong></label><br/>";
						texto1 += "<label>StockMax:  <strong>"+producto.stockMax+"</strong></label><br/>";
						texto1 += "<label>TipoCosteo:  <strong>"+producto.tipoCosteo+"</strong></label><br/>";
						texto1 += "<label>FechaCompra:  <strong>"+producto.fechaCompra+"</strong></label><br/>";
						texto1 += "<label>FechaVenta:  <strong>"+producto.fechaVenta+"</strong></label><br/>";
						texto1 += "<label>Existencia: <strong>"+producto.existencia+"</strong></label><br/>";
						texto1 += "<label>CostoProm:  <strong>"+producto.costoProm+"</strong></label><br/>";
						texto1 += "<label>UltCosto:  <strong>"+producto.ultCosto+"</strong></label><br/>";
						texto1 += "<label>CveImpuesto:  <strong>"+producto.cveImpuesto+"</strong></label><br/>";
						texto1 += "<label>DescripcionEquipo:  <strong>"+producto.descripcionEquipo+"</strong></label><br/>";
						texto1 += "<label>Status:  <strong>"+producto.status+"</strong></label><br/>";
						
					}										
				});
				$("#valoresProductos").html(texto1);
				},
			error: function() {
							  alert('Ups, hubo un error al realizar la peticion.');
			}
		});
	});
});

