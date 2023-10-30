<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru','phpmailer/language/');
    $mail->isHTML(true);
    $mail->setFrom('roman200@mail.ru','фыа');

    $mail->addAddress('qwertyz100@mail.ru');
    $mail->Subject = "Привет";

    $body = '<h1>Письмо!</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя: </strong> '.$_POST['name'].'</p>';
    }

    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>Email: </strong> '.$_POST['email'].'</p>';
    }

    if(trim(!empty($_POST['hand']))){
        $body.='<p><strong>Рука: </strong> '.$hand.'</p>';
    }

    if(trim(!empty($_POST['msg']))){
        $body.='<p><strong>Сообщение: </strong> '.$_POST['msg'].'</p>';
    }

    $mail->Body = $body;

    if(!$mail->send()){
        $message = 'Ошибка';
    }else{
        $message = 'Данные отправлены';
    }
    $responce = ['msg' =>$message];

    header('Content-type: application/json');
    echo json_encode($responce);
?>