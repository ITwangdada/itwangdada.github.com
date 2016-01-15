
;(function(){
	window.onload=window.onresize=function(){

		//移入移出点击效果
		;(function(){
			var oBtn=document.getElementById('btn');
			var oBj=document.getElementById('bj');
			var oDiv=document.getElementById('swi');
			oBtn.onclick=function(){
				oBtn.style.WebkitTransition='.5s all ease';
				oBtn.style.WebkitTransform='scale(5)';
				oBtn.style.MozTransition='.5s all ease';
				oBtn.style.MozTransform='scale(5)';
				oBtn.style.opacity=0;
				function tEnd(){
					oBtn.style.display='none';
					oBj.style.display='none';
					oDiv.style.WebkitFilter='blur(0px)';
					oDiv.style.filter='blur(0px)';
					oDiv.style.MozkitFilter='blur(0px)';
					//立方体
					;(function(){
						var oDiv=document.querySelector('.box-3d');

						var x=30;
						var y=60;
						setInterval(function(){
							y+=3;
							x-=1;
							oDiv.style.WebkitTransform='perspective(800px) rotateX('+x+'deg) rotateY(-'+y+'deg)';
							oDiv.style.MozTransform='perspective(800px) rotateX('+x+'deg) rotateY(-'+y+'deg)';
						},30);
					})();
					oBtn.removeEventListener('transitionend',tEnd,false);
				};
				oBtn.addEventListener('transitionend',tEnd,false);
			};
			oBtn.onmouseover=function(){
				oBtn.style.opacity=1;
				oBtn.style.boxShadow='0 0 0 5px rgba(255,255,255,0.5),0 0 0 10px rgba(255,255,255,.5)';
				function oEnd(){
					oBtn.style.boxShadow=' 0 0 0 5px rgba(255,255,255,.5),0 0 0 0 rgba(255,255,255,0)';
					oBtn.removeEventListener('transitionend',oEnd,false);
				}
				oBtn.addEventListener('transitionend',oEnd,false);
			};
			oBtn.onmouseout=function(){
				oBtn.style.opacity=0.5;
				oBtn.style.boxShadow='0 0 0 5px rgba(255,255,255,.6),0 0 0 15px rgba(255,255,255,.3)';
				function tEnd(){
					oBtn.style.boxShadow=' 0 0 0 20px rgba(0,0,0,0),0 0 0 25px rgba(255,255,255,0)';
					oBtn.removeEventListener('transitionend',tEnd,false);
				}
				oBtn.addEventListener('transitionend',tEnd,false);
			};
		})();
		;(function(){
			var oInp=document.getElementById('t1');
			var oUl=document.getElementById('ul1');
			var oBtn=document.getElementById('btn1');

			var iNow=-1;

			var oldValue='';

			//抬起
			oInp.onkeyup=function(ev){
				var oEvent=event || ev;
				if(oEvent.keyCode==40 || oEvent.keyCode==38)return;
				if(oEvent.keyCode==13){
					window.open('https://www.baidu.com/s?wd='+oInp.value,'_self');
					oInp.value='';
				}
				var fnName=('show'+Math.random()).replace('.','');
				window[fnName]=function(str){
					oUl.innerHTML='';
					var arr=str.s;
					if(arr.length){
						oUl.style.display='block';
					}else{
						oUl.style.display='none';
					}
					for(var i=0;i<arr.length;i++){
						var oLi=document.createElement('li');
						oLi.innerHTML=arr[i];
						oUl.appendChild(oLi);

						(function(index){
							oLi.onmouseover=function(){
								for(var i=0;i<oUl.children.length;i++){
									oUl.children[i].className='';
								}
								this.className='active';
								iNow=index;
							};
							oLi.onmouseout=function(){
								for(var i=0;i<oUl.children.length;i++){
									oUl.children[i].className='';
								}
							};
							oLi.onclick=function(){
								window.open('https://www.baidu.com/s?wd='+this.innerHTML,'_self');
							};
						})(i);

					}
					oldValue=oInp.value;
				};
				var oS=document.createElement('script');
				oS.src='https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+oInp.value+'&cb='+fnName;
				var oHead=document.getElementsByTagName('head')[0];
				oHead.appendChild(oS);
			};

			//键盘事件

			oInp.onkeydown=function(ev){
				function tab(){
					for(var i=0;i<aLi.length;i++){
						aLi[i].className='';
					}
					if(iNow==-1){
						oInp.value=oldValue;
					}else{
						aLi[iNow].className='active';
						oInp.value=aLi[iNow].innerHTML;
					}
				}
				var aLi=oUl.children;
				var oEvent=ev || event;
				if(oEvent.keyCode==40){
					iNow++;
					if(iNow==aLi.length)iNow=-1;
					tab();
					document.title=iNow;
				}
				if(oEvent.keyCode==38){
					iNow--;
					if(iNow==-2)iNow=aLi.length-1;
					tab();
					document.title=iNow;
					return false;
				}
			};

			//点击搜索
			oBtn.onclick=function(){
				window.open('https://www.baidu.com/s?wd='+oInp.value,'_self');
				oInp.value='';
			};
		})();
	};
})();

