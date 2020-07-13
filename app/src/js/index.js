import '../style/style.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import Person from './scripts/Person';
import Modal from './scripts/Modal';
import mobileMenu from './scripts/mobileMenu';
import currentYearFooter from './scripts/currentYearFooter';
import Clock from './scripts/Clock';


new Modal();
new mobileMenu();
new currentYearFooter();
new Clock();


//Instance of the modal class
//get modal element
//let modal = document.getElementById('simpleModal');
//get open modal button
//let modalBtn = document.getElementById('modalBtn');
//get close button 
let closeBtn = document.getElementById('closeBtn');

//listen for open click
//modalBtn.addEventListener('click', openModal);

//listen for close click
//closeBtn.addEventListener('click', closeModal);

//Listen for ouside click
// window.addEventListener('click', clickOutside);

//function to open modal
// function openModal(){
//    modal.style.display = 'block';
// }

//function to close modal
// function closeModal(){
//     modal.style.display = 'none';
// }

//function to close modal if outside click
// function clickOutside(e){
//     console.log(e.target);
    //modal = dark area around the white box
//     if(e.target == modal){
//         modal.style.display = 'none';
//     }
   
// }


if(module.hot){
    module.hot.accept()
}

// class Adult extends Person {
//     payTaxes(){
//         console.log(this.name + " Now owes zero taxes.");
//     }
// }

// let oliver = new Person("Leon", "Red");
// oliver.greet();
// let jenna = new Person("Jenna", "White");
// jenna.greet();
// jenna.payTaxes();
