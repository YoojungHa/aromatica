$('header').load('include/header.html', function(){
    $(document).ready(function() {
        var $headerBg = $('.headerBg');
        var headerHeight = $('header').outerHeight();
    
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > headerHeight) {
                $headerBg.slideDown();
            } else {
                $headerBg.slideUp();
            }
        });
    });

    // lnb1
    $('.gnb > li').eq(0).mouseover(function(){
        $('.gnb > li').eq(0).find('.lnb1').stop().slideDown();
        $('.lnbBg1').stop().slideDown();
        $('.headerBg').show();
    })

    $('.gnb > li').eq(0).mouseout(function(){
        $('.gnb > li').eq(0).find('.lnb1').stop().slideUp();
        $('.lnbBg1').stop().slideUp();
        $('.headerBg').hide();
    })

    $('.lnbBg1').mouseout(function(){
        $('.gnb > li').eq(0).find('.lnb1').stop().slideUp();
        $('.lnbBg1').stop().slideUp();
        $('.headerBg').hide();
    })

    // lnb2
    $('.gnb > li').eq(1).mouseover(function(){
        $('.gnb > li').eq(1).find('.lnb2, .lnb2-2').stop().slideDown();
        $('.lnbBg2').stop().slideDown();
        $('.headerBg').show();
    })

    $('.gnb > li').eq(1).mouseout(function(){
        $('.gnb > li').eq(1).find('.lnb2-2').hide();
        $('.gnb > li').eq(1).find('.lnb2, .lnb2-2').stop().slideUp();
        $('.lnbBg2').stop().slideUp();
        $('.headerBg').hide();
    })

    $('.lnbBg2').mouseout(function(){
        $('.gnb > li').eq(1).find('.lnb2-2').hide();
        $('.gnb > li').eq(1).find('.lnb2, .lnb2-2').stop().slideUp();
        $('.lnbBg2').stop().slideUp();
        $('.headerBg').hide();
    })

    // lnb3
    $('.gnb > li').eq(2).mouseover(function(){
        $('.gnb > li').eq(2).find('.lnb3').stop().slideDown();
        $('.lnbBg3').stop().slideDown();
        $('.headerBg').show();
    })

    $('.gnb > li').eq(2).mouseout(function(){
        $('.gnb > li').eq(2).find('.lnb3').stop().slideUp();
        $('.lnbBg3').stop().slideUp();
        $('.headerBg').hide();
    })

    $('.lnbBg3').mouseout(function(){
        $('.gnb > li').eq(2).find('.lnb3').stop().slideUp();
        $('.lnbBg3').stop().slideUp();
        $('.headerBg').hide();
    })

    // lnb4
    $('.gnb > li').eq(4).mouseover(function(){
        $('.gnb > li').eq(4).find('.lnb4').stop().slideDown();
        $('.lnbBg1').stop().slideDown();
        $('.headerBg').show();
    })

    $('.gnb > li').eq(4).mouseout(function(){
        $('.gnb > li').eq(4).find('.lnb4').stop().slideUp();
        $('.lnbBg1').stop().slideUp();
        $('.headerBg').hide();
    })

    $('.lnbBg1').mouseout(function(){
        $('.gnb > li').eq(4).find('.lnb4').stop().slideUp();
        $('.lnbBg1').stop().slideUp();
        $('.headerBg').hide();
    })
})

$('footer').load('include/footer.html')


// $(document).ready(function() {
//     $('#section03 .centerbox1314 .list li:nth-child(1)').hover(
//         function() {
//             // 마우스를 올렸을 때
//             $(this).find('img.hover').stop().animate({
//                 transform: 'scale(1)',
//                 opacity: 1
//             }, 500); // 0.5초 동안 애니메이션
//         }, 
//         function() {
//             // 마우스가 벗어났을 때
//             $(this).find('img.hover').stop().animate({
//                 transform: 'scale(1)',
//                 opacity: 0
//             }, 500); // 0.5초 동안 애니메이션
//         }
//     );
// });

// $(".sns .list, .sns .list2").each(function() {
//     initRolling($(this));
// })

// function initRolling($parent) {
//     var items = $parent.find("img");
    
//     var itemLeft = 0;
//     var itemSize = 0;
//     var itemGap = convertRemToPixels(0.43); // item 의 간격 [Pixel 크기를 int 형식으로 작성해도 무관함]

//     $(items).each(function() {
//         $(this).css("left", itemLeft);
//         itemLeft += $(this).width() + itemGap;
//         itemSize = $(this).width();
//     }
// )}