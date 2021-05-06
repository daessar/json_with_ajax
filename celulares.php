<?php
// Obteniendo los datos del vendedor
$celulares_vendidos = $_GET["num_cel_vendidos"];
$total_ventas = $_GET["valor_total_ventas"];

//Aplicando comisiones
$salario_basico_vendedor = 300000;
$comision_cel_vendido = $celulares_vendidos * 10000;
$comision_venta_total = $total_ventas * 0.05;

//Pago total
$pago_total = $salario_basico_vendedor + $comision_cel_vendido + $comision_venta_total;

//Creando el array
$operacion_celulares = array(
  'salario_basico_vendedor' => $salario_basico_vendedor, 'comision_cel_vendido' => $comision_cel_vendido, 'comision_venta_total' => $comision_venta_total, 'pago_total' => $pago_total,
);

//Enviando la información del array
echo json_encode($operacion_celulares);
?>