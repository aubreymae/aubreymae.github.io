/*
** Reference for ResizeObserver:
** https://googlechrome.github.io/samples/resizeobserver/ß
*/

var xPos, yPos;
var newMarginTop;

$(window).on('load', function()
{
    xPos = 700; // at 700 is mobile view so sidebar disappears
    yPos = $('#header').innerHeight();
});

$(document).ready(function() 
{
    /* Global ResizeObserver */
    const ro = new ResizeObserver(entries => {
        for (let entry of entries)
        {
            yPos = $('#header').innerHeight();
        }
    });
    // Get the header's height anytime window resizes
    ro.observe(document.querySelector('#header'));

    var setState = function() 
    {
        if (length > yPos) // && width > xPos
        {
            newMarginTop = yPos * -1;
            $("#sidebar-fixed").css("margin-top", newMarginTop);

            // use the fixed sidebar state
            $('#sidebar-fluid').hide();
            $('#sidebar-fixed').show();
        } 
        else 
        {
            // use the fluid sidebar state
            $('#sidebar-fluid').show();
            $('#sidebar-fixed').hide();
        }
    }

    var length = $(window).scrollTop();
    var width = $(window).width();

    $(window).scroll(function (event) 
    {
        length = $(window).scrollTop();
        setState();
    });

    $(window).resize(function()
    {
        width = $(window).width();
        setState();
    });
});