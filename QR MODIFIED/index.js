document.addEventListener("DOMContentLoaded",()=>{

 const Image_box=document.getElementsByClassName(".image_Content");
 const Btn=document.getElementById("Btn_content");
 const Img_div=document.getElementById("Img");
 const Image_Src=document.getElementById("Image_source");
 const Input_box=document.getElementById("Input_box");

  
 Btn.addEventListener("click",(e)=>{
  console.log(e);
  let Value=Input_box.value.trim();
  if(Value=="") return;
  else{
  setTimeout(()=>{
  Btn.textContent="GENERATING..";
  },300)
  };
  
  setTimeout(()=>{
  Img_div.classList.remove("hidden");
  try{
  Image_Src.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+Value;
  }catch(e){
    alert("TRY again or CHECK YOUR INTERNET CONNECTION")
  }
  
  Input_box.value="";
  Btn.textContent="GENERATING NOW";
  },1000)
 
  
 });
  
 setTimeout(Removeit,300);

 function Removeit(){
 Btn.addEventListener("click",()=>{
  let Value=Input_box.value.trim();
  if(Value==""){
  Img_div.classList.add("hidden");
  }
 })
 }



/////
//Full body ends here
});


