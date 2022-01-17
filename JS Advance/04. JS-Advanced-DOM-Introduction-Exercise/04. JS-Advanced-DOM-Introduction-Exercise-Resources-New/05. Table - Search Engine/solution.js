function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let input = document.getElementById('searchField').value;
      let tables = Array.from(document.querySelectorAll(`tbody tr`));

      tables.forEach ((el) => {
         let newInput = input.toLowerCase();
         let currentEl = el.textContent.toLowerCase();
         if(currentEl.includes(newInput)) {
            el.classList.add('select');
         }else {
            el.classList.remove('select');
         }
      })
   }
}