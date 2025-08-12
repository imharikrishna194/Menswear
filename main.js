// Find Store Visibility
const divBox = document.querySelector(".find-store")
function clk() {
    divBox.style.top="1%"
};
function clkRemove(){
    divBox.style.top="-100%";
};

// Toggle mobile menu 
const menuList = document.querySelector(".nav-links")
//close menu when the nav link is clicked
function menuClose(){
    menuList.style.left="-100%"
};
//Open menu when the open button is clicked
function menuOpenButton() { 
    menuList.style.left="-1%" ;
};
//close menu when the close button is clicked
function menuCloseButton(){
    
    menuList.style.left="-100%";
};

// Size Button Function
const sizeButtonSection2 = document.querySelector(".button-section2");
const sizeButtonSection1 =  document.querySelector(".button-section1");

function viewButtonSection2() { 
    sizeButtonSection2.style.display="block" ;
    sizeButtonSection1.style.display="none"

};
function viewButtonSection1(){
    sizeButtonSection1.style.display="block" ;
    sizeButtonSection2.style.display="none" ;
    
};
