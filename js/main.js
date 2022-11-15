// 커피베이 포트폴리오 메인 JS - main.js

$(() => {
    //////////////////// jQB ////////////////////

    // 로딩완료!
    console.log("로딩완료!");

    /******************************************** 
     
    [ 페이드 효과 슬라이드 기능구현 ]

    1. 오른쪽 버튼클릭시 다음 순번슬라이드에
    클래스 "on"을 줘서 opacity:1, z-index:1
    로 보이며 맨위로 설정해준다!(트랜지션적용)
    ->나머지 li는 모두 "on"을 지워서 초기화!

    2. 왼쪽버튼은 이전순번이 나오며 위와 동일

    3. 끝번호에 가서는 처음은 마지막으로 
    마지막은 처음으로 슬라이드가 다시 반복된다.

    4. 블릿은 현재 슬라이드와 일치된 순번표시

********************************************/

    // 1. 로딩완료!
    // console.log("로딩완료!");

    // 변경대상: #slide li
    const slide = $("#slide a");

    // 3. 변수셋팅:
    // 3-1.순번변수: 슬라이드순번 
    let sno = 0; // 첫순번은 0번
    // 3-2.광클금지변수: 0-허용, 1-불허용
    let prot = 0;

    // 4. 이벤트 대상: .abtn (버튼 2개)
    $(".abtn").click(function () {
        // 0. 광클금지 /////////
        if (prot) return;
        prot = 1; // 잠금!
        setTimeout(() => {
            prot = 0; // 해제!
        }, 1000); /// 타임아웃 ///
        ////////////////////////

        /// 자동넘김 지우기 함수호출!
        clearAuto();

        // 1. 오른쪽버튼 여부확인
        // is(선택자) -> 선택자인지 여부(true/false)
        let isR = $(this).is(".next_btn");
        console.log("오른쪽버튼이니? ", isR);

        // 2. 분기하기
        // 2-1. 오른쪽일때
        if (isR) {
            // 순번증가
            sno++;
            // 한계값 체크(처음으로 돌림!)
            if (sno === slide.length) sno = 0;
        } ///////// if /////////
        // 2-2. 왼쪽일때
        else {
            // 순번감소
            sno--;
            // 한계값 체크(마지막으로 돌림!)
            if (sno === -1) sno = slide.length - 1;
        } ///////// else ///////////

        // 3. 슬라이드 해당순번(sno) 클래스(on)넣기
        // + 나머지 다른형제li는 on제거
        slide.eq(sno).addClass("on").siblings().removeClass("on");

    }); ////////// click //////////////

    /***************************************** 
    자동넘기기 기능구현
    *****************************************/
    // 인터발용변수
    let autoI;
    // 타임아웃용 변수
    let autoT;

    // 자동넘기기 /////
    // 인터발함수를 지우려면 변수에 넣고
    // clearInterval(변수) 해야함!!!

    /******************************* 
    함수명: slideAuto
    기능: 슬라이드 인터발 호출
    *******************************/
    function slideAuto() {
        autoI = setInterval(() => {
            //////////////////////////////////////
            // 순번증가
            sno++;
            // 한계값 체크(처음으로 돌림!)
            if (sno === slide.length) sno = 0;
            // 3. 슬라이드 해당순번(sno) 클래스(on)넣기
            // + 나머지 다른형제li는 on제거
            slide.eq(sno).addClass("on").siblings().removeClass("on");

            //////////////////////////////////////
        }, 5000);
    } //////// slideAuto 함수 //////////

    // 인터발함수 최초호출!
    slideAuto();

    /*********************************** 
    함수명: clearAuto
    기능: 인터발지우기,타임아웃셋팅
***********************************/
    function clearAuto() {
        console.log("인터발지워!!!");
        // 1. 인터발 지우기
        clearInterval(autoI);
        // 2. 타임아웃 지우기(실행쓰나미 방지!)
        clearTimeout(autoT);
        // 3. 일정시간 후 다시 인터발 호출!
        autoT = setTimeout(slideAuto, 5000);
    } /////// clearAuto함수 ////////

}); //////////////////// jQB ////////////////////
