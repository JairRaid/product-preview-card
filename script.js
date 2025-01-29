function checkWidth(){
    let img = document.querySelector("img");
    
    if (window.innerWidth > 500){
        img.setAttribute('src','./images/image-product-desktop.jpg');
    }else{
        img.setAttribute('src', './images/image-product-mobile.jpg')
    }
}

window.onload = checkWidth;

window.onresize = checkWidth;