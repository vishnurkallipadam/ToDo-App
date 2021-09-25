let uname=document.getElementById("username").value;
let pwd=document.getElementById("password").value;

function validate(){
    console.log(uname);

    let res=0;
    if(uname == 'admin'){
        res=res+1;
    }else{
        alert("invalid username")
    }

    if(pwd =='12345'){
        res=res+1
    }else{
        alert("invalid password")
    }

    if(res==2){
        return true;
    }else{
        return false;
    }

}
