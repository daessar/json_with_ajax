<?php
//Obteniendo los datos del candidato
$num_preguntas_test = $_GET["num_pre_test"];
$num_preguntas_buenas = $_GET["pre_buenas"];

//Calculando el porcentaje de preguntas buenas
$porcentaje_correctas = ($num_preguntas_buenas / $num_preguntas_test) * 100;

//Calculando el rango de calificación;
if ($porcentaje_correctas >= 90){
  $resultado = "Nivel Máximo";
}else if($porcentaje_correctas >= 75 & $porcentaje_correctas <= 90){
  $resultado = "Nivel Medio";
}else if($porcentaje_correctas >= 50 & $porcentaje_correctas <= 75){
  $resultado = "Nivel Regular";
}else{
  $resultado = "Fuera de nivel ❌";
}
//Creando el array
$operacion_test = array('porcentaje_correctas' => $porcentaje_correctas, 'resultado' => $resultado);

//Enviando la información del array
echo json_encode($operacion_test);

?>