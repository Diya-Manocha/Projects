
document.addEventListener("DOMContentLoaded", function() {
    // Function to start the slider autoplay
    function startSliderAutoplay() {
        var slider = document.querySelector('.uk-slider-container');

        // Check if slider exists
        if (slider) {
            var sliderComponent = UIkit.slider(slider);

            // Start autoplay
            sliderComponent.startAutoplay();
        }
    }

    // Function to stop the slider autoplay
    function stopSliderAutoplay() {
        var slider = document.querySelector('.uk-slider-container');

        // Check if slider exists
        if (slider) {
            var sliderComponent = UIkit.slider(slider);

            // Stop autoplay
            sliderComponent.stopAutoplay();
        }
    }

    // Intersection Observer to detect when the slider section is in view
    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the element is visible
    };

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            // If the slider section is in view, start autoplay
            if (entry.isIntersecting) {
                startSliderAutoplay();
            } else {
                stopSliderAutoplay();
            }
        });
    }, options);

    // Observe the slider section
    var target = document.querySelector('.partners');
    observer.observe(target);
});


const buttons = document.querySelectorAll('.animal');

// Get the image container
const imageContainer = document.querySelector('.cowimagefood img');

// Add event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', function() {
    // Remove the 'active' class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add the 'active' class to the clicked button
    this.classList.add('active');
    
    // Get the image source associated with the clicked button from data attribute
    const imgSrc = this.getAttribute('data-image');
    
    // Set the image source of the image container to the clicked button's image source
    imageContainer.src = imgSrc;
  });
});

var div = document.getElementById('rawslidetext');
var display = 0;

function hideshow(){
    if(display == 1){
        div.style.display = 'block';
        display = 0
    }
    else{
        div.style.display = 'none';
        display = 1
    }
}

var div = document.getElementById('rawslidetext2');
var display = 0;

function hideshow123(){
    if(display == 1){
        div.style.display = 'block';
        display = 0
    }
    else{
        div.style.display = 'none';
        display = 1
    }
}

// var div = document.getElementById('rawslidetext3');
// var display = 0;

// function hideshow(){
//     if(display == 1){
//         div.style.display = 'block';
//         display = 0
//     }
//     else{
//         div.style.display = 'none';
//         display = 1
//     }
// }

// var div = document.getElementById('rawslidetext4');
// var display = 0;

// function hideshow(){
//     if(display == 1){
//         div.style.display = 'block';
//         display = 0
//     }
//     else{
//         div.style.display = 'none';
//         display = 1
//     }
// }
// var div = document.getElementById('rawslidetext5');
// var display = 0;

// function hideshow(){
//     if(display == 1){
//         div.style.display = 'block';
//         display = 0
//     }
//     else{
//         div.style.display = 'none';
//         display = 1
//     }
// }
// var div = document.getElementById('rawslidetext6');
// var display = 0;

// function hideshow(){
//     if(display == 1){
//         div.style.display = 'block';
//         display = 0
//     }
//     else{
//         div.style.display = 'none';
//         display = 1
//     }
// }
// var div = document.getElementById('rawslidetext7');
// var display = 0;

// function hideshow(){
//     if(display == 1){
//         div.style.display = 'block';
//         display = 0
//     }
//     else{
//         div.style.display = 'none';
//         display = 1
//     }
// }

