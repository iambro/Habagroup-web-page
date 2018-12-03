//Sticky nav for desktop
window.onscroll = function() {
    stickyFunction()
};

function colorLinks(hex) {
    const linksBox = document.querySelector('.nav-bar');
    const links = linksBox.getElementsByTagName("a");
    for(var i=0; i < links.length; i++) {
        links[i].style.color = hex;
    }
}

const mainNavBox = document.querySelector(".main-nav-box");
const subNavBox = document.querySelector(".sub-nav-box");
const sticky = subNavBox.offsetTop;
function stickyFunction() {
    if ((window.pageYOffset > sticky) & window.innerWidth > 768) {
      mainNavBox.classList.add("sticky-main")
      subNavBox.classList.add("sticky-sub")
      colorLinks("#666666");
    } else if ((window.pageYOffset < sticky) & window.innerWidth > 768) {
      mainNavBox.classList.remove("sticky-main")
      subNavBox.classList.remove("sticky-sub")
      colorLinks("#ffffff");
    }
}

//Hamburger menu
$('.mobile-nav-icon').click(function(element){
    const nav = $('.main-nav');
    const subnav = $('.sub-nav');
    const navBox = $('.main-nav-box');
    const subnavBox = $('.sub-nav-box');
    const mainLi = $('.main-nav li a');
    const subLi = $('.sub-nav li a');
    const icon = $('.mobile-nav-icon i');

    //Opens and closes the menu
    if ($(window).width() < 768){
        nav.slideToggle(10);
        subnav.slideToggle(10);
    }


    //Changes icon states of the menu button
    if (icon.hasClass('ion-md-menu')) {
        icon.addClass('ion-md-close');
        icon.removeClass('ion-md-menu');
        nav.css("display", "flex");
        subnav.css("display", "flex");
        navBox.css("background-color", "#fff");
        subnavBox.css("background-color", "#fff");
        mainLi.css("color", "#666");
        subLi.css("color", "#666");
        icon.css("color", "#666");
        navBox.css("padding-bottom", "0");
        subnavBox.css("padding-top", "0");
    } else {
        icon.addClass('ion-md-menu');
        icon.removeClass('ion-md-close');
        nav.css("display", "none");
        subnav.css("display", "none");
        navBox.css("background-color", "#00000070");
        subnavBox.css("background-color", "transparent");
        mainLi.css("color", "#fff");
        subLi.css("color", "#fff");
        icon.css("color", "#fff");
        navBox.css("padding-bottom", "1rem");
        subnavBox.css("padding-top", "1rem");
    }
});


$(window).resize(function(){
    const nav = $('.main-nav');
    const subnav = $('.sub-nav');
    const icon = $('.mobile-nav-icon i');

    if ($(window).width() > 767){
        nav.css("display", "flex");
        subnav.css("display", "flex");
        icon.addClass('ion-md-close');
        icon.removeClass('ion-md-menu');
    } else {
        nav.css("display", "none");
        subnav.css("display", "none");
        icon.addClass('ion-md-menu');
        icon.removeClass('ion-md-close');
    }

});


//ScrollingTo
function scrollTo(element) {
    if (window.innerWidth > 768) {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: element.offsetTop - 80,
          }); 
    } else {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: element.offsetTop - 60,
          });
    }
  }
  
  document.querySelector(".button").addEventListener('click', () => {
    scrollTo(document.getElementById("fruits"));
  });

