$(document).on('click', function () {
    $('.collapse').collapse('hide');
})

$(document).ready(function () {
    $("#ulCategory li").on('click', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active')
    });

    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 24 || document.documentElement.scrollTop > 24) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }
})

function savesubcat() {
    return null
}