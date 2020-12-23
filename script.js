const navbarbtn = document.querySelector('.navbar__btn')
const navbarlinks = document.querySelector('.navbar__links')

navbarbtn.addEventListener('click', function name(params) {
    let value = navbarlinks.classList.contains('navbar__collapse');

    if (value) {
        navbarlinks.classList.remove('navbar__collapse')
        navbarbtn.classList.remove('change')
    } else {
        navbarlinks.classList.add('navbar__collapse')
        navbarbtn.classList.add('change')
    }
})