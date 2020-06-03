window.onload=function(){

//h_banar("http://shop.as-web.jp/sp/new/","http://shop.as-web.jp/script/img/tp.gif");
each_page();
//--------------------------------------------------------------

//top_topics();
top_topics();
//--------------------------------------------------------------

//オススメ商品
osusume();
//--------------------------------------------------------------

//名レース立ち読み
race_read();
//--------------------------------------------------------------

//ibookトップ
ibook_top();
//--------------------------------------------------------------

//ibook余計なものを消す
ibook_none();
//--------------------------------------------------------------

//カンガルートップ
kangaroo_top();
//--------------------------------------------------------------

//在庫を消す
zaiko_none("S11145");//i_予約
zaiko_none("S11132");//チケット予約
zaiko_none("S00013");//カレンダー
//zaiko_none("S11130");//i_teiki
//--------------------------------------------------------------


//ログアウト_リンク
loguout_link();
//--------------------------------------------------------------

//カレンダーotoku用関数ここから
cal_otoku()
//--------------------------------------------------------------

//カレンダー用関数ここから
script_in("script/sp_cal.js","index");
setTimeout("cal_aftermove()", 500);
//--------------------------------------------------------------

}
//onloadの閉め------------------------------------------------------------------------------------



//カレンダーotoku用関数ここから
function cal_otoku(){
	if(now_url.indexOf("view=cart&shop_id=S00013")==-1) return false;
	
	var contents=byid("contents");//ID判別
	var tag_a=tag_name("contents","a");//aを変数化
	var shop_menu=byid("shop_menus");//Id判別
	var tag_a1=tag_name("shop_menu","a");//メニュー用のA
	var temp_array=new Array();//該当NOを抽出ここから
		for(i=0;i<5;i++){
		temp_array[i]=18753+i
		}
		//該当NOを抽出ここまで
	
	//common_text
	var text_shop0013="shop.php?shop_id=S00013";
	var text_proid="prod_id=";
	var text_link="shop.php?shop_id=S00013#otoku_list";
	var text_link2="shop.php?shop_id=S00013#list";
		
	//indexof用の関数ここから
	function va_indexof(top_var,index_var,no_yes_no){
		if(no_yes_no=="!="){
		return top_var.getAttribute("href").indexOf(index_var)!=-1;
		}
		else{
		return top_var.getAttribute("href").indexOf(index_var)==-1;
			}
		}
		//indexof用の関数ここまで
		
	for(p=0;p<tag_a.length;p++){//大元のfor
	for(q=0;q<5;q++){
	if(va_indexof(tag_a[p],temp_array[q],"!=")){	
	for(i=0;i<tag_a1.length;i++){
		if(va_indexof(tag_a1[i],text_shop0013,"!=")&&va_indexof(tag_a1[i],text_proid,"==")){
			tag_a1[i].setAttribute("href",text_link)
			}	
		}
		
//コンテンツ
	for(i=0;i<tag_a.length;i++){	
		if(va_indexof(tag_a[i],text_shop0013,"!=")&&va_indexof(tag_a[i],text_proid,"==")){
			tag_a[i].setAttribute("href",text_link)
			}	
		}
		
		}
	}

	}
}

//カレンダーotoku用関数ここまで


//カレンダー用関数
function cal_aftermove(){
//トップページ
if(window.location.href.indexOf("index")!=-1){
comon_func();
}

//個別ページ
if(window.location.href.indexOf("index")!=-1){
	
//一覧を消す
bottom_list_none();
//カートを一番上に
cart_ch();

//画像拡大用スペース
photo_space();
}
}//cal_aftermove()の閉め



//外部script挿入用関数の本体------------------------------------------
function script_in(script_pass,url_text){
	
	//挿入用スクリプトを作成
	var make_script=tag_make("script");
	make_script.setAttribute("type","text/javascript");
	make_script.setAttribute("src",script_pass);
	
	document.getElementsByTagName("head")[0].appendChild(make_script);		
}
//外部script挿入用関数の閉め------------------------------------------




//ibookゴミを消す------------------------------------------
function ibook_none(){
var contentsLeft=byid("contentsLeft");
var tag_p=tag_name("contentsLeft","p");

for(i=0;i<tag_p.length;i++){
	if(tag_p[i].parentNode.getAttribute("id")=="contentsLeft"){
		tag_p[i].style.display="none";
		}	
	}	
	}//ibook_none()の閉め
//------------------------------------------






//名レース立ち読み
function race_read(){
	
	var read_link_url;
	
	if(window.location.href.indexOf("shop_id=S00007")!=-1){	
	//一覧リスト(ibook用）
	read_link_url="http://as-web.jp/100sen/read/"
	infunc("051","14009");
	infunc("050","14008");
	infunc("049","14007");
	infunc("048","14006");
	infunc("047","14005");
	infunc("046","14004");
	infunc("045","14003");
	infunc("044","14002");
	infunc("043","14001");
	
	infunc("020","11454");
	infunc("016","11102");
	infunc("013","10156");
	
	//一覧リスト(F1レーシング用）
	read_link_url="http://news.as-web.jp/book/f1_racing/i/";
	//infunc("0812","13704 ");
	//infunc("0811","13703");
	infunc("0810","13702");
	infunc("0809","13701");
	infunc("0808","13700");
	infunc("0807","13699");
	infunc("0806","13698");
	infunc("0805","13696");
	infunc("0804","13695");
	infunc("0803","13694");
	infunc("0802","13693");
	infunc("0801","13692");
	infunc("0712","13280");
	infunc("0711","13279");
	infunc("0710","13186");
	infunc("0709","12948");
	infunc("0708","12550");
	infunc("0707","12380");
	infunc("0706","11935");
	infunc("0705","11782");
	infunc("0704","11686");
	infunc("0703","11589");
	infunc("0702","11481");
	infunc("0701","11363");
	//infunc("","11229");
	infunc("0611","11119");
	infunc("0610","10946");
	infunc("0609","10347");
	infunc("0608","9972");
	infunc("0607","9752");
	infunc("0606","9162");
	infunc("0605","9047");
	infunc("0604","9036");
	infunc("0603","9084");
	infunc("0602","9083");
	infunc("0601","9082");
	infunc("0512","9081");
	infunc("0511","9080");
	infunc("0510","9079");
	infunc("0509","9078");
	infunc("0508","9077");
	infunc("0507","9076");
	infunc("0506","9075");
	infunc("0505","9074");
	infunc("0504","9073");	
	}	
	
	
	//内部の関数
	function infunc(book_no,url_no){
	if(window.location.href.indexOf("prod_id="+url_no)==-1)return false;//なかったら止まる
	var gbl=byid("gbl");
	var gbrb=byid("gbrb");
	
	//画像用
	var book_a=tag_name("gbl","a")[0];
	book_a.setAttribute("href",read_link_url+book_no+"/");
	//ボタン用
	var buton_a=tag_name("gbrb","a")[0];
	var buton_img=tag_name("gbrb","img")[0];
	buton_a.setAttribute("href",read_link_url+book_no+"/");
	buton_a.setAttribute("target","_blank");
	buton_img.setAttribute("src","script/img/100sen/bt_read.gif");
	}
	
	
	}

//カンガルートップ
function kangaroo_top(){
	//反映の確認
	if(window.location.href.indexOf("shop_id=S11142")==-1)return false;//なかったら止まる
	if(window.location.href.indexOf("&shop_id=S11142")!=-1||window.location.href.indexOf("shop_id=S11142&")!=-1)return false;//あったら止まる
	
	//ローカル確認用	if(window.location.href.indexOf("kangaroo")==-1)return false;

	//挿入元
	var contents=byid("contents");
	contents.style.paddingTop="25px";//一番上に距離をとる
	
	
	//左のコンテンツ元
	var kangaroo_cont=byid("kangaroo_cont");
	kangaroo_cont.style.display="block";
	//contleftからの移動
	contents.insertBefore(kangaroo_cont,contents.firstChild);
	
	
	//コンテンツ1つ目右
	var kan_cont1_right=byid("kan_cont1_right");
	kan_cont1_right_tag={
		tag_img:tag_name("kan_cont1_right","img")
	}
    kan_cont1_right_tag.tag_img[1].style.marginRight="5px";
	kan_cont1_right_tag.tag_img[1].style.border="solid 1px #FF1313";
	kan_cont1_right_tag.tag_img[2].style.border="solid 1px #A0A0A0";
	//マウスオーバーの動作1
	kan_cont1_right_tag.tag_img[1].onmouseover=function(){
	kan_cont1_right_tag.tag_img[0].setAttribute("src","script/img/kangaroo/photo1.jpg");
	kan_cont1_right_tag.tag_img[1].style.cursor="pointer";
	kan_cont1_right_tag.tag_img[2].style.cursor="pointer";
	kan_cont1_right_tag.tag_img[1].style.border="solid 1px #FF1313";
	kan_cont1_right_tag.tag_img[2].style.border="solid 1px #A0A0A0";		
		}
	//マウスオーバーの動作2
	kan_cont1_right_tag.tag_img[2].onmouseover=function(){
	kan_cont1_right_tag.tag_img[0].setAttribute("src","script/img/kangaroo/photo2.jpg");
	kan_cont1_right_tag.tag_img[1].style.border="solid 1px #A0A0A0";
	kan_cont1_right_tag.tag_img[2].style.border="solid 1px #FF1313";		
		}
	
	//コンテンツ1つ目左
	var kan_cont1_left=byid("kan_cont1_left");
	kan_cont1_left_tag={
	tag_tr:tag_name("kan_cont1_left","tr")
	}
	for(i=0;i<kan_cont1_left_tag.tag_tr.length;i++){
		if(i%2==1){
		kan_cont1_left_tag.tag_tr[i].style.background="#eeeeee";
		}
		}
		
	//コンテンツ3つめ
	var kan_cont3=byid("kan_cont3");
	kan_cont3_tag={
	tag_h3:tag_name("kan_cont3","h3"),
	tag_h4:tag_name("kan_cont3","h4")
	}
	
	//コンテンツ3つめ　ナビ
	var kan_navi=byid("kan_navi");
	kan_navi_tag={
	tag_a:tag_name("kan_navi","a")
	}
	kan_navi_tag.tag_a[0].onclick=function(){
		for(i=0;i<kan_cont3_tag.tag_h3.length;i++){
			kan_cont3_tag.tag_h4[i].style.display="none";
			kan_cont3_tag.tag_h3[i].style.color="#0000ff";
			}
		return false;
		}
	kan_navi_tag.tag_a[1].onclick=function(){
		for(i=0;i<kan_cont3_tag.tag_h3.length;i++){
			kan_cont3_tag.tag_h4[i].style.display="block";
			kan_cont3_tag.tag_h3[i].style.color="#E73F05";
			}
		return false;
		}
	
	//各設問クリックの動作
	for(i=0;i<kan_cont3_tag.tag_h3.length;i++){
	click_move(i)
		}
	//iをクリックしたときに対応したiを表示の関数
	function click_move(no){
		kan_cont3_tag.tag_h3[no].onclick=function(){
		kan_cont3_tag.tag_h4[no].style.display="block";
		kan_cont3_tag.tag_h3[no].style.cursor="default";
		kan_cont3_tag.tag_h3[no].style.color="#E73F05";
		}
		kan_cont3_tag.tag_h3[no].onmouseover=function(){
		kan_cont3_tag.tag_h3[no].style.cursor="pointer";
		}
	}
	
	//kangaroo_top()の閉め
	}


//ibookトップ
function ibook_top(){
	//反映の確認	
	if(window.location.href.indexOf("shop_id=S00007")==-1)return false;//なかったら止まる
	if(window.location.href.indexOf("&shop_id=S00007")!=-1||window.location.href.indexOf("shop_id=S00007&")!=-1)return false;//あったら止まる
	//ローカル確認用	if(window.location.href.indexOf("shop_id=S00007")==-1)return false;

	//挿入元
	var contents=byid("contents");
	contents.style.paddingTop="10px";//一番上に距離をとる

	
	//右側オススメ商品関連
	var ranking=byid("ranking");
	ranking_tag={
		tag_a:tag_name("ranking","a"),
		tag_img:tag_name("ranking","img"),
		tag_span:tag_name("ranking","span")
		}
		//オススメのタグ指定
		//aの指定
		for(i=0;i<ranking_tag.tag_a.length;i++){
			ranking_tag.tag_a[i].style.display="block";
			ranking_tag.tag_a[i].style.padding="2px 4px";
			ranking_tag.tag_a[i].style.fontSize="0.9em";
			ranking_tag.tag_a[i].style.borderBottom="dotted 1px #666666";
			
			if(i%3==0){
				ranking_tag.tag_a[i].style.paddingTop="0px";
				ranking_tag.tag_a[i].style.marginLeft="5px";
				ranking_tag.tag_a[i].style.marginTop="0";
				ranking_tag.tag_a[i].style.borderBottom="none";
				}
			}
		//spanの指定
		for(i=0;i<ranking_tag.tag_span.length;i++){
			ranking_tag.tag_span[i].style.display="block";
			ranking_tag.tag_span[i].style.textAlign="right";
			ranking_tag.tag_span[i].style.paddingRight="3px";			
		}
		//オススメのタグ指定 終了
		
		//挿入物制作
		var ibook_top=tag_make("span");
		ibook_top.setAttribute("id","ibook_top");
		cont_in();//コンテンツ3つ挿入用関数の実行
		contents.insertBefore( ibook_top, contents.firstChild );
		cont_p_in(0,6);//コンテンツ内の仕切り挿入用関数の実行１
		cont_p_in(1,6);//コンテンツ内の仕切り挿入用関数の実行２
		
		//コンテンツ1番目
		var cont0_tag_p=tag_name("cont0","p");//０～５
		
				var cont0=byid("cont0");
		for(i=0;i<cont0_tag_p.length;i++){
			    //幅指定
				cont0_tag_p[i].style.width="120px";
				cont0.style.background="url('i/ibook_top/cont_body1.gif') top left repeat-y";
				//挿入物の制作
				var make_a=tag_make("a");
				make_a.setAttribute("href","http://shop.as-web.jp/shop.php?shop_id=S00007&prod_id="+book_title_link[i][2])
				var make_img=tag_make("img");				
				make_img.setAttribute("src","http://shop.as-web.jp/shop/S00007/images/"+book_title_link[i][2]+"/pic_small.jpg");
				make_img.style.margin="0 auto";
				make_a.appendChild(make_img);
				make_a.appendChild(document.createTextNode(book_title_link[i][0]));
				make_a.appendChild(tag_make("br"));
				make_a.appendChild(document.createTextNode(book_title_link[i][1]));				
				cont0_tag_p[i].appendChild(make_a);	
					}
	
		//コンテンツ2番目
		var cont1_tag_p=tag_name("cont1","p");
		for(i=0;i<cont1_tag_p.length;i++){
			    ranking_tag.tag_a[0].style.textDecoration="none";
			    cont1_tag_p[i].appendChild(ranking_tag.tag_a[0]);
				cont1_tag_p[i].style.width="90px";
				if(i%2==1){
					cont1_tag_p[i].style.background="#ffffff";
					ranking_tag.tag_a[0].style.fontWeight="bold";
					cont1_tag_p[i].insertBefore(ranking_tag.tag_a[0],cont1_tag_p[i].firstChild);
					cont1_tag_p[i].style.width="150px";
					cont1_tag_p[i].appendChild(ranking_tag.tag_span[0]);
					}
					}
		var cont1_tag_img=tag_name("cont1","img");
		for(i=1;i<4;i++){
			cont1_tag_img[i].style.width="78px";
			}
					
		//コンテンツ3番目
		//変数_挿入元
		var cont3=byid("cont2");
		
		var cont3_left=byid("cont3_left");
		var cont3_right=byid("cont3_right");
		//コンテンツ２つを移動
		cont3.insertBefore(cont3_left,cont3.lastChild);
		cont3.insertBefore(cont3_right,cont3.lastChild);
		//コンテンツ3のタグを変数化
		var cont3_tag={
			tag_span:tag_name("cont2","span")
			}
		//挿入物の値指定
		for(i=0;i<cont3_tag.tag_span.length;i++){
			if(i%2==0){
				cont3_tag.tag_span[i].style.width="100px";
				}
			else{
				cont3_tag.tag_span[i].style.background="#ffffff";
				}
			if(i==1){
				cont3_tag.tag_span[i].style.width="250px";
				}
			if(i==3){
				cont3_tag.tag_span[i].style.width="260px";
				}
			}
			
		//コンテンツ4番目
		//変数_挿入元
		var cont4=byid("cont3");
		cont4.style.background="url('i/ibook_top/cont_body2.gif') top left repeat-y";
		//コンテンツ4のタグを変数化
		var cont4_tag={
			tag_img:tag_name("cont3","img")
			}
		cont4_tag.tag_img[1].setAttribute("src","i/ibook_top/cont_bottom2.gif");
		
		var cont_aleart=byid("cont_aleart");
		cont4.insertBefore(cont_aleart,cont4.lastChild);
		
								
		//コンテンツ内の仕切り挿入用関数の指定
		function cont_p_in(div_no,p_no){		
		var cont1=tag_name("ibook_top","div")[div_no];
		for(i=0;i<p_no;i++){
			var tag_p=tag_make("p");
			cont1.insertBefore(tag_p,cont1.lastChild);
			}
		//cont_p_inの閉め
		}
		
		
		//コンテンツ4つ挿入用関数の指定		
		function cont_in(){
			for(i=0;i<4;i++){
		var cont=tag_make("div");
		cont.setAttribute("id","cont"+i);
		cont_tag={
			tag_img1:tag_make("img"),
			tag_img2:tag_make("img")
			};
		cont_tag.tag_img1.setAttribute("src","i/ibook_top/cont"+i+"_top.gif");
		cont_tag.tag_img1.style.marginBottom="5px";
		cont_tag.tag_img2.setAttribute("src","i/ibook_top/cont_bottom.gif");
		cont_tag.tag_img2.style.clear="both";

		cont.appendChild(cont_tag.tag_img1);
		cont.appendChild(cont_tag.tag_img2);		
		ibook_top.appendChild(cont);
		//forの閉め
			}
		//cont_in()の閉め
		}
	
	//いらないものを消す
	ranking.style.display="none";
	
	//ibook_top()の閉め
	}




//在庫を消す関数
function zaiko_none(shop_id){
	if(!document.getElementById("cart"))return false;
	//アドレスの一致確認
	if(window.location.href.indexOf(shop_id) !=-1){
	//変数化
	var cart=byid("cart");
	var tag_p=tag_name("cart","p");
	//カート欄の在庫削除
	if(tag_p[1]){
	tag_p[1].style.display="none";
	//iの閉め
	}

	if(!document.getElementById("gbb"))return false;
	var gbb=byid("gbb");
	var tag_td=tag_name("gbb","td");
	for(i=0;i<tag_td.length;i++){
		if(i%4==2){
			tag_td[i].style.display="none";			
			}
		}
			//ifの閉め
		}
	}


//top_ranking
function top_rank(){
if(!document.getElementById("ranking"))return false;

top_rank_base(0);
top_rank_base(2);
top_rank_base(4);
	}


//オススメ
function osusume(){
if(!document.getElementById("osusume"))return false;

//idの指定
var osusume=byid("osusume");
osusume.style.padding="8px 0";
osusume.style.margin="8px 0 0";

//id装飾関係
osusume.style.borderTop="solid 1px #dddddd";
osusume.style.borderBottom="solid 1px #dddddd";
osusume.style.background="#fafafa"

//回り込み解除
var tag_div=tag_make("div");
tag_div.style.clear="both";
//回り込みを一番最後に挿入
osusume.appendChild(tag_div);

//子ノード関連
var tag_p=tag_name("osusume","p");
//pの数でpaddingを変更
if(tag_p.length==4){
osusume.style.paddingLeft="75px";
}
if(tag_p.length==3){
osusume.style.paddingLeft="150px";
}
if(tag_p.length==2){
osusume.style.paddingLeft="225px";
}
if(tag_p.length==1){
osusume.style.paddingLeft="300px";
}


//ショップID
var shop_no=window.location.href.substr(40,5)

for(i=0;i<tag_p.length;i++){
tag_p[i].style.width="150px";

//商品ID
var goods_no=tag_p[i].title;

//イメージ製作＆アドレス設定
create_img=tag_make("img");
create_img.setAttribute("src","http://shop.as-web.jp/shop/S"+shop_no+"/images/"+goods_no+"/pic_small.jpg");

//左右padding用tt作成
var tag_tt=tag_make("tt");

//画像センター寄せ用span生成
var tag_span=tag_make("span");

//Ａタグ設定
var tag_a=tag_p[i].getElementsByTagName("a");
//リンク先の設定
tag_a[0].setAttribute("href","http://shop.as-web.jp/shop.php?shop_id=S"+shop_no+"&prod_id="+goods_no);

//商品価格
var goods_price=tag_a[0].firstChild;
//価格頭の表記
var price_head=text_make("定価：");

//タイトル製作
var goods_name=text_make(tag_a[0].getAttribute("alt"));

//挿入のまとめ
tag_p[i].appendChild(tag_tt);
tag_tt.appendChild(tag_a[0]);
tag_tt.appendChild(price_head);
tag_tt.appendChild(goods_price);

tag_span.appendChild(create_img);
tag_a[0].appendChild(tag_span);
tag_a[0].appendChild(goods_name);

//forの閉め
}

//functionの閉め
}




//トップランキング関連
function top_rank_base(a_no){
if(!document.getElementById("ranking"))return false;
var ranking=document.getElementById("ranking");
var tag_a=ranking.getElementsByTagName("a");
var tag_img=ranking.getElementsByTagName("img");


//アドレス抽出
var url_base=tag_a[a_no].getAttribute("href");

//ショップ
var shop_no_base=url_base.split("id=S");
var shop_no="S"+shop_no_base[1].substr(0,5);


var goods_no_base=url_base.split("prod_id=");
var goods_no=parseInt(goods_no_base[1]);



//挿入画像を準備
var make_img=document.createElement("img");
//改行を準備
var make_br=document.createElement("br");

tag_a[a_no].appendChild(make_br);
tag_a[a_no].appendChild(make_img);
	
make_img.setAttribute("src","http://shop.as-web.jp/shop/"+shop_no+"/images/"+goods_no+"/pic_big.jpg");
	make_img.style.width="50px"

//イベント操作　オーバー＆アウト

tag_a[a_no].onmouseover=function(){
this.appendChild(make_br);
this.appendChild(make_img);
	
	make_img.setAttribute("src","http://shop.as-web.jp/shop/"+shop_no+"/images/"+goods_no+"/pic_big.jpg");
	make_img.style.width="100px"
	
	}

tag_a[a_no].onmouseout=function(){
make_img.setAttribute("src","http://shop.as-web.jp/shop/"+shop_no+"/images/"+goods_no+"/pic_big.jpg");
	make_img.style.width="50px"

}
	
	
	}






//topics_backcolor
function top_topics(){
if(!document.getElementById("topics"))return false;

var topics=document.getElementById("topics");


var tag_td=topics.getElementsByTagName("td");
for(i=0;i<tag_td.length;i++){
	if(i==0||i%2==0){
		var tdlist=tag_td[i].firstChild.nodeValue.split("/");
        if(tdlist[0]==month&&tdlist[1]>=day-3){
		tag_td[i].style.color="#ff0000";
tag_td[i].style.fontWeight="bold";
		}
		}
	}




}
//fine



/*ページ別読み込み*/
function each_page(){

if(window.location.href.substr(54,5)=="13002"){
cart_none();
zaiko_none();
}

if(window.location.href=="http://shop.as-web.jp/shop.php?shop_id=S11132"){
right_none();
}
if(window.location.href.substr(40,5)=="11132"&&window.location.href.substr(46,4)=="prod"){
zaiko_none();
}
}




function h_banar(link_url,img_url){
var id_head=document.getElementById("head");

var tag_div=document.createElement("div");


var tag_a=new Array(3);
var img=new Array(3);
for(i=0;i<1;i++){
tag_a[i]=document.createElement("a");
tag_a[i].setAttribute("href",link_url);
img[i]=document.createElement("img");
tag_a[i].appendChild(img[i]);
tag_div.appendChild(tag_a[i]);
} 

//カード休止、告知用テキスト生成ココから
var tag_p=document.createElement("p");
var tag_b=document.createElement("b");
var tag_a2=document.createElement("a");
tag_a2.setAttribute("href","http://www.jalcard.co.jp/milenet/index.html");
tag_a2.setAttribute("target","_blank");
var text1=document.createTextNode("お知らせ");


var text2=document.createTextNode("10月26日（金）午前2時～午前4時まで、クレジットカード決済代行会社システムメンテナンスのため、クレジットカードによるお買い物が出来ません。予めご了承ください。");
var text3=document.createTextNode("→詳しくはこちら");





/*注意書き カード休止*/
tag_b.appendChild(text1);
tag_p.appendChild(tag_b);
tag_p.appendChild(text2);
/*tag_div.appendChild(tag_p);*/

//カード休止、告知用テキスト生成ココまで

img[0].setAttribute("src",img_url);


tag_div.setAttribute("id","topbanar");

id_head.parentNode.insertBefore(tag_div,id_head);


}




/*タイマー*/

function timer(){
timer=setInterval("move()",3000);
}

var st=1;

function move(){
var id_topbanar=document.getElementById("topbanar");
var tag_img=id_topbanar.getElementsByTagName("img");

if (st< 2) {
st++;
} 
else {
st = 1;
}
if(st==1){
tag_img[1].setAttribute("src","script/img/bana1.gif");
tag_img[2].setAttribute("src","script/img/bana2.gif");
}
if(st==2){
tag_img[1].setAttribute("src","script/img/bana2.gif");
tag_img[2].setAttribute("src","script/img/bana3.gif");
}
if(st==3){
tag_img[1].setAttribute("src","script/img/bana3.gif");
tag_img[2].setAttribute("src","script/img/bana1.gif");
}


}


//カート欄コピー

function cart_copy(){
if(!byid("gbody")) return false;
var cart=byid("cart");
var gbr=byid("gbr");

var copy_cart=cart.cloneNode(true);

var tag_p=copy_cart.getElementsByTagName("p");

for(i=0;i<tag_p.length;i++){
tag_p[i].style.display="none";
}


gbr.insertBefore(copy_cart,gbr.childNodes[1])


alert("test");
}




//カート移動
function cart_ch(){
if(!byid("gbody")) return false;
var gbr=byid("gbr");

var cart=byid("cart");

gbr.insertBefore(cart,gbr.childNodes[2])


}



//タイトル読み込み
function favorite(){
if(!byid("gbody")) return false;

var gbody=byid("gbody");
var tag_h1=tag_name("gbody","h1");

var goods_title=tag_h1[0].firstChild.nodeValue;

var keyword="xxx"

if(goods_title.indexOf(keyword)!=-1){
alert(goods_title);
}

}



//ログアウト　リンク
function loguout_link(){
//selectがあるかないか
if(!byid("cart")) return false;
var cart=byid("cart");
if(tag_name("cart","select")[0]) return false;
if(tag_name("cart","input")[0]) return false;
//フォームの指定

var tag_form=tag_name("cart","form");

//brを変数へ
var tag_br=tag_form[0].getElementsByTagName("br");

//挿入物を準備
var tag_a1=tag_make("a");
var tag_a2=tag_make("a");
//リンク色を変更
tag_a1.style.color="#ff0000";
tag_a2.style.color="#ff0000";

//リンク先指定
tag_a1.setAttribute("href","https://secure.as-web.jp/as-web/as-shop/user.php?action=display&mode=policy");
tag_a2.setAttribute("href","#");
//テキスト製作
var text1=text_make("新規登録はこちら");
var text2=text_make(" ／ ");
var text3=text_make("ログインは画面上部から");
//テキストを子ノード化
tag_a1.appendChild(text1);
tag_a2.appendChild(text3);

//挿入
cart.appendChild(tag_a1);
cart.appendChild(text2);
cart.appendChild(tag_a2);
//tag_br[2].parentNode.insertBefore(tag_a1,tag_br[2]);
//tag_br[2].parentNode.insertBefore(text2,tag_br[2]);
//tag_br[2].parentNode.insertBefore(tag_a2,tag_br[2]);
}



//各種省略
function byid(id){
return document.getElementById(id);
}

function tag_make(tag){
return document.createElement(tag);
}

function tag_name(idname,tag){
var name1=document.getElementById(idname);
return name1.getElementsByTagName(tag);
}

function text_make(text){
return document.createTextNode(text);
}

//現在のアドレス
var now_url=window.location.href


//日付取得
var now=new Date();
var month=now.getMonth()+1;
var day=now.getDate();
