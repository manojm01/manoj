const showMenu = (toggleId,navID)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navID);

   
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    
}
showMenu('nav-toggle','nav-menu')


const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
    console.log("linkaction");
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


// window.onscroll= function(){fun()};
// function fun(){
//     if(document.documentElement.scrollTop > 480 && document.documentElement.scrollTop < 1800){
//       // document.getElementById('header').style.backgroundColor='#c91ce7';
//       document.getElementById('aboutlink').classList.add('active')
//       document.getElementById('homelink').classList.remove('active')
//       document.getElementById('prolink').classList.remove('active')
//       document.getElementById('skilink').classList.remove('active')
//       document.getElementById('conlink').classList.remove('active')
      
//     }
//     else if(document.documentElement.scrollTop < 480){
//         document.getElementById('homelink').classList.add('active')
//         document.getElementById('aboutlink').classList.remove('active')
//     }
//     else if(document.documentElement.scrollTop > 1800){
//         document.getElementById('aboutlink').classList.remove('active')
//       document.getElementById('homelink').classList.remove('active')
//       document.getElementById('prolink').classList.add('active')
//       document.getElementById('skilink').classList.remove('active')
//       document.getElementById('conlink').classList.remove('active')
//     }
// }
// console.log(document.getElementById('work').offsetTop);