document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
    
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
    
        var whatsappNumber = 'YOUR_WHATSAPP_NUMBER'; // Replace with your WhatsApp number
        var url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;
    
        window.open(url, '_blank');
    });
    
});
