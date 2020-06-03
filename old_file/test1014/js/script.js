//onload---------------------------
//window.onload=function(){}

$(document).ready(function() {
//･ﾆ｡ｼ･ﾖ･・ｦﾄﾌ
table_common();
						   

//ｲﾒｳｵﾍﾗ｡｡･ﾇ｡ｼ･ｿｶｦﾍｭcommpany_func();

//ｽ魘・ﾟﾄ鹽efault_func();

//･ﾊ･ﾓﾆｰｺ絜avi_move();

//･ﾚ｡ｼ･ｸｲｼ｡｡FC2ｹﾎｾﾃ､ｹad_none();

//q&a ･・ｹ･ﾈ
qa_move();

//フォーム関連
form_func();

});
//onload---------------------------

//ｶｦﾄﾌﾊﾑｿ・
var page_array=new Array("page1","page2","page3","page4","page5");


//フォーム関連
function form_func(){
var form1=byid("form1");
var copy_form=form1.cloneNode(true);
copy_form.setAttribute("id","form2");

var page_5=byid(page_array[4])
page_5.appendChild(copy_form);

in_func("form1");
in_func("form2");

function in_func(id_name){
var temp_id=byid(id_name);
var open_a=tag_name(temp_id,"a")[0]
var close_a=tag_name(temp_id,"a")[1];
var form_area=tag_name(temp_id,"span")[0];

open_a.onclick=function(){
$(form_area).slideDown(400);
return false;
}
close_a.onclick=function(){
$(form_area).slideUp(400);
return false;
}

}

}



//q&a ･・ｹ･ﾈ
function qa_move(){
	
	var qa_list=byid("page3");
	var tag_li=tag_name(qa_list,"li");
	
	default_func();
	
	var all_disp=tag_name(qa_list,"a")[0]
	var quest_onli=tag_name(qa_list,"a")[1]
	
	//QA､ﾎｰ・ｽｼｨ｡｢ﾈｽｼｨ--------------------------------
	all_disp.onclick=function(){
	qa_disp_none()
	this.parentNode.style.display="none"
	quest_onli.parentNode.style.display=""
	return false;
	}
	quest_onli.onclick=function(){
	qa_disp_none()
	this.parentNode.style.display="none"
	all_disp.parentNode.style.display=""
	return false;
	}	
	function qa_disp_none(){
	for(i=0;i<tag_li.length;i++){
	if(i%2==0){		
	with(tag_li[i].style){
				marginTop!="12px"? marginTop="12px" : marginTop="0px" ;
				fontWeight!="bold"? fontWeight="bold" : fontWeight="normal";
				fontWeight!="bold"? borderBottom="dotted 1px #666" : borderBottom="solid 1px #ccc";
				}
	}else{
	$(tag_li[i]).slideToggle(400)
	}
	}
	}
	//QA､ﾎｰ・ｽｼｨ｡｢ﾈｽｼｨ--------------------------------

	
	function default_func(){
	for(i=0;i<tag_li.length;i++){
	if(i%2==0){
	with(tag_li[i].style){
		cursor="pointer";
		}
	tag_li[i].insertBefore(text_make("Q:"),tag_li[i].firstChild)
	click_func(i)
	}else{
	with(tag_li[i].style){
	display="none";
	border="solid 1px #ccc";
	borderTop="none"
	background="#fcfcfc"
	marginBottom="12px";
	}
	}//else
	}//for
	}
	
	function click_func(no){
		tag_li[no].onclick=function(){	
			with(this.style){
				marginTop!="12px"? marginTop="12px" : marginTop="0px" ;
				fontWeight!="bold"? fontWeight="bold" : fontWeight="normal";
				fontWeight!="bold"? borderBottom="dotted 1px #666" : borderBottom="solid 1px #ccc";
				}
				//
				$(tag_li[no+1]).slideToggle(400)
			}
		}
	}





//･ﾚ｡ｼ･ｸｲｼ｡｡FC2ｹﾎｾﾃ､ｹ
function ad_none(){
var tag_span=tag_name(document,"span");

tag_span[tag_span.length-1].style.display="none"
}

//･ﾊ･ﾓﾆｰｺ・
function navi_move(){
var navi_cont=byid("navi_cont");
var tag_li=tag_name(navi_cont,"li");
var tag_a=tag_name(navi_cont,"a");
for(i=0;i<tag_a.length;i++){
click_func(i);
}

//､ｹ､ﾙ､ﾆ､ﾎﾆｩﾌﾀﾅﾙ､ｼ､ｲ､・
alpha_func()
function alpha_func(){
for(i=0;i<tag_a.length;i++){
if(tag_a[i].firstChild){
$(tag_a[i].firstChild).css({"opacity":"0.6"})
}else{
tag_a[i].appendChild(tag_a[i].parentNode.firstChild);
$(tag_a[i].firstChild).css({"opacity":"0.6"})
}
}
}
//ｽ魘・ﾟﾄ・
$(tag_a[0].firstChild).css({"opacity":"1"});
tag_a[0].parentNode.insertBefore(tag_a[0].firstChild,tag_a[0])


function click_func(no){
//･ｯ･・ﾃ･ｯ	
tag_a[no].onclick=function(){
all_none();
$(byid(page_array[no])).fadeIn(700);
alpha_func()
$(this.firstChild).css({"opacity":"1"});
this.parentNode.insertBefore(this.firstChild,this)
return false;
}
//･ｪ｡ｼ･ﾐ｡ｼ
tag_a[no].onmouseover=function(){
if(this.firstChild) $(this.firstChild).css({"opacity":"0.9"});
}
//･｢･ｦ･ﾈ
tag_a[no].onmouseout=function(){
if(this.firstChild) $(this.firstChild).css({"opacity":"0.6"});
}

}

}


//ｽ魘・ﾟﾄ・
function default_func(){
//
all_none();
byid(page_array[0]).style.display="block"
}

//ﾁｴ･ﾚ｡ｼ･ｸﾈｽｼｨ
function all_none(){
for(i=0;i<page_array.length;i++) byid(page_array[i]).style.display="none"
}

//･ﾆ｡ｼ･ﾖ･・ｦﾄﾌ
function table_common(){
var tag_table=tag_name(document,"table");

for(i=0;i<tag_table.length;i++){
var tag_tr=tag_name(tag_table[i],"tr");
for(q=0;q<tag_tr.length;q++){
q%2==1?tag_tr[q].style.background="#eee":tag_tr[q].style.background="#fff"
}

var tag_td=tag_name(tag_table[i],"td");
for(q=0;q<tag_td.length;q++){
tag_td[q].setAttribute("valign","top")
}

}

}

//ｲﾒｳｵﾍﾗ｡｡･ﾇ｡ｼ･ｿｶｦﾍｭ
function commpany_func(){
var company_table=byid("company_table");
var clone_data=company_table.cloneNode(true);
var company_data=byid("company_data");
company_data.appendChild(clone_data)
}


//ｾﾊﾎｬ_start------------------------------------------

//idｾﾊﾎｬ
function byid(id){
return document.getElementById(id);
}

//･ｿ･ｰﾀｸﾀｮ
function tag_make(tag){
return document.createElement(tag);
}

//･ｿ･ｰｻﾘﾄ・
function tag_name(name1,tag){
return name1.getElementsByTagName(tag);
}

//･ﾆ･ｭ･ｹ･ﾈﾀｸﾀｮ
function text_make(text){
return document.createTextNode(text);
}

//ﾆｰｺ鏸ｽﾊﾌ if(!byid(" ")) return false;

//ﾍﾎｼ霹ﾀ｡｡0､ｫ､・､霹ﾀ､ﾊ､・randnum_no(0,6)
function randnum_no(min_no,max_no){
var randnum = min_no + Math.floor( Math.random() * max_no );
return randnum;
}

//ｸｽｺﾟ､ﾎ･｢･ﾉ･・ｹｼ霹ﾀ
var now_url=window.location.href;

//ｳｬﾁﾘﾊﾑｹｹ､ﾋﾂﾐｱ､ｹ､・assﾃ・ﾐｴﾘｿ・
//ｻﾈﾍﾑｻ､ﾏ｡｡var pass_text=pass_text(ｻﾅﾀﾚ､・ｸｻ奛｣script､ﾎ･ﾑ･ｹ､ｬjs/script.js､ﾀ､ﾃ､ｿ､・js/")

function pass_text(split_text){
var temp_pass=tag_name(document,"script")[0].getAttribute("src").split(split_text);
return temp_pass[0]
}


//ﾆ・ﾕｼ霹ﾀｴﾘﾏ｢
var now=new Date();//ｸｽｺﾟ､ﾎｻｴﾖ､霹ﾀ
var year=now.getFullYear();//4ｷ螟ﾎﾀｾﾎｯｿﾖ､ｷ､ﾞ､ｹ
var month=now.getMonth()+1;//ｷ・
var date=now.getDate();//ﾆ・

//ﾆ・ﾕ､・0080101､ﾎｷﾁｼｰ､ﾇｼ霹ﾀ
var now_date=now_date()

function now_date(){
var now=new Date();
var month=in_func(now.getMonth()+1);
var date=in_func(now.getDate());

return now.getFullYear()+month+date

function in_func(n){if(n<10){n=""+0+n;return n;}else{n=""+n;return n;}}
	}//now_date()､ﾎﾊﾄ､・

//ｾﾊﾎｬ_end------------------------------------------


