function submitFunction(){

    var a = namecheck();
    var b= mailcheck();
    var c= mobcheck();
    var d=gendercheck();
    var e=Qcheck();
    var f=Echeck();
    var g= Lcheck();
    if(a && b && c && d && e && f && g)
    return true 
    else 
    return false 
}

function namecheck(){
    var fname = document.getElementById("fName").value;
    var lname = document.getElementById("lName").value;
    var exp = "^[A-Z]{1}[A-Za-z]{2,}$"
    var err = false;

    if(!fname.match(exp)){
        err = true;
        document.getElementById("ferr").innerHTML = "Please Enter a Valid First Name ";
    }
    if(!lname.match(exp)){
        err = true;
        document.getElementById("lerr").innerHTML = "Please Enter a Last Name";
    }
    return !err
}

function mailcheck(){
    var ename =document.getElementById("Mailid").value;
    var exp = "^[A-Za-z0-9._%+-]+[@]{1}[A-Za-z0-9.-]+[.]{1}[A-Za-z]{2,4}$"

    if(!ename.match(exp))
    {
        document.getElementById("merror").innerHTML="Please Enter a Valid Id"
        return false

    }
    else
    return true
}
function mobcheck()
{
    var mob=document.getElementById("mobi").value;
    var exp="^[6-9]{1}[0-9]{9}";
    if(!mob.match(exp))
    {
        document.getElementById("moberror").innerHTML="Please Enter a Valid Phone Number"
        return false

    }
    else
    return true
}
function gendercheck()
{
    var ele= document.getElementsByName("gender")
    var err=true
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) {
            err = false;
        }
    }
    if(err)document.getElementById("Gerror").innerHTML = "Please Select Gender"
    return !err

}
function Qcheck(){
    
        var state = document.getElementById("state").value;
        if(state == "NONE"){
            document.getElementById("Qerror").innerHTML = "Please Select Qualification"
            return false
        }else return true
    }
    
function Echeck(){
    var err = true
    var ele = document.getElementsByName("Exp")
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) {
            err = false;
        }
    }
    if(err)document.getElementById("Error").innerHTML = "Please Select Experience"
    return !err

}
function Lcheck(){
    var stat = document.getElementById("stat").value;
    if(stat == "NONE"){
        document.getElementById("selectError").innerHTML = "Please Select a City"
        return false
    }else return true

}