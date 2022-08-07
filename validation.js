function isname(){
    var y = document.getElementById("fName").value;
    var z = 0;
    z = /\d/.test(y);
    if (z == 0 )
    {
        document.getElementById("nameOneWarning").innerHTML= ""
    }
    else{
        document.getElementById("nameOneWarning").innerHTML= "invalid name"
    }
    
}

function issname(){
    var letters = /^[A-Za-z]+$/;
    var y = document.getElementById("fName").value;
    z=y.length
    if(z == 0)
    {
        document.getElementById("nameOneWarning").innerHTML= "name cannot be empty"
    } 
    else if(/^[A-Za-z ]+$/.test(y))
    {
        document.getElementById("nameOneWarning").innerHTML= ""
    }
    else{
        document.getElementById("nameOneWarning").innerHTML= "invalid name"
    }   
}

function issnametwo(){
    var y = document.getElementById("scndName").value;
    z=y.length
    if(z == 0)
    {
        document.getElementById("nametwoWarning").innerHTML= "name cannot be empty"
    } 
    else if(/^[A-Za-z ]+$/.test(y))
    {
        document.getElementById("nametwoWarning").innerHTML= ""
    }
    else{
        document.getElementById("nametwoWarning").innerHTML= "invalid name"
    }   
}


function isnametwo(){
    var y = document.getElementById("scndName").value;
    var z= 0
    z = /\d/.test(y);
    if(z == 0)
    {
        document.getElementById("nametwoWarning").innerHTML= ""
    }
    else
    {
        document.getElementById("nametwoWarning").innerHTML= "invalid name"
    }
}
  


function ValidateEmail() 
{
    var y = document.getElementById("email").value;
    var len = y.length;
    
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(y) || len == 0)
    {
        document.getElementById("emailWarnig").innerHTML=""
    }
    else{
        document.getElementById("emailWarnig").innerHTML="Enter email format correctly"
    }
}

function isn()
{
    var ph=document.getElementById("phone").value;
    var z= isNaN(ph)
    if(z == 1)
    {
        document.getElementById.innerHTML="phone must be numeric !"
    }
    else{
        document.getElementById.innerHTML=""
    }
}

function isn(){
    var y = document.getElementById("phone").value;
    z=y.length
    if(z == 0)
    {
        document.getElementById("phoneWarnig").innerHTML= "name cannot be empty"
    } 
    else if(/^[0-9]+$/.test(y))
    {
        document.getElementById("phoneWarnig").innerHTML= ""
    }
}
function isten(){
    if (z != 10)
    {
        document.getElementById("phoneWarnig").innerHTML= "phone number must be 10 digit"
    }  
    else{
        document.getElementById("phoneWarnig").innerHTML=""
    }
}    


