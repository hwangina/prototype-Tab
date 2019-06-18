window.addEventListener("load", function(){
	var container=document.querySelector(".container");
	var tabs=document.querySelector("nav > ul");
	var menuLi=null;
	var info=null;
	var appendHTML="";
	
	/* load json data */
	var requestURL="data/tab_info.json"; 
	var request=new XMLHttpRequest();
	
	function init(){
		setTimeout(function(){
			request.open("GET", requestURL, true);
			request.responseType="json";
			request.send();
			request.addEventListener("load", function(){
				var data=request.response;
				for(key in data){
					appendHTML+='<li class="'+key+'"><a href="">'+data[key]+'</a></li>'+'\n';
					
					var desc=document.createElement("div");
					desc.setAttribute("class", "description "+data[key]);
					desc.innerText="subject : "+data[key];
					container.appendChild(desc);
				}
				tabs.innerHTML=appendHTML;
				
				menuLi=document.querySelectorAll("nav li");
				info=document.querySelectorAll(".description");
				menuLi[0].classList.add("on");
				info[0].classList.add("active");
				for(var i=0;i<menuLi.length;i++){
					menuLi[i].index=i;
				
					menuLi[i].addEventListener("click", function(e){
						e.preventDefault();
						
						for(var k=0;k<menuLi.length;k++){
							menuLi[k].classList.remove("on");
						}
						e.currentTarget.classList.add("on");
						var index=e.currentTarget.index;
						console.log(index);
						
						for(var d=0;d<info.length;d++){
							info[d].classList.remove("active");
							info[index].classList.add("active");
						}
					});
				}
			});
		}, 10);
	}
	init();
});