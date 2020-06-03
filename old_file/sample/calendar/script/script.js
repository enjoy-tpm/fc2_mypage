var ctitle;

function cont(){
//パーツ
var shopid=location.href.substr(39,6);
//location.href.substr(39,6)

//タイトル
document.write("<div id=recom><h2>"+ctitle+"</h2><table cellspacing=0 border=0>");

//要素
for(i=0;i<clist.length;i++){
var tdcolor="#FFFFEE";
if(i==1||i==3||i==4||i==6||i==9||i==11||i==12||i==14){
var tdcolor="#EEFBFF";
}
var tdpart="<td valign=top bgcolor="+tdcolor+">";
var tdpart2="<td valign=top bgcolor=#ffffff>";
var tdlist=new Array(
"<tr>"+tdpart,
tdpart,
"</td>",
"</td></tr>",
"</td>"+tdpart2+"</td></tr>",
"</td>"+tdpart2+"</td>"+tdpart2+"</td></tr>",
"</td>"+tdpart2+"</td>"+tdpart2+"</td>"+tdpart2+"</td></tr>");

if(i==0||i%4==0){
var a=0;
}else{
var a=1;
}
if(i%4==3){
var b=3;
}else{
var b=2;
}
if(i==clist.length-1&&clist.length==3||i==clist.length-1&&clist.length%4==3){
var b="4";
}
if(i==clist.length-1&&clist.length==2||i==clist.length-1&&clist.length%4==2){
var b="5";
}
if(i==clist.length-1&&clist.length==1||i==clist.length-1&&clist.length%4==1){
var b="6";
}

document.write(tdlist[a]+"<em><a href=shop.php?shop_id="+shopid+"&prod_id="+clist[i][0]+"><img src=shop/"+shopid+"/images/"+clist[i][0]+"/pic_small.jpg></a></em><tt><i><a href=shop.php?shop_id="+shopid+"&prod_id="+clist[i][0]+">"+clist[i][1]+"</a></i><u>￥"+clist[i][2]+"</u></tt>"+tdlist[b]);
}

//テーブル最後
document.write("</table></div>");
}

