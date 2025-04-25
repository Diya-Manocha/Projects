<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["fullName"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // Email setup
    $to = $email;
    $subject = "Thanks for contacting us!";
    $body = "Hi $name,\n\nThank you for reaching out to us.\n\nWe have received your message:\n\"$message\"\n\nWe will get back to you soon.\n\nBest Regards,\nYour Company";
    $headers = "From: your-email@example.com"; // change to your real email

    // Send email to user
    $mailSuccess = mail($to, $subject, $body, $headers);

    // Save to log file
    $log = "Name: $name\nEmail: $email\nMessage: $message\nDate: " . date("Y-m-d H:i:s") . "\n---\n";
    file_put_contents("contacts.log", $log, FILE_APPEND);

    // Show confirmation page
    echo "<!DOCTYPE html>
    <html lang='en'>
    <head>
      <meta charset='UTF-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'>
      <title>Thank You</title>
      <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet'>
    </head>
    <body>
      <div class='container mt-5'>
        <h2>Thank you, $name!</h2>
        <p><strong>Your Email:</strong> $email</p>
        <p><strong>Your Message:</strong><br>$message</p>";

    if ($mailSuccess) {
        echo "<div class='alert alert-success mt-3'>A confirmation email has been sent to you.</div>";
    } else {
        echo "<div class='alert alert-danger mt-3'>Failed to send confirmation email. Please check your server email settings.</div>";
    }

    echo "<a href='contact.html' class='btn btn-primary mt-3'>Back to Contact Form</a>
      </div>
    </body>
    </html>";
} else {
    header("Location: contact.html");
    exit();
}
?>
