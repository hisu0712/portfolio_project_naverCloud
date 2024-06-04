// fullpage.js
// $(document).ready(function() {
//     $('#fullpage').fullpage({
//         // 설정 옵션들...
//         sectionSelector: '.fullpage-section',

//     });
// });

//스크롤 처리
// const lenis = new Lenis({ // lenis 인스턴스 생성
//     lerp: 0.1, // 부드러운 이동을 위한 보간 값 설정
//     wheelMultiplier: 0.7, // 마우스 휠 스크롤 속도 제어
//     gestureOrientation: "vertical", // 제스처(터치 입력) 방향 설정
//     normalizeWheel: false, // 마우스 휠 값 정규화 설정
//     smoothTouch: false // 터치 입력(스와이프) 부드럽게 처리 설정
// });

// function raf(time) { // requestAnimationFrame으로 렌더링 처리
//     lenis.raf(time);
//     requestAnimationFrame(raf);
// }

// document.addEventListener('DOMContentLoaded', function() { // 페이지 로드 후 raf 함수 호출하여 애니메이션 시작
//     requestAnimationFrame(raf);
// });

// header 
$("#header .mo-menu").on("click", function(){
    $("#header .mo-nav").addClass("active");
    $("#header .dimmed").addClass("on");
    $("body").addClass("hidden");
})
$("#header .btn-close").on("click", function(){
    $("#header .mo-nav").removeClass("active");
    $("#header .dimmed").removeClass("on");
    $("body").removeClass("hidden");
})
$(window).scroll(function(){
    let scrollTop = $(this).scrollTop();
    
    if (scrollTop > 5) {
        $("#header").addClass("active");
        $(".scroll-top").addClass("on");
    } else {
        $("#header").removeClass("active");
        $(".scroll-top").removeClass("on");
    }
})

// sc-visual
const ScVisualSwiper = new Swiper(".sc-visual-swiper", {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: ".pagination",
        type: "custom",
        renderCustom: function(swiper, current, total){
            return `<span class="curr">${current}</span><span class="total">${total}</span>`
        }
    },
    navigation: {
        prevEl: ".btn-prev",
        nextEl: ".btn-next"
    },
    on: {
        "init": function(){
            $("#svg #bar").css({'stroke-dashoffset':'52.24px'})
            $("#svg #bar").stop().animate({'stroke-dashoffset':'0'}, 3000);
        },
        "slideChange": function(){
            $("#svg #bar").css({'stroke-dashoffset':'52.24px'})
            $("#svg #bar").stop().animate({'stroke-dashoffset':'0'}, 3000);
        }
    }
})

// sc-service
$(".sc-service .img-cols li").each(function() {
    let cloneCol = $(this).clone();
    $(this).parent().append(cloneCol);
});


// footer
let contentHide = true;

$("footer .site-btn").on("click", function(){

    if (contentHide) {
        $(this).addClass("on");
        $("#footer .site-list").addClass("on");
        contentHide = false;
    } else {
        $(this).removeClass("on");
        $("#footer .site-list").removeClass("on");
        contentHide = true;
    }
})

$(".scroll-top").on("click", function(){
    var currentPosition = $(window).scrollTop();
    var targetPosition = 0;
    var distance = Math.abs(targetPosition - currentPosition);
    var speed = 3;

    $("html, body").animate({scrollTop: targetPosition}, distance / speed);
})


// //  sc-intro
// gsap.set(".sc-intro .inner, .sc-intro .img-box", {yPercent: 20, opacity: 0})
// gsap.to(".sc-intro .inner", {
//     yPercent: 0,
//     opacity: 1,
//     duration: 1,
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".sc-intro",
//         start: "30% 50%",
//         end: "40% 50%",
//         scrub: true,
//     }
// })
// gsap.to(".sc-intro .img-box", {
//     yPercent: 0,
//     opacity: 1,
//     duration: 1,
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".sc-intro",
//         start: "40% 50%",
//         end: "50% 50%",
//         scrub: true,
//     }
// })

// //  sc-intro
// gsap.set(".sc-news .headline, .sc-news .news-list", {yPercent: 20, opacity: 0})
// gsap.to(".sc-news .headline", {
//     yPercent: 0,
//     opacity: 1,
//     duration: 1,
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".sc-news",
//         start: "30% 50%",
//         end: "40% 50%",
//         scrub: true,
//     }
// })
// gsap.to(".sc-news .news-list", {
//     yPercent: 0,
//     opacity: 1,
//     duration: 1,
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".sc-news",
//         start: "40% 50%",
//         end: "50% 50%",
//         scrub: true,
//     }
// })