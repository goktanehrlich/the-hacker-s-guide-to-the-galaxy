$(function () {
    
    var token = Cookies.get("kiez-token");
    if (token){
        window.location.replace("index.html")
    }
    
    
    $(".submit").on("click", function () {
        var email = $("#inputEmail").val();
        var username = $("#username").val();
        var password1 = $("#inputPassword1").val();
        var password2 = $("#inputPassword2").val();
        if (password1 != password2){
            alert("passwords are not matching!")
            return
        }
        var data = {email: email,
                    username: username,
                    password: password1};
        var url = "http://demo6810410.mockable.io/api/signup";
        $.ajax({
            url: url,
            type: 'post',
            data: JSON.stringify(data),
            dataType: 'json',
            success: function (response) {
                Cookies.set('kiez-token', response.token);
                window.location.replace("index.html");
            },
            error: function (error) {
                if (error.status == 400){
                    $("#error-message").html("User is not authorized");
                    $(".alert").show();
                    return
                }
                alert("Not authorized user")
            }
        })
    });
});
