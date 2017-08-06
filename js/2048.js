 i=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

function makeinnerboxrandomly(value){  
    var n = Math.floor(Math.random()*i[i.length-1])+1;
    console.log("n:"+n);
    mab=document.getElementById('box-'+n);
    if(mab.innerText==""){
      makeinnerbox('box-'+n,value);
      // console.log(i[n]-1)
      // i.splice(i[n]-2,1);
      console.log("i:"+i);
    }
    // else if(i.length==0){
    //   alert("You Lose")
    // }
    // else if(mab.innerText=="" && i.length==1){
    //   console.log("In the i1")
    //   makeinnerbox('box-'+i[0],value);
    //   i.splice(n-1,1);
    // }
    else{
      console.log("again")
      makeinnerboxrandomly(value);
    }  
}  

makeinnerboxrandomly(2);  
makeinnerboxrandomly(2);

function makeinnerbox(id,value){
   var mab=document.getElementById(id);
    var mydiv=document.createElement("div");
    var myh1=document.createElement("h1");

    mydiv.className="inner-box";
    myh1.innerText=value;
    mydiv.appendChild(myh1);
    mab.appendChild(mydiv);
}   
function clearinnerbox(id){
   var cib=document.getElementById(id);
   cib.innerText="";
}
function canmoved(id_num,direc){
  var box=document.getElementById('box-'+id_num);
  if(direc=="up"){
    if(document.getElementById('box-'+(id_num-4)).innerText==""){
      return 1;
    }
    else{
      return 0;
    }
  }
  if(direc=="down"){
    if(document.getElementById('box-'+(id_num+4)).innerText==""){
      return 1;
    }
    else{
      return 0;
    }
  }
  if(direc=="right"){
    if(document.getElementById('box-'+(id_num+1)).innerText==""){
      return 1;
    }
    else{
      return 0;
    }
  }  
  if(direc=="left"){
    if(document.getElementById('box-'+(id_num-1)).innerText==""){
      return 1;
    }
    else{
      return 0;
    }
  } 
}
function makeboxatempty(){
  for(var i=1;i<17;i++){
    var box=document.getElementById('box-'+i);
    if(box.innerText==""){
      makeinnerboxrandomly(2);
      break;
    }
  }
}
function moveinnerbox(direc){
  if (direc=="up") {  
    for(var i=1;i<17;i++){
      var box=document.getElementById('box-'+i);
      if(box.innerText!="" && i>4){
        if (canmoved(i,"up")) {
          makeinnerbox('box-'+(i-4),box.innerText-0);
          clearinnerbox('box-'+i);
        }  
      }
    }
  }
  else if (direc=="down") {
    for(var i=1;i<17;i++){
      var box=document.getElementById('box-'+i);
      if(box.innerText!="" && i<13){
        if(canmoved(i,"down")){  
          makeinnerbox('box-'+(i+4),box.innerText-0);
          clearinnerbox('box-'+i);
        }  
      }
    }
  }
  else if (direc=="right") {
    for(var i=1;i<17;i++){
      var box=document.getElementById('box-'+i);
      if(box.innerText!="" && i%4!=0){
        if(canmoved(i,"right")){
          makeinnerbox('box-'+(i+1),box.innerText-0);
          clearinnerbox('box-'+i);
        }  
      }
    }
  }
  else if (direc=="left") {
    for(var i=1;i<17;i++){
      var box=document.getElementById('box-'+i);
      if(box.innerText!="" && (i!=1 && i!=5 && i!=9 && i!=13 )){
        if(canmoved(i,"left")){
          makeinnerbox('box-'+(i-1),box.innerText-0);
          clearinnerbox('box-'+i);
        }  
      }
    }
  }
}   

window.addEventListener("keydown", function (event) {

  switch (event.key) {
    case "ArrowDown": 
          moveinnerbox("down");
          makeboxatempty();
      break;
    case "ArrowUp":
          moveinnerbox("up");
          makeboxatempty();
      break;
    case "ArrowLeft":
          moveinnerbox("left");    
          makeboxatempty();      
      break;
    case "ArrowRight":
          moveinnerbox("right"); 
          makeboxatempty();   
      break;
    default:
      return;
  }  
})
