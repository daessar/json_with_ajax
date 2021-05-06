<?php
//Obteniendo datos
$origen = $_GET["origen"];
$destino = $_GET["destino"];
$clase = $_GET["clase"];
$edad = $_GET["edad"];
$servicio = $_GET["servicio"];
$tipo_servicio = $_GET["tipo_servicio"];

//Trayectos
$tarifa = 0;
if ($origen == "manizales" && $destino == "neiva" || $origen == "neiva" && $destino == "manizales" ) {
  $tarifa = 347000;
 }
if ($origen == "manizales" && $destino == "pereira" || $origen == "pereira" && $destino == "manizales" ) {
  $tarifa = 360000;
 }
if ($origen == "manizales" && $destino == "pasto" || $origen == "pasto" && $destino == "manizales" ) {
  $tarifa = 380000;
 }
if ($origen == "neiva" && $destino == "pereira" || $origen == "pereira" && $destino == "neiva" ) {
  $tarifa = 375000;
 }
if ($origen == "neiva" && $destino == "pasto" || $origen == "pasto" && $destino == "neiva" ) {
  $tarifa = 392000;
 }
if ($origen == "pereira" && $destino == "pasto" || $origen == "pasto" && $destino == "pereira" ) {
  $tarifa = 408000;
 }

 //Incremento
 
 if ($clase == "turista") {
  $incremento = 0;
  $tipo_clase = "Turista";
}
if ($clase == "primera_clase") {
  $incremento = $tarifa * 0.2;
  $tipo_clase = "Primera Clase";
}
if ($clase == "ejecutivo") {
  $incremento = $tarifa * 0.5;
  $tipo_clase = "Ejecutiva";
}



//Descuento por la edad 
if ($edad >= 30) {
  $descuento = $tarifa * 0.1;
}else{
  $descuento = $tarifa * 0.15;
}

//Total a pagar
$pago_total = $tarifa + $incremento + $servicio - $descuento;

//Creando el array
$operacion_viaje = array('tipo_clase' => $tipo_clase,'tipo_servicio' => $tipo_servicio,'descuento' => $descuento,'pago_total_viaje' => $pago_total);

//Enviando la información del array
echo json_encode($operacion_viaje);
?>
