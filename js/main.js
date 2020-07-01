$(function () {
  //팝업창 닫기 열기
  $(".popup .pop_close").click(function () {
    $(".pop_img").hide();
  });
  $(".popup_open").click(function () {
    $(".pop_img").show();
  });

  //전체메뉴
$(".all_see").click(function () {
    $(".all_mn").fadeIn();
  });
  $(".all_mn span").click(function () {
    $(".all_mn").hide();
  });
  //언어
  $('.language').click(function() {
    $('.language_mn').slideToggle('slow')
    });

    $('#quick').effect('Bounce',"",500);
    //스크롤시 퀵메뉴 고정위치 바꾸기
    $(window).scroll(function(){
      if($(document).scrollTop()>=300){   //scrollTop 바디크기의 300
        $('#quick').stop().animate({top:100},500);  //animate 위치관련된 css만쓸수있음
        // $('#quick').show() 변경가능
      }else{
         $('#quick').stop().animate({top:450},500); //<-슬라이더랑 안겹치게하기위해
         // $('#quick').fadeOut() 변경가능
      }
     })

// //공지사항 롤링
//   var height =  $(".notice").height();
//   var num = $(".rolling li").length;
//   var max = height * num;
//   var move = 0;
//   function noticeRolling(){
//     move += height;
//     $(".rolling").animate({"top":-move},1000,function(){
//       if( move >= max ){
//         $(this).css("top",0);
//         move = 0;
//       };
//     });
//   };
//   noticeRollingOff = setInterval(noticeRolling,500);
//   $(".rolling").append($(".rolling li").first().clone());
// //최근검색어 롤링  
//   var height =  $(".Popular_search").height();
//   var num = $(".rolling li").length;
//   var max = height * num;
//   var move = 0;
//   function noticeRolling(){
//     move += height;
//     $(".rolling").animate({"top":-move},1000,function(){
//       if( move >= max ){
//         $(this).css("top",0);
//         move = 0;
//       };
//     });
//   };
//   noticeRollingOff = setInterval(noticeRolling,1000);
//   $(".rolling").append($(".rolling li").first().clone());

$('.rolling').vTicker({   
  // 스크롤 속도(default: 700)  
  speed: 500,  
  // 스크롤 사이의 대기시간(default: 4000)  
  pause: 3000,  
  // 스크롤 애니메이션  
  animation: 'ture',  
  // 마우스 over 일때 멈출 설정  
  mousePause: 'ture',  
  // 한번에 보일 리스트수(default: 2)  
  showItems: 4,  
  // 스크롤 컨테이너 높이(default: 0)  
  height: 0,  
  // 아이템이 움직이는 방향, up/down (default: up)  
  direction: 'up'  
});  

//메인슬라이드
$(".lazy").slick({
    autoplay: true,
    dots:true,
    lazyLoad: 'ondemand',
    infinite: true,
    pauseOnHover : true
    
  });
//시술소개 슬라이드  
$("#section3 .regular").slick({
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2
});
//치료전후 슬라이드
$(".sec4_slide .regular").slick({
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 5
});
//병원소식 슬라이드
$(".sec6_slide .regular").slick({
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 5
});




});
