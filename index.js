
        function sendEmail() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const mailtoLink = `mailto:anshumanmodanwal9628@gmail.com?subject=New Message from Contact Form&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

            window.location.href = mailtoLink;
        }
 