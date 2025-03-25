<?php



use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
//Load Composer's autoloader
ob_start();
require 'vendor/autoload.php';
$mail = new PHPMailer(true);
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Initialize PHPMailer
    // $mail = new sendMail\vendor\phpmailer\phpmailer\src\PHPMailer(true);

        // Your email configuration settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'kishanparejiya109@gmail.com'; // Your Gmail email address
        $mail->Password = 'zfkafaecxbekhmjz'; // Your Gmail password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $senderEmail = $_POST['email'];
        $senderName = $_POST['full_name'];

        // Sender and recipient email addresses
        $mail->setFrom($senderEmail, $senderName);
        $mail->addAddress('kishanparejiya109@gmail.com', 'Kishan Parejiya');
        
        // Set the reply-to address and name
$mail->addReplyTo($_POST['email'], $_POST['full_name']);

        // Email content
        $mail->isHTML(true);
        $mail->Subject = 'Email from ' . $_POST['full_name'];
        $bodyContent = "<h1 style='color: #0064ff;'>Hello! Kishan Parejiya</h1>";
        $bodyContent .= '<h2>' . $_POST['full_name'] . ' is trying to connect with you for ' . $_POST['subject'] . ' inquiry</h2>';
        $bodyContent .= '<h3 style="font-size: 18px;">Name:' . $_POST['full_name'] . '</h3>';
        $bodyContent .= '<h3 style="font-size: 18px;">Email: ' . $_POST['email'] . '</h3>';
        $bodyContent .= '<h3 style="font-size: 18px;">Contact Number: ' . $_POST['phone'] . '</h3>';
        $bodyContent .= '<h3 style="font-size: 18px;">Subject: ' . $_POST['subject'] . '</h3>';
        $bodyContent .= '<p style="font-size: 20px; color: #000;">Message: ' . $_POST['message'] . '</p>';

        $mail->Body = $bodyContent;

        // Send the email
         $mail->send();
        echo 'Message has been sent.';
        header('https://kishan-parejiya-portfolio.000webhostapp.com/index.html');
    } catch (Exception $e) {
        echo 'Message was not sent. Mailer error: ' . $mail->ErrorInfo;
    }
    
    
    if($mail == true){
    echo "<script>alert('Thank you for the message. We will contact you shortly.');</script>";
    header('location:ThankYou.html');
    }else{
        echo "<script>alert('Sorry! Please try again.');</script>";
    
    }
