let maininput=document.querySelector(".inputs input");
let btn=document.querySelector(".inputs button");
let output=document.querySelector(".output p");
let mainoutput=document.querySelector(".output");

btn.addEventListener("click",function(){
  if(maininput.value){
    mainoutput.style.display="block";
    let mainarry=maininput.value.split("").reverse().join("");
    if(mainarry == maininput.value){
      output.innerText=`Yes, ${maininput.value} is a Palindorme`
    }else{
      output.innerText=`No, "${maininput.value}" is not a Palindorme`
    }
    maininput.value="";
  }else{
    mainoutput.style.display="none";
    maininput.value="";
  }
})