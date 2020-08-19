//// 등분할 사이트 JS - main.js ////

$(function () { /// jQB //////////////////////

    /// 마우스가 li영역 안으로 들어갈때
    // 올라간 li는 35%, 나머지는 16.25%
    // mouseenter 메서드: 선택요소의 경계선 안으로 들어갈때
    $("#wrap>ul>li").mouseenter(function () {
        $(this).stop().animate({
                width: "35%"
            }, 500, "easeOutCubic")
            .siblings().stop().animate({
                width: "16.25%"
            }, 500, "easeOutCubic");
    }); /////// mouseenter ///////////////////

    // 마우스가 ul바깥으로 나갈때 원래 분할크기인 20%로 복귀!
    // mouseleave 메서드: 요소경계선을 벗어날때
    $("#wrap>ul").mouseleave(function () {
        $(">li", this).stop().animate({
            width: "20%"
        }, 500, "easeOutCubic");
    }); //////// mouseleave ////////////////////

    ////// 햄버거버튼 클릭시 메뉴등장하기 ///////
    $("#ham").click(function () {

        /// 0. 사이트커버 보이기
        $("#scover").show();

        /// 1.GNB박스의 left값을 0으로 들어오기
        $("#gnb").animate({
            left: "0"
        }, 300, "easeOutCirc");
        /// 2.동시에 #wrap 박스의 left값 300px(GNB폭)만큼 밀기
        $("#wrap").animate({
            left: "300px"
        }, 300, "easeOutCirc");
        /// 3.동시에 GNB박스의 a요소 박스가 하나씩 시차를 두고 원래위치로 애니
        $("#gnb>li>a").each(function (idx, ele) {
            //console.log("a개수:"+idx);
            // 0.05초씩 더하여 딜레이됨!
            $(ele).delay(50 * idx).animate({
                left: "0"
            }, 300, "easeOutCirc");
        }); ///////// each ///////////////////////

        /// 4.마우스 포인터 닫기버튼 이미지 추가하기 ///////
        $("body")
            .append('<img src="images/OB/close_.png" alt="닫기버튼" class="cbtn">');
        /// 5.닫기버튼 셋업
        $(".cbtn").css({
            position: "absolute",
            zIndex: "99999"
        }); ///// css ////////////
        /// 6.사이트커버에 마우스가 움직일때 이동하기 ///
        $("#scover").mousemove(function (e) { // e-이벤트전달
            var posx = e.pageX;
            var posy = e.pageY;
            $(".cbtn").css({
                top: posy + "px",
                left: posx + "px"
            }); ///// css /////////
        }); /////////// mousemove //////////////////
        ///////////////////////////////////////////
        /// 7. GNB메뉴에 오버시 커서정상화, 
        ///    사이트커버에 오버시 커서사라지고 닫기버튼보이기
        $("#gnb").mouseenter(
            function () {
                $("body").css({ // 커서정상화
                    cursor: "default"
                }); //// css //////
                $(".cbtn").hide(); //닫기버튼 사라짐
            }
        ); ////// mouseenter ////////////
        $("#scover").mouseenter(
            function () {
                $("body").css({ // 커서사라짐
                    cursor: "none"
                }); //// css //////
                $(".cbtn").show(); //닫거버튼 나타남
            }
        ); ////// mouseenter ////////////

        /// 보완: body바깥으로 나가면 닫기버튼 사라지게하기 ///
        $("body").mouseleave(function () {
            $(".cbtn").hide(); //닫기버튼 사라짐
        }); ///////// mouseleave //////////////////

        /// 8. 닫기버튼 클릭시 원상복귀 ///////////
        $(".cbtn").click(function () {
            //alert("나야나!");
            // 1. 사이트커버 사라지게하기
            $("#scover").hide();

            // 2. GNB메뉴 나가기 (a요소 left초기화)
            $("#gnb").animate({
                left: "-300px"
            }, 300, "easeOutCirc", function () {
                // GNB메뉴 나간후 a요소박스 left 초기화
                $("#gnb>li>a").css({
                    left: "-100%"
                }); /// css /////
            }); ///// animate ///////

            // 3. #wrap 원위치하기
            $("#wrap").animate({
                left: "0"
            }, 300, "easeOutCirc");

            // 4. body 커서복원
            $("body").css({
                cursor: "default"
            }); //// css ///////////

            // 5. 닫기버튼제거(동적으로 만든거니까)
            $(".cbtn").remove();

        }); ///////////// 닫기버튼 click ////////////////
        ////////////////////////////////////////////////

    }); //////// 햄버거버튼 click ///////////////////////////////////
    ////////////////////////////////////////////////////////////////


    /////////// 인트로 쇼우~~!!! ////////////////////
    /// 1.5초후 ul의 width를 500%->100% 애니메이션
    $("#wrap>ul").delay(1500).animate({
        width: "100%"
    }, 1000, "easeOutQuart", function () {
        // 애니후 사이트커버 숨기기 및 반투명도 0.2설정하기
        $("#scover").hide().css({
            opacity: "0.2"
        }); /////// css //////////////

    }); ////// animate ////////////////////



}); //////// jQB ////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
