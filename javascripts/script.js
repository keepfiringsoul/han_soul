
var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}


var scene, screen, closeBt,t_box,imgBt,slideBox,mimgBt,ctBt;
var item_Num = 17;
var pf = [];

var block = {
  width: 200,
  height: 100,
};



var init = function() {

  slide = document.querySelector('.slide ul');
  screen = document.querySelector('#screen');
  dp_box = document.querySelector('#dp_box');
  t_box = document.querySelector('#t_box');
  imgBt = document.querySelector('#imgBt');
  slideBox = document.querySelector('.slide');
  mimgBt = document.querySelector('#mimgBt');
  ctBt = document.querySelector('#ctBt');
  left3 = document.querySelector('#left_3');
  logoBox = document.querySelector('#logoBox');

  screen.onclick = function(){
    screen.style['display'] = 'none';
    dp_box.style['display'] = 'none';
    t_box.style['display'] = 'none';
    screen.style['opacity'] = '0';
    dp_box.style['opacity'] = '0';
    t_box.style['opacity'] = '0';
    dp_box.removeChild(dp_box.firstChild);
  };

  imgBt.onclick = function(){
    slideBox.style['display'] = 'block';
    left3.style['display'] = 'block';
    logoBox.style['display'] = 'none';
    setTimeout(function(){
      slideBox.style['opacity'] = '1';
      left3.style['opacity'] = '1';
      logoBox.style['opacity'] = '0';
    },50);
  };

  ctBt.onclick = function(){
    left3.style['display'] = 'none';
    slideBox.style['display'] = 'none';
    logoBox.style['display'] = 'block';
    setTimeout(function(){
      logoBox.style['opacity'] = '1';
      slideBox.style['opacity'] = '0';
      left3.style['opacity'] = '0';
    },50);
  };

  var contentsFill = function(d) {
    switch(d){
      case pf[0] :
      dp_box.innerHTML = "<img src=\"./images/0.jpg\">";
      t_box.innerHTML = "2017 <br> Figure Diary <br> 집안을 돌아다니는 물건들 ";
      break;
      case pf[1] :
      dp_box.innerHTML = "<img src=\"./images/1.jpg\">";
      t_box.innerHTML = "2017 <br> Figure Diary <br> 집안을 돌아다니는 물건들";
      break;
      case pf[2] :
      dp_box.innerHTML = "<img src=\"./images/2.jpg\">";
      t_box.innerHTML = "2017 <br> Figure Diary <br> 집밖의 버려진 물건들 ";
      break;
      case pf[3] :
      dp_box.innerHTML = "<img src=\"./images/3.jpg\">";
      t_box.innerHTML = "Figure Diary <br> 집밖의 버려진 물건들 ";
      break;
      case pf[4] :
      dp_box.innerHTML = "<img src=\"./images/4.jpg\">";
      t_box.innerHTML = "Figure Diary <br> 집밖의 버려진 물건들 ";
      break;
      case pf[5] :
      dp_box.innerHTML = "<img src=\"./images/5.jpg\">";
      t_box.innerHTML = "KMUVCD <br> Typograhpy3 ";
      break;
      case pf[6] :
      dp_box.innerHTML = "<img src=\"./images/6.jpg\">";
      t_box.innerHTML = "KMUVCD <br> Typograhpy3 ";
      break;
      case pf[7] :
      dp_box.innerHTML = "<img src=\"./images/7.jpg\">";
      t_box.innerHTML = "KMUVCD <br> Typograhpy3 ";
      break;
      case pf[8] :
      dp_box.innerHTML = "<img src=\"./images/8.jpg\">";
      t_box.innerHTML = "KMUVCD <br> Typograhpy3 ";
      break;
      case pf[9] :
      dp_box.innerHTML = "<img src=\"./images/9.jpg\">";
      t_box.innerHTML = "KMUVCD <br> Typograhpy3 ";
      break;
      case pf[10] :
      dp_box.innerHTML = "<img src=\"./images/10.jpg\">";
      t_box.innerHTML = "KMUVCD <br> Typograhpy3 ";
      break;
      case pf[11] :
      dp_box.innerHTML = "<img src=\"./images/11.jpg\">";
      t_box.innerHTML = "KMUVCD <br> Typograhpy3 ";
      break;
      case pf[12] :
      dp_box.innerHTML = "<img src=\"./images/12.jpg\">";
      t_box.innerHTML = "KMUVCD <br> Typograhpy3 ";
      break;
      case pf[13] :
      dp_box.innerHTML = "<img src=\"./images/13.jpg\">";
      t_box.innerHTML = "KMUVCD <br> Typograhpy3 ";
      break;
      case pf[14] :
      dp_box.innerHTML = "<img src=\"./images/14.jpg\">";
      t_box.innerHTML = "KMUVCD <br> Typograhpy3 ";
      break;
      case pf[15] :
      dp_box.innerHTML = "<img src=\"./images/15.jpg\">";
      t_box.innerHTML = "KMUVCD <br> Typograhpy3 ";
      break;
      case pf[16] :
      dp_box.innerHTML = "<img src=\"./images/16.jpg\">";
      t_box.innerHTML = "KMUVCD <br> Typograhpy3 ";
      break;
    }
    screen.style['display'] = 'block';
  };


  for(var i=0;i<item_Num; i++){

    var d = document.createElement('li');
    d.innerHTML = "<img src=\"./images/"+i+".jpg\">";
    slide.appendChild(d);

    pf.push(d);
    d.onclick= function() {
      contentsFill(this);
      screen.style['display'] = 'block';
      dp_box.style['display'] = 'block';
      t_box.style['display'] = 'block';
      setTimeout(function(){
        screen.style['opacity'] = '0.8';
        dp_box.style['opacity'] = '1';
        t_box.style['opacity'] = '1';
      },50);    
    };
    
  }

//여기부터 슬라이드
$(document).ready(function(){
  var imgs;
  var img_count;
  var img_position = 1;
  var val;
  var mx;
  var y1;
  var y2;

  $( '.slide' ).attr( 'mx',item_Num );

  imgs = $(".slide ul");
  /* img_count = imgs.children().length;*/
  val = $(".slide").attr("val"); //현재 이미지 번호를 가져옵니다
  mx = $(".slide").attr("mx");  //총 이미지 개수를 가져옵니다
  y1 = 0; //2018년의 시작
  y2 = 16; //2019년의 시작


      //버튼을 클릭했을 때 함수 실행
      $('#back').click(function () {
        back();
      });
      $('#next').click(function () {
        next();
      });
      $('#y1').click(function(){
        year1()
      });
      $('#y2').click(function(){
        year2()
      });


      function back() {
     /*   if(1<img_position){
          imgs.animate({
            left:'+=800px'
          });
          img_position--;
        }*/
        if( val <= 0 ){ val = 0;}
        else{val--;}

        imgs.animate({
          left:val*-800+'px'
        });
      }
      function next() {
       /* if(img_count>img_position){
          imgs.animate({
            left:'-=800px'
          });
          img_position++;
        }*/
        if( val >= mx-1 ){ val == mx-1; } //현재이미지가 마지막 번호라면 마지막번호로 그냥 있습니다.
        else{ val++; }
        imgs.animate({
          left:val*-800+'px'
        });
      }

      function year1() {


        imgs.animate({
          left:y1*-800+'px'
        });
        $("#slide").attr('val',y1);
      }
      function year2() {

        imgs.animate({
          left:y2*-800+'px'
        });
        $("#slide").attr('val',y2);
      }


    });
  //여기까지 슬라이드
  
};

window.onload = function() {
  init();

};


