const mainText=document.getElementById('text');

const changeBtn=document.getElementById('btn');

changeBtn.addEventListener('click',()=>{
  mainText.style.display=none;
  const newText=document.createElement('h2');
  newText.textContent='ボタンがをクリックされました';
});