<?php
//Obteniendo los datos de la persona
$peso = $_GET["peso"];
$estatura = $_GET["estatura"];

//Calculando el IMC
$imc = $peso / ($estatura * $estatura);

//Calculando la categoria
if ($imc < 18.5){
  $resultado = "Por debajo del peso";
}else if($imc <= 25 & $imc >= 18.5){
  $resultado = "Saludable";
}else if($imc <= 30 & $imc >= 25){
  $resultado = "Con sobrepeso";
}else if($imc <= 40 & $imc >= 30){
  $resultado = "Obeso";
}else{
  $resultado = "Obesidad Mórbida";
}
//Creando el array
$operacion_imc = array('resultado' => $resultado);

//Enviando la información del array
echo json_encode($operacion_imc);
?>