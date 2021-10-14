/* Add your JavaScript to this file */

function subbtn(){
    var subbutton = document.querySelector("button");
     console.log(subbutton);
     subbutton.addEventListener("click", getemail);
}

function getemail(){
    var msg1 = "Thank you! Your email address ";
    var msg3 = " has been added to our mailing list!"
    var mgs2 = document.querySelector("input").value;
    var final = msg1.concat(mgs2,msg3);
    var failmsg = "Please enter a valid email address."
    var mgs = document.getElementsByClassName("message");
    if (mgs2 == "")
    {
        mgs.innerHTML += failmsg;
        alert(failmsg);
        return false;
    }
    else{
        mgs.innerHTML += final;
        alert(final);
        return false; 
    }
}



window.addEventListener("DOMContentLoaded",function(){
    subbtn();
})









