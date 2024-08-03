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




// <!-- disable body scroll which navbar is in active -->
$(function () {
	$('.navbar-toggler').click(function () {
		$('body').toggleClass('noscroll');
	})
});
// disable body scroll which navbar is in active





/* CONTACT FORM */

$(document).ready(function(){

	$.validator.addMethod("alphabetsonly", function(value, element) {
		return this.optional(element) || /^[A-Za-z\s]+$/.test(value);
	}, "Please enter only alphabets.");

	$.validator.addMethod("phoneFormat", function(value, element) {
		// Check if the phone number starts with a + followed by numbers
		return this.optional(element) || /^\+\d[\d\s]*$/.test(value);
	}, "Please enter a valid phone number with a country code starting with + and only numbers.");

    $("#submit-form").validate({

		onfocusout: function(element) {
            this.element(element); // Validate the element on blur
        },

        rules:{
            name:{
                required:true,
				alphabetsonly: true,
                minlength:2,
				maxlength:50
            },
            email:{
                required:true,
                email:true
            },
            message:{
                required:true,
                minlength:2
            },
			phone:{
				// number:true,
				phoneFormat: true,
				minlength: 4
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
				required:"Please enter a message"
			},
			phone: {
				phoneFormat: "Please enter a valid phone number with a country code starting with +, containing only numbers and spaces."
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

	$.validator.addMethod("valueNotEquals", function(value, element, arg){
		return arg !== value;
	   }, "Value must not equal arg.");

	$.validator.addMethod("alphabetsonly", function(value, element) {
		return this.optional(element) || /^[A-Za-z\s]+$/.test(value);
	}, "Please enter only alphabets.");

	$.validator.addMethod("phoneFormat", function(value, element) {
		// Check if the phone number starts with a + followed by numbers
		return this.optional(element) || /^\+\d[\d\s]*$/.test(value);
	}, "Please enter a valid phone number with a country code starting with + and only numbers.");

    $("#submit-hire-form").validate({

		onfocusout: function(element) {
            this.element(element); // Validate the element on blur
        },

        rules:{
            name:{
                required:true,
				alphabetsonly: true,
                minlength:2,
				maxlength:50
            },
            email:{
                required:true,
                email:true
            },
            message:{
                required:true,
                minlength:2
            },
			phone:{
				phoneFormat: true,
				minlength: 5,
			},
			subject:{
				valueNotEquals: "default"
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
			},
			phone: {
				phoneFormat: "Please enter a valid phone number with a country code starting with +, containing only numbers and spaces.",
				minlength: "Please enter a valid mobile number"
			},
			subject:{
				valueNotEquals: "Please select a service"
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