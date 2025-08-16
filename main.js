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


// Product Page 1:

var MainImg = document.getElementById('mainImg');
var smallimg = document.getElementsByClassName('small-img');

smallimg[0].onclick = function(){
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    MainImg.src = smallimg[3].src;
}
smallimg[4].onclick = function(){
    MainImg.src = smallimg[4].src;
}
smallimg[5].onclick = function(){
    MainImg.src = smallimg[5].src;
}
