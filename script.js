let img=document.getElementsByClassName('img')[0];
let pass=document.getElementById('password');
let email=document.getElementById('email');


pass.addEventListener("click",()=>{
    pass.placeholder='Enter your password'
    pass.style.border='none';
img.style.backgroundImage="url('panda2.png')"
img.style.transition="ease-in-out 0.43s";
pass.style.width='230px';
email.style.width='200px';
pass.style.transition="ease-in-out 0.5s";
})

email.addEventListener("click",()=>{
    email.placeholder='Enter your email'
    email.style.border='none';
    img.style.backgroundImage="url('panda1.png')"
    img.style.transition="ease-in-out 0.3s";
    
    email.style.width='230px';
    email.style.transition="ease-in-out 0.5s";
    pass.style.width='200px';
    })










    function containsUppercase(str) {
      
     if( /[A-Z]/.test(str)){
      return /[A-Z]/.test(str);
     }
     else{
      alert('Must include upper characters');
      pass.placeholder='Check your password';
      pass.style.border='5px solid red';
     }
     
     }
      
      





      function hasSpecialCharacters(str) {
        var chars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
      
      if ( chars.test(str)){
          return true;
      }
      else{
        alert('Must include special characters. ');
        pass.placeholder='Check your password';
        pass.style.border='5px solid red';
      }
      }









function emailVal(){
  let emailchk=document.getElementById('email').value.indexOf("@");
  let domain=email.value.slice(emailchk);
if(domain== "@gmail.com"||domain== "@yahoo.com" || domain=="@hotmail.com"){
  location.reload() ;
}
else{
  alert('Domain must be gmail.com, yahoo.com or hotmail.com')
  email.style.border='5px solid red';
  
}

}



    function validation(){
      
        pass.style.border='none';
        email.style.border='none';
        if(email.value.length>0 && pass.value.length>8){
            let passchk=document.getElementById('password').value;
          if(containsUppercase(passchk)){
           
           if(hasSpecialCharacters(passchk)){
            emailVal();

           }
           
         
           
          }
       
        }
        else{
            email.placeholder='Field can not be empty!'
            email.style.border='5px solid red';
            pass.placeholder='Enter at least 8 characters'
            pass.style.border='5px solid red';
        }
    }