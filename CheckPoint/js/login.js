/**
 * Created by Maxwell on 11/19/2014.
 */
//main
var submit = document.getElementById("submit-btn");
var firstName,lastName,email,password,passwordRetype,answer,willRecord;
submit.onclick=function(){
    firstName=document.getElementById("inputFirst").value;
    lastName=document.getElementById("inputLast").value;
    email=document.getElementById("inputEmail").value;
    password=document.getElementById("inputPassword").value;
    passwordRetype=document.getElementById("inputRetypePassword").value;
    willRecord=true;
    answer="";
    if(!namesOk(firstName,lastName)){
        if(willRecord==true)answer+="We can't sign you up because:\n";
        willRecord=false;
        answer+="You did not enter a valid first/last name!\n";
    }
    if(!emailOk(email)){
        if(willRecord==true)answer+="We can't sign you up because:\n";
        willRecord=false;
        answer+="You did not enter a valid email!\n";
    }
    if(!passwordOk(password,passwordRetype)){
        if(willRecord==true)answer+="We can't sign you up because:\n";
        willRecord=false;
        answer+="Your passwords don't match!";
    }
    if(willRecord) answer+="Your all set! Have fun :)";
    alert(answer);
};











//functions
var namesOk=function(firstName,lastName){
    if(/^([a-zA-Z])$/.test(firstName)&&(/^([a-zA-Z])$/.test(lastName)))return true;
    return false;
};
var emailOk=function(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
var passwordOk=function(password,password2){
    if(password===password2)return true;
    return false;
};