$(document).ready(function() {
    // Replace the email and LinkedIn placeholders with your actual information
    var email = "paneinsawaungmyohan@gmail.com";
    var linkedin = "linkedin.com/in/your-profile";

    // Update the content
    $("#email").text(email);
    $("#linkedin").attr("href", "https://" + linkedin);
});
