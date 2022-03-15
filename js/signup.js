
$(document).ready(function () {
    $('#signupform').validate({
        rules: {
            email: {
                required: true
            },
            password: {
                required: true
            },
            firstname: {
                required: true
            },
            lastname: {
                required: true
            },
            purpose: {
                required: true
            }
        },
        messages: {
            email: {
                required: "Please provide your email or username"
            },
            password: {
                required: "Please provide your password"
            },
            firstname: {
                required: "Please provide your firstname"
            },
            lastname: {
                required: "Please provide your lastname"
            },
            purpose: {
                required: "Please provide your purpose"
            }
        },
        errorPlacement: function (error, element) {
            if (element.is(":radio")) {
                error.appendTo(element.parents('.radio-container'));
            }
            else { // This is the default behavior 
                error.insertAfter(element);
            }
        }
    });

    $('#submit').click(function () {
        $('#signupform').submit()  
        if($('#signupform').valid()){
            window.location = "signup-step-2.html";
        }
    });
});