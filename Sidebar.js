const toggleBtn=document.getElementById('toggle-btn');
const closeBtn=document.getElementById('close-btn');
const sidebar=document.getElementById('sidebar');

toggleBtn.addEventListener("click",function(){
    console.log(sidebar.classList);
    if(sidebar.classList.contains('show-sidebar')){
        sidebar.classList.remove('show-sidebar');
    }
    else 
    {
        sidebar.classList.add('show-sidebar');
    }
})

closeBtn.addEventListener('click',function(){
    sidebar.classList.remove('show-sidebar');
})