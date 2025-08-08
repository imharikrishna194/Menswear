const divBox = document.querySelector(".find-store")
function clk() {
    divBox.style.display="block"
    divBox.style.transform= translateY("-100px");
}
function clkRemove(){
    divBox.style.display="none"
}

const menuList = document.querySelector(".nav-links")
function menuOpenButton() { 
    menuList.style.left="-1%" ;
}
function menuCloseButton(){
    
    menuList.style.left="-100%";
}


const sizeButtonSection2 = document.querySelector(".button-section2");
const sizeButtonSection1 =  document.querySelector(".button-section1");

function viewButtonSection2() { 
    sizeButtonSection2.style.display="block" ;
    sizeButtonSection1.style.display="none"

}
function viewButtonSection1(){
    sizeButtonSection1.style.display="block" ;
    sizeButtonSection2.style.display="none" ;
    
}
