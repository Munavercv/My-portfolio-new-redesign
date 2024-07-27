/* typig-text */
	const typedTextSpan = document.querySelector(".typed-text");
	const cursorSpan = document.querySelector(".cursor");

	const textArray = ["Web Designer", "Graphic Designer", "Freelancer"];
	const typingDelay = 200;
	const erasingDelay = 10;
	const newTextDelay = 100; // Delay between current and next text
	let textArrayIndex = 0;
	let charIndex = 0;

	function type() {
		if (charIndex < textArray[textArrayIndex].length) {
			if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
			typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
			charIndex++;
			setTimeout(type, typingDelay);
		} else {
			cursorSpan.classList.remove("typing");
			setTimeout(erase, newTextDelay);
		}
	}

	function erase() {
		if (charIndex > 0) {
			// add class 'typing' if there's none
			if (!cursorSpan.classList.contains("typing")) {
				cursorSpan.classList.add("typing");
			}
			typedTextSpan.textContent = textArray[textArrayIndex].substring(0, 0);
			charIndex--;
			setTimeout(erase, erasingDelay);
		} else {
			cursorSpan.classList.remove("typing");
			textArrayIndex++;
			if (textArrayIndex >= textArray.length) textArrayIndex = 0;
			setTimeout(type, typingDelay);
		}
	}

	document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
		if (textArray.length) setTimeout(type, newTextDelay + 250);
	});
/* typig-text */

/* MOVE TOP */
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () {
            scrollFunction()
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("movetop").style.display = "block";
            } else {
                document.getElementById("movetop").style.display = "none";
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
/* MOVE TOP */



jQuery.noConflict();
jQuery(document).ready(function($){
								
							
function lightboxPhoto() {
	
	jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
			animationSpeed:'fast',
			slideshow:5000,
			theme:'light_rounded',
			show_title:false,
			overlay_gallery: false
		});
	
	}
	
		if(jQuery().prettyPhoto) {
	
		lightboxPhoto(); 
			
	}
	
	
if (jQuery().quicksand) {

 	// Clone applications to get a second collection
	var $data = $(".portfolio-area").clone();
	
	//NOTE: Only filter on the main portfolio page, not on the subcategory pages
	$('.portfolio-categ li').click(function(e) {
		$(".filter li").removeClass("active");	
		// Use the last category class as the category to filter by. This means that multiple categories are not supported (yet)
		var filterClass=$(this).attr('class').split(' ').slice(-1)[0];
		
		if (filterClass == 'all') {
			var $filteredData = $data.find('.portfolio-item2');
		} else {
			var $filteredData = $data.find('.portfolio-item2[data-type=' + filterClass + ']');
		}
		$(".portfolio-area").quicksand($filteredData, {
			duration: 600,
			adjustHeight: 'auto'
		}, function () {

				lightboxPhoto();
						});		
		$(this).addClass("active"); 			
		return false;
	});
	
}//if quicksand

});







/* CONTACT FORM */

$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            name:{
                required:true,
                minlength:2
            },
            email:{
                required:true,
                email:true
            },
            message:{
                required:true,
                minlength:2
            }

        },
        messages:{
            name:{
               required:"Please Enter your name",
            }
            
        }
    })
	
})



// form submit
$("#submit-form").submit(function(e){
	e.preventDefault();
	if($("#submit-form").valid()){
		$.ajax({
			url:"https://script.google.com/macros/s/AKfycbx5YlflBsuNGVq9pPwNg63B73tjfopnZskI-sHqNjUU_AuN5rjYk_yqYPzhHs6FV7si/exec",
			data:$("#submit-form").serialize(),
			method:"post",
			success:function (response){
				alert("Form submitted successfully");
				window.location.reload();
				//window.location.href="https://google.com"
			},
			error:function (err){
				alert("Something Error");
			}
		});
	}
});

/* CONTACT FORM */



/* HIRE FORM */
$(document).ready(function(){
    $("#submit-hire-form").validate({
        rules:{
            name:{
                required:true,
                minlength:2
            },
            email:{
                required:true,
                email:true
            },
            message:{
                required:true,
                minlength:2
            }

        },
        messages:{
            name:{
               required:"Please Enter your name",
            },
			email:{
				required:"Please Enter your email"
			},
            message:{
				required:"Enter a message"
			}
        }
    })
	
})



/*$("#submit-hire-form").submit((e)=>{
	e.preventDefault()
	$.ajax({
		url:"https://script.google.com/macros/s/AKfycbw2mB87WA5sKXhyYZjwMBTuWX9e5HiMl6nuL8BzIMS-Evsekc_kyTlzUqXO2GZixwV95w/exec",
		data:$("#submit-hire-form").serialize(),
		method:"post",
		success:function (response){
			alert("Form submitted successfully")
			window.location.reload()
			//window.location.href="https://google.com"
		},
		error:function (err){
			alert("Something Error")

		}
	})
})*/

$("#submit-hire-form").submit(function(e){
	e.preventDefault();
	if($("#submit-hire-form").valid()){
		$.ajax({
			url:"https://script.google.com/macros/s/AKfycbw2mB87WA5sKXhyYZjwMBTuWX9e5HiMl6nuL8BzIMS-Evsekc_kyTlzUqXO2GZixwV95w/exec",
			data:$("#submit-hire-form").serialize(),
			method:"post",
			success:function (response){
				alert("Form submitted successfully");
				window.location.reload();
				//window.location.href="https://google.com"
			},
			error:function (err){
				alert("Something Error");
			}
		});
	}
});
/* HIRE FORM */