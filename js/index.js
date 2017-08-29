/*//////////////////////top二级导航//////////////////////////////*/
var top_nav_cont = document.querySelector('.top-nav-cont');
var oLi = top_nav_cont.getElementsByTagName('li');
var nav_cont_nav2 = document.querySelector('.nav-cont-nav2');
var oTop_nav2= document.querySelector('.top-nav2');
//var oNav_cont_nav2 = nav_cont_nav2.getElementsByTagName('a');
for(var i = 0; i<oLi.length;i++){
	oLi[i].onmouseover = function(){
		if(this.children[1]){
			this.children[1].style.display = 'block';
			oTop_nav2.style.display = 'block';
		}else{
//			this.children[1].style.display = 'none';
//			oTop_nav2.style.display = 'none';
		}
	}
	oLi[i].onmouseout = function(){
		for(var j = 0;j<oLi.length;j++){
			if(this.children[1]){
				this.children[1].style.display = 'none';
				oTop_nav2.style.display = 'none';
			}else{
				
			}
		}
	}
}
/*//////////////////////////////产品小箭头////////////////////////*/
//i.iconfont.icon-angle-up
//i.iconfont.icon-arrow-t
/*产品list*/
var top_c_c_left = document.querySelector('.top-c-c-left');
var top_c_c_left_list = document.querySelector('.top-c-c-left-list');
var oSpan = top_c_c_left.querySelector('span');
var oPro_list = document.querySelector('.pro-list');
var icon_up = document.querySelector('i.iconfont.icon-angle-up');
var icon_down = document.querySelector('i.iconfont.icon-arrow-t');


oSpan.onmouseover = function(){
		oPro_list.style.display = 'block';
}
top_c_c_left.onmouseout = function(){
		oPro_list.style.display = 'none';
}

/*///////////////////////warp-top的js////////////////////*/
//w-t-l-nav-l

var oNav_l = document.querySelector('.w-t-l-nav-l');
var oNav_li = oNav_l.querySelectorAll('li');
var imgBox = document.querySelector('.imgBox');
var oUl_list = imgBox.querySelectorAll('ul');
//var oW_t_img = document.querySelector('.w-t-l-c .showImg')
for(var i = 0; i<oNav_li.length;i++){
	oNav_li[i].index = i;
	oNav_li[i].onmouseover = function(){
//		alert(0)
		for(var j = 0 ; j<oNav_li.length;j++){
			oNav_li[j].className = '';
			
			oUl_list[j].style.display = 'none';
		}
		oNav_li[this.index].className = 'active';
		if(oUl_list[this.index]){
			oUl_list[this.index].style.display = 'block';
		}
	}
}

/*大图左边导航*/
var img_left_nav = document.querySelector('.img-left-nav');
var img_left_nav_list = img_left_nav.querySelectorAll('li');

//img_left_nav_list.onblur = function(){
//	run();
//};
/*//////////////////大图的部分////////////////////////*/
/*两个按钮*/
var oImgBtn = document.querySelector('.img-center-up');
var oPrev = document.querySelector('.prev');
var oNext = document.querySelector('.next');
/*//给按钮添加鼠标事件*/
oImgBtn.onmouseover = function(){
	oPrev.style.display = 'block';
	oNext.style.display = 'block';
}
oImgBtn.onmouseout = function(){
	oPrev.style.display = 'none';
	oNext.style.display = 'none';
}
/*大图切换*/
var oBigImg = document.querySelector('.bigImg-bg');
var oBigImgList = oBigImg.querySelectorAll('img');
/*获取轮播导航*/
var img_c_c_smallPic = document.querySelector('.img-c-c-smallPic');
var img_small_nav = img_c_c_smallPic.querySelectorAll('li');
//第一个图片和按钮显示
oBigImgList[0].style.display = 'block';
img_small_nav[0].style.background = 'rgba(0,0,0,0.4)';
img_small_nav[0].style.color = '#FFFFFF';
/*大图轮播*/
var bigImg_this = 0;
for(var i = 0;i<img_small_nav.length;i++){
	img_small_nav[i].index = i;
	img_small_nav[i].onmouseover = function(){
		bigImg_clear();
		oBigImgList[this.index].style.display = 'block';
		img_small_nav[this.index].style.background = 'rgba(0,0,0,0.4)';
		img_small_nav[this.index].style.color = '#FFFFFF';
		bigImg_this = this.index ;
	}
}
/*大图按钮事件*/
/*大图下一张*/
oNext.onclick = function(){
	bigImg_clear();
	bigImg_this++;
	if(bigImg_this>=oBigImgList.length){
		bigImg_this = 0;
	}
	bigImg_init();
}
/*大图上一张*/
oPrev.onclick = function(){
	bigImg_clear();
	bigImg_this--;
	if(bigImg_this<0){
		bigImg_this = oBigImgList.length-1;
	}
	bigImg_init();
}
/*将大图片里面的内容清空*/
function bigImg_clear(){
	for (var i = 0;i<oBigImgList.length;i++) {
		oBigImgList[i].style.display = 'none';
		img_small_nav[i].style.background = '#FFFFFF';
		img_small_nav[i].style.color = '#000000';
	}
}
function bigImg_init(){
	oBigImgList[bigImg_this].style.display = 'block';
	img_small_nav[bigImg_this].style.background = 'rgba(0,0,0,0.4)';
	img_small_nav[bigImg_this].style.color = '#FFFFFF';
}

/*大图导航的切换*/
var img_left_nav = document.querySelector('.img-left-nav');
var img_left_nav_li = img_left_nav.querySelectorAll('.img-left-nav>li');

/*二级导航*/
// img-left-nav-li1     二级导航
/* 获取所有的li */
var img_left_nav = document.querySelector('.img-left-nav');
var img_left_nav_li = img_left_nav.querySelectorAll('.img-left-nav>li');
/* li下面的list */
var img_nav_li_list = img_left_nav.querySelectorAll('.img-nav-li-list');
/* p元素 */
var img_nav_li_list_p = img_left_nav.querySelectorAll('.img-nav-li-list>p');
/* 二级导航 */
var img_left_nav_list1 = document.querySelectorAll('.img-left-nav-list1');

/*设置第一个的样式*/
img_left_nav_list[0].style.background = '#FFFFFF';
img_nav_li_list_p[0].style.color = '#2DBB55';
	
var num = 0;
for(var i = 0; i<img_left_nav_li.length; i++){
	img_left_nav_li[i].index = i;
	
	/* 鼠标移入事件 */
	img_left_nav_li[i].onmouseover= function(){
		for(var i = 0; i<img_left_nav_li.length; i++){
			img_left_nav_li[i].style.background = '#38414c';
			img_left_nav_li[num].style.background = '#FFFFFF';
		}
		img_left_nav_li[this.index].style.background = '#FFFFFF';
		img_nav_li_list_p[this.index].style.color = '#2DBB55';
	}
	
	/* 鼠标移出事件 */
	img_left_nav_li[i].onmouseout= function(){
		for(var i = 0; i<img_left_nav_li.length; i++){
			img_left_nav_li[i].style.background = '#38414c';
			img_left_nav_li[num].style.background = '#FFFFFF';
			img_nav_li_list_p[i].style.color = '#fff';
		}
//		img_left_nav_li[this.index].style.background = '#38414c';
//		img_left_nav_li[this.index].style.color = '#FFFFFF';
		img_left_nav_li[num].style.background = '#FFFFFF';
		img_nav_li_list_p[num].style.color = '#2DBB55';
	}

		document.addEventListener('click',function(){
			for(var i=0;i<img_left_nav_list1.length;i++){
						img_left_nav_list1[i].style.display='none';
					}
		},true)

	
	
	var body = document.querySelector('body');
	/* 鼠标点击显示二级导航 */
	img_left_nav_li[i].addEventListener('click',function(){
		img_left_nav.tabIndex = 1;
		if (this.children[1]) { 	
//			this.children[1].style.display = 'none';
			for(var i = 0; i<img_left_nav_li.length; i++){
				img_left_nav_li[i].style.background = '#38414c';
				img_nav_li_list_p[i].style.color = '#FFFFFF';
			}
			for(var i=0;i<img_left_nav_list1.length;i++){
				img_left_nav_list1[i].style.display='none';
			}
			img_left_nav_list1[this.index-1].style.display = 'block';
			img_left_nav_li[this.index].style.background = '#FFFFFF';
			img_nav_li_list_p[this.index].style.color = '#2DBB55';
			num = this.index;
		}else {
			for (var i = 0; i<img_left_nav_li.length; i++) {
				img_left_nav_li[i].style.background = '#38414c';
				img_nav_li_list_p[i].style.color = '#FFFFFF';
			}
			for(var i=0;i<img_left_nav_list1.length;i++){
				img_left_nav_list1[i].style.display='none';
			}
			img_left_nav_li[0].style.background = '#FFFFFF';
			img_nav_li_list_p[0].style.color = '#2DBB55';
			num = this.index;
		}
	})
	
}



function run(){
	for (var i = 0; i<img_left_nav_li.length; i++) {
	img_left_nav_li[i].style.background = '#38414c';
	img_nav_li_list_p[i].style.color = '#FFFFFF';
}
for(var i=0;i<img_left_nav_list1.length;i++){
	img_left_nav_list1[i].style.display='none';
}
img_left_nav_li[0].style.background = '#FFFFFF';
img_nav_li_list_p[0].style.color = '#2DBB55';
}


////////////////////////* .img-center-down */////////////////////////
var imgCs = document.querySelector('.img-center-down');
var imgLi_ist = imgCs.querySelectorAll('li');
var imgList = imgCs.querySelectorAll('li>img');
imgLi_ist[0].style.width = '130px';
imgLi_ist[0].style.left = '0';
for(var i = 0; i < imgList.length; i++){
	imgList[i].index = i;
	imgList[i].onmouseover = function(){
		for(var i = 0; i < imgList.length; i++){
//			imgList[i].style.right = '0';
			imgList[i].style.position = 'absolute';
			imgList[i].style.left = '0';
			imgLi_ist[i].style.width = '95px';
		}
		imgList[this.index].style.position = 'absolute';
		imgList[this.index].style.left = '-100px';
		imgLi_ist[this.index].style.width = '130px';
	}
}

/* 当季热玩 */
var hp_title = document.querySelector('.hp-title');
var hp_li = hp_title.querySelectorAll('ul>li');
var hp_cont = document.querySelectorAll('.hp-cont');

for(var i = 0; i < hp_li.length; i++){
	hp_li[i].index = i;
	hp_li[i].onmouseover = function(){
		for(var i = 0; i < hp_li.length; i++){
			hp_li[i].style.color = '#000';
			hp_cont[i].style.display = 'none';
		}
		hp_li[this.index].style.color = '#ff6600';
		hp_cont[this.index].style.display = 'block';
	}
}

/* 长线出境 */

var ex_title = document.querySelector('.ex-title');
var ex_li = ex_title.querySelectorAll('ul>li');
var ex_cont = document.querySelectorAll('.ex-cont');
ex_li[0].style.borderBottom = '3px solid #3aa860';
ex_li[0].style.color = '#3aa860';
for(var i = 0; i < ex_li.length; i++){
	ex_li[i].index = i;
	ex_li[i].onmouseover = function(){
		for(var i = 0; i < ex_li.length; i++){
			ex_li[i].style.color = '#000';
			ex_li[i].style.borderBottom = 'none'
			ex_cont[i].style.display = 'none';
		}
		ex_li[this.index].style.color = '#3aa860';
		ex_li[this.index].style.borderBottom = '3px solid #3aa860';
		ex_cont[this.index].style.display = 'block';
	}
}


/* 长线出境 */
var exs_title = document.querySelector('.exs-title');
var exs_li = exs_title.querySelectorAll('ul>li');
var exs_cont = document.querySelectorAll('.exs-cont');
exs_li[0].style.borderBottom = '3px solid #517ac0';
exs_li[0].style.color = '#517ac0';
for(var i = 0; i < exs_li.length; i++){
	exs_li[i].index = i;
	exs_li[i].onmouseover = function(){
		for(var i = 0; i < exs_li.length; i++){
			exs_li[i].style.color = '#000';
			exs_li[i].style.borderBottom = 'none'
			exs_cont[i].style.display = 'none';
		}
		exs_li[this.index].style.color = '#517ac0';
		exs_li[this.index].style.borderBottom = '3px solid #517ac0';
		exs_cont[this.index].style.display = 'block';
	}
}

/* 国内旅游 */
var is_title = document.querySelector('.is-title');
var is_li = is_title.querySelectorAll('ul>li');
var is_cont = document.querySelectorAll('.is-cont');
is_li[0].style.borderBottom = '3px solid #D74568';
is_li[0].style.color = '#D74568';
for(var i = 0; i < is_li.length; i++){
	is_li[i].index = i;
	is_li[i].onmouseover = function(){
		for(var i = 0; i < is_li.length; i++){
			is_li[i].style.color = '#000';
			is_li[i].style.borderBottom = 'none'
			is_cont[i].style.display = 'none';
		}
		is_li[this.index].style.color = '#D74568';
		is_li[this.index].style.borderBottom = '3px solid #D74568';
		is_cont[this.index].style.display = 'block';
	}
}


/* 周边旅游 */
var rim_title = document.querySelector('.rim-title');
var rim_li = rim_title.querySelectorAll('ul>li');
var rim_cont = document.querySelectorAll('.rim-cont');
rim_li[0].style.borderBottom = '3px solid #08AFB1';
rim_li[0].style.color = '#08AFB1';
for(var i = 0; i < rim_li.length; i++){
	rim_li[i].index = i;
	rim_li[i].onmouseover = function(){
		for(var i = 0; i < rim_li.length; i++){
			rim_li[i].style.color = '#000';
			rim_li[i].style.borderBottom = 'none'
			rim_cont[i].style.display = 'none';
		}
		rim_li[this.index].style.color = '#08AFB1';
		rim_li[this.index].style.borderBottom = '3px solid #08AFB1';
		rim_cont[this.index].style.display = 'block';
	}
}

/* 自助旅游 */
var self_title = document.querySelector('.self-title');
var self_li = self_title.querySelectorAll('ul>li');
var self_cont = document.querySelectorAll('.self-cont');
self_li[0].style.borderBottom = '3px solid #EFAD5C';
self_li[0].style.color = '#EFAD5C';
for(var i = 0; i < self_li.length; i++){
	self_li[i].index = i;
	self_li[i].onmouseover = function(){
		for(var i = 0; i < self_li.length; i++){
			self_li[i].style.color = '#000';
			self_li[i].style.borderBottom = 'none'
			self_cont[i].style.display = 'none';
		}
		self_li[this.index].style.color = '#EFAD5C';
		self_li[this.index].style.borderBottom = '3px solid #EFAD5C';
		self_cont[this.index].style.display = 'block';
	}
}

/* 主题旅游 */
var theme_title = document.querySelector('.theme-title');
var theme_li = theme_title.querySelectorAll('ul>li');
var theme_cont = document.querySelectorAll('.theme-cont');
theme_li[0].style.borderBottom = '3px solid #E15B38';
theme_li[0].style.color = '#E15B38';
for(var i = 0; i < theme_li.length; i++){
	theme_li[i].index = i;
	theme_li[i].onmouseover = function(){
		for(var i = 0; i < theme_li.length; i++){
			theme_li[i].style.color = '#000';
			theme_li[i].style.borderBottom = 'none'
			theme_cont[i].style.display = 'none';
		}
		theme_li[this.index].style.color = '#E15B38';
		theme_li[this.index].style.borderBottom = '3px solid #E15B38';
		theme_cont[this.index].style.display = 'block';
	}
}


/* 游轮签证 */
var ship_title = document.querySelectorAll('.ship-title ul li');
var ship_cont = document.querySelectorAll('.ship-cont ');
 
ship_title[0].style.borderBottom = '3px solid #08AFB1';
ship_title[0].style.color = ' #08AFB1';
for(var i = 0; i < ship_title.length; i++){
	ship_title[i].index = i;
	ship_title[i].onmouseover = function(){
		for(var i = 0; i < ship_title.length; i++){
			ship_title[i].style.color = '#000';
			ship_title[i].style.borderBottom = 'none'
			ship_cont[i].style.display = 'none';
		}
		ship_title[this.index].style.color = '#08AFB1';
		ship_title[this.index].style.borderBottom = '3px solid #08AFB1';
		ship_cont[this.index].style.display = 'block';
	}
}

/* 自驾游 */
var selfD_title = document.querySelectorAll('.selfD-title ul li');
var selfD_cont = document.querySelectorAll('.selfD-cont ');
 
selfD_title[0].style.borderBottom = '3px solid #08AFB1';
selfD_title[0].style.color = '#08AFB1';
for(var i = 0; i < selfD_title.length; i++){
	selfD_title[i].index = i;
	selfD_title[i].onmouseover = function(){
		for(var i = 0; i < selfD_title.length; i++){
			selfD_title[i].style.color = '#000';
			selfD_title[i].style.borderBottom = 'none'
			selfD_cont[i].style.display = 'none';
		}
		selfD_title[this.index].style.color = '#08AFB1';
		selfD_title[this.index].style.borderBottom = '3px solid #08AFB1';
		selfD_cont[this.index].style.display = 'block';
	}
}

/* 酒店精选 */
var hotel_title = document.querySelectorAll('.hotel-title ul li');
var hotel_cont = document.querySelectorAll('.hotel-cont ');
 
hotel_title[0].style.borderBottom = '3px solid #F5BE5C';
hotel_title[0].style.color = '#F5BE5C';
for(var i = 0; i < hotel_title.length; i++){
	hotel_title[i].index = i;
	hotel_title[i].onmouseover = function(){
		for(var i = 0; i < hotel_title.length; i++){
			hotel_title[i].style.color = '#000';
			hotel_title[i].style.borderBottom = 'none'
			hotel_cont[i].style.display = 'none';
		}
		hotel_title[this.index].style.color = '#F5BE5C';
		hotel_title[this.index].style.borderBottom = '3px solid #F5BE5C';
		hotel_cont[this.index].style.display = 'block';
	}
}

/* 门票精选 */
var ticket_title = document.querySelectorAll('.ticket-title ul li');
var ticket_cont = document.querySelectorAll('.ticket-cont ');
 
ticket_title[0].style.borderBottom = '3px solid #08AFB1';
ticket_title[0].style.color = '#08AFB1';
for(var i = 0; i < ticket_title.length; i++){
	ticket_title[i].index = i;
	ticket_title[i].onmouseover = function(){
		for(var i = 0; i < ticket_title.length; i++){
			ticket_title[i].style.color = '#000';
			ticket_title[i].style.borderBottom = 'none'
			ticket_cont[i].style.display = 'none';
		}
		ticket_title[this.index].style.color = '#08AFB1';
		ticket_title[this.index].style.borderBottom = '3px solid #08AFB1';
		ticket_cont[this.index].style.display = 'block';
	}
}

/* 当地游玩 */
var local_title = document.querySelectorAll('.local-title ul li');
var local_cont = document.querySelectorAll('.local-cont ');
 
local_title[0].style.borderBottom = '3px solid #935EB2';
local_title[0].style.color = '#935EB2';
for(var i = 0; i < local_title.length; i++){
	local_title[i].index = i;
	local_title[i].onmouseover = function(){
		for(var i = 0; i < local_title.length; i++){
			local_title[i].style.color = '#000';
			local_title[i].style.borderBottom = 'none'
			local_cont[i].style.display = 'none';
		}
		local_title[this.index].style.color = '#935EB2';
		local_title[this.index].style.borderBottom = '3px solid #935EB2';
		local_cont[this.index].style.display = 'block';
	}
}

/* 游记 */
var strNav_li = document.querySelectorAll('.strNav li');
var str_cont = document.querySelectorAll('.strategy-cont ');
 
strNav_li[0].style.background = '#2E9900';
strNav_li[0].style.color = '#fff';
for(var i = 0; i < strNav_li.length; i++){
	strNav_li[i].index = i;
	strNav_li[i].onmouseover = function(){
		for(var i = 0; i < strNav_li.length; i++){
			strNav_li[i].style.background = '#fff';
			strNav_li[i].style.color = '#333';
			str_cont[i].style.display = 'none';
		}
		strNav_li[this.index].style.background = '#2E9900';
		strNav_li[this.index].style.color = '#fff';
		str_cont[this.index].style.display = 'block';
	}
}


/* 畅销排行榜 */
var ar_banner = document.querySelectorAll('.ar-banner > li');
var ar_conts = document.querySelectorAll('.ar-conts');
ar_banner[0].style.borderBottom = '3px solid #4ECF5B';
ar_banner[0].style.color = '#4ECF5B';

for(var i = 0; i<ar_banner.length; i++){
	ar_banner[i].index = i;
	ar_banner[i].onclick = function(){
		for(var i = 0; i<ar_banner.length; i++){
			
			ar_banner[i].style.borderBottom = '';
			ar_banner[i].style.color = '#333';
			ar_conts[i].style.display = 'none';
		}
			ar_banner[this.index].style.borderBottom = '3px solid #4ECF5B';
			ar_banner[this.index].style.color = '#4ECF5B';
			ar_conts[this.index].style.display = 'block';
	}
}


