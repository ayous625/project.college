function openImage(img){
  document.getElementById("popup").style.display="block";
  document.getElementById("popupImg").src=img.src;
}

function closeImage(){
  document.getElementById("popup").style.display="none";
}
