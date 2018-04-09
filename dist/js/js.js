

const testimonial = document.querySelector('.testimonials');
// var links = document.querySelectorAll('a[href="'+document.URL+'"]');



$(function(){

    var pathname = (window.location.pathname.match(/[^\/]+$/)[0]);

    $('.bottom-menu ul li a').each(function() {
        if ($(this).attr('href') == pathname)
        {
            $(this).addClass('current');
        }
    });
});

$(window).scroll(startCounter);
function startCounter() {
    if (window.scrollY+window.innerHeight>testimonial.offsetTop) {
        $(window).off("scroll", startCounter);
        $('.count').each(function () {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 7000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }
}


// menu

(function(){
    const btn = document.querySelector('header .fa-bars');
    const body = document.querySelector('body');

    btn.addEventListener('click', function(){
        body.classList.toggle('active-menu');
    });
})();

// about info blocks

$('.about .info').click(function(){
    $(this).find('p').slideToggle()
});






// $(function(){
//     $page = jQuery.url.attr("file");
//     if(!$page) {
//         $page = 'index.html';
//     }
//     $('#navigation li a').each(function(){
//         var $href = $(this).attr('href');
//         if ( ($href == $page) || ($href == '') ) {
//             $(this).addClass('on');
//         } else {
//             $(this).removeClass('on');
//         }
//     });
// });


//var num = parseInt(counter.textContent);

// document.addEventListener('scroll', function() {
//     if(window.scrollY+window.innerHeight>fromBlog.offsetTop){
//         $('.count').each(function () {
//             $(this).prop('Counter',0).animate({
//                 Counter: $(this).text()
//             }, {
//                 duration: 4000,
//                 easing: 'swing',
//                 step: function (now) {
//                     $(this).text(Math.ceil(now));
//                 }
//             });
//         });
//     }
// })

//
// counters.forEach(counter=>{
//     console.log(num);
//     counter.textContent="0";
//     for(i=0;i<num.value;i+=5){
//         counter.textContent=i;
//     }
// })


//window.scrollY+window.innerHeight>foot.offsetTop