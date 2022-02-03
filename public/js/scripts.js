//BOOTSTRAP CODES DO NOT EDIT 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

//MY OWN CODE, Do not touch if you do not want to crash the app ;)

const menuBtn = [...document.querySelectorAll('.list-group-item')];
const pages = [...document.querySelectorAll('.page')];
const logout = document.getElementById('logout')
if(pages.length<4){
    window.localStorage.setItem('page', 2)
}
let id = window.localStorage.getItem("page") || 1 ;

pages.map(e=>{
    e.classList.add('inactive')
})
pages[id-1].classList.remove('inactive');

menuBtn.forEach(e=>{
    e.addEventListener('click', (e)=>{
        let currentId= Number(e.target.id);
        window.localStorage.setItem("page", currentId)
        pages.map(e=>{
            e.classList.add('inactive')
        })
        pages[currentId-1].classList.remove('inactive');
    })
})
//logout
logout.addEventListener('click', ()=>{
    fetch('https://crm-exam.herokuapp.com/logout')
    window.location.replace('https://crm-exam.herokuapp.com/login')
})
