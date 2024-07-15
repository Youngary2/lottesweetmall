/* 와우 */
new WOW().init();




/* 팝업 */
var currentCookie = document.cookie;
var cookieCheck = currentCookie.indexOf('lotteSweet');
//console.log(currentCookie);
//console.log(cookieCheck); //11 //indexOf('lotteSweet') : currentCookie안에 lotteSweet이라는 텍스트가 있냐.->11 번째에 있음. //한번 들어갔던 쿠키기록이 남아있어서 이게 뜨는거임.
//음수가 나오면 쿠키 기록이 없다는거임.
if (cookieCheck > -1) {
    $('.popup').hide();
} else {
    $('.popup').show();
}

//7일간 보이지않기 클릭시
$('.round label').click(function(){
    var date = new Date(); //오늘날짜 불러오기

    //7일뒤 날짜 셋팅하기
    date.setDate(date.getDate() + 7);
    //console.log(date); //7일뒤의 날짜 찍힘.

    //쿠키만들기 : 시간의 형식=UTF포맷(협정세계시)
    //console.log(date.toUTCString()); //협정세계시라서 우리나라랑 시간차가 조금 있음.
    var setCookie = '';
    setCookie = 'CookieName = lotteSweet;';
    setCookie += 'expires = ' + date.toUTCString(); //expires: 만료일, date.toUTCString() : 7일뒤로 설정해논 날짜
    //console.log(setCookie);

    //쿠키에 저장하기
    document.cookie = setCookie; 
    //console.log(document.cookie);
})

/* 닫기 클릭시 */
$('.popup_close').click(function(){
    $('.popup').hide();
});




/* 큰메뉴 gnb */
$('.gnb ul li').mouseover(function () {
    var index = $(this).index(); //.gnb ul li(=큰메뉴) 인덱스번호
    //console.log(index);
    var child = $('.submenu').children('div'); //sub1~7
    //console.log(child);

    child.hide();
    child.eq(index).stop() /* .delay(200) */ .slideDown(500).siblings().hide();
    //delay(200) : .topNav부터 bg 내려오고 거기에 맞춰서 서브메뉴 내려오기 위해. -->이거땜에 서브2개 내려오는 오류생김.

    $('.topNav').css({
        'background': "#fff"
    }) //위에서부터 내려오는것처럼 표현

    //흰로고 안보이게,빨간로고 보이게
    $('.logo_white').css({
        'display': "none"
    })
    $('.logo_red').css({
        'display': "block"
    })

    //gnb 글씨색깔 흰→검 변하게
    $('.gnb ul li a').css({
        'color': '#222'
    })

    //흰아이콘 안보이게, 검정아이콘 보이게
    $('.mpw').css({
        'display': "none"
    })
    $('.mpb').css({
        'display': "block"
    })
    $('.cartw').css({
        'display': "none"
    })
    $('.cartb').css({
        'display': "block"
    })
    $('.scw').css({
        'display': "none"
    })
    $('.scb').css({
        'display': "block"
    })

    //장바구니 0 색깔
    $('.head .right div ul li:nth-child(2)').css({
        'color': 'red'
    })
});


//마우스뗏을때
$('.middle').mouseleave(function(){
        $('.submenu>div').stop().slideUp(400);

        $('.topNav').css({'background':"transparent"})

        //흰로고 보이게,빨간로고 안보이게
        $('.logo_red').css({'display':"none"})
        $('.logo_white').css({'display':"block"})

        //gnb 글씨색깔 검→흰 변하게
        $('.gnb ul li a').css({'color':'#fff'})

        //흰아이콘 보이게, 검정아이콘 안보이게
        $('.mpb').css({'display':"none"})
        $('.mpw').css({'display':"block"})
        $('.cartb').css({'display':"none"})
        $('.cartw').css({'display':"block"})
        $('.scb').css({'display':"none"})
        $('.scw').css({'display':"block"})

        //장바구니 0 색깔
        $('.head .right div ul li:nth-child(2)').css({'color':'#000'})
}); 



/* 서서브 메뉴 */
$('.sub6>div>ul>li').mouseenter(function () {

    $('.sub6>div>ul>li').find('.s6_sub').hide();
    //.sub6>div>ul>li의 바로밑 자식중 .s6_sub를 찾아 일단 다 숨겨라.
    $(this).find('.s6_sub').fadeIn();
    //내가 클릭하는 .sub6>div>ul>li의 바로밑 자식중 .s6_sub를 보여라.
});


$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    //console.log(wScroll);
    //$(window).scroll : 윈도우의 스크롤을 움직이면
    //$(this).scrollTop() : 그것의 스크롤top값을 잡는다.


    // ★스크롤이 200정도 내려가면 메뉴바가 나타나도록
    if (wScroll > 200) {
        $('.topNav').css({
            'background': "#fff"
        })
        //흰로고 안보이게,빨간로고 보이게
        $('.logo_white').css({
            'display': "none"
        })
        $('.logo_red').css({
            'display': "block"
        })

        //gnb 글씨색깔 흰→검 변하게
        $('.gnb ul li a').css({
            'color': '#222'
        })

        //흰아이콘 안보이게, 검정아이콘 보이게
        $('.mpw').css({
            'display': "none"
        })
        $('.mpb').css({
            'display': "block"
        })
        $('.cartw').css({
            'display': "none"
        })
        $('.cartb').css({
            'display': "block"
        })
        $('.scw').css({
            'display': "none"
        })
        $('.scb').css({
            'display': "block"
        })

        //장바구니 0 색깔
        $('.head .right div ul li:nth-child(2)').css({
            'color': 'red'
        })
    } else if (wScroll <= 200) {
        $('.topNav').css({
            'background': "transparent"
        })
        //흰로고 보이게,빨간로고 안보이게
        $('.logo_red').css({
            'display': "none"
        })
        $('.logo_white').css({
            'display': "block"
        })

        //gnb 글씨색깔 검→흰 변하게
        $('.gnb ul li a').css({
            'color': '#fff'
        })

        //흰아이콘 보이게, 검정아이콘 안보이게
        $('.mpb').css({
            'display': "none"
        })
        $('.mpw').css({
            'display': "block"
        })
        $('.cartb').css({
            'display': "none"
        })
        $('.cartw').css({
            'display': "block"
        })
        $('.scb').css({
            'display': "none"
        })
        $('.scw').css({
            'display': "block"
        })

        //장바구니 0 색깔
        $('.head .right div ul li:nth-child(2)').css({
            'color': '#000'
        })
    }
});

/* 마이페이지-login로그인 */
//로그인 클릭시 Window창 뜨게하기
$('.login .mp_sub p:first-child').click(function () {
    window.open("login.html", "lotteLogin", "width=585,height=534,top=250,left=400")
});

//회원가입 클릭시 회원가입창 뜨게하기
$('.login .mp_sub p:last-child').click(function () {
    window.open("http://jldylee.dothome.co.kr/practice/4.lottesweetmall/join.html", '_blank')
});
//, '_blank' : 새창으로 열기




/* 배너 슬릭 */
$('.ban').slick({
    /* setting-name: setting-value */
    dots: true, //dots생성
    autoplay: true, //hp시작시 자동재생
    pauseOnHover: false, //마우스 올렸을때 slide멈춤(기본) 없앰
    slidesToShow: 1, //보여줄 슬라이드 1개
    centerMode: true, //양옆 슬라이드 조금 짤려서 미리볼수있게
    centerPadding: '100px', //가운데사진 1개와 넥스트버튼 사이의 간격


    /* 슬릭 반응형 */
    responsive: [
        {
            breakpoint: 780, //화면넓이 780px일때
            settings: {
                centerMode: false,
                arrows:false, //<>버튼없앰
                //centerPadding:'0px'
            }
        }
    ]
});


//슬릭사진 하나하나마다 bg 색상 다르게주기
//슬릭사진의 번호를 뽑기위해 슬릭에서 제공하는 beforeChange를 씀
$('.ban').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //console.log(nextSlide); //슬릭사진의 index번호를 뽑아줌 0~12
    if (nextSlide == 0) {
        $('.banner').css({
            'background-color': "#04aa8f"
        });
    } else if (nextSlide == 1) {
        $('.banner').css({
            'background-color': "#251f39"
        });
    } else if (nextSlide == 2) {
        $('.banner').css({
            'background-color': "#0f8156"
        });
    } else if (nextSlide == 3) {
        $('.banner').css({
            'background-color': "#1e836f"
        });
    } else if (nextSlide == 4) {
        $('.banner').css({
            'background-color': "#934f3b"
        });
    } else if (nextSlide == 5) {
        $('.banner').css({
            'background-color': "#fe4095"
        });
    } else if (nextSlide == 6) {
        $('.banner').css({
            'background-color': "#9c7951"
        });
    } else if (nextSlide == 7) {
        $('.banner').css({
            'background-color': "#0c6d2e"
        });
    } else if (nextSlide == 8) {
        $('.banner').css({
            'background-color': "#df93aa"
        });
    } else if (nextSlide == 9) {
        $('.banner').css({
            'background-color': "#164726"
        });
    } else if (nextSlide == 10) {
        $('.banner').css({
            'background-color': "#d0ab5d"
        });
    } else if (nextSlide == 11) {
        $('.banner').css({
            'background-color': "#008351"
        });
    } else if (nextSlide == 12) {
        $('.banner').css({
            'background-color': "#6f4588"
        });
    } else if (nextSlide == 13) {
        $('.banner').css({
            'background-color': "#f7ca75"
        });
    }
}); //이렇게하면 맨첨에 들어갔을땐 bg가 없음. So, 처음bg색상은 CSS에서 넣음.



/* 젖소메뉴 */
$('.newSlick').slick({
    /* setting-name: setting-value */
    arrows: false, //pre,next버튼 없앰
    dots: true, //dots생성
    autoplay: true, //hp시작시 자동재생
    pauseOnHover: false, //마우스 올렸을때 slide멈춤(기본) 없앰
});

/* 젖소 열고닫기 */
$('.cow a').click(function (e) {
    e.preventDefault();

    var cowBoxWidth = $('.snb_new .right_box').width();

    $('.snb_new').toggleClass('open');
    if ($('.snb_new').hasClass('open')) {
        $('.snb_new').animate({
            right: '0px'
        }, 500);
    } else {
        $('.snb_new').animate({
            right: -cowBoxWidth
        }, 500);
    }
});

/* 지금신상- 스와이퍼 마크업 */
const swiperSinsang = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    //freeMode: true,
    loop: true, // 슬라이드 반복 여부
    loopAdditionalSlides: 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
    autoplay:true,

    breakpoints: {
        //화면넓이 320 이상 일때
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        //화면넓이 480 이상 일때
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        //화면넓이 640 이상 일때
        640: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
});

/* 튕김방지 */
$('.bn .ban div a img').click(function (e) {
    e.preventDefault();
});
$('.gnb ul li').click(function (e) {
    e.preventDefault();
});
$('.submenu ul li').click(function (e) {
    e.preventDefault();
});
$('.lineBanner1 a').click(function (e) {
    e.preventDefault();
});
$('.swiper-slide a .back img').click(function (e) {
    e.preventDefault();
});
$('.lineBanner2 a img').click(function (e) {
    e.preventDefault();
});
$('.lineBanner3 a').click(function (e) {
    e.preventDefault();
});
$('.nat_wrap .nat_box .nat_img a').click(function (e) {
    e.preventDefault();
});
$('.card_big a').click(function (e) {
    e.preventDefault();
});
$('.content2 .xmas_click').click(function (e) {
    e.preventDefault();
});
$('.lineBanner4 a').click(function (e) {
    e.preventDefault();
});
$('.ggulSwiper .swiper-slide a').click(function (e) {
    e.preventDefault();
});
$('.eye_wrapper .eye_top>ul>li a').click(function (e) {
    e.preventDefault();
});





/* 크리스마스아이콘 클릭시 */
$('#christmas a.xmas_icon').click(function (e) {
    e.preventDefault();

    $('.xmas_click').fadeIn();
});

// 외부영역 클릭 시 팝업 닫기
//(.content2 .xmas_click-> 이 영역 외 클릭시 팝업 닫기)
$(document).mouseup(function (e) {
    var LayerPopup = $(".xmas_click");
    if (LayerPopup.has(e.target).length === 0) {
        LayerPopup.fadeOut();
    }
});






/* 지금순위 */
//슬릭 JS마크업
$('.ranking_snack').slick({
    dots: true, //dot 생성
    pauseOnHover: false, //마우스 올렸을때 slide멈춤(기본) 없앰
    autoplay: true,
    centerMode: true, //이전,다음 사진이 약간 미리보이도록
    centerPadding: '380px', //가운데사진 1개와 넥스트버튼 사이의 간격
    
    /* 슬릭 반응형 */
    responsive: [
        {
            breakpoint: 1220, //화면넓이 1220px일때
            settings: {
                centerPadding: '350px' //가운데사진 1개와 넥스트버튼 사이의 간격
            }
        },
        {
            breakpoint: 1070, //화면넓이 1070px일때
            settings: {
                centerPadding: '330px' //가운데사진 1개와 넥스트버튼 사이의 간격
            }
        },
        {
            breakpoint: 1024, //화면넓이 1024px일때
            settings: {
                centerPadding: '300px' //가운데사진 1개와 넥스트버튼 사이의 간격
            }
        },
        {
            breakpoint: 910, //화면넓이 910px일때
            settings: {
                centerPadding: '270px' //가운데사진 1개와 넥스트버튼 사이의 간격
            }
        },
        {
            breakpoint: 830, //화면넓이 830px일때
            settings: {
                centerPadding: '240px' //가운데사진 1개와 넥스트버튼 사이의 간격
            }
        },
        {
            breakpoint: 780, //화면넓이 780px일때
            settings: {
                centerPadding: '200px' //가운데사진 1개와 넥스트버튼 사이의 간격
            }
        },
        {
            breakpoint: 670, //화면넓이 670px일때
            settings: {
                centerPadding: '170px' //가운데사진 1개와 넥스트버튼 사이의 간격
            }
        },
    ]
});



/* 월간과자 카드 */
var small = $('.card_small');
var big = $('.card_big');
var cardClose = $('.card_big .card_close');

small.click(function () {
    big.css({
        'bottom': '0px'
    })
});
cardClose.click(function () {
    big.css({
        'bottom': '-523px'
    })
});


/* 대신 골라드려요! */
/* 대신 골라드려요!- button 코드펜 가져옴 */
var animateButton = function (e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}

/* 대신 골라드려요!- 탭메뉴 */
var tabMenu = $('.stepBox');

tabMenu.find('.step_btn .subBox').hide(); //서브 일단 다숨기고
tabMenu.find('.step_btn.active .subBox').show(); //.active의 서브 보여라

tabMenu.find('.tast_btn button').click(function () { //button클릭시

    var target = $(this); //내가클릭하는 button의
    target.parents('.step_btn').removeClass('active').find('.subBox').delay(400).fadeOut().parent('.step_btn').next('.step_btn').addClass('active').find('.subBox').delay(700).fadeIn();
    /* 
    parents('.step_btn') : 조상들중 .step_btn를 불러
    removeClass('active') : 클래스명 active를 지우고
    find('.subBox') : 그 자손중에 .subBox를 찾아
    hide() : 숨겨라

    parent('.step_btn') : 그.subBox의 바로위 부모 .step_btn의
    next('.step_btn') : 바로다음형제 .step_btn에게 
    addClass('active') : 클래스명 active를 주고
    find('.subBox') : 그 자손중에 .subBox를
    delay(1000).fadeIn() : 1초후에 fadeIn
    */
});

//step3번에서 button누르면 다시 step1로 돌아가게
$('.stepBox .step_btn:last-child button').click(function () {
    $('.stepBox .step_btn:first-child').addClass('active').find('.subBox').delay(1000).fadeIn()
});


/* 스위트TV - 스와이퍼 */
const swiperSweetTV = new Swiper(".swmySwiper", {
    spaceBetween: 60, //  슬라이드 간 거리 (px)
    slidesPerView: 1.8, // 한 슬라이드에 보여줄 갯수 1~1.9 하면 양옆에 짤려서보이게 됨
    centeredSlides: true, // true시에 슬라이드가 가운데로 배치
    loop: true, // 슬라이드 반복 여부
    loopAdditionalSlides: 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
    autoplay: { // 자동 슬라이드 설정 , 비 활성화 시 false
        delay: 5000, // 시간 설정
        disableOnInteraction: true, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },

    pagination: {
        el: ".swiper-pagination.TVpagination",
        type: "progressbar"
    },
    navigation: {
        nextEl: ".swiper-button-next.TVnext",
        prevEl: ".swiper-button-prev.TVprev"
    },


    /* 스와이퍼 반응형 */
    breakpoints: {
        //화면넓이 961 이상 일때
        961: {
            spaceBetween: 60,
            slidesPerView: 1.8
        },
        //화면넓이 550 이상 일때
        550: {
            spaceBetween: 30,
            slidesPerView: 1.6
        },
        //화면넓이 0 이상 일때
        0: {
            spaceBetween: 10,
            slidesPerView: 1.1
        }
    }
});

/* 스위트TV 스크롤내릴때 별 돌아가기 */
/* 스크롤에 따른 이미지회전 - .splite1 */
$(window).scroll(function () {
    var image = $('.splite1');
    var nowScroll = $(this).scrollTop();
    //console.log(nowScroll);

    image.css({
        transform: 'rotate(' + nowScroll + 'deg)'
    })
});
/* 스크롤에 따른 이미지회전 - .splite2 */
$(window).scroll(function () {
    var image = $('.splite2');
    var nowScroll = $(this).scrollTop();
    //console.log(nowScroll);

    image.css({
        transform: 'rotate(' + nowScroll / 0.5 + 'deg)'
    })
});
/* 스크롤에 따른 이미지회전 - .splite3 */
$(window).scroll(function () {
    var image = $('.splite3');
    var nowScroll = $(this).scrollTop();
    //console.log(nowScroll);

    image.css({
        transform: 'rotate(' + nowScroll / 1.2 + 'deg)'
    })
});



/* 아이스크림 맛집 -슬릭 */

//아이스크림 큰이미지 바꾸기
function imgSlider(anything) {
    document.querySelector('.icecream').src = anything
    //클래스명.icecream 에서 src값을 불러와 anything을 넣을거다
}

//bg 색상바꾸기
function changeBg(bg) {
    var sec = document.querySelector('.ice');
    sec.style.backgroundColor = bg;
}

//아이스크림명 바꾸기
function changeText(tx1, tx2) {
    var txt1 = document.querySelector('.icename');
    var txt2 = document.querySelector('.icetag');
    txt1.innerHTML = tx1; //.txt .text1에 텍스트를 tx1로 바꿔넣는다(JS언어)
    txt2.innerHTML = tx2; //.txt .text2에 텍스트를 tx2로 바꿔넣는다(JS언어)
}


/* 아이스크림 더보기 */
var imBtn = $('.ice .ice_more'); //전체보기버튼
var iceMore = $('.ice_moreBox'); //올라오는 박스
var imClose = $('.ice_moreBox .icemore_close'); //닫기버튼

imBtn.click(function () {
    iceMore.css({
        'bottom': '0px'
    })
});
imClose.click(function () {
    iceMore.css({
        'bottom': '-853px'
    })
});


/* 캐릭터 스토리*/
//빼빼로프렌즈
var pprli = $('.pprFriends .ppr_crt li');
var pprli_img = $('.pprFriends .ppr_crt li>img:nth-child(1)');
var pprli_img_s = $('.pprFriends .ppr_crt li>img:nth-child(2)');
var hover_bg = $('.pprFriends .crt_hover_bg');
var headh3 = $('.pprFriends .headh3');
var headh4 = $('.pprFriends .headh4');

pprli.mouseover(function () { //mouseover시
    var index = $(this).index(); //li의 인덱스번호
    //console.log(index);

    //img안보이게, img_s 보이게
    pprli_img.eq(index).hide();
    pprli_img_s.eq(index).show();

    //hover bg 보이게
    hover_bg.fadeIn();

    //h3,h4 안보이게
    headh3.css({
        'opacity': '0'
    });
    headh4.css({
        'opacity': '0'
    });
});

pprli.mouseleave(function () { //mouseleave시
    var index = $(this).index(); //li의 인덱스번호

    //img보이게, img_s 안보이게
    pprli_img.eq(index).show();
    pprli_img_s.eq(index).hide();

    //hover bg 사라지게
    hover_bg.fadeOut();

    //h3,h4 보이게
    headh3.css({
        'opacity': '1'
    });
    headh4.css({
        'opacity': '1'
    });
});

//hover시 텍스트 바꾸기//★★적용안됨!! 질문!!!
function pprchangeText(ppr01, ppr02) {
    var ppr1 = document.querySelector('.pprFriends .crt_hover_bg h3');
    var ppr2 = document.querySelector('.pprFriends .crt_hover_bg p');
    ppr1.innerHTML = ppr01; //.pprFriends .crt_hover_bg h3에 텍스트를 ppr01로 바꿔넣는다(JS언어)
    ppr2.innerHTML = ppr02; //.pprFriends .crt_hover_bg p에 텍스트를 ppr02로 바꿔넣는다(JS언어)
}

/* 빼빼로 - ★모바일 txt박스 */
var ppr1 = $('.pprFriends .ppr_crt li:nth-child(1)>img');
var ppr2 = $('.pprFriends .ppr_crt li:nth-child(2)>img');
var ppr3 = $('.pprFriends .ppr_crt li:nth-child(3)>img');
var ppr4 = $('.pprFriends .ppr_crt li:nth-child(4)>img');
var ppr5 = $('.pprFriends .ppr_crt li:nth-child(5)>img');
var ppr6 = $('.pprFriends .ppr_crt li:nth-child(6)>img');
var ppr7 = $('.pprFriends .ppr_crt li:nth-child(7)>img');
var ppr8 = $('.pprFriends .ppr_crt li:nth-child(8)>img');
var ppr9 = $('.pprFriends .ppr_crt li:nth-child(9)>img');
var ppr10 = $('.pprFriends .ppr_crt li:nth-child(10)>img');

var txtBox = $('.mobile_crt_txt .mb_crt_txtBox');
txtBox.hide(); //일단 mb_crt_txtBox1~10 다숨김

ppr1.click(function(){
    txtBox.hide();
    $('.mobile_crt_txt').css({'transform':'translateY(' + 0 + ')'});
    $('.mobile_crt_txt .mb_crt_txtBox1').show();
});
ppr2.click(function(){
    txtBox.hide();
    $('.mobile_crt_txt').css({'transform':'translateY(' + 0 + ')'});
    $('.mobile_crt_txt .mb_crt_txtBox2').show();
});
ppr3.click(function(){
    txtBox.hide();
    $('.mobile_crt_txt').css({'transform':'translateY(' + 0 + ')'});
    $('.mobile_crt_txt .mb_crt_txtBox3').show();
});
ppr4.click(function(){
    txtBox.hide();
    $('.mobile_crt_txt').css({'transform':'translateY(' + 0 + ')'});
    $('.mobile_crt_txt .mb_crt_txtBox4').show();
});
ppr5.click(function(){
    txtBox.hide();
    $('.mobile_crt_txt').css({'transform':'translateY(' + 0 + ')'});
    $('.mobile_crt_txt .mb_crt_txtBox5').show();
});
ppr6.click(function(){
    txtBox.hide();
    $('.mobile_crt_txt').css({'transform':'translateY(' + 0 + ')'});
    $('.mobile_crt_txt .mb_crt_txtBox6').show();
});
ppr7.click(function(){
    txtBox.hide();
    $('.mobile_crt_txt').css({'transform':'translateY(' + 0 + ')'});
    $('.mobile_crt_txt .mb_crt_txtBox7').show();
});
ppr8.click(function(){
    txtBox.hide();
    $('.mobile_crt_txt').css({'transform':'translateY(' + 0 + ')'});
    $('.mobile_crt_txt .mb_crt_txtBox8').show();
});
ppr9.click(function(){
    txtBox.hide();
    $('.mobile_crt_txt').css({'transform':'translateY(' + 0 + ')'});
    $('.mobile_crt_txt .mb_crt_txtBox9').show();
});
ppr10.click(function(){
    txtBox.hide();
    $('.mobile_crt_txt').css({'transform':'translateY(' + 0 + ')'});
    $('.mobile_crt_txt .mb_crt_txtBox10').show();
});


var pprClose = $('.mobile_crt_txt .mb_crt_txtBox_close');
pprClose.click(function(){
    $('.mobile_crt_txt').css({'transform':'translateY(' + 100 + '%)'});
    txtBox.hide();
});






/* 말랑이 */
var malang_icon = $('.malang .container .malang_crt .mlicon');
var malang_img = $('.malang .container .malang_crt img:nth-child(1)');
var malang_img_s = $('.malang .container .malang_crt img:nth-child(2)');
var malang_hoverBg = $('.malang .malang_hover_bg');
var malangh3 = $('.malang .container .malangh3');
var malangh4 = $('.malang .container .malangh4');
var mlspan = $('.malang .container .malang_crt span');

malang_icon.mouseover(function () { //mouseover시
    //img안보이게, img_s 보이게
    malang_img.hide();
    malang_img_s.show();

    //hover bg 보이게
    malang_hoverBg.fadeIn();

    //h3,h4 안보이게
    malangh3.css({
        'opacity': '0'
    });
    malangh4.css({
        'opacity': '0'
    });

    //말랑이 이름 안보이게
    mlspan.hide();
});

malang_icon.mouseleave(function () { //mouseleave시
    //img보이게, img_s 안보이게
    malang_img.show();
    malang_img_s.hide();

    //hover bg 안보이게
    malang_hoverBg.fadeOut();

    //h3,h4 보이게
    malangh3.css({
        'opacity': '1'
    });
    malangh4.css({
        'opacity': '1'
    });

    //말랑이 이름 보이게
    mlspan.show();
});



/* 꿀조합 레시피- left 스와이퍼 마크업 */
const swiperggleft = new Swiper(".ggtxtSwiper", {
    slidesPerView: 1, // 한 슬라이드에 보여줄 갯수 1개
    spaceBetween: 0, //  슬라이드 간 거리 (px)
    loop: true, // 슬라이드 반복 여부
    loopedSlides: 8,
    loopAdditionalSlides: 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
});


/* 꿀조합 레시피- right 스와이퍼 마크업 */
const swiperggright = new Swiper(".ggulSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 30, // 슬라이드 간 거리 (px)
    loop: true, // 슬라이드 반복 여부
    loopedSlides: 8,
    loopAdditionalSlides: 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
    centeredSlides: false, // true시에 슬라이드가 가운데로 배치

    autoplay: { // 자동 슬라이드 설정 , 비 활성화 시 false
        delay: 5000, // 시간 설정
        disableOnInteraction: false, // 긁었을때 자동재생멈춤 해지
    },
    /* ㄴ> 스와이퍼 2개 연결시
          1. autoplay는 긁을 스와이퍼 한곳에만 넣기 */

    pagination: {
        el: ".swiper-pagination.ggpagination",
        clickable: true,
    },


    breakpoints: {
        //화면넓이 0 이상 일때
        0: {
            spaceBetween: 15, // 슬라이드 간 거리 (px)
            centeredSlides: true, // true시에 슬라이드가 가운데로 배치
        },
        //화면넓이 601 이상 일때
        601: {
            spaceBetween: 30, // 슬라이드 간 거리 (px)
            centeredSlides: false, // true시에 슬라이드가 가운데로 배치
        }
    }



});
/* 꿀조합 레시피 스와이퍼 left랑 right랑 연결(연동)하기 */
swiperggleft.controller.control = swiperggright;
swiperggright.controller.control = swiperggleft;




/* 스페셜 브랜드 */
//메인 스와이퍼
const swiperBrandmain = new Swiper(".main_slide_box", {
    slidesPerView: 1, // -개가 보이게
    effect: 'fade', //페이드로 들어오는데 그자리에서 얹어짐! .active아닌것들은 opacity:0 해야함!
    spaceBetween: 0, // 슬라이드 간 거리 (px)
    loop: true, // 슬라이드 반복 여부
});


//txt 스와이퍼
const swiperBrandtxt = new Swiper(".txt_slide_box", {
    slidesPerView: 1, // -개가 보이게
    effect: 'fade', //페이드로 들어오는데 그자리에서 얹어짐! .active아닌것들은 opacity:0 해야함!
    spaceBetween: 0, // 슬라이드 간 거리 (px)
    loop: true, // 슬라이드 반복 여부

    autoplay: { // 자동 슬라이드 설정 , 비 활성화 시 false
        delay: 12000, // 시간 설정
        disableOnInteraction: false, // 긁었을때 자동재생멈춤 해지
    },

    pagination: {
        el: ".swiper-pagination.brandtxt_pagination",
        clickable: true,
    },
});

//메인 스와이퍼 랑 txt 스와이퍼 연결(연동)하기 */
swiperBrandtxt.controller.control = swiperBrandmain;
swiperBrandmain.controller.control = swiperBrandtxt;



/* PICK 스와이퍼 */
const swiperPick = new Swiper(".pickSwiper", {
    slidesPerView: 1, // -개가 보이게
    effect: 'fade', //페이드로 들어오는데 그자리에서 얹어짐! .active아닌것들은 opacity:0 해야함!
    spaceBetween: 0, // 슬라이드 간 거리 (px)
    loop: true, // 슬라이드 반복 여부
    autoplay: { // 자동 슬라이드 설정 , 비 활성화 시 false
        delay: 6000, // 시간 설정
        disableOnInteraction: false, // 긁었을때 자동재생멈춤 해지
    }
});

/* EVENT 스와이퍼 */
const swiperEvent = new Swiper(".eventSwiper", {
    slidesPerView: 1, // -개가 보이게
    effect: 'fade', //페이드로 들어오는데 그자리에서 얹어짐! .active아닌것들은 opacity:0 해야함!
    spaceBetween: 0, // 슬라이드 간 거리 (px)
    loop: true, // 슬라이드 반복 여부
    autoplay: { // 자동 슬라이드 설정 , 비 활성화 시 false
        delay: 5000, // 시간 설정
        disableOnInteraction: false, // 긁었을때 자동재생멈춤 해지
    }
});

/* SWEETMALL 스와이퍼 */
const swiperMall = new Swiper(".sweetmallSwiper", {
    slidesPerView: 1, // -개가 보이게
    effect: 'fade', //페이드로 들어오는데 그자리에서 얹어짐! .active아닌것들은 opacity:0 해야함!
    spaceBetween: 0, // 슬라이드 간 거리 (px)
    loop: true, // 슬라이드 반복 여부
    autoplay: { // 자동 슬라이드 설정 , 비 활성화 시 false
        delay: 6700, // 시간 설정
        disableOnInteraction: false, // 긁었을때 자동재생멈춤 해지
    }
});


/* 제품 한눈에보기 - 더보기버튼클릭시 */
//더보기버튼 5개 각각 클래스명 따로 줘서 다 따로 설정함.(하나로 하니까 오류생김.)
$('.sub_box .eye_more1').click(function () {
    //더보기,닫기시 영역의 height값 다르게
    $(this).toggleClass('on');
    if ($(this).hasClass('on')) {
        $(this).parents('.eye_wrapper').animate({
            'height': '2354px'
        }, 800);
    } else {
        $(this).parents('.eye_wrapper').animate({
            'height': '1366px'
        }, 800);
    }

    //닫기<->더보기 텍스트변경
    if ($(this).html() == '더보기') {
        $(this).html('닫기');
        $('.eye_sub2-1').slideDown(800);
    } else if ($(this).html() == '닫기') {
        $(this).html('더보기')
        $('.eye_sub2-1').slideUp(800);
    }
});
$('.sub_box .eye_more2').click(function () {
    //더보기,닫기시 영역의 height값 다르게
    $(this).toggleClass('on');
    if ($(this).hasClass('on')) {
        $(this).parents('.eye_wrapper').animate({
            'height': '2354px'
        }, 800);
    } else {
        $(this).parents('.eye_wrapper').animate({
            'height': '1366px'
        }, 800);
    }

    //닫기<->더보기 텍스트변경
    if ($(this).html() == '더보기') {
        $(this).html('닫기');
        $('.eye_sub2-2').slideDown(800);
    } else if ($(this).html() == '닫기') {
        $(this).html('더보기')
        $('.eye_sub2-2').slideUp(800);
    }
});
$('.sub_box .eye_more3').click(function () {
    //더보기,닫기시 영역의 height값 다르게
    $(this).toggleClass('on');
    if ($(this).hasClass('on')) {
        $(this).parents('.eye_wrapper').animate({
            'height': '2354px'
        }, 800);
    } else {
        $(this).parents('.eye_wrapper').animate({
            'height': '1366px'
        }, 800);
    }
    
    //닫기<->더보기 텍스트변경
    if ($(this).html() == '더보기') {
        $(this).html('닫기');
        $('.eye_sub2-3').slideDown(800);
    } else if ($(this).html() == '닫기') {
        $(this).html('더보기')
        $('.eye_sub2-3').slideUp(800);
    }
});
$('.sub_box .eye_more4').click(function () {
    //더보기,닫기시 영역의 height값 다르게
    $(this).toggleClass('on');
    if ($(this).hasClass('on')) {
        $(this).parents('.eye_wrapper').animate({
            'height': '2354px'
        }, 800);
    } else {
        $(this).parents('.eye_wrapper').animate({
            'height': '1366px'
        }, 800);
    }

    //닫기<->더보기 텍스트변경
    if ($(this).html() == '더보기') {
        $(this).html('닫기');
        $('.eye_sub2-4').slideDown(800);
    } else if ($(this).html() == '닫기') {
        $(this).html('더보기')
        $('.eye_sub2-4').slideUp(800);
    }
});
$('.sub_box .eye_more5').click(function () {
    //더보기,닫기시 영역의 height값 다르게
    $(this).toggleClass('on');
    if ($(this).hasClass('on')) {
        $(this).parents('.eye_wrapper').animate({
            'height': '2354px'
        }, 800);
    } else {
        $(this).parents('.eye_wrapper').animate({
            'height': '1366px'
        }, 800);
    }
    
    //닫기<->더보기 텍스트변경
    if ($(this).html() == '더보기') {
        $(this).html('닫기');
        $('.eye_sub2-5').slideDown(800);
    } else if ($(this).html() == '닫기') {
        $(this).html('더보기')
        $('.eye_sub2-5').slideUp(800);
    }
});




/*제품 한눈에보기 - 탭메뉴*/
var tabMenu = $('.eye_top');

tabMenu.find('ul>li>.sub_box').hide();
//서브 일단 다숨김
tabMenu.find('ul>li.active>.sub_box').show();
//큰메뉴.active 의 서브만 보여라

tabMenu.find('ul>li').click(function () {
    var target = $(this); //내가클릭하는 큰메뉴li

    $('.eye_wrapper').css({height: 1366 + 'px'});//일단 닫아놓은 height값 적용.

    target.find('.sub_box').show().parent('li').addClass('active').siblings('li').removeClass('active').find('.sub_box').hide();

    /* 
    .find('.sub_box').show() : 내가클릭하는 큰메뉴li의 자손 중에 .sub_box을 보여라.
    .parent('li').addClass('active') : 그 .sub_box의 부모인 li에 클래스명추가하고
    siblings('li').removeClass('active') : 나(=큰메뉴li)를 제외한 형제들 li들에겐 클래스명지워라
    .find('.sub_box').hide() : 그 형제들li들의 자손 중 .sub_box들을 숨겨라
    */
});



/* 탑버튼 = 자동 맨위로 올라가기 버튼 */
//스크롤을 좀 내리면 버튼이 나타나도록
$(window).scroll(function () {
    var $scrollTop = $(this).scrollTop();
    //console.log($scrollTop);

    if ($scrollTop < 1000) {
        $('.top_btn').fadeOut();
    } else {
        $('.top_btn').fadeIn();
    }
});

//클릭시 맨위로 올라가도록
$('.top_btn').click(function () {
    $('html').animate({
        scrollTop: 0
    }, 600);
});
//내가 움직이는거라서 window가 아니라 'html'이나 'html,body'을 불러야함..



/* 스윗타그램 */
/* vanilla-tilt.js 마크업 */
VanillaTilt.init(document.querySelector(".sweetagram"), {
    max: 20,
    speed: 400
});






/* 모바일 */
/* 오른쪽위 메뉴바 */
//메뉴바 누르면 모바일메뉴박스 나오게
$('.bar-menu').click(function(){
    $('.bar-menu').toggleClass('on');
    
    $('.mobile_head_box').css({right:0});
});
//닫기 누르면 모바일메뉴박스 들어가게
var closeBtn = $('.mobile_head_box .mb_head_top .mb_box_close');
closeBtn.click(function(){
    $('.mobile_head_box').css({right:-100 + '%'});
});



/* 모바일메뉴박스 */
var menuBox = $('ul.mb_menu');
var subBox = $('ul.mb_submenu');
var susubBox = $('ul.mb_susubmenu');

//gnb누르면 서브메뉴 나오게(탭메뉴)
subBox.hide(); //서브 일단숨김
susubBox.hide(); //서서브 일단숨김
menuBox.find('>li.active>.mb_submenu').show(); //젤첨에 active되있는 서브메뉴만 보여라

menuBox.children('.gnb_li').click(function(){//gnb클릭시
    var target = $(this); //내가클릭하는 gnb

    target.find('.mb_submenu').show().parent('.gnb_li').addClass('active').siblings('.gnb_li').removeClass('active').find('.mb_submenu').hide();
});

//서브메뉴누르면 서서브메뉴 슬라이드다운
subBox.children('li').click(function(e){//서브메뉴 클릭시
    var $clicked = $(this); //내가클릭하는 서브메뉴

    if($clicked.hasClass('active')){
        $clicked.find('.mb_susubmenu').stop().slideUp();
        $clicked.removeClass('active');
    }else{
        $clicked.find('.mb_susubmenu').stop().slideDown().parent('li').siblings().find('.mb_susubmenu').slideUp();

        $clicked.siblings().removeClass('active'); 
        $clicked.addClass('active');
        //이걸 젤밑에 적었기때문에 젤첨엔 li에 active 없음.
    }
});

/* ★모바일 지금특가 타이머 - 가져옴 */
function remaindTime() {
    var now = new Date(); //현재시간을 구한다. 
    //console.log(now);
    var open = new Date(2022,08,18,24,00,00); //달에는 -1을 해야함!! ex)2월 하고싶으면 01로 적어야함!!! ,1월하고싶으면 00 !!
  
    var nt = now.getTime(); // 현재시간
    var ot = open.getTime(); // 종료시간
  
   if(nt<ot){ //현재시간이 종료시간보다 이르면 종료시간까지의 남은 시간을 구한다.   
     sec = parseInt(ot - nt) / 1000;
     hour = parseInt(sec/60/60);
     sec = (sec - (hour*60*60));
     min = parseInt(sec/60);
     sec = parseInt(sec-(min*60));
  
     if(hour<10){hour="0"+hour;}
     if(min<10){min="0"+min;}
     if(sec<10){sec="0"+sec;}
      $("#d-day-hour").html(hour);
      $("#d-day-min").html(min);
      $("#d-day-sec").html(sec);
   } else{ //현재시간이 종료시간보다 크면
    $("#d-day-hour").html('00');
    $("#d-day-min").html('00');
    $("#d-day-sec").html('00');
   }
  }
  setInterval(remaindTime,1000); //1초마다 실행