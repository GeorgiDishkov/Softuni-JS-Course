function create(words) {
   const mainDiv = document.getElementById('content');
   mainDiv.addEventListener(`click`, onClick);
   for (const line of words) {
      let divCreate = document.createElement('div');
      let paragraph = document.createElement('p')
      paragraph.textContent = line;
      paragraph.style.display = 'none';
      divCreate.appendChild(paragraph);
      mainDiv.appendChild(divCreate);
   }

   function onClick(e) {
         e.target.children[0].style.display = '';
         console.log(e.target.children[0]);
      }
}