jQuery(function($) {
    $('#btnResume').click(function() {
        $('#resumeBlock').css('visibility', 'visible');
        $('#resume').css('visibility', 'visible');
    });

    $('#resumeExit').click(function() {
        $('#resumeBlock').css('visibility', 'hidden');
        $('#resume').css('visibility', 'hidden');
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) $('#exit').click();   // esc
    });

//    document.getElementById("images").style.overflowX = "scroll";
//
//    $("#imageButtons a").click(function (ev) {
//        ev.preventDefault();
//        $('#work ul').scrollTo(this.hash, {duration:'slow'});
//    });

    $("#menu").click(function() {
        $("#fullMenu").css('display', 'block');
    });
    
    $("#fullMenuExit").click(function() {
        $("#fullMenu").css('display', 'none');
    });
});