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
var item_Num = 5;
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

  scene = document.querySelector('#scene');
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

    var d = document.createElement('div');
    d.id='b_'+i;
    d.className = 'block';
    d.innerHTML = "<img src=\"./images/"+i+".jpg\">";
/*    d.style['width'] = block.width+'px';
    d.style['height'] = block.height+'px';
    d.style['background-image']='url(./images/'+i+'.jpg)';*/
    /*      d.style['-webkit-mask-image']='url(./images/mask.png)';*/
    scene.appendChild(d);

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
};

window.onload = function() {
  init();

};
