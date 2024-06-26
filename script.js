// NAVBAR RESPONSIVITY

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')
let sections = document.querySelectorAll('.section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute;

        if (top >= offet && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

// EMAIL CLIPBOARD COPY

let copyEmail = document.getElementById("copy-email")

document.getElementById('copy-email').addEventListener('click', function(event) {
    event.preventDefault();
    const email = "n.nackphouminh@gmail.com";
    navigator.clipboard.writeText(email).then(function() {
        alert('Email copied to clipboard: ' + email);
    }, function(error) {
        console.error('Could not copy text: ', error);
    });
});

