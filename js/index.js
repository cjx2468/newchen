
function logo(){
	var lis =document.querySelector(".clearfloat").querySelectorAll("li")
//alert(ul)
for(i = 0; i < lis.length;i++){
	lis[i].onmousemove  = function(){
		this.style.background = "#bae206";
		this.style.borderTop = "7px solid #bae206";
		this.style.transition = "all .1s "
		this.style.marginTop = "-7px"
		
	}
	lis[i].onmouseout = function(){
		this.style.background = "#00703a"
		this.style.borderTop = "";
		this.style.transition = ""
		this.style.marginTop = ""
	}
}

}
logo()
//轮播图

	var lunbo = document.querySelector(".swiper").querySelector("img")
	console.log(lunbo)
	var num =0;
  setInterval(function(){
  			
            num++;
            if(num == 3){
                num = 1;     
            }
            lunbo.src="img/"+num+".jpg" 
               console.log(num)
        },2000)


