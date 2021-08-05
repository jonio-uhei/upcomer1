//ヘッダーナビをマウスオーバーした時のテキストの変化
$(function(){
  $('.change1').hover(function(){
    $('.change1').text('トップ');
  },function(){
    $('.change1').text('Top');
  });
  $('.change2').hover(function(){
    $('.change2').text('目的検索');
  },function(){
    $('.change2').text('Search');
  });
  $('.change3').hover(function(){
    $('.change3').text('機能一覧');
  },function(){
    $('.change3').text('Function');
  });
  $('.change4').hover(function(){
    $('.change4').text('事例紹介');
  },function(){
    $('.change4').text('Case');
  });
  $('.change5').hover(function(){
    $('.change5').text('セキュリティ');
  },function(){
    $('.change5').text('Security');
  });
  $('.change6').hover(function(){
    $('.change6').text('デモ体験');
  },function(){
    $('.change6').text('Trial');
  });
  $('.change7').hover(function(){
    $('.change7').text('料金');
  },function(){
    $('.change7').text('Price');
  });
  $('.change8').hover(function(){
    $('.change8').text('オプション');
  },function(){
    $('.change8').text('Option');
  });
})


//トップページにある途中からトップに戻るボタン
$(function() {
  var btn = $('.u-js-topbtn');
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 1500) {
      btn.addClass('u-js-btnactive');
    }else{
      btn.removeClass('u-js-btnactive');
    }
  });
  btn.on('click',function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });
});


//トップページの左右からフェードインするパララックス
var window_h = $(window).height();
$("#wh span").text(window_h);
$(window).on("scroll", function() {
  var scroll_top = $(window).scrollTop();
  $(".c-block-field__block1").each(function() {
    var elem_pos = $(this).offset().top;
    $(this).find(".box_pos span").text(Math.floor(elem_pos));
    if (scroll_top >= elem_pos - window_h) {
      $(this).addClass("u-js-leftfadein");
    } else {
      $(this).removeClass("u-js-leftfadein");
    }
  });
  $(".c-block-field__block2").each(function() {
    var elem_pos = $(this).offset().top;
    $(this).find(".box_pos span").text(Math.floor(elem_pos));
    if (scroll_top >= elem_pos - window_h+100) {
      $(this).addClass("u-js-rightfadein");
    } else {
      $(this).removeClass("u-js-rightfadein");
    }
  });
});


//トップページでマウスオーバーで矢印の色が変わるのとモーダルが出る
$(function(){
  $('.c-arrow1').hover(
    function(){
      $(this).find('.c-arrow1__circle,.c-arrow1__line').css('background-color','#4197c7');
      $(this).find('.c-arrow1__chevron').css('border-right','8px solid #4197c7');
      $(this).find('.c-arrow1__chevron').css('border-bottom','8px solid #4197c7');
      $(this).find('.c-modal1').addClass('u-js-background1');
      $('.c-arrow1').css('z-index','3');
      $('.c-arrow2,.c-arrow3,.c-arrow4,.c-arrow5,.c-arrow6,.c-arrow7').css('z-index','2');
    },
    function(){
      $(this).find('.c-arrow1__circle,.c-arrow1__line').css('background-color','#cdcbcb');
      $(this).find('.c-arrow1__chevron').css('border-right','8px solid #cdcbcb');
      $(this).find('.c-arrow1__chevron').css('border-bottom','8px solid #cdcbcb');
      $('.c-arrow1').removeClass('u-bg1');
      $(this).find('.c-modal1').removeClass('u-js-background1');
      $('.c-arrow1,.c-arrow2,.c-arrow3,.c-arrow4,.c-arrow5,.c-arrow6,.c-arrow7').css('z-index','1');
    }
  );

  $('.c-arrow2').hover(
    function(){
      $(this).find('.c-arrow2__circle,.c-arrow2__line').css('background-color','#4197c7');
      $(this).find('.c-arrow2__chevron').css('border-right','8px solid #4197c7');
      $(this).find('.c-arrow2__chevron').css('border-bottom','8px solid #4197c7');
      $(this).find('.c-modal2').addClass('u-js-background2');
      $('.c-arrow2').css('z-index','3');
      $('.c-arrow1,.c-arrow3,.c-arrow4,.c-arrow5,.c-arrow6,.c-arrow7').css('z-index','2');
    },
    function(){
      $(this).find('.c-arrow2__circle,.c-arrow2__line').css('background-color','#cdcbcb');
      $(this).find('.c-arrow2__chevron').css('border-right','8px solid #cdcbcb');
      $(this).find('.c-arrow2__chevron').css('border-bottom','8px solid #cdcbcb');
      $(this).find('.c-modal2').removeClass('u-js-background2');
      $('.c-arrow2').removeClass('u-bg2');
      $('.c-arrow1,.c-arrow2,.c-arrow3,.c-arrow4,.c-arrow5,.c-arrow6,.c-arrow7').css('z-index','1');
    }
  );

  $('.c-arrow3').hover(
    function(){
      $(this).find('.c-arrow3__circle,.c-arrow3__line').css('background-color','#4197c7');
      $(this).find('.c-arrow3__chevron').css('border-right','8px solid #4197c7');
      $(this).find('.c-arrow3__chevron').css('border-bottom','8px solid #4197c7');
      $(this).find('.c-modal3').addClass('u-js-background3');
      $('.c-arrow3').css('z-index','3');
      $('.c-arrow1,.c-arrow2,.c-arrow4,.c-arrow5,.c-arrow6,.c-arrow7').css('z-index','2');
    },
    function(){
      $(this).find('.c-arrow3__circle,.c-arrow3__line').css('background-color','#cdcbcb');
      $(this).find('.c-arrow3__chevron').css('border-right','8px solid #cdcbcb');
      $(this).find('.c-arrow3__chevron').css('border-bottom','8px solid #cdcbcb');
      $(this).find('.c-modal3').removeClass('u-js-background3');
      $('.c-arrow3').removeClass('u-bg3');
      $('.c-arrow1,.c-arrow2,.c-arrow3,.c-arrow4,.c-arrow5,.c-arrow6,.c-arrow7').css('z-index','1');
    }
  );

  $('.c-arrow4').hover(
    function(){
      $(this).find('.c-arrow4__circle,.c-arrow4__line').css('background-color','#4197c7');
      $(this).find('.c-arrow4__chevron').css('border-right','8px solid #4197c7');
      $(this).find('.c-arrow4__chevron').css('border-bottom','8px solid #4197c7');
      $(this).find('.c-modal4').addClass('u-js-background4');
      $('.c-arrow4').css('z-index','3');
      $('.c-arrow1,.c-arrow2,.c-arrow3,.c-arrow5,.c-arrow6,.c-arrow7').css('z-index','2');
    },
    function(){
      $(this).find('.c-arrow4__circle,.c-arrow4__line').css('background-color','#cdcbcb');
      $(this).find('.c-arrow4__chevron').css('border-right','8px solid #cdcbcb');
      $(this).find('.c-arrow4__chevron').css('border-bottom','8px solid #cdcbcb');
      $(this).find('.c-modal4').removeClass('u-js-background4');
      $('.c-arrow4').removeClass('u-bg3');
      $('.c-arrow1,.c-arrow2,.c-arrow3,.c-arrow4,.c-arrow5,.c-arrow6,.c-arrow7').css('z-index','1');
    }
  );


  
});


//トップページの主要機能一覧のモーダル
$(function(){
  // $('.c-flex__functions-list1').hover(function(){
  //   $('.u-js-modal1').addClass('u-js-modal');
  // },function(){
  //   $('.u-js-modal1').removeClass('u-js-modal');
  // }
  // );
  $('.c-flex__functions-list2').hover(function(){
    $('.u-js-modal2').addClass('u-js-modal');
    $('.u-js-modal1').css('opacity','0');
  },function(){
    $('.u-js-modal2').removeClass('u-js-modal');
    $('.u-js-modal1').css('opacity','1');
  }
  );
  $('.c-flex__functions-list3').hover(function(){
    $('.u-js-modal3').addClass('u-js-modal');
  },function(){
    $('.u-js-modal3').removeClass('u-js-modal');
  }
  );
  $('.c-flex__functions-list4').hover(function(){
    $('.u-js-modal4').addClass('u-js-modal');
  },function(){
    $('.u-js-modal4').removeClass('u-js-modal');
  }
  );
  $('.c-flex__functions-list5').hover(function(){
    $('.u-js-modal5').addClass('u-js-modal');
  },function(){
    $('.u-js-modal5').removeClass('u-js-modal');
  }
  );
  $('.c-flex__functions-list6').hover(function(){
    $('.u-js-modal6').addClass('u-js-modal');
  },function(){
    $('.u-js-modal6').removeClass('u-js-modal');
  }
  );
  $('.c-flex__functions-list7').hover(function(){
    $('.u-js-modal7').addClass('u-js-modal');
  },function(){
    $('.u-js-modal7').removeClass('u-js-modal');
  }
  );
  $('.c-flex__functions-list8').hover(function(){
    $('.u-js-modal8').addClass('u-js-modal');
  },function(){
    $('.u-js-modal8').removeClass('u-js-modal');
  }
  );
  $('.c-flex__functions-list9').hover(function(){
    $('.u-js-modal9').addClass('u-js-modal');
  },function(){
    $('.u-js-modal9').removeClass('u-js-modal');
  }
  );
  $('.c-flex__functions-list10').hover(function(){
    $('.u-js-modal10').addClass('u-js-modal');
  },function(){
    $('.u-js-modal10').removeClass('u-js-modal');
  }
  );
  $('.c-flex__functions-list11').hover(function(){
    $('.u-js-modal11').addClass('u-js-modal');
  },function(){
    $('.u-js-modal11').removeClass('u-js-modal');
  }
  );
  $('.c-flex__functions-list12').hover(function(){
    $('.u-js-modal12').addClass('u-js-modal');
  },function(){
    $('.u-js-modal12').removeClass('u-js-modal');
  }
  );
  $('.c-flex__functions-list13').hover(function(){
    $('.u-js-modal13').addClass('u-js-modal');
  },function(){
    $('.u-js-modal13').removeClass('u-js-modal');
  }
  );
  $('.c-flex__functions-list14').hover(function(){
    $('.u-js-modal14').addClass('u-js-modal');
  },function(){
    $('.u-js-modal14').removeClass('u-js-modal');
  }
  );
  $('.c-flex__functions-list15').hover(function(){
    $('.u-js-modal15').addClass('u-js-modal');
  },function(){
    $('.u-js-modal15').removeClass('u-js-modal');
  }
  );
  $('.c-flex__functions-list16').hover(function(){
    $('.u-js-modal16').addClass('u-js-modal');
  },function(){
    $('.u-js-modal16').removeClass('u-js-modal');
  }
  );
});





//slick
$(function(){
  $('.slick').slick({
    autoplay: true, //自動再生
    focusOnSelect: true,
    slidesToShow:6,
    speed:100,
    arrows: true,
    slidesToScroll: 6,
    dots:true

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



//トップページの4つの円グラフの左上
var ctx = document.getElementById("graph-area1").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
   labels: ["上場", "未上場"],
    datasets: [{
      backgroundColor: [
        "#fff33f",
        "#f39800",
      ],
      data: [32 , 68]
    }]
  },
  options: {
    maintainAspectRatio: false,     //これでチャートのサイズのしていができるようになる
    //グラフのタイトル
    title:{
      display:true,
      text:'上場区分' //タイトル
    },
    plugins: {
      labels: {
        render: 'percentage',
        fontColor: 'white',
        fontSize: 19
      }
    },
    tooltips: {
      enabled: true,
      callbacks: {
          label: function(tooltipItem, data){
              return data.labels[tooltipItem.index] + ":" + data.datasets[0].data[tooltipItem.index] + "%";
          }
      }
    },
    
  }
});


//トップページの4つの円グラフの右上
var ctx = document.getElementById("graph-area2").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
   labels: ["東証一部", "東証二部", "JASDAQ"],
    datasets: [{
      backgroundColor: [
        "#fff33f",
        "#f39800",
        "#009e96"
      ],
      data: [88, 6, 6]
    }]
  },
  options: {
   maintainAspectRatio: false,     //これでチャートのサイズのしていができるようになる
   //グラフのタイトル
    title:{
      display:true,
      text:'上場分類' //タイトル
    },
    plugins: {
      labels: {
        render: 'percentage',
        fontColor: 'white',
        fontSize: 19
      }
    },
    tooltips: {
      enabled: true,
      callbacks: {
          label: function(tooltipItem, data){
              return data.labels[tooltipItem.index] + ":" + data.datasets[0].data[tooltipItem.index] + "%";
          }
      }
    }
   }
});


//トップページの4つの円グラフの左下
var ctx = document.getElementById("graph-area3").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
   labels: ["〜300", "301〜500", "501〜1000","1001〜3000","3001〜5000","5001〜10000","10001〜"],
    datasets: [{
      backgroundColor: [
        "#fff33f",
        "#f39800",
        "#009e96",
        "#23fcf9",
        "#fc237a",
        "#fc23ac",
        "#ea23fc"
      ],
      data: [19, 16, 26, 25, 6, 4, 4]
    }]
  },
  options: {
   maintainAspectRatio: false,     //これでチャートのサイズのしていができるようになる
   //グラフのタイトル
    title:{
      display:true,
      text:'従業員数' //タイトル
    },
    plugins: {
      labels: {
        render: 'percentage',
        fontColor: 'white',
        fontSize: 19
      }
    },
    tooltips: {
      enabled: true,
      callbacks: {
          label: function(tooltipItem, data){
              return data.labels[tooltipItem.index] + ":" + data.datasets[0].data[tooltipItem.index] + "%";
          }
      }
    }
   }
});


//トップページの4つの円グラフの右下
var ctx = document.getElementById("graph-area4").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
   labels: ["情報通信", "卸売小売", "製造","不動産","インフラ","建設","その他サービス","金融","宿泊，飲食","運輸","医療，福祉"],
    datasets: [{
      backgroundColor: [
        "#fff33f",
        "#f39800",
        "#009e96",
        "#23fcf9",
        "#fc237a",
        "#fc23ac",
        "#ea23fc",
        "#f7331e",
        "#ede7e6",
        "#13f038",
        "#3563f0"
      ],
      data: [11, 22, 31, 4, 3, 11, 4, 6, 4, 3, 1]
    }]
  },
  options: {
   maintainAspectRatio: false,     //これでチャートのサイズのしていができるようになる
   //グラフのタイトル
    title:{
      display:true,
      text:'業種' //タイトル
    },
    plugins: {
      labels: {
        render: 'percentage',
        fontColor: 'white',
        fontSize: 19
      }
    },
    tooltips: {
      enabled: true,
      callbacks: {
          label: function(tooltipItem, data){
              return data.labels[tooltipItem.index] + ":" + data.datasets[0].data[tooltipItem.index] + "%";
          }
      }
    }
   }
});

