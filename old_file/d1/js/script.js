//@charset "utf-8";
//onload---------------------------
//window.onload=function(){}


$(document).ready(function() {

//naviマウスオーバー
navi_over();

//iframeのリンク
iframe_link();

//リンクをブランクに
link_blank();

});
//onload---------------------------

//リンクをブランクに
function link_blank(){
	var tag_a=tag_name(document,"a");
	for(i=0;i<tag_a.length;i++){
		if(tag_a[i].getAttribute("href")&&tag_a[i].getAttribute("href").indexOf("http")!=-1){
			tag_a[i].setAttribute("target","_blank")
			}
		}
	}

//naviマウスオーバー
function navi_over(){
	if(!byid("navi")) return false;
	var base_id=byid("navi");
	var tag_img=tag_name(base_id,"img");
	
	for(i=0;i<tag_img.length;i++){
		over_func(i);		
		}
	function over_func(no){
		var base_src=tag_img[no].getAttribute("src");
		if(base_src.indexOf("_2")!=-1) return false;
		var temp_src=base_src.split(".gif");
		var ch_src=temp_src[0]+"_2.gif";
		
		tag_img[no].onmouseover=function(){
			tag_img[no].setAttribute("src",ch_src)
			}
		tag_img[no].onmouseout=function(){
			tag_img[no].setAttribute("src",base_src)
			}
		
		}
	
	}


//iframeのリンク
function iframe_link(){
	if(!byid("ul_iframe")) return false;
	var base_id=byid("ul_iframe");
	var tag_a=tag_name(base_id,"a");
	
	for(i=0;i<tag_a.length;i++){
		tag_a[i].setAttribute("target","_top");
		}	
	}


	

//省略_start------------------------------------------

//id省略
function byid(id){
return document.getElementById(id);
}

//タグ生成
function tag_make(tag){
return document.createElement(tag);
}

//タグ指定
function tag_name(name1,tag){
return name1.getElementsByTagName(tag);
}

//テキスト生成
function text_make(text){
return document.createTextNode(text);
}

//動作判別 if(!byid(" ")) return false;

//乱数の取得
function ra_no(min_no,max_no){
var randnum =Math.floor(Math.random()*(max_no-min_no+1))+min_no;
return randnum;
}

//現在のアドレス取得
var now_url=window.location.href;

//階層変更に対応するpass抽出関数
//使用時は　var pass_text=pass_text(仕切り文字。scriptのパスがjs/script.jsだったら"js/")

function pass_text(split_text){
var temp_pass=tag_name(document,"script")[0].getAttribute("src").split(split_text);
return temp_pass[0]
}


//日付取得関連
var now=new Date();//現在の時間を取得
var year=now.getFullYear();//4桁の西暦年数を返します
var month=now.getMonth()+1;//月
var date=now.getDate();//日

//日付を20080101の形式で取得
var now_date=now_date()

function now_date(){
var now=new Date();
var month=in_func(now.getMonth()+1);
var date=in_func(now.getDate());

return now.getFullYear()+month+date

function in_func(n){if(n<10){n=""+0+n;return n;}else{n=""+n;return n;}}
	}//now_date()の閉め

//省略_end------------------------------------------


