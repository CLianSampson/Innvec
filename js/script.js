$(document).ready(function(){
	//鼠标移入事件
	$("#employ").mouseover(function(){
	   $("#employ").css("color","red");
	   $("#companyIntroduction").css("color","gray");
	});
	//鼠标移出事件
	$("#employ").mouseout(function(){
	   $("#employ").css("color","gray");
	   $("#companyIntroduction").css("color","gray");
	});
	
	//鼠标移入事件
	$("#companyIntroduction").mouseover(function(){
	   $("#companyIntroduction").css("color","red");
	   $("#employ").css("color","gray");
	});
	//鼠标移出事件
	$("#companyIntroduction").mouseout(function(){
	   $("#companyIntroduction").css("color","gray");
	   $("#employ").css("color","gray");
	});
  
  	//定时器切换图片
  	var pathOne = "img/11.jpg";
  	var pathTwo = "img/22.jpg";
  	var pathThree = "img/33.jpg";
 
  	var flag = pathOne;
  	function changeImgSrc(){
  		$("#banner").attr('src',flag);
  		if(flag==pathOne){
  			flag = pathTwo;
  		}else if(flag==pathTwo){
  			flag  = pathThree;
  		}else{
  			flag = pathOne;
  		}
  	}
  	setInterval(changeImgSrc,3000);
 	//定时器切换图片
  
  	//首先显示工作内容
  	 $("#rightwelfare").hide();
	 $("#rightcontacts").hide();
	 $("#rightaddress").hide();
  	 $("#rightjobs").fadeIn();
  	
	$("#jobs").mousemove(function(){
		 $("#jobs").css("color","rgb(36,144,235)");
		 
		 $("#welfare").css("color","gray");
		 $("#contacts").css("color","gray");
		 $("#address").css("color","gray");
		
		 $("#rightwelfare").hide();
		 $("#rightcontacts").hide();
		 $("#rightaddress").hide();
		 $("#rightjobs").fadeIn();
	});
  
  
  	$("#welfare").mousemove(function(){
  		$("#welfare").css("color","rgb(36,144,235)");
  		
  		 $("#jobs").css("color","gray");
		 $("#contacts").css("color","gray");
		 $("#address").css("color","gray");
  		
  		 $("#rightjobs").hide();
  		 $("#rightcontacts").hide();
		 $("#rightaddress").hide();
		 $("#rightwelfare").fadeIn();
  	});
  	
  	$("#contacts").mousemove(function(){
  		$("#contacts").css("color","rgb(36,144,235)");
  		
  		 $("#welfare").css("color","gray");
		 $("#jobs").css("color","gray");
		 $("#address").css("color","gray");
		 
		 $("#rightjobs").hide();
		 $("#rightwelfare").hide();
		  $("#rightaddress").hide();
		 $("#rightcontacts").fadeIn();
  	});
  	
  	$("#address").mousemove(function(){
  		$("#address").css("color","rgb(36,144,235)");
  		
  		 $("#welfare").css("color","gray");
		 $("#contacts").css("color","gray");
		 $("#jobs").css("color","gray");
		 
		 $("#rightjobs").hide();
		 $("#rightwelfare").hide();
		 $("#rightcontacts").hide();
		 $("#rightaddress").fadeIn();
  	});
  
    
  
});



