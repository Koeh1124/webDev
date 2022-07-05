<?php
if(isset($_POST['submit'])){
    $email = "keenankoehler@gmail.com";

    $msg = $_POST['msg'];
    $sender = $_POST['email'];
    $name = $_POST['name'];
    $number = $_POST['tel'];
    $fullmsg = "Email:".$sender."\n"."PhoneNumber:".$number.$msg;
    $fullmsg = wordwrap($msg,70);
    mail($email,$name."sent you a message!","Email:".$sender);
};''
?>