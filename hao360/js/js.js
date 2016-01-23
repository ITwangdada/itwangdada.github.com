
'user sctrict';
window.onload=function(){
	(function(){
		var oBox1 = document.getElementsByClassName('j-box3');
			for(var i=0;i<oBox1.length;i++){
				(function(index){
				var oBtn1 = oBox1[i].getElementsByClassName('j-btn3')[0];
				var oDiv1 = oBox1[i].getElementsByClassName('j-div3')[0];
				oBtn1.onfocus=function(){
					oDiv1.style.display='block';
				};
				oBtn1.onblur=function(){
					oDiv1.style.display='none';
				};})(i);
			}
	})();
	(function(){
		var oUl = document.getElementById('ul1');
		var aLi = oUl.getElementsByTagName('li');
		for(var i=0;i<aLi.length;i++){
			aLi[i].onclick=function(){
				for(var i=0;i<aLi.length;i++){
					aLi[i].className='fl clearfix';	
				}
				this.className='fl clearfix active';	
			}	
		}
	})();
	(function(){
		tab('j-box5');
		function tab(parent){
			var oBox = document.getElementsByClassName(parent);
				_tab(oBox[0],'activity j-div2','activity j-div2 active');
				_tab(oBox[1],'j-div2 seson','j-div2 seson active');
				_tab(oBox[2],'j-div2 seson','j-div2 seson active');
				_tab(oBox[3],'j-div2 seson','j-div2 seson active');
				_tab(oBox[4],'j-div2 seson','j-div2 seson active');
				_tab(oBox[5],'j-div2 seson','j-div2 seson active');
				_tab(oBox[6],'j-div2 seson','j-div2 seson active');
				_tab(oBox[7],'j-div2 seson','j-div2 seson active');
				_tab(oBox[8],'j-div2 seson','j-div2 seson active');
				_tab(oBox[9],'j-div2 seson','j-div2 seson active');
				_tab(oBox[10],'j-div2 seson','j-div2 seson active');
				_tab(oBox[11],'j-div2 seson','j-div2 seson active');
				_tab(oBox[12],'j-div2 seson','j-div2 seson active');
				_tab(oBox[13],'j-div2 like','j-div2 like active');
		}
		function _tab(oBox,sClass1,sClass2){
			var aBtn = oBox.getElementsByClassName('j-btn2');
			var aDiv = oBox.getElementsByClassName('j-div2');
			var count= 0;
			oBox.onmouseover=function(){
				for(var i=0;i<aBtn.length;i++){
					aBtn[i].style.display='block';	
				}	
			};
			oBox.onmouseout=function(){
				for(var i=0;i<aBtn.length;i++){
					aBtn[i].style.display='none';	
				}	
			};
			for(var i=0;i<aDiv.length;i++){
				(function(index){
					aBtn[0].onclick=function(){
						count--;
						for(var i=0;i<aDiv.length;i++){
							aDiv[i].className=sClass1;	
						}
						if(count<0){
							count=aDiv.length-1;
						}
						aDiv[count].className=sClass2;
						
					};
					aBtn[1].onclick=function(){
						count++;
						for(var i=0;i<aDiv.length;i++){
							aDiv[i].className=sClass1;	
						}
						if(count==aDiv.length){
							count=0;	
						}
						aDiv[count].className=sClass2;
					};
				})(i);	
			}
		}
	})();
	(function(){
			_tab('j-box');
			function _tab(sName){
				var aParent = document.getElementsByClassName(sName);
					tab(aParent[0],'fl j-btn','j-div','fl active j-btn','active j-div');
					tab(aParent[1],'fl j-btn','j-div section-bd','fl active j-btn','active j-div section-bd');
					tab(aParent[2],'fl j-btn','j-div section-bd','fl active j-btn','active j-div section-bd');
					tab(aParent[3],'fl j-btn','garment j-div','fl active j-btn','garment j-div active');
					tab(aParent[4],'fl j-btn','j-div section-bd','fl active j-btn','active j-div section-bd');
					tab(aParent[5],'fl j-btn','j-div ssq','fl active j-btn','active j-div ssq');
					tab(aParent[6],'fl j-btn','c3-cont j-div','fl active j-btn','c3-cont j-div active');
					tab(aParent[7],'fl j-btn','c3-cont j-div','fl active j-btn','c3-cont j-div active');
					tab(aParent[8],'fl j-btn','c3-cont j-div','fl active j-btn','c3-cont j-div active');
					tab(aParent[9],'fl j-btn','c3-cont j-div','fl active j-btn','c3-cont j-div active');
					tab(aParent[10],'fl j-btn','c3-cont j-div','fl active j-btn','c3-cont j-div active');
			}
			function tab(parent,sClass1,sClass2,sClass3,sClass4){		
					var oBtn = parent.getElementsByClassName('j-btn');	
					var oDiv = parent.getElementsByClassName('j-div');
					for(var i=0;i<oBtn.length;i++){
						(function (index){
							oBtn[i].onclick=function(){
								for(var i=0;i<oBtn.length;i++){
									oBtn[i].className=sClass1;
									oDiv[i].className=sClass2;	
								}
								this.className=sClass3;
								oDiv[index].className=sClass4;	
							}
						})(i);	
					}	
			}	
		})();
	
}