
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


var scene, screen, closeBt,t_box;
var item_Num = 12;
var pf = [];

var block = {
  width: 200,
  height: 100,
};



var init = function() {

  slide = document.querySelector('.slide ul');
  screen = document.querySelector('#screen');
  closeBt = document.querySelector('#closeBt');
  dp_box = document.querySelector('#dp_box');
  t_box = document.querySelector('#t_box');
  imgBt = $("#imgBt");
  slideBox = $(".slide");
  /* imgBt = document.querySelector('#imgBt');*/

  closeBt.onclick = function(){
    screen.style['display'] = 'none';
    closeBt.style['display'] = 'none';
    dp_box.style['display'] = 'none';
    t_box.style['display'] = 'none';
    screen.style['opacity'] = '0';
    closeBt.style['opacity'] = '0';
    dp_box.style['opacity'] = '0';
    t_box.style['opacity'] = '0';
    dp_box.removeChild(dp_box.firstChild);
  };

  imgBt.onclick = function(){
    slideBox.style['display'] = 'block';
  };

  var contentsFill = function(d) {
    switch(d){
      case pf[0] :
      dp_box.innerHTML = "<img src=\"./images/0.jpg\">";
      t_box.innerHTML = "KMUVCD <br> Typograhpy3 ";
      break;
      case pf[1] :
      dp_box.innerHTML = "<img src=\"./images/1.jpg\">";
      t_box.innerHTML = "KMUVCD <br> Typograhpy3 ";
      break;
      case pf[2] :
      dp_box.innerHTML = "<img src=\"./images/2.jpg\">";
      t_box.innerHTML = "KMUVCD <br> Typograhpy3 ";
      break;
      case pf[3] :
      dp_box.innerHTML = "<img src=\"./images/3.jpg\">";
      t_box.innerHTML = "KMUVCD <br> Typograhpy3 ";
      break;
      case pf[4] :
      dp_box.innerHTML = "<img src=\"./images/4.jpg\">";
      t_box.innerHTML = "KMUVCD <br> Typograhpy3 ";
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
      case pf[10] :
      break;
      dp_box.innerHTML = "<img src=\"./images/10.jpg\">";
      t_box.innerHTML = "KMUVCD <br> Typograhpy3 ";
      case pf[11] :
      dp_box.innerHTML = "<img src=\"./images/11.jpg\">";
      t_box.innerHTML = "KMUVCD <br> Typograhpy3 ";
      break;
      case pf[12] :
      dp_box.innerHTML = "<img src=\"./images/12.jpg\">";
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
      closeBt.style['display'] = 'block';
      dp_box.style['display'] = 'block';
      t_box.style['display'] = 'block';
      setTimeout(function(){
        screen.style['opacity'] = '0.8';
        closeBt.style['opacity'] = '1';
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
  var show;

  imgs = $(".slide ul");
  img_count = imgs.children().length;


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
        if(1<img_position){
          imgs.animate({
            left:'+=800px'
          });
          img_position--;
        }
      }
      function next() {
        if(img_count>img_position){
          imgs.animate({
            left:'-=800px'
          });
          img_position++;
        }
      }
      function year1() {
        imgs.animate({
          left:'0px'
        });
      }
      function year2() {
        imgs.animate({
          left:'-1600px'
        });
      }


    });
  //여기까지 슬라이드
  
};

window.onload = function() {
  init();

};


