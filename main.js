var divBox = document.querySelector(".find-store")
function clk() {
    divBox.style.display="block"
}
function clkRemove(){
    divBox.style.display="none"
}

var menuList = document.querySelector(".menu-list")
function menuOpenButton() { 
    menuList.style.left="-1%" ;
}
function menuCloseButton(){
    
    menuList.style.left="-100%";
}
