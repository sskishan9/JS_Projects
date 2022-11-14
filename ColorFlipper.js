const colors=["red","blue","orange","green","black","violet"]
const btn=document.getElementById('btn');
const col=document.getElementById('col');
btn.addEventListener("click",function(){
    const randomNumber=Math.floor(Math.random() * 6)
    console.log(randomNumber)
    document.body.style.backgroundColor=colors[randomNumber]
    col.textContent=colors[randomNumber]
})