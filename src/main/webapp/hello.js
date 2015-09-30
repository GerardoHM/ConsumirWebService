$.ajax({
  type: 'GET',
  url: 'http://192.168.1.15:8008/demo/productos',
  contentType: '"application/json; charset=utf-8"',
  xhrFields: {
    withCredentials: false
  },
  success: function(data, status, jqxhr) {
	  $('.greeting-clave').append(data.clave);
      $('.greeting-descripcion').append(data.descripcion);
      alert(status);
  },
  error: function() {
	  alert('Ups, hubo un error al realizar la peticion.');
  }
});