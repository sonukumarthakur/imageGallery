// Menu 
$('.menu').click(function() {
    $('.left_menu').addClass('open');
    $('.overlay').addClass('open');
});
$('.close').click(function() {
    $('.left_menu').removeClass('open');
    $('.overlay').removeClass('open');
});
// gallery popup 
let liIndex = 1;
$(document).on('click', '.img_cal', function(){
    liIndex = $(this).index() + 1;
    let widthDiv = $('.item').width();
    //alert(liIndex)
    $('.g_popup').addClass('open');
    $('body').addClass('open');
    $('.item_row').css("transform", `translateX(${-(widthDiv*liIndex-widthDiv)}px)`);
})
$(document).on('click', '.close', function(){
    $('.g_popup').removeClass('open');
    $('body').removeClass('open');
})
// image popup slider 
$(document).ready(function () {
    let widthDiv = $('.item_row').width();
    let itemLength = $('.item').length;
    $('.item').css('width', widthDiv);
    $('.item_row').css('width', widthDiv * itemLength);

    let widthImgSlider = $('#image-slider').width();
    let widthDiv2 = widthDiv;

    $('.right').click(function () {
        if (widthDiv2 < (widthImgSlider - widthDiv)) {
            widthDiv2 += widthDiv;
            $('.item_row').css("transform", `translateX(${-widthDiv2}px)`);
        }
    })
    $('.left').click(function () {
        if (widthDiv2 > 0) {
            widthDiv2 -= widthDiv;
            $('.item_row').css("transform", `translateX(${-widthDiv2}px)`);
        }
    })
})
// tabs
jQuery(function ($) {
    $('.left_panel ul li').click(function () {
        var a = $(this);
        var active_tab_class = 'active';

        var the_tab = '.' + a.attr('data-tab');

        $('.left_panel ul li').removeClass(active_tab_class);

        a.addClass(active_tab_class);

        $('.right_panel .tabs').css({
            'display': 'none'
        });

        $(the_tab).show();

        return false;
    });
});
// Lazy load
let scroll_po = 0;
let listLimt = 0;
$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 250) {
        listLimt++;
        if(listLimt <=10) {
            if (scroll_po == 0 ) {
                scroll_po = $(window).scrollTop();
                $('#homesId').append(`<div class="img_cal">
                    <div class="imgs">
                        <div class="img">
                            <img src="images/home5.png" alt="">
                        </div>
                        <span>2BHK house for sale</span>
                    </div>
                </div>`);
                scroll_po = 0;
            }
        }
    }
});
