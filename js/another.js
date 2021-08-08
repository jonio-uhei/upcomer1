//ハンバーガーメニュー
$(function(){
    $('.u-js-burger-btn').on('click',function(){
      $('.u-js-burger-btn').toggleClass('close');
      $('.u-js-nav-wrapper').fadeToggle(500);
      $('.u-js-nav-item:first-child').toggleClass('u-js-move1');
      $('.u-js-nav-item:nth-child(2)').toggleClass('u-js-move2');
      $('.u-js-nav-item:nth-child(3)').toggleClass('u-js-move3');
      $('.u-js-nav-item:nth-child(4)').toggleClass('u-js-move4');
      $('.u-js-nav-item:nth-child(5)').toggleClass('u-js-move5');
      $('.u-js-nav-item:nth-child(6)').toggleClass('u-js-move6');
      $('.u-js-nav-item:nth-child(7)').toggleClass('u-js-move7');
    });
});

$(function(){
  let tabs = $(".u-js-tab");
  let blocks = $(".u-none")
  $(".u-js-tab").on("click",function(){
    $(".u-js-active").removeClass("u-js-active");
    $(this).addClass("u-js-active");
    const index = tabs.index(this);
    $(".u-js-content").removeClass("u-js-show").eq(index).addClass("u-js-show");
    $(".u-none").removeClass("u-show").eq(index).addClass("u-show");
  });
});