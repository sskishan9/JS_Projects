let count=0;
let btn1=document.getElementById('dec_btn');
let btn2=document.getElementById('res_btn');
let btn3=document.getElementById('inc_btn');
let counter=document.getElementById('count');
const colors=["red","black","green"];
btn1.addEventListener('click',function(){
    count-=1;
    if(count<0)
    {
        counter.style.color=colors[0]
    }
    else if(count>0)
    {
        counter.style.color=colors[2]
    }
    else 
    {
        counter.style.color=colors[1]
    }
    counter.textContent=count
})
btn2.addEventListener('click',function(){
    count=0;
    if(count<0)
    {
        counter.style.color=colors[0]
    }
    else if(count>0)
    {
        counter.style.color=colors[2]
    }
    else 
    {
        counter.style.color=colors[1]
    }
    counter.textContent=count
})
btn3.addEventListener('click',function(){
    count+=1;
    if(count<0)
    {
        counter.style.color=colors[0]
    }
    else if(count>0)
    {
        counter.style.color=colors[2]
    }
    else 
    {
        counter.style.color=colors[1]
    }
    counter.textContent=count
})