// 커피베이 포트폴리오 공통 JS - main.js

$(() => {
    //////////////////// jQB ////////////////////

    // 새로고침시 맨위로 이동
    window.onload = function () {
        setTimeout(function () {
            scrollTo(0, 0);
        }, 100);
    };
    // 로딩완료!
    // console.log("로딩완료!");

    /*****************************************************
        [ 스크롤 액션 기능구현]
        ...
    *****************************************************/
    // 변경대상: #top
    const topA = $("#top");
    // 스크롤위치변수
    let scTop;
    // 마지막 스크룰위치값
    let lastSc = 0;

    //////// 스크롤 이벤트 함수 /////////////
    $(window).scroll(() => {
        // 스크롤 위치값(this는 window)
        scTop = $(this).scrollTop();
        // scrollTop() 메서드
        // - 세로스크롤 위치값을 리턴하는 메서드
        //    console.log(scTop);

        // 1. 슬림메뉴 클래스on적용
        // 기준위치는 스크롤위치 100px이상
        if (scTop >= 100) {
            // 100px이상
            topA.addClass("on");
            // addClass(클래스명) - 클래스넣기
        } else {
            // 100px 미만
            topA.removeClass("on");
            // removeClass(클래스명) - 클래스지우기
            // 클래스명에 띄어쓰기로 복수의 클래스 적용가능!
        } //////// else /////////

        // 마지막위치 업데이트 필수!
        lastSc = scTop;
    });

}); //////////////////// jQB ////////////////////
