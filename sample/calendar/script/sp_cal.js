//@charset "shift_jis";

//----------------------------------------------------------------------------

//�����N��匳
var comon_url="shop.php?shop_id=S00013&prod_id="
//�d�l�摜�����N��匳
var img_url="i-cal/img/"
//����w�ǎҗp��keyvar 
//
var teiki_key="otoku";
//var teiki_key="html";

//�������^������
var sell_month=9;
var sell_date=4;


//----------------------------------------------------------------------------

//���i��{�f�[�^[���i���AID�A���i]
var goods_data=new Array(
						 
[["���[�V���O�I���J�����_�[�Q�O�O�X","18506","2,800","18753","2,520",8],
["�@���E�ő��̒j�B���T�[�L�b�g�ɏW���AF1�B","�@300km�^h�z���̃o�g�������݂������X�̖��V�[������A13���́w�u�ԁx��؂������A2009�N�x�ŃJ�����_�[�����N���o��B","���[�^�[�X�|�[�c�ō���̖��͂Ɗ������A���͂̑��ʂ��S��B"],
"�@�J�����}���F���q�@�� �^ �T�C�Y�F�c430�����~��590���� �^ �^�C�v�F�Ǌ|�� �^ �����F13�i�\��+12�����j �^ ���������F2008�N10��3��(���j"
],

[["�X�[�p�[GT�J�����_�[�Q�O�O�X","18507","2,000","18754","1,800",8],
["�@GTA���F�w�X�[�p�[GT�J�����_�[�x�����N���o��B","�@�j�b�T���E�g���^�E�z���_��3�僁�[�J�[���ΉԂ��U�炷GT500�B","�@���I�ȃv���C�x�[�^�[�`�[�����A�h�R�����o�g�����J��L����GT300�B","�@�����閼�V�[�����猵�I�����A���͂���GT�}�V���̓t�@���K���I�I"],
"�J�����}���F���c�@�� �^ �T�C�Y�F�c430�����~��590���� �^ �^�C�v�F�Ǌ|�� �^ �����F13�i�\��+12�����j �^ ���������F2008�N10��3��(���j"
],

[["WRCPLUS�J�����_�[�Q�O�O�X","18508","2,800","18755","2,520",8],
["�@������2�x�A�@�葬�x�̗��K���s�ō�����y�[�X�m�[�g�𗊂�ɁA�S�J���s�ɒ��ދ��Z�\�q�`�k�k�x","�@�����[�J�[�͖{�Ԃŏ��߂ăR�[�X�ɒ��ގ����������B�ߍ��ȏ����̒��A�}�V���̑S�\�͂��������h���C�o�[�͌���̌��҂��A����Ƃ����m�炸���B","�@���N�̃J�����_�[�́A��������}�V���́u�쐶�v�E�u�݂Ȃ��铬���S�v���e�[�}�ɍ\�����܂����B�ʐ^�͖ܘ_�A�wWRCPLUS�x�ꑮ�̏��ђ����B �}�V���̖�������V�[����唻�Ȃ�ł͂̑唗�͂ł��͂��v���܂��B���E�̐�i�ɂقƂ΂���G�i�W�[���u�̊��v���ĉ�����"],
"�J�����}���F���ђ��� �^ �T�C�Y�F�c430�����~��590���� �^ �^�C�v�F�Ǌ|�� �^ �����F13�i�\��+12���� �^ ���������F2008�N10��3��(���j"
],

[["�O�����v���V���J�����_�[�@LAP�Q�O�O�X","18509","1,200","18756","1,080",6],
["�@F1����{���ŘA�ڒ��̑�l�C4�R�}����A�O���V�B","�@���̃L�������̃l�^���o���ŁA�J�����_�[�ɂȂ��Ă���\��B","�@�������A���̂��߂����̃I���W�i���`�����낵�B","�@2009�N���w�O���V�J�����_�[�x�ł�������΂��āA���܂Ƀz�����B"],
"�J�����}���F���R���v �^ �T�C�Y�F�c148mm�~��210mm �^  �^�C�v�F��� �^ �����F13�i�\��+12�����j �^ ���������F2008�N10��3��(���j"
],

[["���[�V���OGT-R���X�J�C���C���J�����_�[�Q�O�O�X","18510","2,800","18757","2,520",9],
["�@���N�j�b�T���́wSUPER GT�x�̒��_�\GT500�N���X�ɁwR35 GT-R�x�𓊓��A�J���^2��ƃG�[�X��23���Ԃ��Ռ��̘A���f�r���[�B���ҒD�҂Ɍ������D�X�^�[�g��؂�Ƌ��ɁA�V����GT-R�_�b�̖��������܂����B","�@���[�^�[�X�|�[�c�j�ɂ��̖�������GT-R�B70�N��̃c�[�����O�J�[�I�茠�A80�`90�N��̃O���[�vA�V���[�Y�A�S���{GT�I�茠�ƁA���X��GT-R�����_�ɌN�Ղ��܂����B����ŐV��R35���A����GT-R�A�����āg���[�V���OR�h�̗E�p��[�߂��w���[�V���OGT-R���X�J�C���C���x�̃J�����_�[�����͂����܂��B"],
"�J�����}���F���� �G���@�� �^ �T�C�Y�F�c430�����~��590���� �^ �^�C�v�F�Ǌ|�� �^ �����F13�i�\��+12���� �^ ���������F2008�N10��3��(���j"
],

[["�X�[�p�[GT�E�B�[�N���[�J�����_�[�Q�O�O�X","18511","1,000","18758","900",14],
["�@���N�A���D�]�����Ă���wSUPER GT�x�J�����_�[�̒핪���o���܂����B","�@�����Ƃ����߂₷���A�����ƃ}�V����g�߂ɁASUPER GT�t�@���͂������̂��ƁA���[�V���O�J�[�ɋ����̂��邨�q�l�ɂ������߂ł��I","SUPER GT���[�X�o���}�V��42��+����53�T�ɓn���ďT�ς��Ŋy���߂�Weekly�i�T�߂���j�J�����_�[�ƂȂ�܂��B����؂�K���I�I"],
"�J�����}���F���ђ����E�����p�E���}���M�m �^ �T�C�Y�F�c110mm�~��159mm �^�C�v�F��� �^ �����F54�i�\��+53�T���j �^ ���������F2008�N10��3��(���j"
]					 
 );


//----------------------------------------------------------------------------

//�����y�[�W�@�ϐ���
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
//���y�[�W������
$("#old_table").fadeOut(700,function(){new_cont_in();});
}

}

//----------------------------------------------------------------------------

function new_cont_in(){
//�X�^�C���V�[�g��������
tag_link.setAttribute("href","script/sp_cal.css");
	//�����Ȃ�����	old_table.style.display="none";
	//����
	tag_body.removeChild(old_table);
	//�w�i����������	tag_body.style.background="#000000";
	
	

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




//�}���v�f��������--------------------------------------------

function contbase_in(){
	//�匳��div������ē����
	var tag_div=tag_make("div");
	tag_div.setAttribute("id","comon_div");//id�ݒ�
	var comon_div=byid("comon_div");//�ϐ���
	
	tag_body.appendChild(tag_div);//�{�f�B�ɑ匳��}��
	
	
	
	
	//�^�C�g���ph1��img
	var make_h1=tag_make("h1");
	var title_img=tag_make("img");
	title_img.setAttribute("id","main_title")
	
	//����w�ǎ҂ƒʏ�Ń^�C�g���摜��ύX
	if(window.location.href.indexOf(teiki_key)!=-1){
	title_img.setAttribute("src",img_url+"title_sp.gif");
	title_img.setAttribute("alt","2009�@���[�^�[�X�|�[�c�J�����_�[�@���ʗ\��̔�");
	}
	else{
	title_img.setAttribute("src",img_url+"title.gif");
	title_img.setAttribute("alt","2009�@���[�^�[�X�|�[�c���@�J�����_�[�V���b�v");
		}
	//-----------------------------------
	
	make_h1.appendChild(title_img);
	tag_div.appendChild(make_h1);
	
	
	//�T�u�^�C�g���pdiv��img
	var sab_title=tag_make("div");
	sab_title.setAttribute("id","sab_title")
	var sabtitle_img=tag_make("img");
	sabtitle_img.setAttribute("id","sabtitle_img");

	
	//����w�ǎ҂ƒʏ�Ń^�C�g���摜��ύX
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
	
	//�����N�����ݒ�
	var navi_div=tag_make("div");
	navi_div.setAttribute("id","navi_div");//id�ݒ�
	tag_div.appendChild(navi_div);
	
	
	//�����N�p�̃A�C�R��
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

		
		//�i�r�@�e�L�X�g��������
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

		//�i�r�@�e�L�X�g�����܂�
			
			
			
		out_span.appendChild(icon_p);
		icon_img.setAttribute("width","110");
		icon_img.setAttribute("height","110");
		
		}
					//�i�r�@��肱�݉����p
	var navi_clear_span=tag_make("span");
	navi_clear_span.style.clear="both";
	navi_div.appendChild(navi_clear_span);
		
	//�L�����y�[���pdiv��img�ƁA�����N�ƃe�L�X�g
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
	
	//����w�ǎ҂ƒʏ�Ń^�C�g���摜��ύX
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




}//if�̕�
else{
$("#comon_div").fadeIn(1000,function(){
$("#navi_div").slideDown(700,function(){
//�����x�ύX
alfa_var;
$("#ca_title").slideDown(900);
});
});
	}

//�}���v�f�����܂�--------------------------------------------


//�N���b�N����--------------------------------------------
	var navi_img=tag_name(navi_div,"img");
	var navi_span=tag_name(navi_div,"span");
	
for(i=0;i<6;i++){
	navi_over_out(i);
	click_func(i)
	}
	
//�i�r�}�E�X�I�[�o�[���삱������
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
//�i�r�}�E�X�I�[�o�[���삱���܂�
	
	/*for(i=0;i<6;i++){
		//�}�E�X�I�[�o�[�œ����x�ύX���~�߂�
		navi_img[i].onmouseover=function(){
		clearInterval(alfa_var)
			}//�}�E�X�I�[�o�[��
		//�}�E�X�A�E�g�œ����x���ăZ�b�g
		navi_img[i].onmouseout=function(){
		alfa_var=setInterval("icon_alpha()",3500);
				}//�}�E�X�A�E�g��
		click_func(i);//�N���b�N����
		}
		*/



	
//�A�C�R���N���b�N����--------------------------------------------
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
		}//if�̕�
		else{
		$("[class='each_div']").fadeOut({queue:false,duration:700})//�e�R���e���c�o���Ƃ��̓���
		
		if(byid("list_img0")){
		$("[class='list_each_div']").fadeOut(300,function(){
		$(this).remove();
		$("#each_div"+no).fadeIn(700);//�e�R���e���c�����Ƃ��̓���
		});
				}
		else{
		$("#each_div"+no).fadeIn(700);//�e�R���e���c�����Ƃ��̓���
		}
			
		}//else�̕�

		}//click�̕�

	}//click_func�̕�
	
	
//�^�C�g���N���b�N����--------------------------------------------
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
		}//if�̕�
		alfa_var=setInterval("icon_alpha()",3500);
		}//click�̕�
	
//�R���e���c�X�y�[�X--------------------------------------------
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
		}//mcont_func()�̕�	
		
}//contbase_in()�̕�
}//new_cont_in()�̕�
	

//----------------------------------------------------------------------------
	//�A�C�R���̓����x�𓮂���

	var alfa_var=setInterval("icon_alpha()",3500);

	function icon_alpha(){
		$("[class='icon_img']").animate({opacity:0.6},1000);
		$("[class='icon_img']").animate({opacity:1},1000);
		}
//----------------------------------------------------------------------------
	//�{�^���̓����x�𓮂���

	var alfa_button=setInterval("button_alpha()",3500);

	function button_alpha(){
		$("[class='detail_bt']").animate({opacity:0.4},1000);
		$("[class='detail_bt']").animate({opacity:1},1000);
		}		
		
//----------------------------------------------------------------------------

function each_cont_in(){
	//�}����
	var main_cont=byid("main_cont");	
	
	//6�̃R���e���c��}��
	for(q=0;q<6;q++){
    //�ʃy�[�W�p
	var each_div=tag_make("div");
	each_div.setAttribute("id","each_div"+q);
	each_div.className="each_div";
	
	//�^�C�g���摜�ɑ}��------------------------------------
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
	//���ƉE��}��-----------------------------------------------
	each_div.appendChild(left_div);
	each_div.appendChild(right_div);
	
	//���C���ʐ^�������ɑ}��------------------------------------
	var main_photo=tag_make("img");
	main_photo.className="main_photo";
	main_photo.setAttribute("id","main_photo"+q);
	main_photo.setAttribute("src",img_url+"photo/"+q+"_0.jpg");
	left_div.appendChild(main_photo);
	//���C���ʐ^�̏c�T�C�Y------------------------------------
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
	
	//���[�h�pdiv�}��------------------------------------
	var read_div=tag_make("div");
	read_div.setAttribute("id","read_div"+q);
	read_div.className="read_div";
	right_div.appendChild(read_div);
	
	//���[�h�e�L�X�g�}��------------------------------------
	for(i=0;i<goods_data[q][1].length;i++){
		var read_text=text_make(goods_data[q][1][i]);
		var read_br=tag_make("br");
		read_div.appendChild(read_text);
		read_div.appendChild(read_br);
		}
		
	//�T���l�C���pdiv�}��------------------------------------

if(goods_data[q][0][5]==0){
	
	}
else{
	var sam_div=tag_make("div");
	//sam_div.style.display="none";//�T���l�C���������܂ŏ����Ă���
	sam_div.setAttribute("id","sam_div"+q);
	sam_div.className="sam_div";
	left_div.appendChild(sam_div);
	//�T���l�C���摜�}��------------------------------------
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
		
	 //�T���l�C���摜��荞�݉���------------------------------------
	 var tag_both_span=tag_make("span");
	 tag_both_span.className="both"
	 sam_div.appendChild(tag_both_span);	 
}
	
	//�ڍחpdiv�}��------------------------------------
	var detail_div=tag_make("div");
	detail_div.setAttribute("id","detail_div"+q);
	detail_div.className="detail_div";
	right_div.appendChild(detail_div);
	//�ڍחp���e------------------------------------
	var detail_h2=tag_make("h2");
	//-----------------------------------
	if(window.location.href.indexOf(teiki_key)!=-1){
var detail_title=text_make("�y���ʉ��i�z "+goods_data[q][0][0]);
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
var normal_price=text_make("�ʏ퉿�i�F"+goods_data[q][0][2]+"�~");
tag_i.appendChild(normal_price);
var tag_b=tag_make("b")
tag_b.style.fontWeight="bold";
var sp_price=text_make(" �� ���ʒ艿�F"+goods_data[q][0][4]+"�~");
tag_b.appendChild(sp_price);
detail_price.appendChild(tag_i);
detail_price.appendChild(tag_b);
	}
	else{
var detail_price=text_make("�艿�F"+goods_data[q][0][2]+"�~");
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
	//�ڍד��e�}���@�����܂�------------------------------------
	
	
	//�ꗗ�pdiv�̑}��------------------------------------
	var list_div=tag_make("div");
	list_div.className="list_div";
	var list_div_button=tag_make("img");
	list_div_button.className="list_div_button";
	list_div_button.setAttribute("src",img_url+"button_list.gif");
	$("[class='list_div_button']").css({"opacity":"0.5","width":"112px","height":"23px"})
	list_div.appendChild(list_div_button);
	right_div.appendChild(list_div);
	
		
	//�}�����Ɍʃy�[�W��}��
	main_cont.appendChild(each_div);
	
	mainphoto_ch(q)
	}//for�̕�
	
	//�{�^���̓����x�𓮂���
	alfa_button;
	
	//�{�^���̃A�N�V������������
	
	$("[class='detail_bt']").mouseover(function(ev){
	clearInterval(alfa_button);
	});
	
	$("[class='detail_bt']").mouseout(function(ev){
	alfa_button=setInterval("button_alpha()",3500);
	});
	
	//�w���{�^���N���b�N����
	//$("[class='detail_bt']").click(function(ev){
	//$(this).css({width:"116px",height:"24px"});
	//});
	//�{�^���̃A�N�V���������܂�
	
	
	//�ꗗ���X�g�̃N���b�N���삱������
	$("[class='list_div_button']").mouseover(function(ev){
	$(this).animate({opacity:"1",width:"116px",height:"24px"},300);
	});
	$("[class='list_div_button']").mouseout(function(ev){
	$(this).animate({opacity:"0.5",width:"112px",height:"23px"},300);
	});
	
	
	$("[class='list_div_button']").click(function(ev){
	$("[class='list_div_button']").css({"opacity":"0.5","width":"112px","height":"23px"})
      list_div_move()});
	//�ꗗ���X�g�̃N���b�N���삱���܂�
	
	
	//�T���l�C���摜�N���b�N���삱������-----------------------------------
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
				$("#main_photo"+no1).fadeIn(700);//�e�R���e���c�����Ƃ��̓���
		})
		}//mouseover�̕�
		
		var id_mainphoto=byid("main_photo"+no1)
		id_mainphoto.onmouseover=function(){
				$("[class='sam_img']").animate({opacity:1},1000);
			}//mouseout�̕�
			}//in_func�̕�
	
		   }
	//�T���l�C���摜�N���b�N���삱���܂�-----------------------------------
	
	
	
	
	
	}//each_cont_in()�̕�
	
	
//�ꗗ���X�g�̃N���b�N������Ԃ�������-----------
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
		//�O�g�p��div
		var list_each_div=tag_make("div");
		list_each_div.className="list_each_div";
		
		//�摜�}���p��div
		
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
var price_text=text_make("���ʒ艿�F"+goods_data[i][0][4]+"�~");
tag_b.appendChild( price_text);
	}
	else{
var tag_b=tag_make("b");
var price_text=text_make("�艿�F"+goods_data[i][0][2]+"�~");
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
	
	//����֘A
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
$("#each_div"+no).fadeIn(1000);//�e�R���e���c�����Ƃ��̓���	
clearInterval(alfa_var);
$("[class='icon_img']").animate({opacity:"0.6"},{queue:false,duration:500});
$("#navi_img"+no).animate({opacity:"1"},500);
		});
	});
	
	
	}

	
	
	
	}//list_div_cont()�̕�
//�ꗗ���X�g�̃N���b�N������Ԃ����܂�-----------

//----------------------------------------------------------------------------



//�ʃy�[�W�p

//�y�[�W��ԉ��̈ꗗ������---------
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
	var link_text=text_make("���J�����_�[�ꗗ�ɖ߂�");
	make_a.style.color="#00f";
	make_a.style.fontWeight="bold"
	make_a.appendChild(link_text);
	related.appendChild(make_a);
	
	/*//�y�[�W�㕔���y�[�W������ ��������
	var shop_head_logo=byid("shop_head_logo");
	var shop_foot=byid("shop_foot");
	var del_table=tag_name(shop_head_logo,"table")[2];
	shop_foot.insertBefore(del_table,shop_foot.firstChild);
	//�y�[�W�㕔���y�[�W������ �����܂�*/
	

//���ƃg�b�v�̃i�r������
var shop_navi=byid("shop_navi");
//$("#shop_navi").slideUp(500);
shop_navi.style.display="none";
var shop_search=byid("shop_search");
shop_search.style.display="none";
//$("#shop_search").slideUp(500);


//�]�v��ID������
var contentsLeft=byid("contentsLeft");
contentsLeft.style.display="none";
var contentsRight=byid("contentsRight");
contentsRight.style.display="none";
var item_detail=byid("item_detail");
item_detail.style.padding="0";

//�摜���N���b�N�Ŋg�������
var gbrb=byid("gbrb");
gbrb.style.display="none";

//���łɃy�[�W�㕔�́u�V���b�v�g�b�v�v�̃����N���ύX
var shop_menu=byid("shop_menu");
shop_menu.style.width="748px";
shop_menu.style.height="15px"
var top_link=tag_name(shop_menu,"a")[0];
var del_link=tag_name(shop_menu,"a")[1];
var del_img=tag_name(shop_menu,"img")[1];
del_link.style.display="none";
del_img.style.display="none";
var in_text=text_make("�����i�ꗗ");
top_link.appendChild(in_text);
set_href(top_link);	

//����h3��h4��U������
var cont_right=byid("gbr");
//�������������l�p
var click_a=tag_make("span");
click_a.style.color="#00f";
click_a.style.cursor="pointer"
click_a.setAttribute("id","click_a");
var text1=text_make("�� ���i�ڍ�");
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
		//����w�ǎ҂ƒʏ�Ŗ߂���ύX
	if(window.location.href.indexOf(teiki_key)!=-1){
	var_name.setAttribute("href","http://shop.as-web.jp/shop.php?shop_id=S00013#otoku_list");
	}
	else{
	var_name.setAttribute("href","http://shop.as-web.jp/shop.php?shop_id=S00013#list");
		}	
	}
//-------------------------------
	
	}
//�y�[�W��ԉ��̈ꗗ������---------


//�J�[�g����ԏ��---------
function cart_ch(){
	//�E��
	var cont_right=byid("gbr");
	cont_right.style.paddingTop="12px"
	var id_cart=byid("cart");
	cont_right.insertBefore(id_cart,cont_right.firstChild );	
	}
//�J�[�g����ԏ��---------

//�摜�g��p�X�y�[�X
function photo_space(){
	//�}�����@�R���e���c�X�y�[�X
	var item_detail=byid("item_detail");
	item_detail.style.position="relative";
	
	//�摜�̃����N�X�y�[�X�֘A
	var gbl=byid("gbl");
    var photo_link=tag_name(gbl,"a")[0];
	photo_link.style.fontSize="0";
	photo_link.style.textDecoration="none";
	photo_link.style.display="block";
	var photo_link_img=tag_name(photo_link,"img")[0];
		
	//�摜�̃i�r�X�y�[�X
	var photo_navi_div=tag_make("div");
	photo_navi_div.setAttribute("id","photo_navi_div");
	photo_navi_div.style.width="200px";
	photo_navi_div.style.margin="0 auto";
	photo_navi_div.style.background="url('"+img_url+"each_navi_body.gif') top left repeat-y";
	photo_navi_div.appendChild(photo_link_img);//���i�摜��div�̒���
	
	
	//�ꗗ�摜�X�y�[�X�쐬���}��
	var photo_navi_cont=tag_make("div");
	photo_navi_cont.setAttribute("id","photo_navi_cont");
	photo_navi_cont.style.textAlign="left";
	photo_navi_cont.style.padding="6px 0 0 6px";
	photo_navi_cont.style.display="none";
	photo_navi_div.appendChild(photo_navi_cont);

	//�^�u�摜�̏������}��
	var tab_img=tag_make("img");
	tab_img.setAttribute("src",img_url+"each_navi_bottom.gif");
	photo_navi_div.appendChild(tab_img);

	//�i�r�X�y�[�X��a�̒��ɑ}��
	photo_link.appendChild(photo_navi_div);

	//�g��摜�X�y�[�X�̐ݒ�
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
	//�g��摜�X�y�[�X�̑}��
	item_detail.insertBefore(photo_div,item_detail.firstChild );

	//�ꗗ�摜���ɉ摜��}��
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
			}//����for�̕�
		var big_img=tag_make("img");
		big_img.setAttribute("id","big_img");
		big_img.setAttribute("src",img_url+"photo/"+i+"_0.jpg");
		photo_div.appendChild(big_img);
		big_img.setAttribute("width","450");
		//���C���ʐ^�̏c�T�C�Y------------------------------------
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
		//���C���ʐ^�̏c�T�C�Y------------------------------------
		
		
		//�}�E�X�I�[�o�[���삱������
		var photo_navi_cont_img=tag_name(photo_navi_cont,"img");
				function in_func(noi,nop){
				photo_navi_cont_img[nop].onmouseover=function(){
				$("#big_img").fadeOut(700,function(){
				big_img.setAttribute("src",img_url+"photo/"+noi+"_"+nop+".jpg");
				$("#big_img").fadeIn(700);
				});
				}//mouseover�̕�
			}
		
		
		for(p=0;p<photo_navi_cont_img.length;p++){
			in_func(i,p);
			}//for�̕�
			

		//�}�E�X�I�[�o�[���삱���܂�
		
		
		}//if�̕�
	}//�O��for�̕�
	
	
	
	
	
	
	//�摜�N���b�N���삱������
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
//�摜�N���b�N���삱���܂�

//�摜�I�[�o�[����


	}



//�ȗ�_start------------------------------------------
//���݂̃A�h���X
var now_url=window.location.href

//id�ȗ�
function byid(id){
return document.getElementById(id);
}

//�^�O����
function tag_make(tag){
return document.createElement(tag);
}

//�^�O�w��
function tag_name(name1,tag){
return name1.getElementsByTagName(tag);
}

//�e�L�X�g����
function text_make(text){
return document.createTextNode(text);
}

//���씻�� if(!byid(" ")) return false;


//���t�擾�֘A
var now=new Date();//���݂̎��Ԃ��擾
var year=now.getFullYear();//4���̐���N����Ԃ��܂�
var month=now.getMonth()+1;//��
var date=now.getDate();//��

//�ȗ�_end------------------------------------------


