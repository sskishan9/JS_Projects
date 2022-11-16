const modalBtn=document.getElementById('modal-btn');
const modalOverlay=document.getElementById('modal-overlay');
const closeBtn=document.getElementById('close-btn');

modalBtn.addEventListener('click',function(){
    console.log(modalOverlay.classList);
    if(!modalOverlay.classList.contains('open-modal')){
        modalOverlay.classList.add('open-modal');
    }
})

closeBtn.addEventListener('click',function(){
    modalOverlay.classList.remove('open-modal');
})