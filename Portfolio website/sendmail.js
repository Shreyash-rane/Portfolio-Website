function sendMail(){
    console.log('sendMail function called');
    var params = {
        from_name:document.getElementById("name").value,
        email_id:document.getElementById("email").value,
        message:document.getElementById("message").value,

    };


    const serviceID= "service_ff1jsdl";
    const templateID="template_ubaf3k4";

    emailjs.send(serviceID,templateID,params)
    alert("your message sent and success ");

}