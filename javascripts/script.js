
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
var item_Num = 23;
var video_Num = 5;
var pf = [];

var block = {
  width: 200,
  height: 100,
};



var init = function() {

  slide = document.querySelector('.slide ul');
  slideBox = document.querySelector('.slide');
  screen = document.querySelector('#screen');
  dp_box = document.querySelector('#dp_box');
  t_box = document.querySelector('#t_box');
  imgBt = document.querySelector('#imgBt');
  vslideBox = document.querySelector('#vslide');
  vslide = document.querySelector('#vslideList');
  mimgBt = document.querySelector('#mimgBt');
  ctBt = document.querySelector('#ctBt');
  main = document.querySelector('#main');
  mlogo = document.querySelector('#mlogo');
  imgYear = document.querySelector('#imgYear');
  logoBox = document.querySelector('#logoBox');
  mail = document.querySelector('#mail');
  tel = document.querySelector('#tel');
  mailPop = document.querySelector('#mailPop');
  telPop = document.querySelector('#telPop');

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
    imgYear.style['display'] = 'block';
    vidYear.style['display'] = 'none';
    logoBox.style['display'] = 'none';
    main.style['display'] = 'none';
    vslideBox.style['display'] = 'none';
    vzero();
    setTimeout(function(){
      slideBox.style['opacity'] = '1';
      imgYear.style['opacity'] = '1';
      vidYear.style['opacity'] = '0';
      logoBox.style['opacity'] = '0';
      main.style['opacity'] = '0';
      vslideBox.style['opacity'] = '0';
    },50);
  };

  ctBt.onclick = function(){
    imgYear.style['display'] = 'none';
    vidYear.style['display'] = 'none';
    slideBox.style['display'] = 'none';
    main.style['display'] = 'none';
    vslideBox.style['display'] = 'none';
    logoBox.style['display'] = 'block';
/*    slide.style['left'] = '0';
vslide.style['left'] = '0';*/
imgzero();
vzero();
setTimeout(function(){
  logoBox.style['opacity'] = '1';
  main.style['opacity'] = '0';
  imgYear.style['opacity'] = '0';
  vidYear.style['opacity'] = '0';
  slideBox.style['opacity'] = '0';
  vslideBox.style['opacity'] = '0';
},50);
};

mlogo.onclick = function(){
  imgYear.style['display'] = 'none';
  vidYear.style['display'] = 'none';
  slideBox.style['display'] = 'none';
  logoBox.style['display'] = 'none';
  vslideBox.style['display'] = 'none';
  main.style['display'] = 'block';
/*    slide.style['left'] = '0';
vslide.style['left'] = '0';*/
imgzero();
vzero();
setTimeout(function(){
 logoBox.style['opacity'] = '0';
 main.style['opacity'] = '1';
 imgYear.style['opacity'] = '0';
 vidYear.style['opacity'] = '0';
 slideBox.style['opacity'] = '0';
 vslideBox.style['opacity'] = '0';
},50);
};

mimgBt.onclick = function(){
  imgYear.style['display'] = 'none';
  vidYear.style['display'] = 'block';
  slideBox.style['display'] = 'none';
  logoBox.style['display'] = 'none';
  vslideBox.style['display'] = 'block';
  main.style['display'] = 'none';
  imgzero();
  setTimeout(function(){
   logoBox.style['opacity'] = '0';
   main.style['opacity'] = '0';
   imgYear.style['opacity'] = '0';
   vidYear.style['opacity'] = '1';
   slideBox.style['opacity'] = '0';
   vslideBox.style['opacity'] = '1';
 },50);
};

//contact 부분 시작
mail.onclick = function(){
  mailPop.style['display'] = 'block';
  setTimeout(function(){
    mailPop.style['opacity'] = '0.8';
  },50);
};

mailPop.onclick = function(){
  mailPop.style['display'] = 'none';
  mailPop.style['opacity'] = '0';
};

tel.onclick = function(){
  telPop.style['display'] = 'block';
  setTimeout(function(){
    telPop.style['opacity'] = '0.8';
  },50);
};

telPop.onclick = function(){
  telPop.style['display'] = 'none';
  telPop.style['opacity'] = '0';
};


//contact 부분 끝

var contentsFill = function(d) {
  switch(d){
    case pf[0] :
    dp_box.innerHTML = "<img src=\"./images/0.jpg\">";
    t_box.innerHTML = "2018 <br> Figure Diary <br> 집안을 돌아다니는 물건들";
    break;
    case pf[1] :
    dp_box.innerHTML = "<img src=\"./images/1.jpg\">";
    t_box.innerHTML = "2018 <br> Figure Diary <br> 집안을 돌아다니는 물건들";
    break;
    case pf[2] :
    dp_box.innerHTML = "<img src=\"./images/2.jpg\">";
    t_box.innerHTML = "2018 <br> Figure Diary <br> 집밖의 버려진 물건들";
    break;
    case pf[3] :
    dp_box.innerHTML = "<img src=\"./images/3.jpg\">";
    t_box.innerHTML = "2018 <br>Figure Diary <br> 집밖의 버려진 물건들";
    break;
    case pf[4] :
    dp_box.innerHTML = "<img src=\"./images/4.jpg\">";
    t_box.innerHTML = "2018 <br>Figure Diary <br> 집밖의 버려진 물건들";
    break;
    case pf[5] :
    dp_box.innerHTML = "<img src=\"./images/5.jpg\">";
    t_box.innerHTML = "2018 <br>Figure Diary <br> 집밖의 버려진 물건들";
    break;
    case pf[6] :
    dp_box.innerHTML = "<img src=\"./images/6.jpg\">";
    t_box.innerHTML = "2018 <br>Figure Diary <br> 집밖의 버려진 물건들";
    break;
    case pf[7] :
    dp_box.innerHTML = "<img src=\"./images/7.jpg\">";
    t_box.innerHTML = "2018 <br>Figure Diary <br> 옮겨진 동네의 버려진 곳들";
    break;
    case pf[8] :
    dp_box.innerHTML = "<img src=\"./images/8.jpg\">";
    t_box.innerHTML = "2018 <br>Figure Diary <br> 옮겨진 동네의 버려진 곳들";
    break;
    case pf[9] :
    dp_box.innerHTML = "<img src=\"./images/9.jpg\">";
    t_box.innerHTML = "2018 <br>Figure Diary <br> 옮겨진 동네의 살아나는 곳들";
    break;
    case pf[10] :
    dp_box.innerHTML = "<img src=\"./images/10.jpg\">";
    t_box.innerHTML = "2018 <br>Figure Diary <br> 옮겨진 동네의 살아나는 곳들";
    break;
    case pf[11] :
    dp_box.innerHTML = "<img src=\"./images/11.jpg\">";
    t_box.innerHTML = "2018 <br>Figure Diary <br> 옮겨진 동네의 오래된 곳들";
    break;
    case pf[12] :
    dp_box.innerHTML = "<img src=\"./images/12.jpg\">";
    t_box.innerHTML = "2018 <br>Figure Diary <br> 아버지의 공간들";
    break;
    case pf[13] :
    dp_box.innerHTML = "<img src=\"./images/13.jpg\">";
    t_box.innerHTML = "2018 <br>Figure Diary <br> 옮겨진 동네의 버려진 곳들";
    break;
    case pf[14] :
    dp_box.innerHTML = "<img src=\"./images/14.jpg\">";
    t_box.innerHTML = "2018 <br>Figure Diary <br> 옮겨진 동네의 오래된 곳들 ";
    break;
    case pf[15] :
    dp_box.innerHTML = "<img src=\"./images/15.jpg\">";
    t_box.innerHTML = "2018 <br>Figure Diary <br> 옮겨진 동네의 살아나는 곳들 ";
    break;
    case pf[16] :
    dp_box.innerHTML = "<img src=\"./images/16.jpg\">";
    t_box.innerHTML = "2018 <br>2017 <br> Figure Diary <br> 집안을 돌아다니는 물건들 ";
    break;
    case pf[17] :
    dp_box.innerHTML = "<img src=\"./images/17.jpg\">";
    t_box.innerHTML = "2018 <br>2017 <br> Figure Diary <br> 집안을 돌아다니는 물건들";
    break;
    case pf[18] :
    dp_box.innerHTML = "<img src=\"./images/18.jpg\">";
    t_box.innerHTML = "2019 <br>Figure Diary <br> 아버지의 공간들";
    break;
    case pf[19] :
    dp_box.innerHTML = "<img src=\"./images/19.jpg\">";
    t_box.innerHTML = "2019 <br>Figure Diary <br> 집밖의 풍경들";
    break;
    case pf[20] :
    dp_box.innerHTML = "<img src=\"./images/20.jpg\">";
    t_box.innerHTML = "2019 <br>Figure Diary <br> 집밖의 풍경들";
    break;
    case pf[21] :
    dp_box.innerHTML = "<img src=\"./images/21.jpg\">";
    t_box.innerHTML = "2019 <br>Figure Diary <br> 집밖의 풍경들";
    break;
    case pf[22] :
    dp_box.innerHTML = "<img src=\"./images/22.jpg\">";
    t_box.innerHTML = "2019 <br>Figure Diary <br> 집밖의 풍경들";
    break;
  }
  screen.style['display'] = 'block';
};

//개체 생성 시작
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
//개체 생성 끝

//여기부터 슬라이드
/*$(document).ready(function(){*/
  var imgs;
  var vids;
  var val;
  var y1;
  var y2;
  var vval;
  var vy1;
  var vy2;


  imgs = $(".slide ul");
  val = 0;//현재 이미지 번호를 가져옵니다
  y1 = 0; //2018년의 시작
  y2 = 18; //2019년의 시작

  vids = $("#vslideList");
  vval = 0;
  vy1 = 0; //2018년의 시작
  vy2 = 2; //2019년의 시작


      //버튼을 클릭했을 때 함수 실행
      $('#back').click(function () {
        back();
      });
      $('#next').click(function () {
        next();
      });
      $('#vback').click(function () {
        vback();
      });
      $('#vnext').click(function () {
        vnext();
      });
      $('#y1').click(function(){
        year1()
      });
      $('#y2').click(function(){
        year2()
      });
      $('#vy1').click(function(){
        vyear1()
      });
      $('#vy2').click(function(){
        vyear2()
      });
      


//이미지 시작
function back() {
  if( val <= 0 ){ val = 0;}
  else{val--;}
  imgs.animate({
    left:val*-800+'px'
  });
}

function next() {
        if( val >= item_Num-1 ){ val == item_Num-1; } //현재이미지가 마지막 번호라면 마지막번호로 그냥 있습니다.
        else{ val++; }
        imgs.animate({
          left:val*-800+'px'
        });
      }

      function year1() {
        imgs.animate({
          left:y1*-800+'px'
        });
        val=y1;
      }

      function year2() {
        imgs.animate({
          left:y2*-800+'px'
        });
        val=y2;
      }

      function imgzero() {
        imgs.animate({
          left:'0px'
        });
        val=0;
      }

      //이미지 끝

      //비디오 시작
      function vback() {

        if( vval <= 0 ){ vval = 0;}
        else{vval--;}
        vids.animate({
          left:vval*-800+'px'
        });
      }
      
      function vnext() {

        if( vval >= video_Num-1 ){ vval == video_Num-1; } //현재이미지가 마지막 번호라면 마지막번호로 그냥 있습니다.
        else{ vval++; }
        vids.animate({
          left:vval*-800+'px'
        });
      }

      function vyear1() {
        vids.animate({
          left:vy1*-800+'px'
        });
        vval=vy1;
      }

      function vyear2() {
        vids.animate({
          left:vy2*-800+'px'
        });
        vval=vy2;
      }

      function vzero() {
        vids.animate({
          left:'0px'
        });
        vval=0;
      }


      //비디오 끝

      


      /* });*/
  //여기까지 슬라이드
  
};

window.onload = function() {
  init();

};


