window.onload=function(){

//h_banar("http://shop.as-web.jp/sp/new/","http://shop.as-web.jp/script/img/tp.gif");
each_page();
//--------------------------------------------------------------

//top_topics();
top_topics();
//--------------------------------------------------------------

//�I�X�X�����i
osusume();
//--------------------------------------------------------------

//�����[�X�����ǂ�
race_read();
//--------------------------------------------------------------

//ibook�g�b�v
ibook_top();
//--------------------------------------------------------------

//ibook�]�v�Ȃ��̂�����
ibook_none();
//--------------------------------------------------------------

//�J���K���[�g�b�v
kangaroo_top();
//--------------------------------------------------------------

//�݌ɂ�����
zaiko_none("S11145");//i_�\��
zaiko_none("S11132");//�`�P�b�g�\��
zaiko_none("S00013");//�J�����_�[
//zaiko_none("S11130");//i_teiki
//--------------------------------------------------------------


//���O�A�E�g_�����N
loguout_link();
//--------------------------------------------------------------

//�J�����_�[otoku�p�֐���������
cal_otoku()
//--------------------------------------------------------------

//�J�����_�[�p�֐���������
script_in("script/sp_cal.js","index");
setTimeout("cal_aftermove()", 500);
//--------------------------------------------------------------

}
//onload�̕�------------------------------------------------------------------------------------



//�J�����_�[otoku�p�֐���������
function cal_otoku(){
	if(now_url.indexOf("view=cart&shop_id=S00013")==-1) return false;
	
	var contents=byid("contents");//ID����
	var tag_a=tag_name("contents","a");//a��ϐ���
	var shop_menu=byid("shop_menus");//Id����
	var tag_a1=tag_name("shop_menu","a");//���j���[�p��A
	var temp_array=new Array();//�Y��NO�𒊏o��������
		for(i=0;i<5;i++){
		temp_array[i]=18753+i
		}
		//�Y��NO�𒊏o�����܂�
	
	//common_text
	var text_shop0013="shop.php?shop_id=S00013";
	var text_proid="prod_id=";
	var text_link="shop.php?shop_id=S00013#otoku_list";
	var text_link2="shop.php?shop_id=S00013#list";
		
	//indexof�p�̊֐���������
	function va_indexof(top_var,index_var,no_yes_no){
		if(no_yes_no=="!="){
		return top_var.getAttribute("href").indexOf(index_var)!=-1;
		}
		else{
		return top_var.getAttribute("href").indexOf(index_var)==-1;
			}
		}
		//indexof�p�̊֐������܂�
		
	for(p=0;p<tag_a.length;p++){//�匳��for
	for(q=0;q<5;q++){
	if(va_indexof(tag_a[p],temp_array[q],"!=")){	
	for(i=0;i<tag_a1.length;i++){
		if(va_indexof(tag_a1[i],text_shop0013,"!=")&&va_indexof(tag_a1[i],text_proid,"==")){
			tag_a1[i].setAttribute("href",text_link)
			}	
		}
		
//�R���e���c
	for(i=0;i<tag_a.length;i++){	
		if(va_indexof(tag_a[i],text_shop0013,"!=")&&va_indexof(tag_a[i],text_proid,"==")){
			tag_a[i].setAttribute("href",text_link)
			}	
		}
		
		}
	}

	}
}

//�J�����_�[otoku�p�֐������܂�


//�J�����_�[�p�֐�
function cal_aftermove(){
//�g�b�v�y�[�W
if(window.location.href.indexOf("index")!=-1){
comon_func();
}

//�ʃy�[�W
if(window.location.href.indexOf("index")!=-1){
	
//�ꗗ������
bottom_list_none();
//�J�[�g����ԏ��
cart_ch();

//�摜�g��p�X�y�[�X
photo_space();
}
}//cal_aftermove()�̕�



//�O��script�}���p�֐��̖{��------------------------------------------
function script_in(script_pass,url_text){
	
	//�}���p�X�N���v�g���쐬
	var make_script=tag_make("script");
	make_script.setAttribute("type","text/javascript");
	make_script.setAttribute("src",script_pass);
	
	document.getElementsByTagName("head")[0].appendChild(make_script);		
}
//�O��script�}���p�֐��̕�------------------------------------------




//ibook�S�~������------------------------------------------
function ibook_none(){
var contentsLeft=byid("contentsLeft");
var tag_p=tag_name("contentsLeft","p");

for(i=0;i<tag_p.length;i++){
	if(tag_p[i].parentNode.getAttribute("id")=="contentsLeft"){
		tag_p[i].style.display="none";
		}	
	}	
	}//ibook_none()�̕�
//------------------------------------------






//�����[�X�����ǂ�
function race_read(){
	
	var read_link_url;
	
	if(window.location.href.indexOf("shop_id=S00007")!=-1){	
	//�ꗗ���X�g(ibook�p�j
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
	
	//�ꗗ���X�g(F1���[�V���O�p�j
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
	
	
	//�����̊֐�
	function infunc(book_no,url_no){
	if(window.location.href.indexOf("prod_id="+url_no)==-1)return false;//�Ȃ�������~�܂�
	var gbl=byid("gbl");
	var gbrb=byid("gbrb");
	
	//�摜�p
	var book_a=tag_name("gbl","a")[0];
	book_a.setAttribute("href",read_link_url+book_no+"/");
	//�{�^���p
	var buton_a=tag_name("gbrb","a")[0];
	var buton_img=tag_name("gbrb","img")[0];
	buton_a.setAttribute("href",read_link_url+book_no+"/");
	buton_a.setAttribute("target","_blank");
	buton_img.setAttribute("src","script/img/100sen/bt_read.gif");
	}
	
	
	}

//�J���K���[�g�b�v
function kangaroo_top(){
	//���f�̊m�F
	if(window.location.href.indexOf("shop_id=S11142")==-1)return false;//�Ȃ�������~�܂�
	if(window.location.href.indexOf("&shop_id=S11142")!=-1||window.location.href.indexOf("shop_id=S11142&")!=-1)return false;//��������~�܂�
	
	//���[�J���m�F�p	if(window.location.href.indexOf("kangaroo")==-1)return false;

	//�}����
	var contents=byid("contents");
	contents.style.paddingTop="25px";//��ԏ�ɋ������Ƃ�
	
	
	//���̃R���e���c��
	var kangaroo_cont=byid("kangaroo_cont");
	kangaroo_cont.style.display="block";
	//contleft����̈ړ�
	contents.insertBefore(kangaroo_cont,contents.firstChild);
	
	
	//�R���e���c1�ډE
	var kan_cont1_right=byid("kan_cont1_right");
	kan_cont1_right_tag={
		tag_img:tag_name("kan_cont1_right","img")
	}
    kan_cont1_right_tag.tag_img[1].style.marginRight="5px";
	kan_cont1_right_tag.tag_img[1].style.border="solid 1px #FF1313";
	kan_cont1_right_tag.tag_img[2].style.border="solid 1px #A0A0A0";
	//�}�E�X�I�[�o�[�̓���1
	kan_cont1_right_tag.tag_img[1].onmouseover=function(){
	kan_cont1_right_tag.tag_img[0].setAttribute("src","script/img/kangaroo/photo1.jpg");
	kan_cont1_right_tag.tag_img[1].style.cursor="pointer";
	kan_cont1_right_tag.tag_img[2].style.cursor="pointer";
	kan_cont1_right_tag.tag_img[1].style.border="solid 1px #FF1313";
	kan_cont1_right_tag.tag_img[2].style.border="solid 1px #A0A0A0";		
		}
	//�}�E�X�I�[�o�[�̓���2
	kan_cont1_right_tag.tag_img[2].onmouseover=function(){
	kan_cont1_right_tag.tag_img[0].setAttribute("src","script/img/kangaroo/photo2.jpg");
	kan_cont1_right_tag.tag_img[1].style.border="solid 1px #A0A0A0";
	kan_cont1_right_tag.tag_img[2].style.border="solid 1px #FF1313";		
		}
	
	//�R���e���c1�ڍ�
	var kan_cont1_left=byid("kan_cont1_left");
	kan_cont1_left_tag={
	tag_tr:tag_name("kan_cont1_left","tr")
	}
	for(i=0;i<kan_cont1_left_tag.tag_tr.length;i++){
		if(i%2==1){
		kan_cont1_left_tag.tag_tr[i].style.background="#eeeeee";
		}
		}
		
	//�R���e���c3��
	var kan_cont3=byid("kan_cont3");
	kan_cont3_tag={
	tag_h3:tag_name("kan_cont3","h3"),
	tag_h4:tag_name("kan_cont3","h4")
	}
	
	//�R���e���c3�߁@�i�r
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
	
	//�e�ݖ�N���b�N�̓���
	for(i=0;i<kan_cont3_tag.tag_h3.length;i++){
	click_move(i)
		}
	//i���N���b�N�����Ƃ��ɑΉ�����i��\���̊֐�
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
	
	//kangaroo_top()�̕�
	}


//ibook�g�b�v
function ibook_top(){
	//���f�̊m�F	
	if(window.location.href.indexOf("shop_id=S00007")==-1)return false;//�Ȃ�������~�܂�
	if(window.location.href.indexOf("&shop_id=S00007")!=-1||window.location.href.indexOf("shop_id=S00007&")!=-1)return false;//��������~�܂�
	//���[�J���m�F�p	if(window.location.href.indexOf("shop_id=S00007")==-1)return false;

	//�}����
	var contents=byid("contents");
	contents.style.paddingTop="10px";//��ԏ�ɋ������Ƃ�

	
	//�E���I�X�X�����i�֘A
	var ranking=byid("ranking");
	ranking_tag={
		tag_a:tag_name("ranking","a"),
		tag_img:tag_name("ranking","img"),
		tag_span:tag_name("ranking","span")
		}
		//�I�X�X���̃^�O�w��
		//a�̎w��
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
		//span�̎w��
		for(i=0;i<ranking_tag.tag_span.length;i++){
			ranking_tag.tag_span[i].style.display="block";
			ranking_tag.tag_span[i].style.textAlign="right";
			ranking_tag.tag_span[i].style.paddingRight="3px";			
		}
		//�I�X�X���̃^�O�w�� �I��
		
		//�}��������
		var ibook_top=tag_make("span");
		ibook_top.setAttribute("id","ibook_top");
		cont_in();//�R���e���c3�}���p�֐��̎��s
		contents.insertBefore( ibook_top, contents.firstChild );
		cont_p_in(0,6);//�R���e���c���̎d�؂�}���p�֐��̎��s�P
		cont_p_in(1,6);//�R���e���c���̎d�؂�}���p�֐��̎��s�Q
		
		//�R���e���c1�Ԗ�
		var cont0_tag_p=tag_name("cont0","p");//�O�`�T
		
				var cont0=byid("cont0");
		for(i=0;i<cont0_tag_p.length;i++){
			    //���w��
				cont0_tag_p[i].style.width="120px";
				cont0.style.background="url('i/ibook_top/cont_body1.gif') top left repeat-y";
				//�}�����̐���
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
	
		//�R���e���c2�Ԗ�
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
					
		//�R���e���c3�Ԗ�
		//�ϐ�_�}����
		var cont3=byid("cont2");
		
		var cont3_left=byid("cont3_left");
		var cont3_right=byid("cont3_right");
		//�R���e���c�Q���ړ�
		cont3.insertBefore(cont3_left,cont3.lastChild);
		cont3.insertBefore(cont3_right,cont3.lastChild);
		//�R���e���c3�̃^�O��ϐ���
		var cont3_tag={
			tag_span:tag_name("cont2","span")
			}
		//�}�����̒l�w��
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
			
		//�R���e���c4�Ԗ�
		//�ϐ�_�}����
		var cont4=byid("cont3");
		cont4.style.background="url('i/ibook_top/cont_body2.gif') top left repeat-y";
		//�R���e���c4�̃^�O��ϐ���
		var cont4_tag={
			tag_img:tag_name("cont3","img")
			}
		cont4_tag.tag_img[1].setAttribute("src","i/ibook_top/cont_bottom2.gif");
		
		var cont_aleart=byid("cont_aleart");
		cont4.insertBefore(cont_aleart,cont4.lastChild);
		
								
		//�R���e���c���̎d�؂�}���p�֐��̎w��
		function cont_p_in(div_no,p_no){		
		var cont1=tag_name("ibook_top","div")[div_no];
		for(i=0;i<p_no;i++){
			var tag_p=tag_make("p");
			cont1.insertBefore(tag_p,cont1.lastChild);
			}
		//cont_p_in�̕�
		}
		
		
		//�R���e���c4�}���p�֐��̎w��		
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
		//for�̕�
			}
		//cont_in()�̕�
		}
	
	//����Ȃ����̂�����
	ranking.style.display="none";
	
	//ibook_top()�̕�
	}




//�݌ɂ������֐�
function zaiko_none(shop_id){
	if(!document.getElementById("cart"))return false;
	//�A�h���X�̈�v�m�F
	if(window.location.href.indexOf(shop_id) !=-1){
	//�ϐ���
	var cart=byid("cart");
	var tag_p=tag_name("cart","p");
	//�J�[�g���̍݌ɍ폜
	if(tag_p[1]){
	tag_p[1].style.display="none";
	//i�̕�
	}

	if(!document.getElementById("gbb"))return false;
	var gbb=byid("gbb");
	var tag_td=tag_name("gbb","td");
	for(i=0;i<tag_td.length;i++){
		if(i%4==2){
			tag_td[i].style.display="none";			
			}
		}
			//if�̕�
		}
	}


//top_ranking
function top_rank(){
if(!document.getElementById("ranking"))return false;

top_rank_base(0);
top_rank_base(2);
top_rank_base(4);
	}


//�I�X�X��
function osusume(){
if(!document.getElementById("osusume"))return false;

//id�̎w��
var osusume=byid("osusume");
osusume.style.padding="8px 0";
osusume.style.margin="8px 0 0";

//id�����֌W
osusume.style.borderTop="solid 1px #dddddd";
osusume.style.borderBottom="solid 1px #dddddd";
osusume.style.background="#fafafa"

//��荞�݉���
var tag_div=tag_make("div");
tag_div.style.clear="both";
//��荞�݂���ԍŌ�ɑ}��
osusume.appendChild(tag_div);

//�q�m�[�h�֘A
var tag_p=tag_name("osusume","p");
//p�̐���padding��ύX
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


//�V���b�vID
var shop_no=window.location.href.substr(40,5)

for(i=0;i<tag_p.length;i++){
tag_p[i].style.width="150px";

//���iID
var goods_no=tag_p[i].title;

//�C���[�W���쁕�A�h���X�ݒ�
create_img=tag_make("img");
create_img.setAttribute("src","http://shop.as-web.jp/shop/S"+shop_no+"/images/"+goods_no+"/pic_small.jpg");

//���Epadding�ptt�쐬
var tag_tt=tag_make("tt");

//�摜�Z���^�[�񂹗pspan����
var tag_span=tag_make("span");

//�`�^�O�ݒ�
var tag_a=tag_p[i].getElementsByTagName("a");
//�����N��̐ݒ�
tag_a[0].setAttribute("href","http://shop.as-web.jp/shop.php?shop_id=S"+shop_no+"&prod_id="+goods_no);

//���i���i
var goods_price=tag_a[0].firstChild;
//���i���̕\�L
var price_head=text_make("�艿�F");

//�^�C�g������
var goods_name=text_make(tag_a[0].getAttribute("alt"));

//�}���̂܂Ƃ�
tag_p[i].appendChild(tag_tt);
tag_tt.appendChild(tag_a[0]);
tag_tt.appendChild(price_head);
tag_tt.appendChild(goods_price);

tag_span.appendChild(create_img);
tag_a[0].appendChild(tag_span);
tag_a[0].appendChild(goods_name);

//for�̕�
}

//function�̕�
}




//�g�b�v�����L���O�֘A
function top_rank_base(a_no){
if(!document.getElementById("ranking"))return false;
var ranking=document.getElementById("ranking");
var tag_a=ranking.getElementsByTagName("a");
var tag_img=ranking.getElementsByTagName("img");


//�A�h���X���o
var url_base=tag_a[a_no].getAttribute("href");

//�V���b�v
var shop_no_base=url_base.split("id=S");
var shop_no="S"+shop_no_base[1].substr(0,5);


var goods_no_base=url_base.split("prod_id=");
var goods_no=parseInt(goods_no_base[1]);



//�}���摜������
var make_img=document.createElement("img");
//���s������
var make_br=document.createElement("br");

tag_a[a_no].appendChild(make_br);
tag_a[a_no].appendChild(make_img);
	
make_img.setAttribute("src","http://shop.as-web.jp/shop/"+shop_no+"/images/"+goods_no+"/pic_big.jpg");
	make_img.style.width="50px"

//�C�x���g����@�I�[�o�[���A�E�g

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



/*�y�[�W�ʓǂݍ���*/
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

//�J�[�h�x�~�A���m�p�e�L�X�g�����R�R����
var tag_p=document.createElement("p");
var tag_b=document.createElement("b");
var tag_a2=document.createElement("a");
tag_a2.setAttribute("href","http://www.jalcard.co.jp/milenet/index.html");
tag_a2.setAttribute("target","_blank");
var text1=document.createTextNode("���m�点");


var text2=document.createTextNode("10��26���i���j�ߑO2���`�ߑO4���܂ŁA�N���W�b�g�J�[�h���ϑ�s��ЃV�X�e�������e�i���X�̂��߁A�N���W�b�g�J�[�h�ɂ�邨���������o���܂���B�\�߂��������������B");
var text3=document.createTextNode("���ڂ����͂�����");





/*���ӏ��� �J�[�h�x�~*/
tag_b.appendChild(text1);
tag_p.appendChild(tag_b);
tag_p.appendChild(text2);
/*tag_div.appendChild(tag_p);*/

//�J�[�h�x�~�A���m�p�e�L�X�g�����R�R�܂�

img[0].setAttribute("src",img_url);


tag_div.setAttribute("id","topbanar");

id_head.parentNode.insertBefore(tag_div,id_head);


}




/*�^�C�}�[*/

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


//�J�[�g���R�s�[

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




//�J�[�g�ړ�
function cart_ch(){
if(!byid("gbody")) return false;
var gbr=byid("gbr");

var cart=byid("cart");

gbr.insertBefore(cart,gbr.childNodes[2])


}



//�^�C�g���ǂݍ���
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



//���O�A�E�g�@�����N
function loguout_link(){
//select�����邩�Ȃ���
if(!byid("cart")) return false;
var cart=byid("cart");
if(tag_name("cart","select")[0]) return false;
if(tag_name("cart","input")[0]) return false;
//�t�H�[���̎w��

var tag_form=tag_name("cart","form");

//br��ϐ���
var tag_br=tag_form[0].getElementsByTagName("br");

//�}����������
var tag_a1=tag_make("a");
var tag_a2=tag_make("a");
//�����N�F��ύX
tag_a1.style.color="#ff0000";
tag_a2.style.color="#ff0000";

//�����N��w��
tag_a1.setAttribute("href","https://secure.as-web.jp/as-web/as-shop/user.php?action=display&mode=policy");
tag_a2.setAttribute("href","#");
//�e�L�X�g����
var text1=text_make("�V�K�o�^�͂�����");
var text2=text_make(" �^ ");
var text3=text_make("���O�C���͉�ʏ㕔����");
//�e�L�X�g���q�m�[�h��
tag_a1.appendChild(text1);
tag_a2.appendChild(text3);

//�}��
cart.appendChild(tag_a1);
cart.appendChild(text2);
cart.appendChild(tag_a2);
//tag_br[2].parentNode.insertBefore(tag_a1,tag_br[2]);
//tag_br[2].parentNode.insertBefore(text2,tag_br[2]);
//tag_br[2].parentNode.insertBefore(tag_a2,tag_br[2]);
}



//�e��ȗ�
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

//���݂̃A�h���X
var now_url=window.location.href


//���t�擾
var now=new Date();
var month=now.getMonth()+1;
var day=now.getDate();
