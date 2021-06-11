
var result;
function pass(){
    var randomchars='!@#$%^&_<>1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var op='';
    for (let i = 0; i<randomchars.length; i++) {
        op+=randomchars.charAt(Math.floor(Math.random()*randomchars.length));
        if (op.length>11) {
            
        }
        else{
            op+=randomchars.charAt(Math.floor(Math.random()*randomchars.length));
        }
    }
    result=op.substring(0,12);
    var text='(Click on suggested password)';
    document.getElementById('chars').innerHTML=result;
    document.getElementById('suggestion-text').innerHTML=text;

}

function printchar(){
    char=result.substring(0,12);
    document.getElementById('password').value=char;
}











var state=true;

function toggle(){
    const password= document.querySelector('#password');
    var icon=document.getElementById('icon');

    if(state){
        document.getElementById("icon").className="fa fa-eye";
        password.setAttribute("type","text");
        state=false;
    }
    else{
        document.getElementById("icon").className="fa fa-eye-slash";
        password.setAttribute("type","password");
        state=true;
    }
    
    console.log(icon);
}
