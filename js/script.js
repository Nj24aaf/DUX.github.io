
function showPopup(){
document.getElementById('popup').style.display='block';
}
function closePopup(){
document.getElementById('popup').style.display='none';
}

document.addEventListener('DOMContentLoaded',()=>{
const form=document.getElementById('reminderForm');
if(form){
form.addEventListener('submit',function(e){
e.preventDefault();
document.getElementById('message').textContent='Reminder created successfully.';
showPopup();
});
}
});
