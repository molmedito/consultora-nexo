<?php
$nombre = test_input($_POST['nombre']);
$telefono = test_input($_POST['telefono']);
$email = test_input($_POST['email']);
$mensaje = test_input($_POST['mensaje']);
$para = 'alfonsoabarcaf@gmail.com';

if(!isset($_POST['asunto'])){
    $asunto = 'Mensaje de: '.$nombre;
}

$headers = 'From: ' . $email;
$msjCorreo =
"Datos de contacto\n
Nombre: $nombre\n
E-mail: $email\n\n
Mensaje:\n $mensaje";
  
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    if(mail($para, 'Contacto con Consultora Nexo de '.$nombre, $msjCorreo, $headers)){
        echo "<script language='javascript'>
        alert('Mensaje enviado, muchas gracias.');
        window.location.href = 'http://www.consultoranexo.cl/';
        </script>";
    } else {
        echo 'Falló el envio';
    }
}
   
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>