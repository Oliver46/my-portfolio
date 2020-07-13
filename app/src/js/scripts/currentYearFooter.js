class currentYear {
    constructor(){
       let yearElement = document.querySelector("#currentYear");
    
       this.event(yearElement);
    }
    event(yearElement){
        year(yearElement);
    }
}

function year(yearElement) {
    let currentDate = new Date(); 
    let year = currentDate.getFullYear();
    yearElement.textContent  = year;
}

export default currentYear