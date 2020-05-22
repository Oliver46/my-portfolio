import '../style/style.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

//import modal from './script/modal.js';


//get modal element
let modal = document.getElementById('simpleModal');
//get open modal button
let modalBtn = document.getElementById('modalBtn');
//get close button 
let closeBtn = document.getElementById('closeBtn');

//listen for open click
modalBtn.addEventListener('click', openModal);

//listen for close click
closeBtn.addEventListener('click', closeModal);

//Listen for ouside click
window.addEventListener('click', clickOutside);

//function to open modal
function openModal(){
   modal.style.display = 'block';
}

//function to close modal
function closeModal(){
    modal.style.display = 'none';
}

//function to close modal if outside click
function clickOutside(e){
    console.log(e.target);
    //modal = dark area around the white box
    if(e.target == modal){
        modal.style.display = 'none';
    }
   
}


if(module.hot){
    module.hot.accept()
}
