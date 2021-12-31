// nav responsive
const icon = document.querySelector(".icon");
const navItems = document.querySelectorAll(".navItem")
//selecciono todos los elementos que tienen la clase navItems y con el forEach modifico cada elemento


const navResponsive = () => {
    document.querySelector(".nav").classList.toggle("cien");
    document.querySelector(".nav-ul").classList.toggle("activado");
    document.querySelector(".logo-header").classList.toggle("none");
    document.body.classList.toggle("noScroll"); //el document. es necesario en react  
}

icon.addEventListener("click", ()=> {
   navResponsive()
})

navItems.forEach(item => {
    item.addEventListener("click", ()=> {
        navResponsive()
    })
})










// [navItems + icon].forEach(element=> {
//     element.addEventListener("click", ()=> {
//         navMenu.classList.toggle("cien");
//         navUl.classList.toggle("activado");
//         logo.classList.toggle("none");
//         document.body.classList.toggle("noScroll"); //el document. es necesario en react  
//     })
// })



