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


var scene, screen, closeBt, t_box, mouseOption;
var item_Num = 27;
var pf = [];
var rd = [];
var rd_x = [];
var rd_y = [];
var rd_z = [];


var init = function() {

for(var i=0;i<item_Num; i++){
   
    var d = document.createElement('div');
    d.id='b_'+i;
    d.className = 'block';
      d.style['width'] = block.width+'px';
      d.style['height'] = block.height+'px';
      d.style['background-image']='url(./images/'+i+'.png)';
      d.style['-webkit-mask-image']='url(./images/mask.png)';
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
    
    d.onmouseover = function(e){ 
      //var s = 'translate3d('+rd_x[i]+'px,'+rd_y[i]+'px,'+rd_z[i]+'px) rotateY(360deg)';
      var s = 'translate3d('+this.rd_x+'px,'+ this.rd_y+'px,'+ this.rd_z +'px) rotateY(360deg)';
      this.style['-webkit-transform'] = s;
      console.log(this.id);
      console.log(s);
    };
    d.onmouseout = function(e){ 
      this.style['-webkit-transform'] = 'translate3d('+this.rd_x+'px,'+ this.rd_y+'px,'+ this.rd_z +'px) rotateY(720deg)';
    };  

  }