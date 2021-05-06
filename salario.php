<?php
//Obteniendo el salario mensual
$salario_mensual = $_GET["salario"];

//Descuentos al contratista
$retencion_fuente = $salario_mensual * 0.1;
$base_cotizacion = $salario_mensual * 0.4;
$salud = $base_cotizacion * 0.125;
$pension = $base_cotizacion * 0.16;
$valor_pagado = $salario_mensual - ($retencion_fuente + $salud + $pension);

//Creando el array 
$operacion_salario = array('base_cotizacion' => $base_cotizacion,'salud' => $salud,'pension' => $pension,'valor_pagado' => $valor_pagado,
);
echo json_encode($operacion_salario);
?>