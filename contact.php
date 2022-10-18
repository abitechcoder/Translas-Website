<?php

    $messae_sent = false;

    if(isset($_POST['email']) && $_POST['email'] != ''){

        if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
            $name = $_POST['name'];
            $email = $_POST['email'];
            $subject = $_POST['subject'];
            $message = $_POST['message'];

            // Reciepient
            $to = "abiolaolalekan39@gmail.com";

            // Headers
            $headers = "From: ". $name ."<".$email.">". "\r\n";
            $headers .= "Reply-To:" .$email. "\r\n";
            $headers .= "Content-type: text/html\r\n";

            // Send email
            mail($to, $subject, $message, $headers);

            $messae_sent = true

            echo $messae_sent
        }
    }

    




?>