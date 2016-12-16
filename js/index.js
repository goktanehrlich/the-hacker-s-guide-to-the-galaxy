$(function () {
    
    var token = Cookies.get("kiez-token")
    $.get("https://demo6810410.mockable.io/api/whoami?access_token=" + token, function(data){
        var username = data.username;
        var firstname = data.firstname;
        var lastname = data.lastname;
        $(".username").html(username);
        $(".firstname").html(firstname);
        $(".lastname").html(lastname);
        
    });
})