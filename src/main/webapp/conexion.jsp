<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> 
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Inserición por metodo PUT</title>
<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js' type='text/javascript'></script>
<script type="text/javascript" src="put.js"></script>
</head>
<body>
	<label for="clave">Introduce Clave: </label>
	<input type="text" name="clave" id="clave"/><br/>
	<label for="descripcion">Introduce Descripción: </label>
	<input type="text" name="descripcion" id="descripcion"/><br>
	<label for="uniMed">Introduce UniMed: </label>
	<input type="text" name="uniMed" id="uniMed"/><br>
	<label for="stockMin">Introduce StockMin: </label>
	<input type="text" name="stockMin" id="stockMin"/><br>
	<label for="stockMax">Introduce StockMax: </label>
	<input type="text" name="stockMax" id="stockMax"/><br>
	<label for="tipoCosteo">Introduce TipoCosteo: </label>
	<input type="text" name="tipoCosteo" id="tipoCosteo"/><br>
	<label for="fechaCompra">Introduce FechaCompra: </label>
	<input type="text" name="fechaCompra" id="fechaCompra"/><br>
	<label for="fechaVenta">Introduce FechaVenta: </label>
	<input type="text" name="fechaVenta" id="fechaVenta"/><br>
	<label for="existencia">Introduce Existencia: </label>
	<input type="text" name="existencia" id="existencia"/><br>
	<label for="costoProm">Introduce CostoProm: </label>
	<input type="text" name="costoProm" id="costoProm"/><br>
	<label for="ultCosto">Introduce UltCosto: </label>
	<input type="text" name="ultCosto" id="ultCosto"/><br>
	<label for="cveImpuesto">Introduce CveImpuesto: </label>
	<input type="text" name="cveImpuesto" id="cveImpuesto"/><br>
	<label for="descripcionEquipo">Introduce DescripcionEquipo: </label>
	<input type="text" name="descripcionEquipo" id="descripcionEquipo"/><br>
	<label for="status">Status: </label>
	<input type="text" name="status" id="status"/><br>

	<input type="submit" id="put" value="Realizar el PUT" />
</body>
</html>