document.querySelector('.nav__toggle').addEventListener("click",()=>{
    console.log('ssss');
    
    document.querySelector('.nav__menu').classList.toggle('show-menu')
})

// coding about acroll //


function scrollHeader () {
    const nav = document.querySelector('#header')
if(window.scrollY >= 80) {
    nav.classList.add('scroll-header')
}else (
    nav.classList.remove('scroll-header')
)
}

window.addEventListener('scroll',scrollHeader)

// about nav linl dot //

const navLinks = document.querySelectorAll('.nav__link')

navLinks.forEach((link)=>{
link.addEventListener('click',()=>{
    navLinks.forEach((item)=>{
        item.classList.remove('active-link')
    })
  link.classList.add('active-link')
  document.querySelector('.nav__menu').classList.toggle('show-menu')
})
})

// scroll up//
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')
    if(window.scrollY >=560){
        scrollUp.classList.add('show-scroll')
    }else{
        scrollUp.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll',scrollUp)



// navLink.addEventListener('click',()=> {
//     navLink.classList.remove('active-link')
//     navLink.classList.add('active-link')
// })




// dark and light theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bi-toggle-on'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bi-toggle-off' : 'bi-toggle-on'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bi-toggle-off' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})