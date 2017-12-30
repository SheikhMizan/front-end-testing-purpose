$(function() {
    // Get the form.
    var form = $('#form');

    // get the datas
    var firstname = $('#fname');
    var lastname = $('#lname');
    var phone = $('#phone');
    var address = $('#address');
    var email = $('#email');

    // Get the messages div.
    var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(event) {
	    // Stop the browser from submitting the form.
	    event.preventDefault();

	    // Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
		    type: 'POST',
		    url: $(form).attr('action'),
		    data: formData,
		    success: function(data){ 
			 //do other stuff
			   $('$myform').addClass('submited');
			}

		});

	 window.onbeforeunload = function(e) {
		 if ( $('#myform').hasClass('submited') ) {
		    $('.text-success').show();
		        // Clear the form.
				    $('#fname').val('');
				    $('#lname').val('');
				    $('#phone').val('');
				    $('#address').val('');
				    $('#email').val('');

		 } else{
		  $('.text-success').hide();
		  $('.text-success').show();
		 };
		};

});
});


	