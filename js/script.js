const form=document.getElementById("form1");
const username=document.getElementById("username");

const password1=document.getElementById("password");


form.addEventListener('submit',(event)=>{
    event.preventDefault();
    checkInputs();
});
function checkInputs(){
    const usernameValue=username.value.trim();
    
    const password1Value= password1.value.trim();
    
   
    if(usernameValue=="admin"&&password1Value=="12345"){
        form.setAttribute('action','todo.html');
        form.submit();
        
    }else{
        alert("invalid username or password")
    }
    
}