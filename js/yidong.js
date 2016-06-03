$(function(){
	lb();
	lbtwo();
	//banner轮播
function lb(){
	var banner=$(".banner-b")[0];
    var imgs=$(".banner-b-a");
    var dian=$(".banner-b-w");
    var left=$(".banner-b-left")[0];
	var right=$(".banner-b-right")[0];
	var n=0;
	var next=0;
    var t=setInterval(move,5000)
    var flag=true;
    function move(){
    	if(!flag){
    		return;
    	}
    	flag=false;
	    	next=n+1;
	    	if(next>=imgs.length){
	    		next=0;
	    	}
	    	for(var i=0;i<imgs.length;i++){
	    		dian[i].style.background="#BAC3D2";	    		
	    	}
	    	dian[next].style.background="#E40077";
	        imgs[next].style.opacity=0;
	        animate(imgs[n],{opacity:0},600);
	        animate(imgs[next],{opacity:1},600,function(){
	        	flag=true;
	        });
	        n=next;
	    }

    function move1(){
    	if(!flag){
    		return;
    	}
    	flag=false;
			next=n-1;
	    	if(next<0){
	    		next=imgs.length-1;
	    	}
	    	for(var i=0;i<imgs.length;i++){
	    		dian[i].style.background="#BAC3D2";	    		
	    	}
	    	dian[next].style.background="#E40077";
	        imgs[next].style.opacity=0;
	        animate(imgs[n],{opacity:0},600);
	        animate(imgs[next],{opacity:1},600,function(){
	        	flag=true;
	        });
	        n=next;
	    }
		banner.onmouseover=function(){
			clearInterval(t);                   //移入停止
			left.style.background="rgba(0,0,0,0.3)";
            left.style.color="#fff";
            right.style.background="rgba(0,0,0,0.3)";
            right.style.color="#fff";
		}
		banner.onmouseout=function(){
			t=setInterval(move,3000)        //移除东
			left.style.background="rgba(0,0,0,0.0)";
			left.style.color="rgba(0,0,0,0.0)";
            right.style.color="rgba(0,0,0,0.0)";
            right.style.background="rgba(0,0,0,0.0)";           
		}
        for(var i=0;i<dian.length;i++){
           dian[i].index=i;   
        dian[i].onmouseover=function(){
        	if(!flag){
    		return;
    	   	}
    		flag=false;
        	for(var i=0;i<imgs.length;i++){
	    		dian[i].style.background="#BAC3D2";	    		
	    	}
	    	dian[this.index].style.background="#E40077";
	        imgs[this.index].style.opacity=0;
	        animate(imgs[n],{opacity:0},600);
	        animate(imgs[this.index],{opacity:1},600,function(){
	        	flag=true;
	        });
	        n=this.index;
        } 
    }
    left.onclick=function(){
    	move1();
    }
    right.onclick=function(){
    	move();
    }
   }
//轮播
function lbtwo(){
	var boss=$(".g-e")[0];
   	var g=$(".g-d");
   	var left=$(".g-b-left")[0];
   	var right=$(".g-b-right")[0];
   	var width=g.offsetWidth;
    var n=0;
    var next=0;
    var t=setInterval(move,5000)
    function move(){
    	next=n+1;
    	if(next>=g.length){
		 		next=0;
		 	}
		g[n].style.left=-1200+"px";
		g[next].style.left=0;
    	n=next;
    }
    function move1(){
    	next=n-1;
    	if(next<0){
		 		next=g.length-1;
		 	}
		g[n].style.left=1200+"px";
		g[next].style.left=0;
    	n=next;
    	
    }
    left.onclick=function(){
                move1();
		}
	right.onclick=function(){
                move();
		}
	boss.onmouseover=function(){
		clearInterval(t);                   //移入停止
		left.style.background="rgba(0,0,0,0.3)";
        left.style.color="#fff";
        right.style.background="rgba(0,0,0,0.3)";
        right.style.color="#fff";
		}
	boss.onmouseout=function(){
		t=setInterval(move,5000)        //移除东
		left.style.background="rgba(0,0,0,0.0)";
		left.style.color="rgba(0,0,0,0.0)";
        right.style.color="rgba(0,0,0,0.0)";
        right.style.background="rgba(0,0,0,0.0)";           
		}
   }
//下拉
function xia(n){
		        
		var dao=$(".dao-b")[n];
        var daod=$(".dao-b-b")[n];
		dao.onmouseover=function(){
		daod.style.display="block";
		}
		dao.onmouseout=function(){
		daod.style.display="none";
		}       		
}
	var dao=$(".dao-b");
	for(var i=0;i<dao.length;i++){
		xia(i);
	}
// xiala2
function one(){
	var bos=$(".head-left")[0];
	var tu=$(".hend-one")[0];
		bos.onmouseover=function(){
			tu.style.display="block";
		}
		bos.onmouseout=function(){
			tu.style.display="none";
		}
    }
one();
// xiala3
function two(){
	var bos=$("#right-a");
	var tu=$(".deng")[0];
		bos.onmouseover=function(){
			tu.style.display="block";
		}
		bos.onmouseout=function(){
			tu.style.display="none";
		}
 }
    two();
})