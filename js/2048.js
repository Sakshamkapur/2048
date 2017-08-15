 i=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

function makeinnerboxrandomly(value){  
    var n = Math.floor(Math.random()*i[i.length-1])+1;
    mab=document.getElementById('box-'+n);
    if(mab.innerText==""){
      makeinnerbox('box-'+n,value);
      // console.log(i[n]-1)
      // i.splice(i[n]-2,1);
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
function lostornot(){
  var c=0;
  for(var i=1;i<17;i++){
    var box=document.getElementById('box-'+i); 
    if(box.innerText!=""){
      c++;
    }
  }
  if(c==16){
    if(confirm("You lose!! Play again ??")==true){
      window.location.reload();
    }
  }
}
function addinnerbox(direc){
  if(direc=="up"){
    for(var k=1;k<=16;k++){
      if(k<=4 && checkcolumn(k,"up")==1){
        addboxes(k,k+4,k);
        addboxes(k+12,k+8,k+4,"up");
      }
      else{
        addboxes(k,k+4,k);
        var box=document.getElementById('box-'+(k+4));
        if(box!=null && canmoved(k+4,"up") && box.innerText!=""){
          makeinnerbox('box-'+positiontomove(k+4,"up"),box.innerText-0);
          clearinnerbox('box-'+(k+4));
        }
      }
    }
  }
  if(direc=="down"){
    for(var k=16;k>=1;k--){
      if(k>=13 && checkcolumn(k,"down")==1){
        addboxes(k,k-4,k);
        addboxes(k-12,k-8,k-4,"down");
      }
      else{
        addboxes(k,k-4,k);
        var box=document.getElementById('box-'+(k-4));
        if(box!=null && canmoved(k-4,"down") && box.innerText!=""){
          makeinnerbox('box-'+positiontomove(k-4,"down"),box.innerText-0);
          clearinnerbox('box-'+(k-4));
        }
      }
    }
  }
  if(direc=="right"){
    for(var i=4;i>=1;i--){
      for(var k=i,c=0;c<=3;k=k+4,c++){
        if(k%4==0 && checkcolumn(k,"right")==1){
          addboxes(k,k-1,k);
          addboxes(k-3,k-2,k-1,"right");
        }
        else{
          addboxes(k,k-1,k); 
          if(k!=1 && k!=5 && k!=9 && k!=13){
            var box=document.getElementById('box-'+(k-1));
            if(box!=null && canmoved(k-1,"right") && box.innerText!=""){
              makeinnerbox('box-'+positiontomove(k-1,"right"),box.innerText-0);
              clearinnerbox('box-'+(k-1));
            }
          }
        }
      }
    }
  }
  if(direc=="left"){
    for(var i=1;i<=4;i++){
      for(var k=i,c=0;c<=3;k=k+4,c++){
        if((k==1 || k==5 || k==9 || k==13) && checkcolumn(k,"left")==1){
          addboxes(k,k+1,k);
          addboxes(k+3,k+2,k+1,"left");
        }
        else{
          addboxes(k,k+1,k); 
          if(k%4!=0){
            var box=document.getElementById('box-'+(k+1));
            if(box!=null && canmoved(k+1,"left") && box.innerText!=""){
              makeinnerbox('box-'+positiontomove(k+1,"left"),box.innerText-0);
              clearinnerbox('box-'+(k+1));
            }
          }
        }
      }
    }
  }
}

function checkcolumn(id,direc){
  var count=0;
  if(direc=="up"){
    for(var i=id,c=0;c<=3;i=i+4,c++){
      var box=document.getElementById('box-'+i);
      if(box!=null && box.innerText!=""){
        count++;
      }
    }
    if(count==4){
      return 1;
    }
    else return 0;
  }
  if(direc=="down"){
    for(var i=id,c=0;c<=3;i=i-4,c++){
      var box=document.getElementById('box-'+i);
      if(box!=null && box.innerText!=""){
        count++;
      }
    }
    if(count==4){
      return 1;
    }
    else return 0;
  }
  if(direc=="right"){
    for(var i=id,c=0;c<=3;i=i-1,c++){
      var box=document.getElementById('box-'+i);
      if(box!=null && box.innerText!=""){
        count++;
      }
    }
    if(count==4){
      return 1;
    }
    else return 0;
  }  
  if(direc=="left"){
    for(var i=id,c=0;c<=3;i=i+1,c++){
      var box=document.getElementById('box-'+i);
      if(box!=null && box.innerText!=""){
        count++;
      }
    }
    if(count==4){
      return 1;
    }
    else return 0;
  } 
}
function addboxes(id_num1,id_num2,id,tell){
  var box1=document.getElementById('box-'+id_num1);
  var box2=document.getElementById('box-'+id_num2);
  var box=document.getElementById('box-'+id);
  if(box!=null && tell=="up" && box2!=null && box1!=null){
    var val1=box1.innerText-0;
    var val2=box2.innerText-0;
    if(val1==val2){
      clearinnerbox('box-'+id_num1);
      clearinnerbox('box-'+id_num2);
      makeinnerbox('box-'+(id_num2+4),val1+val2);
    }
  }
  if(box!=null && tell=="down" && box2!=null && box1!=null){
    var val1=box1.innerText-0;
    var val2=box2.innerText-0;
    if(val1==val2){
      clearinnerbox('box-'+id_num1);
      clearinnerbox('box-'+id_num2);
      makeinnerbox('box-'+(id_num2-4),val1+val2);
    }
  }
  if(box!=null && tell=="right" && box2!=null && box1!=null){
    var val1=box1.innerText-0;
    var val2=box2.innerText-0;
    if(val1==val2){
      clearinnerbox('box-'+id_num1);
      clearinnerbox('box-'+id_num2);
      makeinnerbox('box-'+(id_num2-1),val1+val2);
    }
  }
  if(box!=null && tell=="left" && box2!=null && box1!=null){
    var val1=box1.innerText-0;
    var val2=box2.innerText-0;
    if(val1==val2){
      clearinnerbox('box-'+id_num1);
      clearinnerbox('box-'+id_num2);
      makeinnerbox('box-'+(id_num2+1),val1+val2);
    }
  }
  if(box2!=null && box1!=null){
    var val1=box1.innerText-0;
    var val2=box2.innerText-0;
    if(val1==val2){
      if(box.innerText!=""){
        clearinnerbox('box-'+id);
        clearinnerbox('box-'+id_num1);
        clearinnerbox('box-'+id_num2);
        makeinnerbox('box-'+id,val1+val2);
      }
      else {
        makeinnerbox('box-'+id,val1+val2);
        clearinnerbox('box-'+id_num1);
        clearinnerbox('box-'+id_num2);
      }
    }
  }   
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
    addinnerbox("up");
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
    addinnerbox("down");
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
    addinnerbox("right");
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
    addinnerbox("left");
  }
}   
// function stillplayable(){
//   var co=0;
//   for(var i=1;i<=16;i++){
//     if(i>4){
//     var box1=document.getElementById('box-'+i-4);}
//     if(i<16){
//     var box2=document.getElementById('box-'+i+1);}
//     if(i>1){
//     var box3=document.getElementById('box-'+i-1);}
//     if(i<12){
//     var box4=document.getElementById('box-'+i+4);}
//     var box=document.getElementById('box-'+i);
//     if(box!=null && box.innerText!=""){
//       var val=box.innerText-0;
//     }
//     if(box1!=null && box1.innerText!=""){
//       var val1=box1.innerText-0;
//     }
//     if(box2!=null && box2.innerText!=""){
//       var val2=box2.innerText-0;
//     }
//     if(box3!=null && box3.innerText!=""){
//       var val3=box3.innerText-0;
//     }
//     if(box4!=null && box4.innerText!=""){
//       var val4=box4.innerText-0;
//     }
//     if((val==val1 && val1>=2) ||(val==val2 && val2>=2) ||(val==val3 && val3>=2) ||(val==val4 && val4>=2)){
//       co++;
//     }
//   }console.log("a"+co);
//   if(co>=1){
//     return 1;
//   }
//   else return 0;
// }
window.addEventListener("keydown", function (event) {

  switch (event.key) {
    case "ArrowDown": 
          moveinnerbox("down");
          makeboxatempty();
          // if(stillplayable()==1){
          //   lostornot();
          // } 
      break;
    case "ArrowUp":
          moveinnerbox("up");
          makeboxatempty();
          // if(stillplayable()==1){
          //   lostornot();
          // }
      break;
    case "ArrowLeft":
          moveinnerbox("left");    
          makeboxatempty();
          // if(stillplayable()==1){
          //   lostornot();
          // }     
      break;
    case "ArrowRight":
          moveinnerbox("right"); 
          makeboxatempty();
          // if(stillplayable()==1){
          //   lostornot();
          // }  
      break;
    default:
      return;
  }  
})