const saas= document.querySelector('.saas');
const saas1= document.querySelector('.saas1');
const hosted = document.querySelector('.hosted');
const self = document.querySelector('.self');
function enable(){

    hosted.style.display = "none";
    saas1.style.display = "block";
    
}
function disable(){

    saas1.style.display = "none";
    hosted.style.display = "block";
}