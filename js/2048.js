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

function positiontomove(id_num,direc){
  var pos=0;
  var b=id_num;
  if (direc=="up") {
    for(var i=0;i<=2;i++){
      if(b>4){
        b=b-4;
      }
      var boxb=document.getElementById('box-'+b);
      if(boxb.innerText==""){
        pos=b;
      }
      else return pos;
    }
    return pos;
  }
  if (direc=="down") {
    for(var i=0;i<=2;i++){
      if(b<13){
        b=b+4;
      }
      var boxb=document.getElementById('box-'+b);
      if(boxb.innerText==""){
        pos=b;
      }
      else return pos;
    }
    return pos;
  }
  if (direc=="right") {
    for(var i=0;i<=2;i++){
      if(b%4!=0){
        b=b+1;
      }
      var boxb=document.getElementById('box-'+b);
      if(boxb.innerText==""){
        pos=b;
      }
      else return pos;
    }
    return pos;
  }
  if (direc=="left") {
    for(var i=0;i<=2;i++){
      if(b!=1 && b!=5 && b!=9 && b!=13){
        b=b-1;
      }
      var boxb=document.getElementById('box-'+b);
      if(boxb.innerText==""){
        pos=b;
      }
      else return pos;
    }
    return pos;
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
    for(var i=5;i<=16;i++){
      var box=document.getElementById('box-'+i);
      if(box.innerText!=""){
        if(canmoved(i,"up")){
          makeinnerbox('box-'+positiontomove(i,"up"),box.innerText-0);
          clearinnerbox('box-'+i); 
        }
      }
    }
  }
  else if (direc=="down") {
    for(var i=12;i>=1;i--){
      var box=document.getElementById('box-'+i);
      if(box.innerText!=""){
        if(canmoved(i,"down")){
          makeinnerbox('box-'+positiontomove(i,"down"),box.innerText-0);
          clearinnerbox('box-'+i);
        }  
      }
    }
  }
  else if (direc=="right") {
    for(var i=3;i>=1;i--){
      for(var j=i,c=0;c<=3;j=j+4,c++){
        var box=document.getElementById('box-'+j);
        if(box.innerText!=""){
          if(canmoved(j,"right")){
            makeinnerbox('box-'+positiontomove(j,"right"),box.innerText-0);
            clearinnerbox('box-'+j); 
          }
        } 
      }
    }
  }
  else if (direc=="left") {
    for(var i=2;i<=4;i++){
      for(var j=i,c=0;c<=3;j=j+4,c++){
        var box=document.getElementById('box-'+j);
        if(box.innerText!=""){
          if(canmoved(j,"left")){
            makeinnerbox('box-'+positiontomove(j,"left"),box.innerText-0);
            clearinnerbox('box-'+j); 
          }
        } 
      }
    }
  }
}   

window.addEventListener("keydown", function (event) {

  switch (event.key) {
    case "ArrowDown": 
          moveinnerbox("down");
          // makeboxatempty();
      break;
    case "ArrowUp":
          moveinnerbox("up");
          // makeboxatempty();
      break;
    case "ArrowLeft":
          moveinnerbox("left");    
          // makeboxatempty();      
      break;
    case "ArrowRight":
          moveinnerbox("right"); 
          // makeboxatempty();   
      break;
    default:
      return;
  }  
})