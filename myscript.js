function Validate() {
      
        var password = document.f1.password1.value;
        var repassword = document.f1.password2.value;
        
        if (password == repassword) {
            document.getElementById('ki').innerHTML="valid";
        }
            else
            {
            
            document.getElementById('ki').innerHTML="invalid";
       
           
        }
       

    }
    function val()
    {
        var msg;
        if(document.f1.password1.value.length>6)
        msg="good";
        else
        msg="poor";
        document.getElementById('p').innerText=msg;
    }
    function validateemail()
    {
        var x= document.f1.ename.value;
        var atposition=x.indexOf("@");
        var dotposition = x.lastIndexOf(".");
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
        {
            document.getElementById("k").innerHTML="invalid";
            document.getElementById("k").style.color="red";
        }
        else
        document.getElementById("k").innerHTML="valid";
       
    }
    function val1()
    {
        var x=document.f1.pnoo.value;
        var a=/^[7-90-9]{9}/;
        if(x.match(a)){
        document.getElementById('ph').innerHTML="valid";
       
        }else
        document.getElementById('ph').innerHTML="invalid";
        document.getElementById('ph').style.color="red";
                
    }

    function val2()
    {
        var x=document.f1.uname.value;
        var a=/^[A-Za-z0-0_-]{6,12}/;
        if(x.match(a)){
        document.getElementById('u').innerHTML="valid";
        document.getElementById('u').style.color="blue";
        }
        else
        document.getElementById('u').innerHTML="invalid";
        document.getElementById('u').style.color="red";
    }
function dval()
{
    var da=document.getElementById('dof').value;
    var date=new Date(da);
    var yr=Number(date.getFullYear());
    var dd=2000;
    if(yr>=dd){
    document.getElementById('ui').innerHTML="valid";
    
    }
        else
        document.getElementById('ui').innerHTML="invalid";
        document.getElementById('ui').style.color="red";

}
