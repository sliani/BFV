jQuery(document).ready(function ($) {

    function emailChecker() {
        var email_input = $('in#input_1_4');

        email_input.focusout(function () {
            var value = $(this).val();
            if (value.index("@") < 0) {
                $(this).css('border', 'solid 3px red');
            } else {
                $(this).css('border', 'solid 3px green');
            }
        });
    }

    emailChecker();

    var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    $('[id="email"]').change(function () {

        var isValid = this.value.match(validEmail),
            isInternet = this.value.match(/@.*\./);
        if(isValid){
            console.log(this.value, isValid, isInternet)
        } else {
            alert("L'email est incorrect");
            console.log("Incorrect...");
        }
    })

});
