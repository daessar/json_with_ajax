function obtenerAjax() {
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest(); //Verifica si no es el internet explorer (opera, brave, chrome)
  } else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP"); //Es internet explorer
  }
  return xhttp;
}
var ajax = obtenerAjax();

//Ejercicio 1
function calcular_salario() {
  ajax.open("GET", "salario.php?" + obtenerQueryString_salario());
  ajax.onreadystatechange = respuesta_servidor_salario; //Funcion que se encarga de verficar los estados
  ajax.send(null);
}
function respuesta_servidor_salario() {
  if (ajax.readyState == 4 && ajax.status == 200) {
    //Manipula el DOM
    operaciones_salario = JSON.parse(ajax.responseText); //Lo que se recibe del php lo convierto en un json
    document.getElementById("base_cotizacion").value =
      "$" + operaciones_salario.base_cotizacion + " COP";
    document.getElementById("salud").value =
      "$" + operaciones_salario.salud + " COP";
    document.getElementById("pension").value =
      "$" + operaciones_salario.pension + " COP";
    document.getElementById("valor_pagado").value =
      "$" + operaciones_salario.valor_pagado + " COP";

    //Muestro los datos
    document.getElementById("resultado_salario").style.display = "block";
  }
}
function obtenerQueryString_salario() {
  salario = encodeURIComponent(document.getElementById("salario").value);

  query = "salario=" + salario + "&nocache=" + Math.random();
  return query;
}

//Ejercicio 2
function calcular_celulares() {
  ajax.open("GET", "celulares.php?" + obtenerQueryString_celulares());
  ajax.onreadystatechange = respuesta_servidor_celulares; //Funcion que se encarga de verficar los estados
  ajax.send(null);
}
function respuesta_servidor_celulares() {
  if (ajax.readyState == 4 && ajax.status == 200) {
    operaciones_celulares = JSON.parse(ajax.responseText); //Lo que se recibe del php lo convierto en un json
    //Manipula el DOM
    document.getElementById("salario_basico_vendedor").value =
      "$" + operaciones_celulares.salario_basico_vendedor + " COP";
    document.getElementById("comision_cel_vendido").value =
      "$" + operaciones_celulares.comision_cel_vendido + " COP";
    document.getElementById("comision_venta_total").value =
      "$" + operaciones_celulares.comision_venta_total + " COP";
    document.getElementById("pago_total").value =
      "$" + operaciones_celulares.pago_total + " COP";

    //Muestro los datos
    document.getElementById("resultado_celulares").style.display = "block";
  }
}
function obtenerQueryString_celulares() {
  num_cel_vendidos = encodeURIComponent(
    document.getElementById("num_cel_vendidos").value
  );
  valor_total_ventas = encodeURIComponent(
    document.getElementById("valor_total_ventas").value
  );

  query =
    "num_cel_vendidos=" +
    num_cel_vendidos +
    "&valor_total_ventas=" +
    valor_total_ventas +
    "&nocache=" +
    Math.random();
  return query;
}

//Ejercicio 3
function calcular_test() {
  ajax.open("GET", "test.php?" + obtenerQueryString_test());
  ajax.onreadystatechange = respuesta_servidor_test; //Funcion que se encarga de verficar los estados
  ajax.send(null);
}
function respuesta_servidor_test() {
  if (ajax.readyState == 4 && ajax.status == 200) {
    operaciones_test = JSON.parse(ajax.responseText); //Lo que se recibe del php lo convierto en un json
    //Manipula el DOM
    document.getElementById("porcentaje_correctas").value =
      operaciones_test.porcentaje_correctas + " %";
    document.getElementById("resultado").value = operaciones_test.resultado;

    //Muestro los datos
    document.getElementById("resultado_test").style.display = "block";
  }
}
function obtenerQueryString_test() {
  num_pre_test = encodeURIComponent(
    document.getElementById("num_pre_test").value
  );
  pre_buenas = encodeURIComponent(document.getElementById("pre_buenas").value);

  query =
    "num_pre_test=" +
    num_pre_test +
    "&pre_buenas=" +
    pre_buenas +
    "&nocache=" +
    Math.random();
  return query;
}

//Ejercicio 4
function calcular_imc() {
  ajax.open("GET", "imc.php?" + obtenerQueryString_imc());
  ajax.onreadystatechange = respuesta_servidor_imc; //Funcion que se encarga de verficar los estados
  ajax.send(null);
}
function respuesta_servidor_imc() {
  if (ajax.readyState == 4 && ajax.status == 200) {
    operaciones_imc = JSON.parse(ajax.responseText); //Lo que se recibe del php lo convierto en un json
    //Manipula el DOM
    document.getElementById("resultado_estado").value =
      operaciones_imc.resultado;

    //Muestro los datos
    document.getElementById("resultado_imc").style.display = "block";
  }
}
function obtenerQueryString_imc() {
  peso = encodeURIComponent(document.getElementById("peso").value);
  estatura = encodeURIComponent(document.getElementById("estatura").value);

  query =
    "peso=" + peso + "&estatura=" + estatura + "&nocache=" + Math.random();
  return query;
}

//Aerolinea
function calcular_viaje() {
  ajax.open("GET", "viaje.php?" + obtenerQueryString_viaje());
  ajax.onreadystatechange = respuesta_servidor_viaje; //Funcion que se encarga de verficar los estados
  ajax.send(null);
}
function respuesta_servidor_viaje() {
  if (ajax.readyState == 4 && ajax.status == 200) {
    operaciones_viaje = JSON.parse(ajax.responseText); //Lo que se recibe del php lo convierto en un json
    //Manipula el DOM
    document.getElementById("tipo_clase").value = operaciones_viaje.tipo_clase;
    document.getElementById("tipo_servicio").value =
      operaciones_viaje.tipo_servicio;
    document.getElementById("descuento").value =
      "$" + operaciones_viaje.descuento + " COP";
    document.getElementById("pago_total_viaje").value =
      "$" + operaciones_viaje.pago_total_viaje + " COP";

    //Muestro los datos
    document.getElementById("resultado_viaje").style.display = "block";
  }
}
function obtenerQueryString_viaje() {
  origen = encodeURIComponent(document.getElementById("origen").value);
  destino = encodeURIComponent(document.getElementById("destino").value);
  edad = encodeURIComponent(document.getElementById("age").value);

  //Obteniendo los datos de los radio buttom
  if (document.getElementById("turista").checked) {
    clase = "turista";
  }
  if (document.getElementById("primera_clase").checked) {
    clase = "primera_clase";
  }
  if (document.getElementById("ejecutivo").checked) {
    clase = "ejecutivo";
  }
  //Obteniendo los datos de los checkbox
  servicio = 0;
  $tipo_servicio = "";
  if (document.getElementById("alimentacion").checked) {
    servicio += 2500;
    $tipo_servicio += " Alimentación ";
  }
  if (document.getElementById("internet").checked) {
    servicio += 5000;
    $tipo_servicio += " Internet ";
  }
  if (document.getElementById("maletero").checked) {
    servicio += +4000;
    $tipo_servicio += " Maletero ";
  }

  //Enviando informacion
  query =
    "origen=" +
    origen +
    "&destino=" +
    destino +
    "&clase=" +
    clase +
    "&edad=" +
    edad +
    "&servicio=" +
    servicio +
    "&tipo_servicio=" +
    $tipo_servicio +
    "&nocache=" +
    Math.random(); //Se usa para que no recargue la pagina desde el cache
  return query;
}
