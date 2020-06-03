//@charset "shift_jis";

//----------------------------------------------------------------------------

//リンク先大元
var comon_url="shop.php?shop_id=S00013&prod_id="
//仕様画像リンク先大元
var img_url="i-cal/img/"
//定期購読者用のkeyvar 
//
var teiki_key="otoku";
//var teiki_key="html";

//発売月／発売日
var sell_month=9;
var sell_date=4;


//----------------------------------------------------------------------------

//商品基本データ[商品名、ID、価格]
var goods_data=new Array(
						 
[["レーシングオンカレンダー２００９","18506","2,800","18753","2,520",8],
["　世界最速の男達がサーキットに集う、F1。","　300km／h越えのバトルが生みだす数々の名シーンから、13枚の『瞬間』を切り取った、2009年度版カレンダーが今年も登場。","モータースポーツ最高峰の魅力と感動が、迫力の大画面で甦る。"],
"　カメラマン：金子　博 ／ サイズ：縦430ｍｍ×横590ｍｍ ／ タイプ：壁掛け ／ 枚数：13（表紙+12ヶ月） ／ 発売時期：2008年10月3日(金）"
],

[["スーパーGTカレンダー２００９","18507","2,000","18754","1,800",8],
["　GTA公認『スーパーGTカレンダー』が今年も登場。","　ニッサン・トヨタ・ホンダの3大メーカーが火花を散らすGT500。","　個性的なプライベーターチームが、拮抗したバトルを繰り広げるGT300。","　数ある名シーンから厳選した、迫力あるGTマシンはファン必見！！"],
"カメラマン：平田　勝 ／ サイズ：縦430ｍｍ×横590ｍｍ ／ タイプ：壁掛け ／ 枚数：13（表紙+12ヶ月） ／ 発売時期：2008年10月3日(金）"
],

[["WRCPLUSカレンダー２００９","18508","2,800","18755","2,520",8],
["　たった2度、法定速度の練習走行で作ったペースノートを頼りに、全開走行に挑む競技―ＲＡＬＬＹ","　ラリーカーは本番で初めてコースに挑む事を許される。過酷な条件の中、マシンの全能力を解き放つドライバーは現代の賢者か、それとも命知らずか。","　今年のカレンダーは、躍動するマシンの「野生」・「みなぎる闘争心」をテーマに構成しました。写真は勿論、『WRCPLUS』専属の小林直樹。 マシンの躍動するシーンを大判ならではの大迫力でお届け致します。世界の絶景にほとばしるエナジーを「体感」して下さい"],
"カメラマン：小林直樹 ／ サイズ：縦430ｍｍ×横590ｍｍ ／ タイプ：壁掛け ／ 枚数：13（表紙+12ヶ月 ／ 発売時期：2008年10月3日(金）"
],

[["グランプリ天国カレンダー　LAP２００９","18509","1,200","18756","1,080",6],
["　F1速報本誌で連載中の大人気4コマ漫画、グラ天。","　あのキャラこのネタ総出演で、カレンダーになっても大暴れ。","　もちろん、このためだけのオリジナル描き下ろし。","　2009年も『グラ天カレンダー』でたくさん笑って、たまにホロリ。"],
"カメラマン：村山文夫 ／ サイズ：縦148mm×横210mm ／  タイプ：卓上 ／ 枚数：13（表紙+12ヶ月） ／ 発売時期：2008年10月3日(金）"
],

[["レーシングGT-R＆スカイラインカレンダー２００９","18510","2,800","18757","2,520",9],
["　今年ニッサンは『SUPER GT』の頂点―GT500クラスに『R35 GT-R』を投入、開幕／2戦とエースの23号車が衝撃の連勝デビュー。王者奪還に向けた好スタートを切ると共に、新しいGT-R神話の幕をあけました。","　モータースポーツ史にその銘を刻むGT-R。70年代のツーリングカー選手権、80～90年代のグループAシリーズ、全日本GT選手権と、数々のGT-Rが頂点に君臨しました。今回最新のR35迄、歴代のGT-R、そして“レーシングR”の勇姿を納めた『レーシングGT-R＆スカイライン』のカレンダーをお届けします。"],
"カメラマン：佐藤 宏治　他 ／ サイズ：縦430ｍｍ×横590ｍｍ ／ タイプ：壁掛け ／ 枚数：13（表紙+12ヶ月 ／ 発売時期：2008年10月3日(金）"
],

[["スーパーGTウィークリーカレンダー２００９","18511","1,000","18758","900",14],
["　毎年、ご好評頂いている『SUPER GT』カレンダーの弟分が出来ました。","　もっとお求めやすく、もっとマシンを身近に、SUPER GTファンはもちろんのこと、レーシングカーに興味のあるお子様にもお勧めです！","SUPER GTレース出走マシン42台+αを53週に渡って週変わりで楽しめるWeekly（週めくり）カレンダーとなります。売り切れ必至！！"],
"カメラマン：小林直樹・上尾雅英・小笠原貴士 ／ サイズ：縦110mm×横159mm タイプ：卓上 ／ 枚数：54（表紙+53週分） ／ 発売時期：2008年10月3日(金）"
]					 
 );


//----------------------------------------------------------------------------

//初期ページ　変数化
var tag_body=tag_name(document,"body")[0];
tag_body.setAttribute("id","tag_body");
var tag_link=tag_name(document,"link")[0];
var old_table=tag_name(document,"table")[0];
old_table.setAttribute("id","old_table");


//----------------------------------------------------------------------------

function comon_func(){
	
if(now_url.indexOf("list")!=-1){
	byid("old_table").style.display="none";
	new_cont_in();
	tag_body.style.background="#000000";
	contbase_in();
	}

else{
//元ページを消す
$("#old_table").fadeOut(700,function(){new_cont_in();});
}

}

//----------------------------------------------------------------------------

function new_cont_in(){
//スタイルシート書き換え
tag_link.setAttribute("href","script/sp_cal.css");
	//見えなくする	old_table.style.display="none";
	//消す
	tag_body.removeChild(old_table);
	//背景を黒くする	tag_body.style.background="#000000";
	
	

var temp_div=tag_make("div");
temp_div.setAttribute("id","temp_div");
tag_body.appendChild(temp_div);
temp_div.style.display="none";
temp_div.style.width=screen.availWidth+"px"
temp_div.style.height=screen.availHeight+"px"
temp_div.style.background="#000000";


if(now_url.indexOf("list")!=-1){
$("#temp_div").show(1,function(){
tag_body.style.background="#000000";
tag_body.removeChild(temp_div);
contbase_in();
})
}
else{
$("#temp_div").fadeIn(700,function(){
tag_body.style.background="#000000";
tag_body.removeChild(temp_div);
contbase_in();
})
}




//挿入要素ここから--------------------------------------------

function contbase_in(){
	//大元のdivを作って入れる
	var tag_div=tag_make("div");
	tag_div.setAttribute("id","comon_div");//id設定
	var comon_div=byid("comon_div");//変数化
	
	tag_body.appendChild(tag_div);//ボディに大元を挿入
	
	
	
	
	//タイトル用h1とimg
	var make_h1=tag_make("h1");
	var title_img=tag_make("img");
	title_img.setAttribute("id","main_title")
	
	//定期購読者と通常でタイトル画像を変更
	if(window.location.href.indexOf(teiki_key)!=-1){
	title_img.setAttribute("src",img_url+"title_sp.gif");
	title_img.setAttribute("alt","2009　モータースポーツカレンダー　特別予約販売");
	}
	else{
	title_img.setAttribute("src",img_url+"title.gif");
	title_img.setAttribute("alt","2009　モータースポーツ専門　カレンダーショップ");
		}
	//-----------------------------------
	
	make_h1.appendChild(title_img);
	tag_div.appendChild(make_h1);
	
	
	//サブタイトル用divとimg
	var sab_title=tag_make("div");
	sab_title.setAttribute("id","sab_title")
	var sabtitle_img=tag_make("img");
	sabtitle_img.setAttribute("id","sabtitle_img");

	
	//定期購読者と通常でタイトル画像を変更
	if(window.location.href.indexOf(teiki_key)!=-1){
			if(sell_month<month||sell_month==month&&sell_date<=date){
	sabtitle_img.setAttribute("src",img_url+"sabtitle_sp2.gif");
		}
		else{
	sabtitle_img.setAttribute("src",img_url+"sabtitle_sp.gif");
			}
	}
	else{
		if(sell_month<month||sell_month==month&&sell_date<=date){
	sabtitle_img.setAttribute("src",img_url+"sabtitle2.gif");
		}
		else{
	sabtitle_img.setAttribute("src",img_url+"sabtitle.gif");
			}	
		}
	//-----------------------------------
	
	sab_title.appendChild(sabtitle_img);
	tag_div.appendChild(sab_title);
	
	//リンク初期設定
	var navi_div=tag_make("div");
	navi_div.setAttribute("id","navi_div");//id設定
	tag_div.appendChild(navi_div);
	
	
	//リンク用のアイコン
	for(i=0;i<6;i++){		
		var out_span=tag_make("span");
		out_span.setAttribute("id","navi_span"+i);
		out_span.className="out_span";
		var icon_img=tag_make("img");
		icon_img.setAttribute("id","navi_img"+i);
		icon_img.className="icon_img";
		icon_img.setAttribute("alt",goods_data[i][0][0]);
		icon_img.setAttribute("src",img_url+"navi/"+i+".jpg");
		out_span.appendChild(icon_img);	
		navi_div.appendChild(out_span);
		var icon_p=tag_make("p");
		icon_p.className="icon_p";

		
		//ナビ　テキストここから
		if(i==1){
		var icon_text_slice1=goods_data[i][0][0].slice(0,11);
		var icon_text_slice2=goods_data[i][0][0].slice(11,goods_data[i][0][0].length);	
			}
		if(i==0||i==2||i==3){
		var icon_text_slice1=goods_data[i][0][0].slice(0,12);
		var icon_text_slice2=goods_data[i][0][0].slice(12,goods_data[i][0][0].length);	
			}
		if(i==4){
		var icon_text_slice1=goods_data[i][0][0].slice(0,10);
		var icon_text_slice2=goods_data[i][0][0].slice(10,goods_data[i][0][0].length);	
			}
		if(i==5){
		var icon_text_slice1=goods_data[i][0][0].slice(0,6);
		var icon_text_slice2=goods_data[i][0][0].slice(6,goods_data[i][0][0].length);	
			}
		

			
		
		var icon_p_text1=text_make(icon_text_slice1);
		var icon_p_text2=text_make(icon_text_slice2);
		var tag_br=tag_make("br")
		icon_p.appendChild(icon_p_text1);
		icon_p.appendChild(tag_br);
		icon_p.appendChild(icon_p_text2);

		//ナビ　テキストここまで
			
			
			
		out_span.appendChild(icon_p);
		icon_img.setAttribute("width","110");
		icon_img.setAttribute("height","110");
		
		}
					//ナビ　回りこみ解除用
	var navi_clear_span=tag_make("span");
	navi_clear_span.style.clear="both";
	navi_div.appendChild(navi_clear_span);
		
	//キャンペーン用divとimgと、リンクとテキスト
	var ca_title=tag_make("div");
	ca_title.setAttribute("id","ca_title");
	ca_title.style.padding="0 0 15px"
	var catext_img=tag_make("img");
	catext_img.setAttribute("id","catext_img");	
	var ca_tag_a=tag_make("a");
	ca_tag_a.setAttribute("href","http://www.ccp-jp.com/2006_CCP-TOY/Real_nano/real_nano3.html");
	ca_tag_a.setAttribute("target","_blank");
	
	var ca_link_img=tag_make("img");
	ca_link_img.setAttribute("src",img_url+"banar.gif");
	ca_link_img.style.border="none";
	ca_tag_a.appendChild(ca_link_img);
	
	//定期購読者と通常でタイトル画像を変更
	if(window.location.href.indexOf(teiki_key)!=-1){
	catext_img.setAttribute("src",img_url+"ca_title_sp.gif");
	}
	else{
	catext_img.setAttribute("src",img_url+"ca_title.gif");
		}
	//-----------------------------------	
	
	ca_title.appendChild(catext_img);
	ca_title.appendChild(ca_tag_a);
	tag_div.appendChild(ca_title);





if(now_url.indexOf("list")!=-1){
$("#comon_div").css({"display":"block"});
$("#navi_div").css({"display":"block"});
$("#ca_title").css({"display":"block"});

//-----------------------------
	


//-----------------------------




}//ifの閉め
else{
$("#comon_div").fadeIn(1000,function(){
$("#navi_div").slideDown(700,function(){
//透明度変更
alfa_var;
$("#ca_title").slideDown(900);
});
});
	}

//挿入要素ここまで--------------------------------------------


//クリック動作--------------------------------------------
	var navi_img=tag_name(navi_div,"img");
	var navi_span=tag_name(navi_div,"span");
	
for(i=0;i<6;i++){
	navi_over_out(i);
	click_func(i)
	}
	
//ナビマウスオーバー動作ここから
function navi_over_out(no){
navi_img[no].onmouseover=function(){
		clearInterval(alfa_var);
		for(i=0;i<6;i++){
			navi_img
			$("#navi_img"+i).animate({opacity:0.6},{duration:500});
			}		
		$(this).animate({opacity:1},500);
		}
	}
//ナビマウスオーバー動作ここまで
	
	/*for(i=0;i<6;i++){
		//マウスオーバーで透明度変更を止める
		navi_img[i].onmouseover=function(){
		clearInterval(alfa_var)
			}//マウスオーバー閉め
		//マウスアウトで透明度を再セット
		navi_img[i].onmouseout=function(){
		alfa_var=setInterval("icon_alpha()",3500);
				}//マウスアウト閉め
		click_func(i);//クリック動作
		}
		*/



	
//アイコンクリック動作--------------------------------------------
	function click_func(no){
	navi_img[no].onclick=function(){
	clearInterval(alfa_var);
	if(navi_div.style.top!="15px"){
		$("#sab_title").css({"display":"none"});
		//$("#ca_title").css({"display":"none"});
		$("#ca_title").animate({top:"+=200px"},700);
		$("#navi_div").animate({top:"-=185px",left:"+=450px",width:"450px"},700,function(){mcont_func(no);});
	    $("#main_title").animate({height:"42px",width:"450px"},{queue:false,duration:700});
		navi_span
		
		$("[class='icon_p']").css({"display":"none"});	

		for(p=0;p<6;p++){
			$("#navi_span"+p).css({"width":"70px","height":"50px","textAlign":"right"});
			$("#navi_img"+p).css({"height":"50px","width":"50px"});	
			}
		

		title_img.style.cursor="pointer";		
		}//ifの閉め
		else{
		$("[class='each_div']").fadeOut({queue:false,duration:700})//各コンテンツ出すときの動き
		
		if(byid("list_img0")){
		$("[class='list_each_div']").fadeOut(300,function(){
		$(this).remove();
		$("#each_div"+no).fadeIn(700);//各コンテンツ消すときの動き
		});
				}
		else{
		$("#each_div"+no).fadeIn(700);//各コンテンツ消すときの動き
		}
			
		}//elseの閉め

		}//clickの閉め

	}//click_funcの閉め
	
	
//タイトルクリック動作--------------------------------------------
	title_img.onclick=function(){
		if(title_img.style.width=="450px"){
		$("#main_cont").empty();
		$("#main_cont").css({"background":"#000"})
		.animate({top:"+=250px",height:"0px"},500,function(){
		$("#main_cont").css({"border":"none"});						   
		$("#main_cont").css({"borderTop":"solid 1px #999"});		   
														   });
		$("#main_cont").animate({left:"+=450px",width:"0px"},200,function(){
												   
		$("#main_cont").css({"display":"none"});
		$("#navi_div").animate({top:"+=185px",left:"-=450px",width:"900px"},{queue:false,duration:500});
		$("#main_title").animate({height:"84px",width:"900px"},500,function(){
		$("#sab_title").css({"display":"block"});
		//$("#ca_title").css({"display":"block"});
		$("[class='icon_p']").css({"display":"block"});	});		
		$("[class='out_span']").css({"textAlign":"right"})
		.animate({width:"140px",height:"110px"},{queue:false,duration:500});
		$("[class='icon_img']").animate({height:"100px",width:"110px"},{queue:false,duration:500});
		$("#ca_title").animate({top:"-=200px"},500);
				});			
		title_img.style.cursor="default";
		}//ifの閉め
		alfa_var=setInterval("icon_alpha()",3500);
		}//clickの閉め
	
//コンテンツスペース--------------------------------------------
	var cont_div=tag_make("div");
	cont_div.setAttribute("id","main_cont");
	tag_div.appendChild(cont_div);	
	
	function mcont_func(no){
		cont_div.style.display="block"
		$("#main_cont").animate({left:"-=450px",width:"900px"},300,function(){
			$("#main_cont").css({"border":"solid 1px #999"})});
		
		$("#main_cont").animate({top:"-=250px",height:"500px"},500,
		function(){
		$("#main_cont").css({"background":"url('i-cal/img/back/right_div.gif') top left repeat-x #636363"});
		each_cont_in();
		$("#each_div"+no).fadeIn(500);
		});		
		}//mcont_func()の閉め	
		
}//contbase_in()の閉め
}//new_cont_in()の閉め
	

//----------------------------------------------------------------------------
	//アイコンの透明度を動かす

	var alfa_var=setInterval("icon_alpha()",3500);

	function icon_alpha(){
		$("[class='icon_img']").animate({opacity:0.6},1000);
		$("[class='icon_img']").animate({opacity:1},1000);
		}
//----------------------------------------------------------------------------
	//ボタンの透明度を動かす

	var alfa_button=setInterval("button_alpha()",3500);

	function button_alpha(){
		$("[class='detail_bt']").animate({opacity:0.4},1000);
		$("[class='detail_bt']").animate({opacity:1},1000);
		}		
		
//----------------------------------------------------------------------------

function each_cont_in(){
	//挿入元
	var main_cont=byid("main_cont");	
	
	//6個のコンテンツを挿入
	for(q=0;q<6;q++){
    //個別ページ用
	var each_div=tag_make("div");
	each_div.setAttribute("id","each_div"+q);
	each_div.className="each_div";
	
	//タイトル画像に挿入------------------------------------
	var each_title_div=tag_make("div");
	each_title_div.className="each_title_div";
	var each_title=tag_make("img");
	each_title.setAttribute("src",img_url+"title/"+q+".gif");
	each_title_div.appendChild(each_title);
	each_div.appendChild(each_title_div);
	
	var left_div=tag_make("div");
	left_div.setAttribute("id","left_div"+q);
	left_div.className="left_div";
	
	var right_div=tag_make("div");
	right_div.setAttribute("id","right_div"+q);
	right_div.className="right_div";
	//左と右を挿入-----------------------------------------------
	each_div.appendChild(left_div);
	each_div.appendChild(right_div);
	
	//メイン写真を左側に挿入------------------------------------
	var main_photo=tag_make("img");
	main_photo.className="main_photo";
	main_photo.setAttribute("id","main_photo"+q);
	main_photo.setAttribute("src",img_url+"photo/"+q+"_0.jpg");
	left_div.appendChild(main_photo);
	//メイン写真の縦サイズ------------------------------------
	if(q==0){
		main_photo.setAttribute("height","321");
		}
	if(q==4){
		main_photo.setAttribute("height","300");
		}
	if(q==2){
		main_photo.setAttribute("height","320");
		}
	if(q==3){
		main_photo.setAttribute("height","318");
		}
		if(q==5||q==1){
		main_photo.setAttribute("height","303");
		}
	
	//リード用div挿入------------------------------------
	var read_div=tag_make("div");
	read_div.setAttribute("id","read_div"+q);
	read_div.className="read_div";
	right_div.appendChild(read_div);
	
	//リードテキスト挿入------------------------------------
	for(i=0;i<goods_data[q][1].length;i++){
		var read_text=text_make(goods_data[q][1][i]);
		var read_br=tag_make("br");
		read_div.appendChild(read_text);
		read_div.appendChild(read_br);
		}
		
	//サムネイル用div挿入------------------------------------

if(goods_data[q][0][5]==0){
	
	}
else{
	var sam_div=tag_make("div");
	//sam_div.style.display="none";//サムネイルが揃うまで消しておく
	sam_div.setAttribute("id","sam_div"+q);
	sam_div.className="sam_div";
	left_div.appendChild(sam_div);
	//サムネイル画像挿入------------------------------------
	for(i=0;i<goods_data[q][0][5];i++){
		var sam_span=tag_make("span");
		sam_span.className="sam_span";
		if(q==0||q==1||q==2){
			if(i==0){
				sam_span.style.width="56px";
				}
			else{
			sam_span.style.width="58px";
			}
			}
		if(q==3){
			sam_span.style.width="78px";
			sam_span.style.textAlign="center";
			}
		if(q==5){
					if(i==0||i==7){
				sam_span.style.width="71px";
				}
			else{
			sam_span.style.width="66px";
			}
			sam_span.style.textAlign="center";
			}
		
		var sam_img=tag_make("img");
		sam_img.setAttribute("src",img_url+"photo/"+q+"_"+i+".jpg");
		sam_img.setAttribute("width","45");
		sam_img.setAttribute("height","32");
		sam_img.className="sam_img";
		sam_span.appendChild(sam_img);
		sam_div.appendChild(sam_span);		
		}
		
	 //サムネイル画像回り込み解除------------------------------------
	 var tag_both_span=tag_make("span");
	 tag_both_span.className="both"
	 sam_div.appendChild(tag_both_span);	 
}
	
	//詳細用div挿入------------------------------------
	var detail_div=tag_make("div");
	detail_div.setAttribute("id","detail_div"+q);
	detail_div.className="detail_div";
	right_div.appendChild(detail_div);
	//詳細用内容------------------------------------
	var detail_h2=tag_make("h2");
	//-----------------------------------
	if(window.location.href.indexOf(teiki_key)!=-1){
var detail_title=text_make("【特別価格】 "+goods_data[q][0][0]);
	}
	else{
var detail_title=text_make(goods_data[q][0][0]);
		}
    //-----------------------------------	
	detail_h2.appendChild(detail_title);
	detail_div.appendChild(detail_h2);
	
	var detail_p=tag_make("p");
	detail_p.className="detail_p";
	var detail_text=text_make(goods_data[q][2]);
	detail_p.appendChild(detail_text);
	detail_div.appendChild(detail_p);
	
	var detail_p2=tag_make("p");
	detail_p2.className="detail_p2";
		//-----------------------------------
	if(window.location.href.indexOf(teiki_key)!=-1){
var detail_price=tag_make("span");
var tag_i=tag_make("i");
tag_i.style.textDecoration="line-through";
var normal_price=text_make("通常価格："+goods_data[q][0][2]+"円");
tag_i.appendChild(normal_price);
var tag_b=tag_make("b")
tag_b.style.fontWeight="bold";
var sp_price=text_make(" → 特別定価："+goods_data[q][0][4]+"円");
tag_b.appendChild(sp_price);
detail_price.appendChild(tag_i);
detail_price.appendChild(tag_b);
	}
	else{
var detail_price=text_make("定価："+goods_data[q][0][2]+"円");
		}
    //-----------------------------------
	
	var detail_bt=tag_make("img");
	detail_bt.setAttribute("src",img_url+"button.gif");
	detail_bt.className="detail_bt";
	var detail_bt_a=tag_make("a");
		//-----------------------------------
	if(window.location.href.indexOf(teiki_key)!=-1){
	detail_bt_a.setAttribute("href",comon_url+goods_data[q][0][3]+"#"+teiki_key);
	}
	else{
	detail_bt_a.setAttribute("href",comon_url+goods_data[q][0][1]);
		}
    //-----------------------------------

	detail_bt_a.appendChild(detail_bt);
	detail_p2_br=tag_make("br");	
	
	detail_p2.appendChild(detail_price);
	detail_p2.appendChild(detail_p2_br);
	detail_p2.appendChild(detail_bt_a);
	detail_div.appendChild(detail_p2);
	//詳細内容挿入　ここまで------------------------------------
	
	
	//一覧用divの挿入------------------------------------
	var list_div=tag_make("div");
	list_div.className="list_div";
	var list_div_button=tag_make("img");
	list_div_button.className="list_div_button";
	list_div_button.setAttribute("src",img_url+"button_list.gif");
	$("[class='list_div_button']").css({"opacity":"0.5","width":"112px","height":"23px"})
	list_div.appendChild(list_div_button);
	right_div.appendChild(list_div);
	
		
	//挿入元に個別ページを挿入
	main_cont.appendChild(each_div);
	
	mainphoto_ch(q)
	}//forの閉め
	
	//ボタンの透明度を動かす
	alfa_button;
	
	//ボタンのアクションここから
	
	$("[class='detail_bt']").mouseover(function(ev){
	clearInterval(alfa_button);
	});
	
	$("[class='detail_bt']").mouseout(function(ev){
	alfa_button=setInterval("button_alpha()",3500);
	});
	
	//購入ボタンクリック動作
	//$("[class='detail_bt']").click(function(ev){
	//$(this).css({width:"116px",height:"24px"});
	//});
	//ボタンのアクションここまで
	
	
	//一覧リストのクリック動作ここから
	$("[class='list_div_button']").mouseover(function(ev){
	$(this).animate({opacity:"1",width:"116px",height:"24px"},300);
	});
	$("[class='list_div_button']").mouseout(function(ev){
	$(this).animate({opacity:"0.5",width:"112px",height:"23px"},300);
	});
	
	
	$("[class='list_div_button']").click(function(ev){
	$("[class='list_div_button']").css({"opacity":"0.5","width":"112px","height":"23px"})
      list_div_move()});
	//一覧リストのクリック動作ここまで
	
	
	//サムネイル画像クリック動作ここから-----------------------------------
	function mainphoto_ch(no){
		var id_name=byid("left_div"+no);
		var img_name=tag_name(id_name,"img");
		
		for(p=1;p<img_name.length;p++){
in_func(no,p)
		}
		
		
		
		   function in_func(no1,no2){
		   			img_name[no2].onmouseover=function(){
				$("[class='sam_img']").animate({opacity:0.4},700);
				$("#left_div"+no1+" img:eq("+no2+")").animate({opacity:1},700);
				$("#main_photo"+no1).fadeOut(700,function(){
				$("#main_photo"+no1).attr("src",img_url+"photo/"+no1+"_"+(no2-1)+".jpg");
				$("#main_photo"+no1).fadeIn(700);//各コンテンツ消すときの動き
		})
		}//mouseoverの閉め
		
		var id_mainphoto=byid("main_photo"+no1)
		id_mainphoto.onmouseover=function(){
				$("[class='sam_img']").animate({opacity:1},1000);
			}//mouseoutの閉め
			}//in_funcの閉め
	
		   }
	//サムネイル画像クリック動作ここまで-----------------------------------
	
	
	
	
	
	}//each_cont_in()の閉め
	
	
//一覧リストのクリック動作実態ここから-----------
function list_div_move(){
alfa_var=setInterval("icon_alpha()",3500);
$("[class='each_div']").css({"display":"none"});
list_div_cont()

//$("[class='each_div']").css({"width":"300px","height":"250px"});
//$("[class='left_div']").css({"width":"300px","height":"250px"});
//$("[class='right_div']").css({"display":"none"});
		}
		
function list_div_cont(){
	var main_cont=byid("main_cont");

	for(i=0;i<6;i++){
		//外枠用のdiv
		var list_each_div=tag_make("div");
		list_each_div.className="list_each_div";
		
		//画像挿入用のdiv
		
		var list_in_div=tag_make("div");
		list_in_div.className="list_in_div";
		
		var list_img=tag_make("img");
		list_img.setAttribute("id","list_img"+i);
		list_img.className="list_img";
		list_img.setAttribute("src",img_url+"photo/"+i+"_0.jpg");
		list_img.setAttribute("width","270");
		list_img.setAttribute("height","170");
		


var title_text=text_make(goods_data[i][0][0]);	
	if(window.location.href.indexOf(teiki_key)!=-1){
var tag_b=tag_make("b");
var price_text=text_make("特別定価："+goods_data[i][0][4]+"円");
tag_b.appendChild( price_text);
	}
	else{
var tag_b=tag_make("b");
var price_text=text_make("定価："+goods_data[i][0][2]+"円");
tag_b.appendChild( price_text);
		}
		
		list_in_div.appendChild(list_img);
		list_each_div.appendChild(list_in_div);
		list_each_div.appendChild(title_text);
		list_each_div.appendChild(tag_b);
		main_cont.appendChild(list_each_div);
		$("[class='list_img']").css({"opacity":"0.6"});
		$("[class='list_each_div']").fadeIn(1300);
		//$("[class='list_img']").animate({width:"128px",height:"180px",opacity:"0.8"},1000);			
		img_move(i)
		}
	
	//動作関連
	function img_move(no){		
	$("#list_img"+no).mouseover(function(ev){
	$("[class='list_img']").animate({width:"260",height:"160",opacity:"0.6"},{queue:false,duration:500});
	$(this).animate({width:"280",height:"196",opacity:"1"},500);
	});
	$("#list_img"+no).mouseout(function(ev){
	$("[class='list_img']").animate({width:"270",height:"170",opacity:"0.8"},{queue:false,duration:500});
	});
	
	$("#list_img"+no).click(function(ev){
$("[class='list_each_div']").fadeOut(1000,function(){
$(this).remove();
$("#each_div"+no).fadeIn(1000);//各コンテンツ消すときの動き	
clearInterval(alfa_var);
$("[class='icon_img']").animate({opacity:"0.6"},{queue:false,duration:500});
$("#navi_img"+no).animate({opacity:"1"},500);
		});
	});
	
	
	}

	
	
	
	}//list_div_cont()の閉め
//一覧リストのクリック動作実態ここまで-----------

//----------------------------------------------------------------------------



//個別ページ用

//ページ一番下の一覧を消す---------
function bottom_list_none(){
	var related=byid("related");
	var title_img=tag_name(related,"img")[0]
	var list_div=tag_name(related,"div")[0]
	title_img.style.display="none";	
	list_div.style.display="none";
	
	related.style.textAlign="right";
	related.style.borderTop="dotted 1px #666666";
	related.style.borderBottom="dotted 1px #666666";
	related.style.padding="8px"
	var make_a=tag_make("a");
	set_href(make_a);	
	var link_text=text_make("→カレンダー一覧に戻る");
	make_a.style.color="#00f";
	make_a.style.fontWeight="bold"
	make_a.appendChild(link_text);
	related.appendChild(make_a);
	
	/*//ページ上部をページ下部へ ここから
	var shop_head_logo=byid("shop_head_logo");
	var shop_foot=byid("shop_foot");
	var del_table=tag_name(shop_head_logo,"table")[2];
	shop_foot.insertBefore(del_table,shop_foot.firstChild);
	//ページ上部をページ下部へ ここまで*/
	

//あとトップのナビも消す
var shop_navi=byid("shop_navi");
//$("#shop_navi").slideUp(500);
shop_navi.style.display="none";
var shop_search=byid("shop_search");
shop_search.style.display="none";
//$("#shop_search").slideUp(500);


//余計なIDも消す
var contentsLeft=byid("contentsLeft");
contentsLeft.style.display="none";
var contentsRight=byid("contentsRight");
contentsRight.style.display="none";
var item_detail=byid("item_detail");
item_detail.style.padding="0";

//画像をクリックで拡大も消す
var gbrb=byid("gbrb");
gbrb.style.display="none";

//ついでにページ上部の「ショップトップ」のリンクも変更
var shop_menu=byid("shop_menu");
shop_menu.style.width="748px";
shop_menu.style.height="15px"
var top_link=tag_name(shop_menu,"a")[0];
var del_link=tag_name(shop_menu,"a")[1];
var del_img=tag_name(shop_menu,"img")[1];
del_link.style.display="none";
del_img.style.display="none";
var in_text=text_make("＆商品一覧");
top_link.appendChild(in_text);
set_href(top_link);	

//あとh3とh4とUも消す
var cont_right=byid("gbr");
//説明を見たい人用
var click_a=tag_make("span");
click_a.style.color="#00f";
click_a.style.cursor="pointer"
click_a.setAttribute("id","click_a");
var text1=text_make("→ 商品詳細");
var tag_br=tag_make("br");
click_a.appendChild(tag_br);
click_a.appendChild(text1);
click_a.setAttribute("href","/");
var non_span=tag_make("span");
non_span.setAttribute("id","non_span");
cont_right.appendChild(click_a);
cont_right.appendChild(non_span);
var tag_h3=tag_name(cont_right,"h3")[0];
non_span.appendChild(tag_h3);
var tag_h4=tag_name(cont_right,"h4");
for(i=0;i<2;i++){
	non_span.appendChild(tag_h4[0]);
	}
$("#non_span").hide(900);
$("#click_a").click(function(ev){
$("#non_span").toggle(900);
});
	



//-------------------------------
function set_href(var_name){
		//定期購読者と通常で戻り先を変更
	if(window.location.href.indexOf(teiki_key)!=-1){
	var_name.setAttribute("href","http://shop.as-web.jp/shop.php?shop_id=S00013#otoku_list");
	}
	else{
	var_name.setAttribute("href","http://shop.as-web.jp/shop.php?shop_id=S00013#list");
		}	
	}
//-------------------------------
	
	}
//ページ一番下の一覧を消す---------


//カートを一番上に---------
function cart_ch(){
	//右側
	var cont_right=byid("gbr");
	cont_right.style.paddingTop="12px"
	var id_cart=byid("cart");
	cont_right.insertBefore(id_cart,cont_right.firstChild );	
	}
//カートを一番上に---------

//画像拡大用スペース
function photo_space(){
	//挿入元　コンテンツスペース
	var item_detail=byid("item_detail");
	item_detail.style.position="relative";
	
	//画像のリンクスペース関連
	var gbl=byid("gbl");
    var photo_link=tag_name(gbl,"a")[0];
	photo_link.style.fontSize="0";
	photo_link.style.textDecoration="none";
	photo_link.style.display="block";
	var photo_link_img=tag_name(photo_link,"img")[0];
		
	//画像のナビスペース
	var photo_navi_div=tag_make("div");
	photo_navi_div.setAttribute("id","photo_navi_div");
	photo_navi_div.style.width="200px";
	photo_navi_div.style.margin="0 auto";
	photo_navi_div.style.background="url('"+img_url+"each_navi_body.gif') top left repeat-y";
	photo_navi_div.appendChild(photo_link_img);//商品画像をdivの中へ
	
	
	//一覧画像スペース作成＆挿入
	var photo_navi_cont=tag_make("div");
	photo_navi_cont.setAttribute("id","photo_navi_cont");
	photo_navi_cont.style.textAlign="left";
	photo_navi_cont.style.padding="6px 0 0 6px";
	photo_navi_cont.style.display="none";
	photo_navi_div.appendChild(photo_navi_cont);

	//タブ画像の準備＆挿入
	var tab_img=tag_make("img");
	tab_img.setAttribute("src",img_url+"each_navi_bottom.gif");
	photo_navi_div.appendChild(tab_img);

	//ナビスペースをaの中に挿入
	photo_link.appendChild(photo_navi_div);

	//拡大画像スペースの設定
	var photo_div=tag_make("div");
	photo_div.setAttribute("id","photo_div");
	photo_div.style.position="absolute";
	photo_div.style.cursor="pointer"
	photo_div.style.padding="8px";
	photo_div.style.top="210px";
	photo_div.style.right="20px";
	photo_div.style.border="solid 1px #ccc";
	photo_div.style.background="#fcfcfc";
	//
	photo_div.style.display="none";	
	//拡大画像スペースの挿入
	item_detail.insertBefore(photo_div,item_detail.firstChild );

	//一覧画像欄に画像を挿入
	var now_url=window.location.href;
	for(i=0;i<goods_data.length;i++){	
	if(now_url.indexOf(goods_data[i][0][1])!=-1||now_url.indexOf(goods_data[i][0][3])!=-1){
		for(q=0;q<goods_data[i][0][5];q++){
			var make_img=tag_make("img");
			make_img.setAttribute("src",img_url+"photo/"+i+"_"+q+".jpg");
			make_img.style.width="60px";
			make_img.style.height="40px";
			make_img.style.margin="0 4px 6px 0";
			photo_navi_cont.appendChild(make_img);			
			}//中のforの閉め
		var big_img=tag_make("img");
		big_img.setAttribute("id","big_img");
		big_img.setAttribute("src",img_url+"photo/"+i+"_0.jpg");
		photo_div.appendChild(big_img);
		big_img.setAttribute("width","450");
		//メイン写真の縦サイズ------------------------------------
		if(i==0){
		big_img.setAttribute("height","321");
		}
	if(i==4){
		big_img.setAttribute("height","300");
		}
	if(i==2){
		big_img.setAttribute("height","320");
		}
	if(i==3){
		big_img.setAttribute("height","318");
		}
		if(i==5||i==1){
		big_img.setAttribute("height","303");
		}
		//メイン写真の縦サイズ------------------------------------
		
		
		//マウスオーバー動作ここから
		var photo_navi_cont_img=tag_name(photo_navi_cont,"img");
				function in_func(noi,nop){
				photo_navi_cont_img[nop].onmouseover=function(){
				$("#big_img").fadeOut(700,function(){
				big_img.setAttribute("src",img_url+"photo/"+noi+"_"+nop+".jpg");
				$("#big_img").fadeIn(700);
				});
				}//mouseoverの閉め
			}
		
		
		for(p=0;p<photo_navi_cont_img.length;p++){
			in_func(i,p);
			}//forの閉め
			

		//マウスオーバー動作ここまで
		
		
		}//ifの閉め
	}//外のforの閉め
	
	
	
	
	
	
	//画像クリック動作ここから
	photo_link.onclick=function(){	
photo_click_func();
return false;
	}
photo_div.onclick=function(){	
photo_click_func();
return false;
	}

function photo_click_func(){
if(photo_div.style.display=="none"){
$("#photo_navi_cont").slideDown(700);
$("#photo_div").fadeIn(900);
}
else{
	$("#photo_navi_cont").slideUp(700);
$("#photo_div").fadeOut(900);
}
	}
//画像クリック動作ここまで

//画像オーバー動作


	}



//省略_start------------------------------------------
//現在のアドレス
var now_url=window.location.href

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


//日付取得関連
var now=new Date();//現在の時間を取得
var year=now.getFullYear();//4桁の西暦年数を返します
var month=now.getMonth()+1;//月
var date=now.getDate();//日

//省略_end------------------------------------------


