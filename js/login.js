$(document).on('click', '.toggle-password', function () {

    $(this).toggleClass("fa-eye fa-eye-slash");

    var input = $("#pass_log_id");
    input.attr('type') === 'password' ? input.attr('type', 'text') : input.attr('type', 'password')
});

$(document).ready(function () {
    $('#loginform').validate({
        rules: {
            email: {
                required: true
            },
            password:{
                required:true
            }
        },
        messages: {
            email: {
                required: "PLease provide your email or username"
            },
            password: {
                required: "This field is required"
            }
        }
    });

    $('#submit').click(function () {
        $('#loginform').submit()  
        if($('#loginform').valid()){
            window.location = "home.html";
        }
    });
});
// function login_function() {
//     // e.preventDefault();
//     var email = document.loginform.email.value;
//     var password = document.loginform.password.value;
//     // alert("login form")
//     var error = false;
//     if (password.length == 0) {
//         // console.log("error")
//         document.getElementById("errorpwd").innerHTML = "Invalid your password";
//         // return false;
//         error = false;
//     }

//     if (email.indexOf('@') <= 0) {
//         document.getElementById("erroremail").innerHTML = "Invalid your Email Address";
//         // return false;
//         error = false;
//     }
//     if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
//         document.getElementById('erroremail').innerHTML = "Invalid your Email Address 123";
//         // return false;
//         error = false;
//     }
//     if(error){
//         alert("error");
//     }



// }

