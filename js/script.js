function Validate(){
    let user = document.getElementById("username");
    let pass = document.getElementById("password");
    return userCheck(user,pass,successLogin,errorLogin)
}

function userCheck(user,pass,successLogin,errorLogin){
    if(user.value == "admin" && pass.value == "12345"){
        return successLogin();
    }
    else{
        return errorLogin();
    }
}
function successLogin(){
        
        return true;


}
function errorLogin(){
  alert("invalid username and password")
    return false;
}
