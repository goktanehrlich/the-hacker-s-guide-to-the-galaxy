$(function () {
    
    var token = Cookies.get("kiez-token");
    
    $(".submit").on("click", function () {
        var email = $("#inputEmail").val();
        var password = $("#inputPassword1").val();
        // Sunucuya gonder
        var data = {email: email, password: password};
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
                alert("Not authorized user")
            }
        })
    });
});
