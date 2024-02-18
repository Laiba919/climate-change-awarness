// sticky navbar

// var navbar= documento.getElementById('navbar');

// window.addEventListener('scroll',()=>
// {
//     if (window.pageYOffset) {
        
//     } else {
        
//     }
// }

var navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY>50) {
        navbar.classList.add('sticky')
    } else {
        
        navbar.classList.remove('sticky')
    }
});