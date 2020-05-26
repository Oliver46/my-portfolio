class Modal {
    constructor(){
        this.InjectHTML();
        //get modal element
        this.modal = document.querySelector('.modal');
        console.log(this.modal);
        //get open modal button
        this.modalBtn = document.getElementById('modalBtn');
        console.log(this.modalBtn);
        //get close button 
        this.closeBtn = document.getElementById('closeBtn');
        this.event();
    }

    event(){
        //listen for open click
        //modalBtn.addEventListener('click', this.openModal);
        this.modalBtn.addEventListener('click', e => this.openModal(e));
        //listen for close click
        this.closeBtn.addEventListener('click', e => this.closeModal(e));
        //pushes any key

    }

    //function to open modal
    openModal(e){
        e.preventDefault();
        //this.modal.style.display = 'block';
        this.modal.classList.add("visible");
    } 
    //function to close modal
    closeModal(e){
        e.preventDefault();
        this.modal.classList.remove("visible");
    }

    InjectHTML(){
        document.body.insertAdjacentHTML('beforeend', `
    <div id="simpleModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <span class="closeBtn" id="closeBtn">&times;</span>
            </div>
            <div class="modal-body">
                <h2>WELCOME TO MY PORTFOLIO</h2>
                <p>This Website is still UNDER CONSTRUCTION <i class="fas fa-tools"></i></p>
                <div class="icons">
                    <a href="https://github.com/Oliver46" target="_blank"><i class="fab fa-github"></i></a> <a href="https://www.linkedin.com/in/oliver-leon-a42779152/" target="_blank"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>   
        </div>
    </div> 
        `);
    }
}

export default Modal