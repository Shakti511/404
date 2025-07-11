document.addEventListener('DOMContentLoaded', () => {
  const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('tglbtn'),
        navClose = document.getElementById('clbtn');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }

  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }
});
const navLink = document.querySelectorAll('.link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

const shadowHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50
    ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)

/*==========gsap animation============*/ 

gsap.from('.homeimg-4', {duration: 4 , y: -200})

let tl2=gsap.timeline()
tl2.from('.homeimg-2', {duration: 3, x:-500,y:-100,rotation:45,scale :.5})
.to('.homeimg-2', {duration: 3,rotation:30,scale :1.1})
.to('.homeimg-2', {duration: 3,rotation:0,scale :1})

let tl3=gsap.timeline()
tl3.from('.homeimg-3', {duration: 1, x:50,y:-50,rotation:30,})
.to('.homeimg-3', {duration: 4,rotation:360,})

let tl1=gsap.timeline()
tl1.from('.homeimg-1', {duration: 1, x:-50,y:-10,rotation:45,scale :.5})
.to('.homeimg-1', {duration: 3,rotation:30,scale :1.1})

let tl5=gsap.timeline()
tl5.from('.homeimg-5', {duration: 1, x:-50,y:-10,scale :.5})
.to('.homeimg-5', {duration: 2,scale :1.1})
