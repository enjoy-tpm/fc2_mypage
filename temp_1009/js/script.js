//@charset "utf-8";
//onload---------------------------
//window.onload=function(){}

$(document).ready(function() {
//テーブル共通
table_common();
						   

//会社概要　データ共有
commpany_func();

//初期設定
default_func();

//ナビ動作
navi_move();
});
//onload---------------------------

//共通変数
var page_array=new Array("page1","page2","page3","page4");

//ナビ動作
function navi_move(){
var navi_cont=byid("navi_cont");
var tag_a=tag_name(navi_cont,"a");
for(i=0;i<tag_a.length;i++){
click_func(i)
}

function click_func(no){
tag_a[no].onclick=function(){
all_none();
$(byid(page_array[no])).fadeIn(700)
return false;
}
}

}


//初期設定
function default_func(){
//
all_none();
byid(page_array[0]).style.display="block"
}

//全ページ非表示
function all_none(){
for(i=0;i<page_array.length;i++) byid(page_array[i]).style.display="none"
}

//テーブル共通
function table_common(){
var tag_table=tag_name(document,"table");

for(i=0;i<tag_table.length;i++){
var tag_tr=tag_name(tag_table[i],"tr");
for(q=0;q<tag_tr.length;q++){
q%2==1?tag_tr[q].style.background="#eee":tag_tr[q].style.background="#fcfcfc"
}

var tag_td=tag_name(tag_table[i],"td");
for(q=0;q<tag_td.length;q++){
tag_td[q].setAttribute("valign","top")
}

}

}

//会社概要　データ共有
function commpany_func(){
var company_table=byid("company_table");
var clone_data=company_table.cloneNode(true);
var company_data=byid("company_data");
company_data.appendChild(clone_data)
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

//乱数の取得　0から5を取得なら randnum_no(0,6)
function randnum_no(min_no,max_no){
var randnum = min_no + Math.floor( Math.random() * max_no );
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


