(function() {
    document.addEventListener("deviceready", function () {
        var app = new kendo.mobile.Application(document.body, { skin: "nova" });
        navigator.splashscreen.hide();
    });
}());