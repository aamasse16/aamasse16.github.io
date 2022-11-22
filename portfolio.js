//open and close contact form
function openForm() {
    document.getElementById("myForm").style.display = "block"
}

function closeForm() {
    document.getElementById("myForm").style.display = "none"
}

//slideshow images
var slideIndex = 1
showSlides(slideIndex)

//arrow functionality
function plusSlides(n) {
    showSlides(slideIndex += n)
}

//dots functionality
function currentSlide(n) {
    showSlides(slideIndex = n)
}

//show slides function as mentioned before
function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides")//puts all of "mySlides" into a var array
    var dots = document.getElementsByClassName("dot")//puts all of "dot" into a var array
    if (n > slides.length) {slideIndex=1}//if the # passed to the function (n) is greater than the legth of the array set slideIndex to 1
    if (n < 1) {slideIndex = slides.length}//if the # passed to the function (n) is less than 1 then slideIndex is set to the legth of "slides" array
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"//this sets each element in the "slides" array and sets it to not display
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace (" active", "")//this removes active styling for "dots"
    }
    slides[slideIndex - 1].style.display = "block"//displays selected image in slideshow
    dots[slideIndex - 1].className += " active"//add styling to selected dot
}

//close the contact form when user clicks off it
document.addEventListener("click", function(event) {
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".pop_up_button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false)