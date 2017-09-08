<?php
  if(isset($_POST['name'], $_POST['email'], $_POST['message'], $_POST['subject'])) {
    $to = 'chrislee910320@gmail.com';
    $subject = 'message from ' . $_POST['name'] . '(' . $_POST['email'] . ')' . $_POST['subject'];
    $message = $_POST['message'];
    $headers = "From: " . $_POST['email'] . "\r\n";

    $sent = mail($to, $subject, $message, $headers);

    if($sent) {
      echo '<h2>success</h2>';
    } else {
      echo '<h2>error</h2>';
    }
  };

?>