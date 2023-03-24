$(document).ready(function() {

    //cheetah images for slideshow
    const images = {
        "1": {
            "url": "images/cheetah_1.jpg",
            "alt": "Cheetah image 1",
        },
        "2": {
            "url": "images/cheetah_2.jpg",
            "alt": "Cheetah image 2",
        },
        "3": {
            "url": "images/cheetah_3.jpg",
            "alt": "Cheetah image 3",
        },
        "4": {
            "url": "images/cheetah_4.jpg",
            "alt": "Cheetah image 4",
        },
        "5": {
            "url": "images/cheetah_5.jpg",
            "alt": "Cheetah image 5",
        },
        "6": {
            "url": "images/cheetah_6.jpg",
            "alt": "Cheetah image 6",
        }
    }

    //get slideshow and gallery containers
    let slideshow = document.getElementById("slideshow-image-container");
    let gallery = document.getElementById("image-gallery-container");

    //add images to slideshow and gallery
    for(var id in images) {
        let slideshow_image = document.createElement("img");
        slideshow_image.setAttribute("src", images[id]["url"]);
        slideshow_image.setAttribute("alt", images[id]["alt"]);
        slideshow_image.setAttribute("class", "slideshow-image");
        slideshow.appendChild(slideshow_image);

        let gallery_image = document.createElement("img");
        gallery_image.setAttribute("src", images[id]["url"]);
        gallery_image.setAttribute("alt", images[id]["alt"]);
        gallery_image.setAttribute("class", "gallery-image");
        gallery.appendChild(gallery_image);
    }

    //set up variables for slideshow
    let current_slide_number = 0;
    let slideshow_images = $("#slideshow-image-container img");
    let num_total_slides = slideshow_images.length;
    console.log("Ready for " + num_total_slides + " slide slideshow!");

    //hide all but first image
    slideshow_images.not(":first-child").hide();

    //trigger when click previous button
    $("#previous-button").click(function() {
        previous_slide();
    });

    //trigger when click next button
    $("#next-button").click(function() {
        next_slide();
    });

    //trigger when press left or right arrow
    $(document).keydown(function(event) {
        if (event.which == 37) {
            previous_slide();
        } else if (event.which == 39) {
            next_slide();
        }
    });

    //decrements counter
    function previous_slide() {
        slideshow_images.eq(current_slide_number).hide();
        if (current_slide_number == 0) {
            current_slide_number = num_total_slides - 1;
        } else {
            current_slide_number--;
        }
        console.log("PREVIOUS: new slide number: " + current_slide_number);
        slideshow_images.eq(current_slide_number).show();
    }

    //increments counter
    function next_slide() {
        slideshow_images.eq(current_slide_number).hide();
        if (current_slide_number == num_total_slides - 1) {
            current_slide_number = 0;
        } else {
            current_slide_number++;
        }
        console.log("NEXT: new slide number: " + current_slide_number);
        display_slide(current_slide_number);
        slideshow_images.eq(current_slide_number).show();
    }

    //displays new slide 
    function display_slide(slide_to_display) {
        slideshow_images.eq(current_slide_number).hide();
        current_slide_number = slide_to_display;
        slideshow_images.eq(current_slide_number).show();
        console.log("DISPLAY: " + slide_to_display);
    }

    $(".gallery-image").on("click", function() {
        let slide_num = $(this).attr("alt").split(" ").splice(-1);
        display_slide(slide_num - 1);
    })
});
