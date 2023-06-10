const textInput=document.querySelector(".inputs input");
const ckeckbtn=document.querySelector(".inputs button");
const infoText=document.querySelector(".output");
let filterInput;

ckeckbtn.addEventListener("click",()=>{
  let revesfiter=filterInput.split("").reverse().join("");
  infoText.style.display="block";
  if(filterInput!=revesfiter){
    return infoText.innerHTML=`No, <span>'${textInput.value}'</span> is not a Palindorme`;
  }else{
    infoText.innerHTML=`Yes, <span>'${textInput.value}'</span> is a Palindorme`;
  }
})

textInput.addEventListener("keyup",()=>{
  filterInput=textInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
  if(filterInput){
    return ckeckbtn.classList.add("active");
  }
  infoText.style.display="none";
  ckeckbtn.classList.remove("active");
})