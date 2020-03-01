function change_image(){
    Element=document.getElementById("myimages");
    if(Element.src.match("miku02")){
        Element.src="../../images/miku03.jpg";
    }
    else{
        Element.src="../../images/miku02.jpg";
    }
}