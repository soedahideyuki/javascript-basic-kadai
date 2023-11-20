const mainText=document.getElementById('text');
const secondText=document.getElementById('secondtext');
const changeBtn=document.getElementById('btn');

changeBtn.addEventListener('click',()=>{
  mainText.style.display='none';
  setTimeout(()=>{
  secondText.style.display='block';
},2000);
});