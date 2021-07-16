<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

/* Exception class. */
require 'email/PHPMailer/src/Exception.php';

/* The main PHPMailer class. */
require 'email/PHPMailer/src/PHPMailer.php';

/* SMTP class, needed if you want to use SMTP. */
require 'email/PHPMailer/src/SMTP.php';


$mail = new PHPMailer();

$mail->isSMTP(); // Set mailer to use SMTP
$mail->SMTPAuth = true; // Enable SMTP authentication
$mail->SMTPDebug = 3; //Please enable debug if you want to check if the mail sent successfully.

$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->Username = 'czeriah.design@gmail.com';    // SMTP username
$mail->Password = 'Llewelynn_11';  // SMTP password
$mail->SMTPSecure = 'ssl';   // Enable encryption, 'ssl' also accepted
$mail->Port = 465;
$mail->SMTPOptions = [
    'ssl' => [
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true,
    ]
]; 

$mail->setFrom('czeriah.design@gmail.com', 'Czeriah');
$mail->addReplyTo( $_POST['mail'], $_POST['prenom'].' '.$_POST['nom']);
$mail->addAddress('czeriah.design@gmail.com', 'Czeriah');
$mail->Subject = 'Contact Portfolio';
$mail->Body = $_POST['message'];
$mail->AltBody = $_POST['message'];

if(!$mail->send()) {
    echo $mail->ErrorInfo;
} 
else { 
 header("Location:index.html#contact");
}

//echo '<form method="POST" action="index.php> <input type="hidden" name="sent" value="1"> </form>';
