function onmouseover_item(Pid) {
    const heart = document.getElementById('heart_' + Pid);
    heart.classList.remove('d-none')


}

function onmouseout_item(Pid) {
    const heart = document.getElementById('heart_' + Pid);
    heart.classList.add('d-none')
}




function navigationSign(id,id2){
    widget  = document.getElementById(id);
    widget.classList.toggle('d-none')

    widget  = document.getElementById(id2);
    widget.classList.toggle('d-none')
}

function signIn(){
    alert("sign in")
    window.location.href = "/index.html";
}
function signUp(){
    alert("signUp")
    window.location.href = "/index.html";
}