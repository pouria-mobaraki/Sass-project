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



// navLink.addEventListener('click',()=> {
//     navLink.classList.remove('active-link')
//     navLink.classList.add('active-link')
// })