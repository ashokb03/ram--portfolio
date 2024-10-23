/* ------------------ Navbar Menu ------------------ */

let menuIcon = document.querySelector('#menu-icon');
let header = document.querySelector('.menu');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark')
    header.classList.toggle('active')
}


/* ------------------ Navbar Active Link ------------------ */

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a'); 

window.onscroll=()=> {

    section.forEach(sec=>{

        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {

            navLinks.forEach(links=>{

                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');

            });

        };

    });

};




/* ------------------ Home - Typing Text ------------------ */

const typed = new Typed('.multiple-text', {
    strings : ['UI/UX Developer', 'Designer'],
    typeSpeed : 70,
    backSpeed : 70,
    backDelay : 1000,
    loop : true,
});

