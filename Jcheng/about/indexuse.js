
function changeClass(d){
    //按钮专用
    var a=document.getElementById("botton_active"+d);
    a.id="";
    a.className="not_active";
    var c=document.activeElement;
    c.className="active";
    c.id="botton_active"+d;
}
//等待更新新功能