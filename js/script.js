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

function viewProduct(id){
    const mainDiv = document.getElementById(id);
    mainDiv.classList.remove('col-lg-4');
    mainDiv.classList.add('col-lg-12');
    mainDiv.focus();

    const imageDiv = document.getElementById('product_img_'+id);
    imageDiv.classList.add('d-none')

    const carosal = document.getElementById('product_carosal_'+id);
    carosal.classList.remove('d-none')

    const shortDescription = document.getElementById('product_shortDescription_'+id)
    shortDescription.classList.add('d-none')

    const longDescription = document.getElementById('product_longDescription_'+id);
    longDescription.classList.remove('d-none');

    const purchasDetails = document.getElementById('product_purchasDetails_'+id);
    purchasDetails.classList.remove('d-none')
}

function closeProduct(id){
    const mainDiv = document.getElementById(id);
    mainDiv.classList.remove('col-lg-12');
    mainDiv.classList.add('col-lg-4');

    const imageDiv = document.getElementById('product_img_'+id);
    imageDiv.classList.remove('d-none')

    const carosal = document.getElementById('product_carosal_'+id);
    carosal.classList.add('d-none')

    const shortDescription = document.getElementById('product_shortDescription_'+id)
    shortDescription.classList.remove('d-none')

    const longDescription = document.getElementById('product_longDescription_'+id);
    longDescription.classList.add('d-none');

    const purchasDetails = document.getElementById('product_purchasDetails_'+id);
    purchasDetails.classList.add('d-none')

}

function toggleCart(){
    document.querySelector('.sidecart').classList.toggle('open-cart');
    
  }

