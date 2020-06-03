//@charset "utf-8";
$(document).ready(function() {
//fc2をとる
del_fc2();
});
//onload---------------------------

//ページ挿入関数
function base_func(){
	//画面サイズ取得
	setInterval(window_size,1000);
	//twitterウィジェット
twitter_func();
	};
//-------------------------------------------------------------------------	
//twitterウィジェット
function twitter_func(){
	new TWTR.Widget({
  version: 2,
  type: 'profile',
  rpp: 4,
  interval: 30000,
  width: 250,
  height: 300,
  theme: {
    shell: {
      background: '#333333',
      color: '#ffffff'
    },
    tweets: {
      background: '#000000',
      color: '#ffffff',
      links: '#4aed05'
    }
  },
  features: {
    scrollbar: false,
    loop: false,
    live: false,
    behavior: 'all'
  }
}).render().setUser('Enjoy_tpm').start();
	};
//-------------------------------------------------------------------------
//画面サイズ取得
function window_size(){
	var width100=$(window).width(),
	height100=$(window).height();
	//外枠設定
	with(byid("container").style){
		width=width100+"px";
		height=height100+"px";
		}	
	}
//-------------------------------------------------------------------------
//fc2をとる
function del_fc2(){
	/*
	//失敗
	var tag_script=tag_name(document,"script");
	for(i=0;i<tag_script.length;i++){
		if(tag_script[i].getAttribute("src")&&tag_script[i].getAttribute("src").indexOf("http://web.fc2")!=-1) tag_script[i].parentNode.removeChild(tag_script[i]); 
		}
		*/
		/*
		//これも失敗
		tag_script[tag_script.length-1].parentNode.removeChild(tag_script[tag_script.length-1]);
		*/
	var tag_span=tag_name(document,"span");
		tag_span[tag_span.length-1].style.display="none";
	}
//-------------------------------------------------------------------------
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


