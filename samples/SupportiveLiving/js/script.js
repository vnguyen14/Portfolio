// // Class Level variables
// var navbar;
// var logo;
// var navlink
// var btn;
// var sSize = window.innerWidth;
// // console.log(sSize);

// // When the page loads, get the style of this variables
// window.onload = function() {getValuesOnLoad()};

// // When you scroll, excecute this function
// window.onscroll = function() {scrollFunction()};

// // Get the values on page load
// function getValuesOnLoad() {
// 	// Grab the elements
// 	var _navbar = document.getElementById("navbar");
// 	var _logo = document.getElementById("logo");
// 	var _navlink = document.getElementById("navlink");
// 	var _btn = document.getElementById("btn");

// 	// Get their Style
// 	navbar = window.getComputedStyle(_navbar);
//  	logo = window.getComputedStyle(_logo);
//  	navlink = window.getComputedStyle(_navlink);
//  	btn = window.getComputedStyle(_btn);
//  }

// // When the user scrolls down 80px from the top of the document, 
// // resize the navbar's padding and the logo's font size
// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//   	// This changes the values when you scroll
//     if(sSize <= 425){
//       document.getElementById("logo").style.width = "65%";
//       document.getElementById("logo").style.height = "auto";      
//       document.getElementById("btn").style.fontSize = "9.5px";
//       document.getElementById("navlink").style.fontSize = "14px";
//       document.getElementById("navbar").style.padding = "-40px 0";
//     }
//     else{
//       document.getElementById("logo").style.width = "65%";
//       document.getElementById("logo").style.height = "auto";      
//       document.getElementById("btn").style.fontSize = "14px";
//       document.getElementById("navlink").style.fontSize = "18px";
//       document.getElementById("navbar").style.padding = "-40px 0";
//     }

//   } else {
//   	// This brings the value back when you go to the top
//     document.getElementById("navbar").style = navbar;
//     document.getElementById("logo").style = logo;
//     document.getElementById("navlink").style = navlink;
//     document.getElementById("btn").style = btn;
//   }
// }
