let data ={
    email:'example@gmail.com',
    pwd:'example'
}
document.getElementById("form").addEventListener('click',(function(e){
    e.preventDefault();
    verifyLogin();
}))
function verifyLogin(){
   let email= document.getElementById("userEmail").value
   let pwd= document.getElementById("userPwd").value
   console.log(email,pwd)
    if(data.email==email && data.pwd==pwd){
        location.href='index.html'
    }

}