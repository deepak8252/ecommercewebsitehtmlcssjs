const bar=document.getElementById("bar");
const closebar=document.getElementById("close");
const nav=document.getElementById("navbar");
if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add("active");
    })
}
if(closebar){
  closebar.addEventListener("click",()=>{
    nav.classList.remove("active");
  })
};
//  active class add
