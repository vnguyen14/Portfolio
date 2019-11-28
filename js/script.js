// FILTER OF THE PROJECTS
filterSelection("all");
function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show"); 
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function RemoveClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// MODAL - GALLERY IMAGE CODE
let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
  showSlides2(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  showSlides2(slideIndex = n);
  showSlides3(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}

  if (n < 1) {slideIndex = slides.length}

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}


function plusSlides2(n) {
  showSlides2(slideIndex += n);
}
function showSlides2(n) {
  let slides = document.getElementsByClassName("mySlides2");

  if (n > slides.length) {slideIndex = 1}

  if (n < 1) {slideIndex = slides.length}

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}

function plusSlides3(n) {
  showSlides3(slideIndex += n);
}
function showSlides3(n) {
  let slides = document.getElementsByClassName("mySlides3");

  if (n > slides.length) {slideIndex = 1}

  if (n < 1) {slideIndex = slides.length}

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}
// Make the site appear as you scroll
function animateOnSight(before, after) {
  let elems = document.querySelectorAll('.' + before);
  let windowHeight = window.innerHeight;
  for (let i = 0; i < elems.length; i++) 
  {
    let positionFromTop = elems[i].getBoundingClientRect().top;
    if (positionFromTop - windowHeight <= 0) 
    {
      elems[i].className = elems[i].className.replace(
        before,
        after
      );
    }
  }

}//animateOnSight

// View More Hero Button
function ViewMoreButton(){
  let section1 = document.getElementById("about");
  document.documentElement.scrollTop  = section1.offsetTop;
}