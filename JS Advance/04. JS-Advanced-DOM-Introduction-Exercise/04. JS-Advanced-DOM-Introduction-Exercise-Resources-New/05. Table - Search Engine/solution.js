function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const input = document.getElementById('searchField').value;
      let tables = Array.from(document.getElementsByTagName(`td`));
      let position = 2;
      let regex = new RegExp(/([A-Za-z]*)@([a-zA-Z]*.?[A-Za-z]*)/);
      for (let i = 1; i < tables.length; i+=3) {
         let  name = tables[i].textContent;
         let  mail = tables[i+1].textContent;
         let  course = tables[i+2].textContent;
         let macher = regex.exec(mail);
         let elements = document.getElementsByTagName(`tr`);

         elements[position].classList.remove("select");

         if(input.length !== 0){
         if(name.includes(input)||macher[1].includes(input)) {
         elements[position].classList.add("select");
         }else if(macher[2].includes(input)) {
         elements[position].classList.add("select");
         }else if(course.includes(input)){
         elements[position].classList.add("select");
         }
      }
      position++;
      }
   }
}