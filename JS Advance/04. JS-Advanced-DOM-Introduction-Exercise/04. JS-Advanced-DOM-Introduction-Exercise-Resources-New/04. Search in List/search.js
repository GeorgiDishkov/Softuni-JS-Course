function search() {
   const elements = Array.from(document.querySelectorAll("ul li"));
   const text = document.getElementById(`searchText`).value;
   let pointer = 0;
   elements.forEach((el) => {
      if(el.innerHTML.includes(text)){
         el.style.fontWeight = "bold";
         el.style.textDecoration = "underline";
         pointer ++;
      }else{
         el.style.fontWeight = "normal";
         el.style.textDecoration = "";
      }
   })
   document.getElementById("result").textContent = (`${pointer} matches found`);
}
