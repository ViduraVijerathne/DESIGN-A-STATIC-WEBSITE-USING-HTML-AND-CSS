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

function AdminsignIn(){
    window.location.href = "/pages/admin/adminPanel.html";   
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

var selectedChangeUserPanelTab ='dashbord';
function changeUserPanelTab(id){

   
    const selectedTab = document.getElementById(selectedChangeUserPanelTab);
    selectedTab.classList.remove('bg-black')
    selectedTab.classList.remove('text-white')
    selectedTab.classList.add('border')
    selectedTab.classList.add('border-opacity-10')
    selectedTab.classList.add('border-dark')

    if (id == "MyAccount"){
        document.getElementById('Aside_profile_View').classList.add('d-none')
    }
    if (selectedChangeUserPanelTab == "MyAccount"){
        document.getElementById('Aside_profile_View').classList.remove('d-none')
    }
    const nedTab = document.getElementById(id);
    nedTab.classList.add('bg-black')
    nedTab.classList.add('text-white')
    nedTab.classList.remove('border')
    nedTab.classList.remove('border-opacity-10')
    nedTab.classList.remove('border-dark')
    
    

    

    const selectedWindow = document.getElementById(selectedChangeUserPanelTab+"_Comporent");
    selectedWindow.classList.add('d-none')

    const newWindow = document.getElementById(id+"_Comporent");
    newWindow.classList.remove('d-none')

    selectedChangeUserPanelTab = id

    


}


var selectedChangeUserPanelTab_sm ='dashbord';
function changeUserPanelTab_sm(id){
    
   
    const selectedTab = document.getElementById(selectedChangeUserPanelTab_sm+"_sm");
    selectedTab.classList.remove('bg-black')
    selectedTab.classList.remove('text-white')
    selectedTab.classList.add('border')
    selectedTab.classList.add('border-opacity-10')
    selectedTab.classList.add('border-dark')

    if (id == "MyAccount"){
        document.getElementById('Aside_profile_View').classList.add('d-none')
    }
    if (selectedChangeUserPanelTab_sm == "MyAccount"){
        document.getElementById('Aside_profile_View').classList.remove('d-none')
    }
    const nedTab = document.getElementById(id+"_sm");
    nedTab.classList.add('bg-black')
    nedTab.classList.add('text-white')
    nedTab.classList.remove('border')
    nedTab.classList.remove('border-opacity-10')
    nedTab.classList.remove('border-dark')
    
    

    

    const selectedWindow = document.getElementById(selectedChangeUserPanelTab_sm+"_Comporent");
    selectedWindow.classList.add('d-none')

    const newWindow = document.getElementById(id+"_Comporent");
    newWindow.classList.remove('d-none')

    selectedChangeUserPanelTab_sm = id

    


}


function updateProfileIMG(){
    var viwe = document.getElementById("profile_img");
    const file = document.getElementById('profileImg_upload')

    file.onchange = function(){
        var file1 = this.files[0];
        var url = window.URL.createObjectURL(file1);
        viwe.src = url;
    }
}

function changeColor(){
    const color_code = document.getElementById('color_code');
    const color_input = document.getElementById('color_chooser').value;

    color_code.value = color_input;
}

var colorIDIndex = 0
function colorAdd(){
    colorIDIndex += 1
    const color_name = document.getElementById('color_name').value;
    const color_code = document.getElementById('color_code').value;
    const color_input = document.getElementById('color_chooser').value;

    if (color_code.length == 0){

    }

    

    var card = document.getElementById('colorCard');
    var exit_inner =card.innerHTML;

    var inner = '<div class="col-1 border bg-light rounded ms-3" id="colorCard_'+colorIDIndex+'" > <div class="row ms-1 mt-1"> <div class="col-10 offset-2"><div class=" rounded-circle" style="height: 25px; width: 25px; background-color:'+color_code+';"></div></div></div><div class="row fw-bold text-capitalize text-center"><label>'+color_name+' </label></div><div class="row fw-bold text-capitalize text-center text-black-50"><label>'+color_code+'</label></div><div class="row text-center  "><button class="btn" onclick="removeColor('+colorIDIndex+')"><i class="bi bi-trash-fill"></i></button></div><div class="row p-2"></div></div>'

    card.innerHTML = exit_inner+inner;


}

function removeColor(id){
    var card = document.getElementById('colorCard');
    var cardItem = document.getElementById('colorCard_'+id);
    card.removeChild(cardItem)

}
var selected = 'OverView'
function LeftBtnNavigation(id){
    

    var selectingBtn_id  = id + "BTN"
    var selectedBtn_id = selected+"BTN"
    var selectingTab_id = id + "Tab";
    var selectedTab_id = selected + "Tab";
    
    selected = id;

    var selectedBtn = document.getElementById(selectedBtn_id);
    selectedBtn.classList.remove('btn-dark')
    var selectingBtn = document.getElementById(selectingBtn_id)
    selectingBtn.classList.add('btn-dark')

    var selectingTab = document.getElementById(selectingTab_id);
    selectingTab.classList.remove("d-none")

    var  selectednTab = document.getElementById(selectedTab_id);
    selectednTab.classList.add("d-none")

    


}

