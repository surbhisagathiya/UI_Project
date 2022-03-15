$(document).ready(function () {

    $('#submit').click(function () {
        var checked = $("#step2form .checkbox:checked").length;
        var isValid = checked > 0;
        $("#spnError")[0].style.display = isValid ? "none" : "block";

    });
    $(".checkbox").change(function () {
        var checked = $("#step2form .checkbox:checked").length;
        var isValid = checked > 0;
        $("#spnError")[0].style.display = isValid ? "none" : "block";
    });
});