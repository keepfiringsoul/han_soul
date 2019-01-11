
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


var scene, screen, closeB;
var item_Num = 12;
var pf = [];
var rd = [];
var rd_x = [];
var rd_y = [];
var rd_z = [];

var block = {
  width: 200,
  height: 100,
};



var init = function() {

  slide = document.querySelector('.slide ul');
  screen = document.querySelector('#screen');
  closeBt = document.querySelector('#closeBt');


  closeBt.onclick = function(){
    screen.style['display'] = 'none';
    closeBt.style['display'] = 'none';
    screen.style['opacity'] = '0';
    closeBt.style['opacity'] = '0';
    dp_box.removeChild(dp_box.firstChild);
  };

  for(var i=0;i<item_Num; i++){

    var d = document.createElement('li');
/*    d.id='b_'+i;
    d.className = 'block';*/
    d.innerHTML = "<img src=\"./images/"+i+".jpg\">";
   slide.appendChild(d);

    pf.push(d);
    d.onclick= function() {
      contentsFill(this);
      screen.style['display'] = 'block';
      closeBt.style['display'] = 'block';
      setTimeout(function(){
        screen.style['opacity'] = '0.8';
        closeBt.style['opacity'] = '1';
      },50);    
    };
    
  }

  $(document).ready(function(){
      var imgs;
      var img_count;
      var img_position = 1;

      imgs = $(".slide ul");
      img_count = imgs.children().length;

      //버튼을 클릭했을 때 함수 실행
      $('#back').click(function () {
        back();
      });
      $('#next').click(function () {
        next();
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
    });
  
};

window.onload = function() {
  init();

};


