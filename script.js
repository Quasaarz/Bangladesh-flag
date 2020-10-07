function can() {
 var canvas = document.getElementById("surface");
 if (canvas.getContext){
  var con = canvas.getContext('2d');
  con.fillStyle = "rgb(255,255,0)";
 con.fillRect(40,140,150,50);
 } //end if
}//end draw